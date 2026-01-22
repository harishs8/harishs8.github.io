/**
 * STEP Viewer Component
 * Three.js based 3D viewer for STEP files
 * Supports rotation, zoom, pan controls
 */

class STEPViewer {
  constructor(containerId, stepFilePath) {
    this.container = document.getElementById(containerId);
    this.stepFilePath = stepFilePath;
    
    // Initialize Three.js scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf5f5f5);
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(100, 100, 100);
    
    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(100, 150, 100);
    this.scene.add(directionalLight);
    
    // Controls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 2;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
    
    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize());
    
    // Load STEP file (async) and fall back to placeholder on failure
    this.loadSTEP();
    
    // Start animation loop
    this.animate();
  }
  
  async loadSTEP() {
    try {
      const occt = await this.ensureOCCT();
      const importer = new occt.OCCTImporter({
        locateFile: file => `https://cdn.jsdelivr.net/npm/occt-import-js@0.0.10/dist/${file}`
      });

      await importer.init();

      const resp = await fetch(this.stepFilePath);
      if (!resp.ok) throw new Error(`Failed to fetch STEP (${resp.status})`);
      const buffer = await resp.arrayBuffer();

      const stepData = await importer.readStep(buffer);
      const meshes = importer.toThreeJS(stepData, THREE);

      if (!meshes || !meshes.length) throw new Error("No meshes generated from STEP");

      meshes.forEach(m => {
        // Normalize scale/position if available
        m.position.set(0, 0, 0);
        this.scene.add(m);
      });

      // Fit camera to object
      const bbox = new THREE.Box3();
      meshes.forEach(m => bbox.expandByObject(m));
      const size = bbox.getSize(new THREE.Vector3());
      const center = bbox.getCenter(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fitDist = maxDim * 2;
      this.camera.position.set(center.x + fitDist, center.y + fitDist, center.z + fitDist);
      this.controls.target.copy(center);
      this.controls.update();
    } catch (err) {
      console.warn("STEP load failed, showing placeholder instead", err);
      this.createPlaceholder();
    }
  }

  async ensureOCCT() {
    if (window.occt) return window.occt;

    // Dynamically load occt-import-js from CDN
    const src = "https://cdn.jsdelivr.net/npm/occt-import-js@0.0.10/dist/occt-import-js.js";
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load occt-import-js"));
      document.head.appendChild(script);
    });

    if (!window.occt) throw new Error("occt-import-js not available after load");
    return window.occt;
  }
  
  createPlaceholder() {
    // Create a simple geometry as placeholder while STEP loader is set up
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshPhongMaterial({ color: 0x0066cc });
    const cube = new THREE.Mesh(geometry, material);
    
    // Add grid helper
    const gridHelper = new THREE.GridHelper(200, 20);
    this.scene.add(gridHelper);
    
    this.scene.add(cube);
    
    // Add axes helper
    const axesHelper = new THREE.AxesHelper(100);
    this.scene.add(axesHelper);
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
  
  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  // Toggle auto-rotation
  toggleAutoRotate() {
    this.controls.autoRotate = !this.controls.autoRotate;
  }
  
  // Reset view
  resetView() {
    this.camera.position.set(100, 100, 100);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = STEPViewer;
}

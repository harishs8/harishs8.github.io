# Portfolio Folder Structure - Migration Guide

## New Organized Structure

Your portfolio now has an optimized folder structure for managing media assets across 10 projects.

```
projects/
├── Files/
│   ├── EMotorad/
│   │   ├── ebike_controller/
│   │   │   ├── images/          ← Add PCB, assembly, testing photos
│   │   │   ├── videos/          ← Add demo, testing videos
│   │   │   └── diagrams/        ← Add schematics, block diagrams
│   │   ├── ebike_display/
│   │   │   ├── images/
│   │   │   ├── videos/
│   │   │   └── diagrams/
│   │   ├── bms_48v/
│   │   │   ├── images/
│   │   │   ├── videos/
│   │   │   └── diagrams/
│   │   ├── bms_intelligent/
│   │   │   ├── images/
│   │   │   ├── videos/
│   │   │   └── diagrams/
│   │   └── tcu_bcm/
│   │       ├── images/
│   │       ├── videos/
│   │       └── diagrams/
│   ├── HoloWorld/
│   │   ├── holosuit_3_0/
│   │   │   ├── images/          ← Photos, renderings
│   │   │   ├── videos/          ← Testing, assembly videos
│   │   │   └── cad_models/      ← Fusion 360, STEP files
│   │   ├── research_robot/
│   │   │   ├── images/
│   │   │   ├── videos/
│   │   │   └── cad_models/
│   │   ├── exoskeleton/
│   │   │   ├── images/
│   │   │   ├── videos/
│   │   │   └── cad_models/
│   │   └── holosuit_1_7/
│   │       ├── images/
│   │       ├── videos/
│   │       └── cad_models/
│   └── BAJA/
│       ├── images/              ← Vehicle photos, build process
│       ├── videos/              ← Competition footage, testing
│       └── technical_docs/      ← Design reports, specifications
├── [all HTML files]
├── template.html
└── [other project HTML files]
```

## Migration Steps

### Step 1: Organize Existing Media
If you have existing media files in the old locations, move them to the new structure:

**Old Location** → **New Location**
```
/projects/Files/holosuittt3/*     → /projects/Files/HoloWorld/holosuit_3_0/
/projects/Files/TCU/*             → /projects/Files/EMotorad/tcu_bcm/
/projects/Files/BCM/*             → /projects/Files/EMotorad/tcu_bcm/
/projects/Files/SmartBike/*       → /projects/Files/EMotorad/ebike_controller/
```

### Step 2: Add New Media Files
Use the naming conventions from MEDIA_GUIDE.md to add your images and videos.

### Step 3: Update HTML File References
Update the img and video src paths in your HTML files to match the new structure.

**Example Updates Needed:**

Current:
```html
<img src="/projects/Files/holosuittt3/sensors.png" alt="Sensors">
```

Updated:
```html
<img src="/projects/Files/HoloWorld/holosuit_3_0/images/holosuit-sensors-01.png" alt="Sensor Array">
```

---

## Current HTML Files Reference Paths

These files need path updates:
- ✅ `ebike_controller.html`
- ✅ `ebike_display.html`
- ✅ `bms_48v.html`
- ✅ `bms_intelligent.html`
- ✅ `TCU.html`
- ✅ `BCM.html`
- ✅ `holosuit_3_0.html`
- ✅ `research_robot.html`
- ✅ `exoskeleton.html`
- ✅ `holosuit_1_7.html`
- ✅ `baja_sae.html`
- ✅ `holosuit.html` (existing)

---

## Benefits of New Structure

✅ **Better Organization**: Group all assets by project and type  
✅ **Scalability**: Easy to add more projects in the future  
✅ **Collaboration**: Clear structure for team members  
✅ **Performance**: Easier to manage file sizes and optimization  
✅ **Maintenance**: Quick to locate and update specific assets  
✅ **Git Management**: Clear patterns for .gitignore rules  

---

## Quick Start Checklist

- [x] Create EMotorad folder structure with 5 projects
- [x] Create HoloWorld folder structure with 4 projects
- [x] Create BAJA folder structure
- [x] Create MEDIA_GUIDE.md with best practices
- [ ] Move existing media files to new locations
- [ ] Update HTML file image/video paths
- [ ] Add your media assets following naming conventions
- [ ] Test all image and video links

---

## Naming Quick Reference

### Image Files
```
Format: [project]-[type]-[number].[jpg/png]

E-Bike Examples:
- ebike-controller-pcb-01.jpg
- ebike-controller-assembly-02.jpg
- ebike-display-prototype-01.jpg

HoloWorld Examples:
- holosuit-sensor-array-01.png
- holosuit-test-setup-01.jpg
- robot-assembly-01.jpg
```

### Video Files
```
Format: [project]-[type]-[seconds].mp4

Examples:
- ebike-controller-demo-30s.mp4
- holosuit-testing-45s.mp4
- robot-autonomous-60s.mp4
```

### Diagram Files
```
Format: [project]-[diagram-type]-v[version].[pdf/png]

Examples:
- ebike-controller-schematic-v1.pdf
- holosuit-architecture-v1.png
- robot-block-diagram-v1.pdf
```

---

## Recommended Tools

### Image Optimization
- **ImageMagick** (CLI): Batch resize and compress
- **TinyPNG**: Online compression (with smart quality)
- **Preview** (Mac): Built-in image resize

### Video Conversion
- **FFMPEG**: Professional video transcoding
- **HandBrake**: Simple GUI video converter
- **Adobe Media Encoder**: Professional tool

### Organization
- **File Hider**: Manage large file storage
- **Git LFS**: Track large files in version control

---

## Storage & Performance

Estimated storage for full portfolio:
- **5 E-Bike projects**: ~600 MB
- **4 HoloWorld projects**: ~900 MB  
- **1 BAJA project**: ~300 MB
- **Total**: ~1.8 GB

*Adjust based on image/video resolution and compression*

---

## Next Steps

1. **Read MEDIA_GUIDE.md** for detailed guidelines
2. **Organize existing media** into new folders
3. **Prepare your assets** (images, videos, diagrams)
4. **Follow naming conventions** from the guide
5. **Update HTML files** with new paths
6. **Test all media links** on the live site

---

For detailed information on file formats, optimization, and HTML integration, see **MEDIA_GUIDE.md**

Created: January 14, 2026

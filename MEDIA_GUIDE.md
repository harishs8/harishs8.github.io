# Media Guide - Portfolio Project Assets

This guide provides best practices for organizing and managing media assets for your portfolio website.

## Folder Structure Overview

```
projects/Files/
├── EMotorad/
│   ├── ebike_controller/
│   │   ├── images/
│   │   ├── videos/
│   │   └── diagrams/
│   ├── ebike_display/
│   │   ├── images/
│   │   ├── videos/
│   │   └── diagrams/
│   ├── bms_48v/
│   │   ├── images/
│   │   ├── videos/
│   │   └── diagrams/
│   ├── bms_intelligent/
│   │   ├── images/
│   │   ├── videos/
│   │   └── diagrams/
│   └── tcu_bcm/
│       ├── images/
│       ├── videos/
│       └── diagrams/
├── HoloWorld/
│   ├── holosuit_3_0/
│   │   ├── images/
│   │   ├── videos/
│   │   └── cad_models/
│   ├── research_robot/
│   │   ├── images/
│   │   ├── videos/
│   │   └── cad_models/
│   ├── exoskeleton/
│   │   ├── images/
│   │   ├── videos/
│   │   └── cad_models/
│   └── holosuit_1_7/
│       ├── images/
│       ├── videos/
│       └── cad_models/
└── BAJA/
    ├── images/
    ├── videos/
    └── technical_docs/
```

---

## File Naming Conventions

Follow these naming conventions for consistency and easy identification:

### Images
```
[project-name]-[type]-[number].jpg
[project-name]-[type]-[number].png

Examples:
- ebike-controller-pcb-01.jpg
- ebike-controller-assembly-02.jpg
- holosuit-sensor-array-01.png
- research-robot-build-01.jpg
```

**Image Types:**
- `pcb` - PCB layouts and designs
- `assembly` - Complete assembly views
- `detail` - Detail/close-up shots
- `test` - Testing and validation images
- `team` - Team photos
- `final` - Final product images

### Videos
```
[project-name]-[type]-[duration].mp4
[project-name]-[type]-[duration].mov

Examples:
- ebike-controller-demo-30s.mp4
- holosuit-testing-45s.mov
- research-robot-autonomous-60s.mp4
```

**Video Types:**
- `demo` - Product demonstration
- `testing` - Testing footage
- `assembly` - Assembly process
- `performance` - Performance/operation footage
- `presentation` - Presentation or explanation

### Diagrams
```
[project-name]-[diagram-type]-[version].pdf
[project-name]-[diagram-type]-[version].png

Examples:
- ebike-controller-schematic-v1.pdf
- ebike-controller-block-diagram-v1.png
- holosuit-system-architecture-v1.pdf
```

**Diagram Types:**
- `schematic` - Electrical schematics
- `block-diagram` - System block diagrams
- `pcb-layout` - PCB layout files
- `flow-chart` - Process or algorithm flow charts
- `architecture` - System architecture diagrams

---

## Image Optimization Guidelines

### Recommended Formats
- **JPG**: Photos, rendered images (60-80% quality)
- **PNG**: Diagrams, screenshots, transparent backgrounds
- **WebP**: Modern format for better compression (optional)

### Image Sizes & Resolutions
```
Gallery Images:        1200 x 800px  (3:2 aspect ratio)
Thumbnail Images:      600 x 400px   (3:2 aspect ratio)
Full-Width Images:     1600 x 900px  (16:9 aspect ratio)
Detail/Close-ups:      800 x 600px   (4:3 aspect ratio)

File Sizes (Target):
- Gallery Images:      200-300 KB
- Thumbnails:          50-100 KB
- Full-width:          300-400 KB
```

### Compression Tools
- **ImageMagick**: `convert input.jpg -quality 80 -resize 1200x800 output.jpg`
- **TinyPNG/TinyJPG**: Online compression tool
- **FFMPEG**: Video compression and optimization

---

## Video Optimization Guidelines

### Recommended Formats & Codecs
- **Format**: MP4 (H.264 video codec, AAC audio)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Frame Rate**: 24 or 30 fps
- **Bitrate**: 5-10 Mbps for Full HD

### Video File Sizes (Target)
```
30-second video:  30-50 MB
60-second video:  60-100 MB
```

### Video Compression Command
```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k output.mp4
```

---

## HTML Integration Examples

### Gallery Images
```html
<div class="project-gallery">
  <img src="/projects/Files/EMotorad/ebike_controller/images/ebike-controller-pcb-01.jpg" alt="PCB Layout">
  <img src="/projects/Files/EMotorad/ebike_controller/images/ebike-controller-assembly-01.jpg" alt="Assembly View">
</div>
```

### Videos
```html
<div class="project-video">
  <video controls>
    <source src="/projects/Files/HoloWorld/holosuit_3_0/videos/holosuit-testing-45s.mp4" type="video/mp4">
  </video>
</div>
```

### Diagrams/Schematics
```html
<div class="project-section">
  <h2>System Architecture</h2>
  <img src="/projects/Files/EMotorad/ebike_controller/diagrams/ebike-controller-block-diagram-v1.png" alt="Block Diagram">
</div>
```

---

## Project-Specific Guidelines

### EMotorad E-Bike Projects
- Focus on hardware assembly, PCB layouts, and testing
- Include schematic diagrams and block diagrams
- Document component integration and testing procedures
- Capture before/after comparison images

### HoloWorld Projects
- Include 3D renderings and CAD models (Fusion 360 embeds)
- Document sensor integration and assembly
- Capture testing and validation footage
- Include team collaboration photos

### BAJA SAE
- Document vehicle build process (time-lapse videos ideal)
- Include competition performance footage
- Capture technical details (electronics, testing)
- Include team photos and event documentation

---

## Web Performance Optimization

### Image Lazy Loading
```html
<img src="/projects/Files/..." alt="..." loading="lazy">
```

### Responsive Images
```html
<img 
  src="/projects/Files/ebike_controller/images/pcb-01.jpg"
  srcset="/projects/Files/ebike_controller/images/pcb-01-small.jpg 800w,
          /projects/Files/ebike_controller/images/pcb-01.jpg 1200w"
  sizes="(max-width: 800px) 100vw, 1200px"
  alt="PCB Layout">
```

---

## Media Checklist

Before uploading media files, verify:

- [ ] **File naming** follows conventions
- [ ] **Image resolution** is optimized (not too large)
- [ ] **File size** is within targets (compressed if needed)
- [ ] **Video format** is MP4 with H.264 codec
- [ ] **Audio** is included in videos (if applicable)
- [ ] **Alt text** is provided for all images
- [ ] **Copyright/permissions** are verified
- [ ] **Watermarks** removed if necessary

---

## Directory Management Tips

### Organizing by Project
1. Create project-specific subdirectories
2. Group similar content types together
3. Use version numbers for iterations

### Backup Strategy
- Maintain copy of source files (high-res originals)
- Keep optimized web versions in main directories
- Regular git commits for version control

### Git Considerations
```bash
# Add to .gitignore to avoid committing large files
*.psd
*.ai
*.mov
*.avi

# Use Git LFS for large video files
git lfs track "*.mp4"
```

---

## Useful Commands

### Image Optimization (ImageMagick)
```bash
# Resize and compress JPG
convert input.jpg -quality 80 -resize 1200x800 output.jpg

# Batch resize multiple images
mogrify -resize 1200x800 *.jpg
```

### Video Conversion (FFMPEG)
```bash
# Convert MOV to MP4
ffmpeg -i input.mov -c:v libx264 -c:a aac output.mp4

# Extract frame as image
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
```

### Bulk File Renaming (Linux/Mac)
```bash
# Rename files with pattern
for f in *.jpg; do mv "$f" "ebike-controller-${f}"; done
```

---

## Storage Estimates

Based on typical project content:

```
Small Project (5 images, 2 videos):        ~200 MB
Medium Project (10 images, 4 videos):      ~400 MB
Large Project (20 images, 6 videos):       ~700 MB

Total Portfolio (10 projects):             ~2-3 GB
```

*Note: Sizes depend on resolution and compression settings*

---

## Additional Resources

- **Image Compression**: [TinyPNG](https://tinypng.com), [ImageOptim](https://imageoptim.com)
- **Video Tools**: [FFMPEG](https://ffmpeg.org), [HandBrake](https://handbrake.fr)
- **CAD Sharing**: [Autodesk Fusion 360](https://www.autodesk.com/products/fusion-360), [Altium 365](https://www.altium.com/altium-365)
- **Design Tools**: [Figma](https://www.figma.com), [Adobe XD](https://www.adobe.com/products/xd)

---

## Questions?

Refer to the project HTML files for current image/video references and adjust paths as needed.

Last Updated: January 14, 2026

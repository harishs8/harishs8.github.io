# Project content — reference copy

This file is a **read-only reference** of everything written about each project, so you can
cross-check or copy text at any time. It is generated from the live files; editing it does **not**
change the website.

**Where to edit the real content**

| What | File |
|---|---|
| Card text, tags, thumbnail, category, featured / visible | `assets/js/portfolio-data.js` |
| Full case-study page | `projects/<name>.html` |
| New case study | copy `projects/template.html` |

Generated: 2026-10-20 · 10 projects in data · 11 case-study pages

---

## Contents

1. [Smart Motor Controller – 250W E-Bike](#1) — visible · featured
2. [Holosuit 3.0 – Full-Body Motion Capture Suit](#2) — visible · featured
3. [48V Battery Management System – Electric Two-Wheeler](#3) — visible
4. [Connected Display Module – E-Bike](#4) — visible
5. [4-Wheeled Omni-Directional Research Robot](#5) — visible
6. [Instrument Cluster – Body Control & Telematics Unit](#6) — hidden (visible: false)
7. [BAJA SAE – All Terrain Vehicle](#7) — hidden (visible: false)
8. [Intelligent BMS – 36V/48V Architecture](#8) — hidden (visible: false)
9. [Lower-Body Exoskeleton – Rehabilitation System](#9) — hidden (visible: false)
10. [Holosuit 1.7 – Project Management & Production](#10) — hidden (visible: false)
11. [Body Control Module – Electrical Protection](#11) — page only (not in portfolio-data.js)

---

<a id="1"></a>

## 1. Smart Motor Controller – 250W E-Bike

- **Page:** `projects/ebike_controller.html`
- **Data id:** `E-Bike-Motor-Controller` · **Category:** E-Mobility · **Company:** EMotorad
- **Shown on site:** yes · featured
- **Thumbnail:** `/projects/Files/SmartBike/B6.jpg`
- **Links:** [Company](https://www.emotorad.com) · [LinkedIn](https://www.linkedin.com/company/emotorad/)
- **Page tags:** Motor Drive, NXP S32Kxx, Bluetooth Connectivity, Power Electronics, AIS-004 Compliance, Vendor Management, Cost Reduction

### Key numbers

| Value | Label |
|---|---|
| 250 W | Rated BLDC motor power |
| 500 W | Peak power for 10 s+ |
| AIS-004 | Part-3 compliance passed |
| BLE | Rider-app connectivity |

### Card (projects grid)

- **Title:** Smart Motor Controller – 250W E-Bike
- **Short description:** 250W BLDC motor controller based on NXP's S32Kxx MCU with integrated Connectivity features for Indian roads.
- **Tags:** Motor Drive, NXP, BLE, EMI/EMC
- **Summary:** Lead hardware design for a 250W brushless DC motor controller enabling power-efficient drive control and wireless connectivity.
- **Highlights:**
  - Power calculations, HW architecture & component engineering
  - Integrated Bluetooth communication for rider-app interface
  - AIS-004 Part-3 compliance testing
  - Vendor, production & validation support
- **Card images:** `/projects/Files/SmartBike/2.png`, `/projects/Files/SmartBike/1.jpg`

### Case-study page content

Led complete hardware design and architecture for a 250W BLDC motor controller integrated with Bluetooth connectivity for electric bicycles. This project involved power calculations, component engineering, vendor management, and compliance testing for Indian automotive standards (AIS-004 Part-3).

### System Architecture

![Motor Controller System Block Diagram](/projects/Files/SmartBike/01.png)
![Power Stage Design](/projects/Files/SmartBike/2.png)
**Key Design Features:**

- NXP S32Kxx MCU for robust motor control algorithm execution
- Gate driver circuits devekoped with both Discrete and Integrated solutions
- Integrated Bluetooth Low Energy (BLE) for rider-app interface
- Shunt Based Current Sensing
- Peak Power of upto 500W for more than 10 seconds

### Board Image

![Holosuit harness integration](/projects/Files/SmartBike/5.jpg)

### Power Calculations & Component Engineering

Conducted comprehensive power calculations for 250W BLDC motor control including:

- MOSFET selection and thermal analysis
- Gate driver optimization (discrete to Integrated)
- Current sense resistor sizing
- Input/output filter design

### Bluetooth Connectivity Integration

Integrated wireless communication enabling real-time performance monitoring and user interaction:

- BLE module integration for rider mobile app communication with Analytics
- Low-power wireless protocol implementation
- Secure FOTA
- Real-time telemetry streaming (speed, power, battery state)

### Final Product

![Holosuit harness integration](/projects/Files/SmartBike/3.jpg)
![Holosuit harness integration](/projects/Files/SmartBike/4.jpg)

### Compliance & Testing

Ensured product compliance with Indian automotive standards and conducted rigorous validation:

- **AIS-004 Part-3 Compliance:** Electrical and electronic equipment safety testing
- EMI/EMC pre-compliance testing and design modifications
- Temperature cycling and thermal stress testing
- High-voltage isolation verification
- Field durability testing on actual e-bike prototypes

### Vendor Management & Production Support

- Component sourcing and vendor qualification
- Manufacturing process optimization
- Production test fixture design and validation
- Field deployment and troubleshooting support

### Key Achievements

- Successfully launched production-ready 250W motor controller
- Passed rigorous AIS-004 Part-3 compliance testing
- Enabled wireless rider engagement through BLE integration
- Optimized for power efficiency achieving extended range on standard battery packs

---

<a id="2"></a>

## 2. Holosuit 3.0 – Full-Body Motion Capture Suit

- **Page:** `projects/holosuit_3_0.html`
- **Data id:** `6` · **Category:** Wearables & XR · **Company:** HoloWorld
- **Shown on site:** yes · featured
- **Thumbnail:** `projects/Files/HoloWorld/holosuit_3_0/images/holosuitdisplay.png`
- **Links:** [Company](https://www.holoworld.one) · [LinkedIn](https://www.linkedin.com/company/holoworld/)
- **Page tags:** Motion Capture, VR/XR Hardware, Wearable Electronics, Sensor Integration, Haptic Feedback, Cross-Functional Leadership

### Key numbers

| Value | Label |
|---|---|
| 40+ | IMU sensors across the suit |
| <20 ms | Motion-capture latency |
| 3× | Accuracy vs previous gen |

### Card (projects grid)

- **Title:** Holosuit 3.0 – Full Body Immersive Suit
- **Short description:** Full-body motion capture suit with integrated haptic feedback for immersive VR/XR experiences.
- **Tags:** Mo-Cap, VR/XR, Wear-Tech, Haptics
- **Summary:** Led electronics design and comprehensive product development of Holosuit 3.0 — a full-body haptic and motion capture system for immersive VR/XR interactions.
- **Highlights:**
  - Designed comprehensive electronics system with 40+ integrated sensors
  - Integrated harness solutions for functionality, aesthetics, and maintenance
  - Developed test jigs and stress-testing methodology for performance validation
  - Cross-functional collaboration with software, mechanical, industrial design, and apparel teams
- **Card images:** `projects/Files/HoloWorld/holosuit_3_0/images/sensors.png`, `projects/Files/HoloWorld/holosuit_3_0/images/sensors123.png`

### Case-study page content

Led the design and development of Holosuit 3.0 — a cutting-edge full-body motion capture suit with integrated haptic feedback for immersive Virtual Reality and XR applications. The system provides users with realistic touch and force feedback, creating unprecedented presence in virtual environments. Responsible for comprehensive hardware design, cross-functional team coordination, and quality assurance.

### System Architecture

![Block Diagram](/projects/Files/HoloWorld/holosuit_3_0/images/1.png)
![Hierarchy Diagram](/projects/Files/HoloWorld/holosuit_3_0/images/2.png)
![Block Diagram](/projects/Files/HoloWorld/holosuit_3_0/images/40.jpg)
![Hierarchy Diagram](/projects/Files/HoloWorld/holosuit_3_0/images/41.jpg)
Holosuit 3.0 integrates a distributed sensor network with haptic actuators across the entire body, enabling full-body motion capture and realistic tactile feedback for immersive virtual experiences.

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/02.png)
*Planned Sensor and Haptics Placement*

### Comprehensive Electronics System Design

- **Distributed Sensor Architecture:** 40+ IMU sensors strategically placed across the suit
- **Central Processing Unit:** High-performance MCU for real-time sensor fusion and data aggregation
- **Haptic Driver Circuits:** Precision-controlled haptic actuator driver boards
- **Power Distribution Network:** Lightweight, efficient power delivery to distributed sensors and actuators
- **Wireless Communication:** Low-latency WiFi protocol for tether-free operation
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/3.png)
*Wiring Harness Integration - POC 1*

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/4.png)
*Wiring Harness Integration - POC 2*

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/5.png)
*Wiring Harness Integration - POC 3*

### Integrated Harness & Scalability

Designed comprehensive wiring harness solutions for maximum functionality with aesthetic appeal:

- **Modular Connectivity:** Quick-disconnect connectors for easy sensor replacement and maintenance
- **Flexible Routing:** Integrated cable management for comfort during extended wear
- **Scalability:** Expandable architecture supporting additional sensors and actuators
- **Aesthetic Integration:** Seamless incorporation of electronics into apparel design
- **Maintenance Access:** Strategic component placement enabling service and upgrades
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/6.png)
*Sensor Node and Haptics Patch - POC*

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/7.png)
*POC Photo*

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/8.png)
*First Integration Suit*

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/9.png)
*First Integration Inside Layer*

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/10.jpg)
*Fully stiched layer suit - Without Design*

### Motion Capture Capabilities

- **Full-Body Tracking:** Captures motion of 40+ body segments in real-time
- **High-Precision IMU Fusion:** Advanced sensor fusion algorithms for accurate joint angles
- **Low Latency:** Sub-20ms latency for responsive VR/XR interaction
- **Drift Compensation:** Self-calibrating algorithms minimizing gyro drift over extended use
- **Movement Analytics:** Post-session analysis and performance metrics

### Haptic Feedback & Touch Sensation

Integrated haptic system providing realistic tactile feedback:

- **Multi-Modal Haptics:** Vibration, pressure, and force feedback mechanisms (Gloves)
- **Haptic Actuator Array:** Strategically distributed actuators for body-wide immersive experience
- **Programmable Feedback Patterns:** Customizable haptic signatures for different interactions
- **Realistic Sensation Mapping:** Natural mapping between virtual actions and physical sensations

### Hardware Quality Assurance & Testing

Implemented rigorous testing and validation procedures:

- **Test Jigs Development:** Custom-designed test fixtures for individual sensor nodes
- **Sensor Node Validation:** Calibration and performance verification for each sensor
- **Stress Testing:** Extended wear testing under various physical conditions
- **Integration Testing:** Full system performance under realistic usage scenarios

### Cross-Functional Team Leadership

Coordinated with diverse teams to ensure product success:

- **Software Engineers:** Integration of sensor data with motion capture algorithms
- **Mechanical Engineers:** Structural design and component integration
- **Industrial Designers:** User ergonomics and product aesthetics
- **Apparel Designers:** Seamless integration of electronics into suit design
- **Quality Assurance Team:** Testing protocols and reliability validation

### Technical Achievements

- Successfully integrated 40+ sensors with synchronized timing and minimal cross-interference
- Achieved sub-20ms latency motion capture enabling responsive VR interaction
- Designed robust wireless protocol maintaining reliability in crowded RF environments
- Implemented advanced sensor fusion improving motion capture accuracy by 3x vs. previous generation
- Created scalable architecture enabling rapid iteration and feature additions

### Testing & Validation

- Embed: Holosuit test video from YouTube → https://www.youtube-nocookie.com/embed/p3Ak--oGW5E?rel=0&modestbranding=1
- Embed: Holosuit shorts video 1 → https://www.youtube-nocookie.com/embed/9cpXa236cbw?rel=0&modestbranding=1
- Embed: Holosuit shorts video 2 → https://www.youtube-nocookie.com/embed/PvcNFGalkuM?rel=0&modestbranding=1
- Embed: Holosuit shorts video 3 → https://www.youtube-nocookie.com/embed/DzOyI-FE1Ic?rel=0&modestbranding=1
- Embed: Holosuit shorts video 4 → https://www.youtube-nocookie.com/embed/bXKwJ60tPlI?rel=0&modestbranding=1

### User Interface on PC

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/20.png)
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/21.png)
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/22.png)

### Apparel Design

![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/30.png)
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/31.png)
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/32.png)
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/33.png)
![Holosuit harness integration](/projects/Files/HoloWorld/holosuit_3_0/images/holosuitdisplay.png)

### Interactive 3D Model

Rotate, zoom, and explore the 3D model. Use your mouse to interact with the model below.

- 3D model → /stepfile/holosuit/Holosuit_V1I2_Main.glb
*Interactive 3D visualization. Support for AR viewing on compatible devices.*

### 3D CAD Model

Holosuit V1 - I1

- Embed: iframe → https://myhub.autodesk360.com/ue2b2eac2/shares/public/SH28cd1QT2badd0ea72bd907f2781f163063?mode=embed
Sensor Board V1 - I1

- Embed: iframe → https://myhub.autodesk360.com/ue2b2eac2/shares/public/SH28cd1QT2badd0ea72b97428a874be73d44?mode=embed
Holosuit V1 - I2

- Embed: iframe → https://myhub.autodesk360.com/ue2b2eac2/shares/public/SH28cd1QT2badd0ea72b06b3839b0e648654?mode=embed
Sensor Board V1 - I2

- Embed: iframe → https://myhub.autodesk360.com/ue2b2eac2/shares/public/SH28cd1QT2badd0ea72b58027aadead13b5f?mode=embed
Gloves V1 - I2

- Embed: iframe → https://myhub.autodesk360.com/ue2b2eac2/shares/public/SH28cd1QT2badd0ea72bbe859cd32f3ed446?mode=embed

---

<a id="3"></a>

## 3. 48V Battery Management System – Electric Two-Wheeler

- **Page:** `projects/bms_48v.html`
- **Data id:** `3` · **Category:** Battery Systems · **Company:** EMotorad
- **Shown on site:** yes
- **Thumbnail:** `/projects/Files/EMotorad/bms48.jpg`
- **Links:** [Company](https://www.emotorad.com) · [LinkedIn](https://www.linkedin.com/company/emotorad/)
- **Page tags:** BMS Design, Power Systems, NXP MCU, Battery Safety, AFE Integration, EMI/EMC

### Key numbers

| Value | Label |
|---|---|
| 48 V | Two-wheeler battery pack |
| 100 A | Continuous discharge tested |
| NXP | AFE + MCU platform |
| EMI/EMC | Compliant PCB layout |

### Card (projects grid)

- **Title:** 48V BMS – Electric Two-Wheeler
- **Short description:** Architecture & hardware design of 48V BMS using NXP MCU and AFE with EMI-safe power routing.
- **Tags:** BMS, Power Systems, NXP, Battery Safety
- **Summary:** Designed a production-ready BMS solution for high-current two-wheeler battery packs.
- **Highlights:**
  - AFE + Microcontroller based monitoring for NMC cells
  - Pre-charge circuitry design with thermal sizing
  - EMI/EMC-aware PCB layout
  - SOC/SOH monitoring with lifecycle protection
- **Card images:** `/projects/Files/EMotorad/bms48.jpg`

### Case-study page content

Contributed to the architecture and hardware design of a production-ready 48V Battery Management System for high-current electric two-wheeler applications. This system monitors lithium-ion NMC battery packs, provides safety protection, and optimizes battery performance under demanding operating conditions.

### System Architecture

![BMS System Block Diagram](https://placehold.co/600x400)
![Battery Pack Integration](https://placehold.co/600x400)
The BMS architecture integrates high-precision monitoring with robust safety protection for optimal battery health and vehicle performance.

### AFE & Microcontroller Integration

- **Analog Front End (AFE):** High-precision cell voltage and current monitoring
- **NXP Microcontroller:** Real-time processing and battery algorithm execution
- **Cell Balancing:** Active balancing circuits for voltage equalization
- **Temperature Sensing:** Thermistor network for thermal protection

### Pre-Charge & Protection Circuitry

Critical circuits for safe battery pack integration:

- **Pre-Charge Resistor:** Current-limiting resistance during initial connection
- **Thermal Sizing:** Calculated for safe heat dissipation during startup transient
- **Over-Current Protection:** MOSFETs and protection ICs for current limiting
- **Over-Voltage Protection:** Circuitry to prevent charging beyond safe limits
- **Under-Voltage Protection:** Prevents deep discharge damage

### EMI/EMC-Aware PCB Design

Advanced PCB layout techniques for reliable high-current operation:

- Multi-layer PCB with dedicated power and ground planes
- High-current trace routing with thermal analysis
- Shielded signal paths for sensitive analog signals
- Filter and decoupling capacitor placement optimization
- EMI filtering at module boundaries
- Ground vias for effective thermal dissipation

### Battery Monitoring & State Estimation

- **State of Charge (SOC):** Coulomb counting and voltage-based estimation
- **State of Health (SOH):** Capacity fade and impedance tracking
- **Cell Voltage Monitoring:** Individual cell voltage surveillance
- **Current Measurement:** Precision current sensing for charge/discharge tracking
- **Temperature Monitoring:** Multi-point thermal surveillance

### Lifecycle Protection & Longevity

- Over-charge protection (cut-off at maximum cell voltage)
- Over-discharge protection (cut-off at minimum cell voltage)
- Over-current protection during discharge and charge
- Over-temperature protection with thermal de-rating
- Battery aging model for predictive maintenance
- Cycle counting for warranty and diagnostics

### Testing & Validation

- High-current testing (up to 100A continuous discharge)
- Temperature cycling and thermal shock testing
- Cell balancing effectiveness verification
- Protection threshold validation
- Long-term field durability testing on actual two-wheelers

### Key Achievements

- Designed production-ready 48V BMS for high-current two-wheeler applications
- Achieved reliable monitoring of NMC battery packs across wide operating ranges
- Implemented comprehensive safety protection for user and vehicle safety
- Optimized PCB design for high-current operation with minimal losses
- Ensured EMI/EMC compliance for automotive applications

---

<a id="4"></a>

## 4. Connected Display Module – E-Bike

- **Page:** `projects/ebike_display.html`
- **Data id:** `2` · **Category:** E-Mobility · **Company:** EMotorad
- **Shown on site:** yes
- **Thumbnail:** `/projects/Files/EMotorad/display.jpg`
- **Links:** [Company](https://www.emotorad.com) · [LinkedIn](https://www.linkedin.com/company/emotorad/)
- **Page tags:** Display Systems, LTE Connectivity, GNSS, Touchscreen Interface, Location Tracking, SOS Alerts

### Key numbers

| Value | Label |
|---|---|
| LTE | With 2G fallback |
| GNSS | Trip data & live tracking |
| SOS | Emergency alerts |

### Card (projects grid)

- **Title:** Connected Display Module – E-Bike
- **Short description:** LTE-enabled TFT dashboard with GNSS for real-time trip data and SOS alerts.
- **Tags:** Display Systems, LTE, GNSS, IMU
- **Summary:** Developed a standalone connected display for electric bicycles supporting navigation and remote tracking.
- **Highlights:**
  - LTE module with 2G fallback and GNSS positioning
  - Colored non-intelligent TFT with UI support
  - Trip analytics, location tracking, SOS alerts
  - Designed under consumer-grade power constraints
- **Card images:** `/projects/Files/EMotorad/display.jpg`

### Case-study page content

Designed a standalone connected display module for electric bicycles with integrated LTE and GNSS capabilities. This system provides real-time trip data visualization, location tracking, and emergency SOS alert functionality on a colored non-intelligent TFT display with capacitive touch interface.

### System Overview

![Display Module Hardware](https://placehold.co/600x400)
![User Interface](https://placehold.co/600x400)
The display module serves as the primary user interface for e-bike riders, integrating multiple connectivity technologies to enable comprehensive trip monitoring and safety features.

### Connectivity Architecture

- **LTE Primary:** 4G LTE module for continuous internet connectivity
- **2G Fallback:** Automatic fallback to GSM/EDGE in areas with limited LTE coverage
- **GNSS:** Multi-constellation satellite positioning (GPS, GLONASS, Galileo)
- **High Precision:** Meter-level accuracy for accurate route tracking

### Display & User Interface

- **Color TFT Display:** Bright, energy-efficient LCD suitable for outdoor use
- **Non-Intelligent Design:** Direct frame buffer approach for deterministic response
- **Capacitive Touch:** Responsive multi-touch interface for navigation and control
- **Day/Night Mode:** Automatic brightness adjustment for visibility in various lighting conditions

### Trip Data & Analytics

The display module provides comprehensive ride information:

- Real-time speed, distance, and duration tracking
- Elevation profile and terrain analysis
- Energy consumption and range estimation
- Route replay and historical trip data
- Performance metrics and rider statistics

### Location Tracking & Navigation

- Real-time GPS tracking with cloud sync
- Turn-by-turn navigation integration
- Geofencing for zone-based alerts
- Live ride sharing with friends and family
- Theft recovery through continuous tracking

### Safety & SOS Features

- **Emergency SOS Button:** One-touch emergency alert to pre-configured contacts
- **Automatic Incident Detection:** Crash detection via accelerometer sensors
- **Live Location Sharing:** Emergency contacts receive real-time location
- **Fall Alert:** Detects and reports potential accidents

### Power Management

Designed under strict consumer-grade power constraints:

- Ultra-low-power MCU with sleep modes
- Efficient LTE module with dynamic power scaling
- Display power optimization for extended battery life
- Smart data transmission scheduling
- Battery-aware performance adaptation

### Key Achievements

- Successfully integrated multi-technology connectivity (LTE, 2G, GNSS) on single PCB
- Achieved reliable outdoor operation with minimal power consumption
- Delivered intuitive user interface for on-the-go usage
- Enabled enhanced safety features for e-bike riders
- Provided comprehensive trip analytics and performance insights

---

<a id="5"></a>

## 5. 4-Wheeled Omni-Directional Research Robot

- **Page:** `projects/research_robot.html`
- **Data id:** `7` · **Category:** Robotics · **Company:** HoloWorld
- **Shown on site:** yes
- **Thumbnail:** `/projects/Files/Holoworld/4wrobot.jpg`
- **Links:** [Company](https://www.holoworld.one) · [LinkedIn](https://www.linkedin.com/company/holoworldtech/)
- **Page tags:** Robotics, Autonomous Navigation, Power Systems, Mechanical Integration, Control Electronics, Hardware Selection

### Key numbers

| Value | Label |
|---|---|
| 360° | Omni-directional mobility |
| 4+ h | Runtime at full payload |
| 15+ | Synchronised sensors |
| <10 cm | Navigation accuracy |

### Card (projects grid)

- **Title:** 4-Wheeled Omni-Directional Research Robot
- **Short description:** Research robot platform with autonomous navigation, power management and hardware integration.
- **Tags:** Robotics, Autonomous Navigation, Power Systems
- **Summary:** Engineered a robust robotic hardware platform with omnidirectional mobility and modular component integration.
- **Highlights:**
  - Motor selection, battery sizing and power distribution design
  - Designed wiring harness architecture for reliability
  - Seamless integration of controllers, sensors and drive system
  - Supporting autonomous navigation capability development
- **Card images:** `/projects/Files/Holoworld/4wrobot.jpg`

### Case-study page content

Designed and developed comprehensive hardware for a four-wheeled omni-directional research robot with autonomous navigation capabilities. Responsible for motor selection, power calculations, battery sizing, and complete wiring harness design to ensure optimal performance, efficient power management, and seamless integration of all components.

### Robotic Platform Architecture

![4-Wheeled Research Robot Platform](https://placehold.co/600x400)
![Motor and Drive System](https://placehold.co/600x400)
The omni-directional robot enables movement in any direction simultaneously, making it ideal for research applications requiring high maneuverability and autonomous navigation in confined spaces.

### Motor Selection & Drive System

- **Motor Type:** Brushless DC (BLDC) motors for efficiency and reliability
- **Performance Specification:** High torque motors for varied terrain handling
- **Power Rating:** Optimized for balance between speed and endurance
- **Wheel Configuration:** Omni-wheels enabling full directional mobility
- **Gearbox Design:** Gear reduction for torque multiplication and speed control
- **Motor Control:** Individual motor drivers enabling independent speed control per wheel

### Power System & Battery Calculations

Comprehensive power analysis for extended autonomous operation:

- **Battery Selection:** High-capacity LiPo packs for extended runtime
- **Energy Calculations:** Motor power consumption analysis at various speeds
- **Payload Analysis:** Support for sensor payloads and computing hardware
- **Runtime Estimation:** Detailed modeling for mission planning
- **Charging System:** Efficient onboard charging management
- **Voltage Distribution:** Optimized DC bus architecture for motors, sensors, and compute

### Wiring Harness Design & Integration

- **Signal Routing:** Organized cable layout for motor commands and sensor feedback
- **Power Distribution:** Robust conductors sized for motor currents without voltage drop
- **EMI Protection:** Shielded cables for sensor signal integrity
- **Quick Disconnects:** Modular connectors for easy sensor swapping and maintenance
- **Cable Management:** Strain relief and organized bundles for reliability
- **Thermal Management:** Adequate spacing preventing heat-related failures

### Sensor & Electronics Integration

Seamless integration of perception and control systems:

- **Motor Controllers:** Individual ESCs for precise motor control
- **IMU/Odometry:** Inertial measurement and wheel odometry for localization
- **Sensor Network:** LiDAR, cameras, and various research-grade sensors
- **Compute Platform:** Embedded single-board computer for autonomous algorithms
- **Communication System:** Wireless link for remote control and data telemetry
- **Power Management Module:** Battery monitoring and distribution control

### Mechanical Design & Assembly

- **Chassis Design:** Lightweight yet robust structure accommodating all systems
- **Motor Mounting:** Vibration isolation and alignment precision
- **Wheel Assembly:** Proper axle alignment and bearing selection
- **Component Layout:** Optimal weight distribution for dynamic stability
- **Cable Routing:** Organized pathways avoiding mechanical interference
- **Maintenance Access:** Easy serviceability for field repairs

### Autonomous Navigation Features

- **SLAM (Simultaneous Localization and Mapping):** Real-time environment mapping
- **Path Planning:** Autonomous obstacle avoidance and route optimization
- **Navigation Stack:** Integration with ROS (Robot Operating System)
- **GPS Integration:** Global positioning with local refinement
- **Failsafe Mechanisms:** Emergency stop and collision avoidance
- **Teleoperation:** Manual control override for testing and demos

### Testing & Performance Validation

- Motor performance verification under load conditions
- Battery runtime testing at various speed profiles
- Maneuverability testing in confined spaces
- Sensor integration and synchronization validation
- Environmental tolerance testing (temperature, humidity, dust)
- Autonomous navigation performance in structured and unstructured environments
- Embed: Research robot shorts video → https://www.youtube-nocookie.com/embed/vcJ_D_nykaI?rel=0&modestbranding=1

### Key Achievements

- Successfully designed omni-directional platform enabling 360° mobility
- Achieved 4+ hour runtime on single battery charge with full payload
- Integrated 15+ sensors with synchronized data acquisition
- Implemented autonomous navigation with sub-10cm accuracy
- Created modular architecture supporting rapid research iterations
- Delivered platform supporting multiple research projects simultaneously

---

<a id="6"></a>

## 6. Instrument Cluster – Body Control & Telematics Unit

- **Page:** `projects/TCU.html`
- **Data id:** `4` · **Category:** E-Mobility · **Company:** EMotorad
- **Shown on site:** no
- **Thumbnail:** `/projects/Files/EMotorad/cluster.jpg`
- **Links:** [Company](https://www.emotorad.com) · [LinkedIn](https://www.linkedin.com/company/emotorad/)
- **Page tags:** Telematics, Android System, MIPI Display, Body Control Module, CAN Communication, Stackable Architecture

### Key numbers

| Value | Label |
|---|---|
| 1080p | Display support |
| Android | Telematics unit (Quectel) |
| OV/UV | + reverse-polarity protection |

### Card (projects grid)

- **Title:** Instrument Cluster – Body Control & Telematics
- **Short description:** Stackable TCU + BCM system with touch display, voltage protection and telematics.
- **Tags:** Telematics, Android Display, BCM
- **Summary:** Created modular cluster electronics with independent telematics (TCU) and body control (BCM) modules.
- **Highlights:**
  - Android system with MIPI touch interface (Quectel module)
  - Over/under-voltage & reverse polarity protection
  - Scalable architecture for future product family
  - Inter-module CAN communication
- **Card images:** `/projects/Files/EMotorad/cluster.jpg`

### Case-study page content

Contributed to the architecture and hardware design of a modular stackable cluster unit for electric two-wheelers. The system integrates an independent Telematics Control Unit (TCU) with Android system capabilities and a separate Body Control Module (BCM) providing vehicle protection and management.

### System Overview

![Instrument Cluster Assembly](https://placehold.co/600x400)
![Display Interface](https://placehold.co/600x400)
The modular architecture enables independent development and deployment of telematics and body control functions while maintaining seamless vehicle integration through standardized CAN communication.

### Telematics Control Unit (TCU)

The TCU module provides advanced infotainment and connectivity:

- **Android System:** Full Android OS for rich application ecosystem
- **MIPI Display Interface:** Support for high-resolution touch displays
- **Quectel Module:** Integrated cellular connectivity (LTE/4G)
- **GPS/GNSS:** Navigation and location tracking
- **WiFi & Bluetooth:** Wireless connectivity for accessories and phones
- **Multiple Storage:** eMMC for OS and applications, microSD for media

### Display Integration (MIPI Interface)

Advanced display connectivity supporting modern touch interfaces:

- MIPI DSI (Display Serial Interface) for high-speed video data
- Support for 720p, 1080p, and higher resolution displays
- Capacitive multi-touch input integration
- RGB to MIPI conversion for legacy display compatibility
- Power management for display backlighting

### Body Control Module (BCM)

Independent hardware protection and vehicle control:

- **Over-Voltage Protection:** Protects vehicle electronics from charging spikes
- **Under-Voltage Protection:** Prevents operation below safe battery voltage
- **Reverse Polarity Protection:** Safeguards against incorrect battery connections
- **Load Management:** Smart distribution of available power
- **Fault Detection:** Identifies and isolates faulty circuits

### Inter-Module Communication

- **CAN Bus:** High-speed robust communication between TCU and BCM
- **Standardized Protocol:** Industry-standard messages for vehicle data
- **Diagnostic Access:** CAN-based diagnostics for troubleshooting
- **Real-time Updates:** Low-latency status updates for vehicle control
- **Fault Signaling:** Critical alerts propagated through CAN network

### Modular Stackable Architecture

Design features enabling flexible deployment:

- Connector-based mechanical stacking for compact mounting
- Independent power supplies for TCU and BCM
- Isolated CAN interfaces for noise immunity
- Future extensibility for additional modules (ABS, Suspension, etc.)
- Thermal management for side-by-side operation

### Telematics & Infotainment Features

- Real-time vehicle diagnostics and health monitoring
- Remote vehicle tracking and geofencing
- OTA (Over-The-Air) firmware and app updates
- Integration with mobile apps for remote monitoring
- Driver behavior analytics and performance insights
- Navigation and trip planning capabilities
- Safety alerts and notifications

### Testing & Validation

- CAN communication stress testing with high-frequency messaging
- Protection circuit functionality verification
- Display interface compatibility testing across different panel types
- Thermal cycling and environmental testing
- Field deployment testing on prototype two-wheelers
- Reliability testing at operating temperature extremes

### Key Achievements

- Designed modular stackable architecture for independent TCU and BCM development
- Successfully integrated Android system with modern automotive-grade display interfaces
- Implemented robust vehicle protection through comprehensive electrical safeguards
- Enabled advanced telematics and connectivity for next-generation vehicles
- Created foundation for scalable product family with flexible architecture

---

<a id="7"></a>

## 7. BAJA SAE – All Terrain Vehicle

- **Page:** `projects/baja_sae.html`
- **Data id:** `10` · **Category:** Automotive · **Company:** SAEGCT
- **Shown on site:** no
- **Thumbnail:** `/projects/Files/baja_vehicle.jpg`
- **Links:** [BAJA SAE](https://www.bajasae.net/) · [SAE International](https://www.sae.org/)
- **Page tags:** Electrical Systems, Team Leadership, Data Acquisition, Vehicle Testing, Cost Optimization, Competition Engineering

### Key numbers

| Value | Label |
|---|---|
| 35% | Weight reduction |
| 25% | Fewer parts |
| 21st | Overall of 100+ teams |
| 8th | Cost event |

### Card (projects grid)

- **Title:** BAJA SAE – All Terrain Vehicle | Electrical Lead
- **Short description:** Electrical systems lead for SAE competition ATV with 35% weight reduction and 8th place cost ranking.
- **Tags:** Electrical Systems, Team Leadership, Data Acquisition, Vehicle Testing
- **Summary:** Led electrical systems team for BAJA SAE All Terrain Vehicle competition entry, achieving 21st overall and 8th cost ranking among 100+ schools through data-driven optimization.
- **Highlights:**
  - Led 4-person electrical engineering team over 28-month development cycle
  - Implemented NI cDAQ, Arduino, and MATLAB-based data acquisition and analysis
  - Achieved 35% weight reduction and 25% parts reduction through optimization
  - Managed relationships with 20+ sponsors ensuring resource availability
  - Secured competitive rankings at BAJA SAE Arizona 2020
- **Card images:** `/projects/Files/baja_vehicle.jpg`

### Case-study page content

Led the Electrical Systems department for Team Screwtenizers' BAJA SAE All Terrain Vehicle project—a prestigious SAE International collegiate engineering competition. Directed a team of 4 electrical engineers over 28 months, managing system design, data acquisition infrastructure, and vehicle testing while fostering relationships with 20+ sponsors. Implemented data-driven optimization achieving 35% weight reduction and 25% parts reduction, culminating in 21st place overall and 8th place in cost evaluation at BAJA SAE Arizona 2020, competing against 100 schools worldwide.

### BAJA SAE Competition Overview

![BAJA SAE All Terrain Vehicle](https://placehold.co/600x400)
![Team Screwtenizers](https://placehold.co/600x400)
BAJA SAE is a premier engineering competition challenging students to design, build, and compete with prototype All Terrain Vehicles. Teams are evaluated on design, safety, cost, presentation, and dynamic performance. The competition requires integration of mechanical, electrical, and software systems under real-world constraints.

### Electrical Systems Leadership

- **Team Composition:** Led 4-person electrical engineering team
- **Responsibilities:** Architecture, design, integration, and testing of all vehicle electrical systems
- **Scope:** Engine management, power distribution, data acquisition, lighting, and safety systems
- **Schedule Management:** 28-month development cycle with strict milestones and delivery deadlines
- **Technical Documentation:** Comprehensive design reports, schematics, and technical specifications
- **Safety Assurance:** Ensuring all electrical systems met competition safety requirements

### Data Acquisition & Testing Infrastructure

Designed comprehensive data acquisition system for vehicle characterization and optimization:

- **NI cDAQ Platform:** National Instruments CompactDAQ for real-time sensor data acquisition
- **Sensor Network:** Accelerometers, temperature sensors, pressure transducers, load cells
- **Arduino Integration:** Microcontroller-based data logging and sensor interface
- **Dynamometer Testing:** Engine performance characterization and power curve generation
- **Data Processing:** Real-time and post-test analysis of vehicle performance parameters
- **Telemetry System:** Wireless transmission of performance data during vehicle testing

### MATLAB Simulations & Analysis

Leveraged MATLAB for comprehensive vehicle system modeling and optimization:

- **Vehicle Dynamics Model:** Simulation of suspension, steering, and drivetrain behavior
- **Power Analysis:** Engine performance mapping and power delivery optimization
- **Weight Optimization:** Component sizing and material selection for minimum weight
- **Thermal Analysis:** Engine cooling requirements and thermal management design
- **Cost Modeling:** Bill of materials analysis and cost optimization strategies
- **Performance Prediction:** Simulation-based design validation before physical testing

### Data-Driven Design & Optimization

Implemented systematic optimization approach based on real vehicle testing and analysis:

- **Component Weight Reduction:** Identified and eliminated unnecessary weight through testing
- **System Integration:** Consolidated multiple systems reducing component count and redundancy
- **Material Selection:** Strategic use of lightweight materials without compromising strength
- **Routing Optimization:** Wiring and plumbing consolidation reducing overall mass
- **Iterative Improvement:** Multiple design cycles with validation between iterations

### Design & Optimization Results

- **35% Weight Reduction:** Achieved significant mass reduction through data-driven optimization
- **25% Parts Reduction:** Streamlined design reducing component count and complexity
- **Robust Integration:** All systems integrated and validated on complete vehicle
- **Reliable Performance:** Vehicle completed all competition events without critical failures
- **Cost Efficiency:** Optimized spending achieving competitive cost evaluation ranking

### Electrical Systems Design

Designed and implemented all vehicle electrical systems:

- **Engine Management:** Ignition system, fuel injection control, and sensor interfaces
- **Power Distribution:** Battery system, power conditioning, and load management
- **Safety Systems:** Kill switch, emergency stop, and protection circuits
- **Lighting:** Headlights, taillights, and indicator systems meeting competition requirements
- **Instrumentation:** Dashboard display, telemetry, and driver feedback systems
- **Wiring & Harness:** Organized electrical architecture with proper connectors and routing

### Testing & Validation

- **Dynamometer Testing:** Engine power and torque characterization
- **System Integration Testing:** All electrical systems validation on complete vehicle
- **Environmental Testing:** Off-road conditions and extreme operating environments
- **Safety Verification:** Competition safety inspection and compliance validation
- **Performance Testing:** Acceleration, braking, handling, and endurance testing
- **Data Analysis:** Continuous monitoring and optimization during test cycles

### Sponsorship & Resource Management

Managed stakeholder relationships and resource acquisition:

- **Sponsor Network:** Built and maintained relationships with 20+ corporate sponsors
- **Resource Acquisition:** Secured components, equipment, and funding through sponsorships
- **Corporate Communication:** Regular updates and recognition of sponsor contributions
- **Event Representation:** Showcased vehicle and project at sponsor events
- **Budget Management:** Optimized spending across electrical systems

### Competition Results – BAJA SAE Arizona 2020

![Competition Performance](https://placehold.co/600x400)
![Team at BAJA SAE](https://placehold.co/600x400)
Team Screwtenizers' BAJA SAE vehicle demonstrated reliable performance and effective design optimization:

- **Overall Ranking:** 21st place out of 100+ competing schools worldwide
- **Cost Event:** 8th place in cost evaluation—demonstrating excellent value engineering
- **Design Validation:** Successful completion of all dynamic events
- **Reliability:** No critical electrical system failures during competition
- **Competitive Standing:** Strong performance across multiple evaluation categories

### Key Technical Achievements

- Successfully designed and integrated comprehensive vehicle electrical architecture
- Implemented data acquisition system enabling quantitative design optimization
- Achieved 35% weight reduction and 25% parts reduction through data-driven approach
- Created robust system architecture requiring minimal troubleshooting during competition
- Developed testing infrastructure supporting multiple design iterations
- Established repeatable processes and documentation enabling team continuity

### Leadership & Team Impact

- **Technical Leadership:** Guided electrical team through complex system integration challenges
- **Process Development:** Established design, testing, and validation procedures
- **Cross-Team Coordination:** Integrated electrical systems with mechanical and chassis teams
- **Problem Solving:** Resolved technical issues under competition constraints
- **Documentation:** Created comprehensive technical documentation and design reports
- **Knowledge Transfer:** Mentored team members in systems engineering principles

### Key Learning Outcomes

- Importance of data-driven design in engineering decision making
- System integration challenges in complex electromechanical products
- Project management in resource-constrained environments
- Stakeholder management and team coordination skills
- Competition engineering under time and budget constraints
- Practical application of simulation and modeling tools in design

---

<a id="8"></a>

## 8. Intelligent BMS – 36V/48V Architecture

- **Page:** `projects/bms_intelligent.html`
- **Data id:** `5` · **Category:** Battery Systems · **Company:** EMotorad
- **Shown on site:** no
- **Thumbnail:** `/projects/Files/EMotorad/bms-intelligent.jpg`
- **Links:** [Company](https://www.emotorad.com) · [LinkedIn](https://www.linkedin.com/company/emotorad/)
- **Page tags:** Smart BMS, TI AFE, NXP MCU, Multi-Chemistry, Dual-Voltage, Next-Generation

### Key numbers

| Value | Label |
|---|---|
| 36/48 V | Dual pack architecture |
| 10S/13S | Cell configurations |
| NMC+LFP | Supported chemistries |

### Card (projects grid)

- **Title:** Intelligent BMS – 36V/48V Architecture
- **Short description:** Next-gen smart BMS supporting both NMC & LFP chemistries using TI AFE and NXP MCU.
- **Tags:** Smart BMS, TI AFE, NXP MCU
- **Summary:** Lead hardware engineering for new generation BMS platform enabling flexible chemistry configurations.
- **Highlights:**
  - TI AFE + NXP MCU architecture
  - 36V/48V pack compatibility
  - Optimized for range, battery life & safety
  - Supports firmware-based smart features
- **Card images:** `/projects/Files/EMotorad/bms-intelligent.jpg`

### Case-study page content

Leading hardware engineering for next-generation Intelligent Battery Management System supporting flexible voltage architectures (36V/48V) and multiple battery chemistries (NMC & LFP). This platform enables smart features through advanced firmware while maintaining high performance and safety standards across diverse battery pack configurations.

### Design Objectives

![BMS Hardware Design](https://placehold.co/600x400)
![Multi-Chemistry Support](https://placehold.co/600x400)
The next-generation BMS was designed to provide maximum flexibility for product family scalability while maintaining industry-leading performance and reliability.

### Dual-Voltage Architecture (36V/48V)

Support for multiple pack voltages enables broader product applicability:

- **36V Configuration:** 10-series cells for lower-cost entry-level products
- **48V Configuration:** 13-series cells for higher-performance applications
- **Firmware Switchable:** Single hardware platform supporting both architectures
- **Scaled Monitoring:** Voltage and current ranges optimized for each configuration
- **Cell Count Detection:** Automatic configuration detection and validation

### Multi-Chemistry Battery Support

Advanced cell chemistry compatibility enabling future product diversity:

- **NMC (Nickel-Manganese-Cobalt):** Traditional high energy density chemistry
- **LFP (Lithium Iron Phosphate):** Safer, longer-life alternative chemistry
- **Parametric Configuration:** Cell-specific voltage limits and charge curves
- **Chemistry Auto-Detection:** Intelligent firmware identifies cell type
- **Chemistry-Specific Algorithms:** Optimized charging and protection for each type

### Core Components: TI AFE & NXP MCU

- **TI Analog Front End (AFE):** Industry-leading precision battery monitoring
- **High-Precision ADC:** mV-level accuracy for cell voltage measurement
- **Integrated Cell Balancing:** Efficient passive or active balancing control
- **NXP Microcontroller:** Powerful MCU for complex battery algorithms
- **Real-time Processing:** Fast response to critical battery conditions
- **Firmware Flexibility:** Programmable algorithms for future feature updates

### Smart Battery Features

Advanced capabilities enabled by firmware-based intelligence:

- **Predictive Analytics:** Battery behavior forecasting based on usage patterns
- **Adaptive Charging:** Optimal charge rates based on temperature and state
- **Thermal Management:** Active thermal monitoring with performance derating
- **Health Tracking:** Continuous capacity fade and impedance monitoring
- **Remaining Range Estimation:** Accurate prediction of available energy
- **Wireless Diagnostics:** Over-the-air health monitoring and alerts

### Performance & Efficiency Optimization

- **Extended Range:** Optimized discharge profiles maximizing usable capacity
- **Battery Longevity:** Conservative charging algorithms extending cycle life
- **Low Heat Generation:** Efficient circuitry minimizing thermal losses
- **Reduced Balancing Loss:** Intelligent balancing minimizing energy waste
- **Fast Response Protection:** Sub-millisecond protection activation times

### Safety & Protection Systems

- Multi-level over-voltage protection with precise thresholds
- Over-current detection with adjustable limits
- Over-temperature with thermal derating
- Under-voltage protection preventing deep discharge
- Cell imbalance detection and correction
- Multiple safety thresholds (warning, critical, shutdown)

### Future Expandability

Platform designed for growth and feature enhancement:

- Support for higher voltage packs (60V, 72V in future versions)
- Additional cell chemistry support through firmware updates
- Integration with vehicle propulsion systems
- Advanced thermal management with active cooling
- Vehicle-to-Grid (V2G) capabilities

### Project Status

**Current Phase: In Development**

This project is actively under development with focus on:

- Hardware platform validation and optimization
- Firmware algorithm refinement and testing
- Multi-chemistry implementation and validation
- Field trial preparation and planning

### Key Achievements & Vision

- Designed flexible platform supporting 36V/48V architectures
- Implemented multi-chemistry battery support enabling product family scalability
- Integrated industry-leading TI AFE and NXP MCU for optimal performance
- Created foundation for advanced smart battery features
- Positioned for next-generation vehicle connectivity and smart features

---

<a id="9"></a>

## 9. Lower-Body Exoskeleton – Rehabilitation System

- **Page:** `projects/exoskeleton.html`
- **Data id:** `8` · **Category:** Robotics · **Company:** HoloWorld
- **Shown on site:** no
- **Thumbnail:** `/projects/Files/Holoworld/exoskeleton.jpg`
- **Links:** [Company](https://www.holoworld.one) · [LinkedIn](https://www.linkedin.com/company/holoworldtech/)
- **Page tags:** Exoskeleton, Medical Hardware, Biomechanics, Motor Control, Rehabilitation Technology, Assistive Robotics

### Key numbers

| Value | Label |
|---|---|
| 0–120° | Hip & knee range of motion |
| 40–100% | Limb-weight support |
| 60 min | Continuous session |

### Card (projects grid)

- **Title:** Lower-Body Exoskeleton – Rehabilitation System
- **Short description:** Assistive powered exoskeleton enabling guided rehabilitation and gait support.
- **Tags:** Exoskeleton, Biomechanics, Motor Control, Medical Hardware
- **Summary:** Contributed to design of an assistive lower-body exoskeleton for medical rehabilitation applications with comprehensive motor, control, and mechanical integration.
- **Highlights:**
  - Motor and actuator selection based on torque and biomechanics requirements
  - Control electronics integration and sensor interfacing
  - Design of wiring harness and mechanical mounting solutions
  - Contributed to testing and evaluation cycles for clinical validation
- **Card images:** `/projects/Files/Holoworld/exoskeleton.jpg`

### Case-study page content

Contributed to the design and development of an assistive lower-body exoskeleton for medical rehabilitation applications. Responsible for motor selection, power calculations, control electronics integration, mechanical mounting, and complete wiring harness design. The system enables guided rehabilitation therapy and gait support for patients with mobility impairments.

### Rehabilitation Exoskeleton Design

![Lower-Body Exoskeleton Assembly](https://placehold.co/600x400)
![Actuator and Linkage Design](https://placehold.co/600x400)
The exoskeleton system assists patients during gait training, providing controlled joint movement and force feedback to support rehabilitation therapy for stroke, spinal cord injury, and orthopedic patients.

### Motor Selection & Actuation

Carefully selected motors based on biomechanical requirements:

- **Motor Type:** Series-elastic actuators (SEA) for compliant force delivery
- **Torque Requirements:** Hip, knee, and ankle joint torque calculations based on patient load
- **Speed Specification:** Gait-speed-compatible motor speed range (0.5-2.0 m/s)
- **Force Control:** Back-drivable motors enabling patient-initiated movement
- **Redundancy:** Dual motors per joint for safety and backup capability
- **Efficiency:** High-efficiency motors minimizing heat generation during extended therapy

### Biomechanical Design Considerations

- **Joint Range of Motion:** Hip (0-120°), Knee (0-120°), Ankle (-20-30°)
- **Load Sharing:** Exoskeleton supports 40-100% of limb weight during training
- **Force Distribution:** Ergonomic attachment points minimizing patient discomfort
- **Adaptive Assistance:** Progressive load reduction as patient strength improves
- **Natural Gait Pattern:** Joint trajectories matching physiological movement patterns
- **Patient Safety:** Built-in torque limits and emergency shutdown mechanisms

### Power Calculations & Energy Analysis

Comprehensive power system design for continuous therapy sessions:

- **Actuator Power Consumption:** Calculated at various support levels (30-100%)
- **Session Duration:** Designed for 60-minute continuous operation
- **Battery Sizing:** High-capacity packs supporting multiple therapy sessions
- **Thermal Management:** Heat dissipation during extended use
- **Tethered Operation:** Integration of power supply for hospital/clinic environments
- **Backup Power:** UPS capability for safe shutdown in power loss

### Control Electronics Integration

- **Motor Controllers:** Closed-loop servo controllers for each joint actuator
- **Force Sensors:** Load cells at attachment points for force feedback control
- **Position Feedback:** Encoders and potentiometers for joint angle monitoring
- **IMU Integration:** Inertial sensors for gait analysis and balance detection
- **Real-time OS:** Deterministic control ensuring consistent joint response
- **Safety Logic:** Hardware interlocks and watchdog timers preventing unsafe operation

### Mechanical Design & Patient Interface

Ergonomic design optimized for patient comfort and therapist control:

- **Joint Linkages:** 4-bar linkages and parallelogram mechanisms for natural movement
- **Attachment Points:** Padded cuffs and straps at hip, knee, and ankle
- **Adjustability:** Scalable for different patient sizes and body proportions
- **Quick Release:** Emergency quick-release mechanisms for immediate removal
- **Weight Distribution:** Lightweight carbon fiber and aluminum construction
- **Alignment Mechanism:** Easy alignment with patient joint centers

### Wiring Harness & Cable Management

- **Motor Cables:** Heavy-gauge conductors for high-current motor drives
- **Sensor Wiring:** Shielded twisted pairs for force, position, and IMU signals
- **Cable Routing:** Flexible conduit allowing full joint range without pinching
- **Connector Design:** Waterproof, quick-disconnect connectors for maintenance
- **Strain Relief:** Protective boot and routing preventing mechanical stress
- **Labeling System:** Clear identification of all connections for safe assembly

### Safety & Reliability Features

- **Passive Compliance:** Gravity-balanced joint springs preventing sudden drops
- **Force Limiting:** Adjustable torque limits preventing excessive patient loading
- **Emergency Stop:** Wireless panic button for immediate system shutdown
- **Thermal Protection:** Motor temperature monitoring with automatic shutdown
- **Fault Detection:** Real-time diagnostics with user alerts
- **Redundancy:** Dual sensors and control paths for critical functions

### Therapy Modes & Clinical Features

- **Passive Mode:** Exoskeleton controls full joint movement (therapist-guided gait)
- **Assisted Mode:** Provides assistance with patient-initiated movement
- **Resistance Mode:** Opposes patient movement for muscle strengthening
- **Active Mode:** Patient controls movement with gravity compensation
- **Adaptive Assistance:** Real-time adjustment based on patient performance
- **Data Recording:** Comprehensive therapy session logging for progress tracking

### Key Achievements

- Successfully designed exoskeleton supporting full lower-body rehabilitation therapy
- Achieved safe force limiting with sub-millisecond response times
- Integrated multi-modal sensors enabling comprehensive gait analysis
- Implemented adaptive assistance algorithms improving patient outcomes
- Created field-proven system used in clinical rehabilitation settings
- Contributed to research advancing exoskeleton technology for medical applications

---

<a id="10"></a>

## 10. Holosuit 1.7 – Project Management & Production

- **Page:** `projects/holosuit_1_7.html`
- **Data id:** `9` · **Category:** Wearables & XR · **Company:** HoloWorld
- **Shown on site:** no
- **Thumbnail:** `/projects/Files/holosuittt3/holosuitdisplay.png`
- **Links:** [Company](https://www.holoworld.one) · [LinkedIn](https://www.linkedin.com/company/holoworldtech/)
- **Page tags:** Project Management, Production Engineering, Quality Assurance, Supply Chain, Troubleshooting, Customer Delivery

### Key numbers

| Value | Label |
|---|---|
| −60% | Field failure rate |
| 98% | Wireless uptime (from 85%) |
| 48h→4h | Issue resolution time |
| −15% | Manufacturing cost |

### Card (projects grid)

- **Title:** Holosuit 1.7 – Project Management & Production
- **Short description:** Product management and manufacturing oversight ensuring quality and timely delivery.
- **Tags:** Project Management, Production, Quality Assurance, Customer Delivery
- **Summary:** Managed Holosuit 1.7 product line overseeing manufacturing, quality assurance, and customer delivery while resolving critical reliability and connectivity issues.
- **Highlights:**
  - Resolved reliability and connectivity issues improving performance and user experience
  - Oversaw manufacturing processes ensuring timely delivery to customers
  - Implemented process improvements enhancing usability and convenience
  - Awarded HoloStar for pivotal role in product success and team leadership
- **Card images:** `/projects/Files/holosuittt3/holosuitdisplay.png`

### Case-study page content

Managed the Holosuit 1.7 product line as Project Manager, overseeing all aspects of manufacturing, quality assurance, and customer delivery. Successfully resolved critical reliability and connectivity issues, improving overall product performance and user experience. Implemented process improvements enhancing usability and ensuring timely delivery to meet customer requirements.

### Product Overview

![Holosuit 1.7 Product](https://placehold.co/600x400)
![Manufacturing & Assembly](https://placehold.co/600x400)
Holosuit 1.7 represented a mature iteration of the motion capture suit with proven technology and refined user experience. As Project Manager, responsible for sustaining product excellence while managing manufacturing processes and customer satisfaction.

### Reliability & Connectivity Issues Resolution

Systematically identified and resolved product performance issues:

- **Issue Identification:** Root cause analysis of field failures and user complaints
- **Reliability Improvements:** Hardware redesigns addressing thermal and mechanical failures
- **Connectivity Optimization:** WiFi/BLE protocol refinement improving connection stability
- **Firmware Updates:** Software patches addressing sensor calibration and data sync issues
- **Validation Testing:** Comprehensive testing ensuring fixes don't introduce new issues
- **Field Feedback Loop:** Continuous customer feedback integration into improvements

### Manufacturing Process Management

- **Production Planning:** Demand forecasting and production scheduling
- **Supply Chain Management:** Component sourcing and inventory optimization
- **Quality Control:** In-process and final product inspection protocols
- **Assembly Procedures:** Standardized work instructions and process documentation
- **Test & Validation:** Comprehensive functional testing before shipment
- **Cost Optimization:** Manufacturing efficiency improvements reducing production costs

### System Improvements & Usability Enhancements

Implemented process improvements enhancing user experience:

- **Setup Simplification:** Streamlined initial configuration process
- **User Documentation:** Improved guides and troubleshooting resources
- **Calibration Automation:** Simplified sensor calibration procedure
- **App Integration:** Enhanced companion app with better diagnostics
- **Maintenance Protocol:** Clear cleaning and maintenance instructions
- **Support Resources:** Video tutorials and knowledge base development

### Quality Assurance & Testing Programs

- **Test Automation:** Automated testing protocols for production validation
- **Reliability Testing:** Extended burn-in testing identifying latent failures
- **User Acceptance Testing:** Beta testing with customers before release
- **Environmental Testing:** Temperature and humidity stress testing
- **Regression Testing:** Ensuring firmware updates don't break existing functionality
- **Failure Analysis:** Post-mortem investigation of field failures

### Customer Delivery & Support

Ensured successful customer onboarding and satisfaction:

- **Timely Delivery:** Met production schedules and shipping deadlines
- **Pre-delivery Preparation:** Final inspection and configuration verification
- **Unboxing Experience:** Professional packaging and setup documentation
- **Customer Training:** Setup assistance and initial operation guidance
- **Technical Support:** Responsive issue resolution and troubleshooting
- **Warranty Management:** Handling of warranty claims and replacements

### Cross-Functional Team Coordination

- **Engineering Collaboration:** Working with design team on product improvements
- **Manufacturing Partners:** Coordination with contract manufacturers
- **Quality Teams:** Alignment on testing and acceptance criteria
- **Logistics:** Shipping and distribution coordination
- **Customer Success:** Understanding customer needs and expectations
- **Executive Reporting:** Status updates and performance metrics

### Key Performance Metrics

- Reduced field failure rate by 60% through systematic issue resolution
- Improved wireless connectivity stability from 85% to 98% uptime
- Achieved 99.2% on-time delivery rate to customers
- Reduced mean time to resolution (MTTR) for customer issues from 48h to 4h
- Maintained 95%+ customer satisfaction rating
- Reduced manufacturing costs by 15% through process optimization

### Recognition & Achievements

- **HoloStar Award:** Honored as "Employee of the Quarter" for exceptional contribution to product success
- **Product Success:** Holosuit 1.7 achieved highest customer satisfaction rating in company history
- **Operational Excellence:** Established production processes and quality standards continuing beyond project
- **Team Leadership:** Built and mentored manufacturing and QA team members
- **Strategic Impact:** Demonstrated capability for product management and operational leadership

---

<a id="11"></a>

## 11. Body Control Module – Electrical Protection

- **Page:** `projects/BCM.html`
- **Not listed in portfolio-data.js** — the page exists but no card links to it.
- **Links:** [Company](https://www.emotorad.com) · [LinkedIn](https://www.linkedin.com/company/emotorad/)
- **Page tags:** Body Control, Electrical Protection, Voltage Management, Load Distribution, Fault Detection, Safety Electronics

### Case-study page content

Designed a Body Control Module providing comprehensive electrical protection and vehicle power management. This module safeguards all vehicle electronics through over-voltage, under-voltage, and reverse polarity protection while intelligently managing power distribution across multiple vehicle subsystems.

### Protection Circuit Design

![BCM Protection Circuits](https://placehold.co/600x400)
![Power Distribution](https://placehold.co/600x400)
**Key Protection Features:**

- **Over-Voltage Protection:** Protects from charging spikes and alternator overvoltage
- **Under-Voltage Protection:** Prevents operation with depleted battery (safe cutoff)
- **Reverse Polarity Protection:** Safeguards against incorrect battery connection
- **Over-Current Protection:** Circuit breaker functions with adjustable thresholds
- **Thermal Shutdown:** Emergency protection at extreme temperatures

### Voltage Management & Regulation

- Precision voltage monitoring with multiple thresholds
- Isolated voltage sensing for accurate measurement
- Automatic switchover for multi-battery configurations
- Battery health monitoring and aging detection
- Real-time voltage statistics and trending

### Intelligent Load Management

Smart power distribution enabling optimal vehicle performance:

- **Priority-based Distribution:** Critical loads prioritized during low battery
- **Dynamic Load Shedding:** Non-essential loads disconnected to preserve critical power
- **Per-Channel Current Limiting:** Individual circuit protection
- **Load Sequencing:** Controlled startup to prevent inrush currents
- **Efficiency Optimization:** Minimized losses through intelligent distribution

### Fault Detection & Diagnostics

- **Short Circuit Detection:** Identifies and isolates faulty circuits
- **Ground Fault Detection:** Detects insulation failures and leakage
- **Open Circuit Detection:** Identifies disconnected loads and sensors
- **Diagnostic Codes:** Industry-standard DTC for vehicle diagnostics
- **Real-time Alerts:** Immediate notification of critical faults

### Modular Power Distribution

Supports multiple independent power channels:

- Dedicated channels for critical systems (propulsion, lighting, steering)
- Accessory channels with fused protection
- Auxiliary power outputs for external devices
- Programmable current limits per channel
- Hot-swap capability for safe component replacement

### Vehicle Integration (CAN Communication)

- CAN Bus interface for vehicle network integration
- Real-time status broadcast to other vehicle modules
- Remote control capability via CAN commands
- Standardized vehicle diagnostic protocols
- Integration with telematics and monitoring systems

### Testing & Validation

- High-current testing at protection threshold limits
- Voltage transient testing (spike and sag conditions)
- Reverse polarity protection verification
- Thermal cycling and extreme temperature testing
- Long-term reliability testing on actual vehicles
- Field durability validation

### Key Achievements

- Designed comprehensive electrical protection system for vehicle safety
- Implemented intelligent power management for extended battery life
- Achieved reliable fault detection and isolation mechanisms
- Successfully integrated with vehicle CAN network
- Enabled diagnostics and predictive maintenance capabilities

---

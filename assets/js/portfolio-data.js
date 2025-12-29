// assets/js/portfolio-data.js

const portfolioProjects = [
  {
    id: "holosuit",
    featured: true,
    title: "HoloSuit - Immersive Suit",
    thumbnail: "/projects/Files/holosuittt3/holosuitdisplay.png",
    shortDescription:
      "Motion capture suit with integrated IMUs and haptic feedback for immersive VR experiences.",

    tags: ["VR/XR", "Mo-Cap", "IMU", "Haptics"],

    modal: {
      images: [
        "/projects/Files/holosuittt3/sensors.png",
        "/projects/Files/holosuittt3/sensors123.png",
        "/projects/Files/holosuittt3/test1.jpg"
      ],
      description:
        "Designed a module control PCB supporting sensor fusion, closed-loop motor control, and efficient power distribution under tight EMI constraints.",
      bullets: [
        "4-layer PCB with split analog/digital grounds",
        "STM32 + IMU sensor fusion",
        "Motor driver thermal optimization",
        "EMI/EMC-aware layout"
      ],
      caseStudyLink: "/projects/rover.html",
      companyWebsite: "/projects/blog_1.html",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
  {
    id: "1",
    title: "Smart Motor Controller – 250W E-Bike",
    featured: true,
    thumbnail: "/projects/Files/EMotorad/mcu.jpg",
    shortDescription:
      "Designed a complete motor controller PCB with powertrain control, Bluetooth connectivity, and AIS-004 compliance.",
    tags: ["Motor Drive", "STM32", "BLE"],
    modal: {
      images: [
        "/projects/Files/EMotorad/mcu.jpg"
      ],
      description:
        "Lead hardware design for a 250W brushless DC motor controller enabling power-efficient drive control and wireless connectivity.",
      bullets: [
        "Power calculations, HW architecture & component engineering",
        "Integrated Bluetooth communication for rider-app interface",
        "AIS-004 Part-3 compliance testing",
        "Vendor, production & validation support"
      ],
      caseStudyLink: "/projects/emotorad-mcu.html",
      companyWebsite: "https://www.emotorad.com/",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },

  {
    id: "2",
    title: "Connected Display Module – E-Bike",
    thumbnail: "/projects/Files/EMotorad/display.jpg",
    shortDescription:
      "LTE-enabled TFT dashboard with GNSS for real-time trip data and SOS alerts.",
    tags: ["Display Systems", "LTE", "GNSS", "IMU"],
    modal: {
      images: [
        "/projects/Files/EMotorad/display.jpg"
      ],
      description:
        "Developed a standalone connected display for electric bicycles supporting navigation and remote tracking.",
      bullets: [
        "LTE module with 2G fallback and GNSS positioning",
        "Colored non-intelligent TFT with UI support",
        "Trip analytics, location tracking, SOS alerts",
        "Designed under consumer-grade power constraints"
      ],
      caseStudyLink: "/projects/emotorad-display.html",
      companyWebsite: "https://www.emotorad.com/",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
  {
    id: "3",
    title: "48V BMS – Electric Two-Wheeler",
    thumbnail: "/projects/Files/EMotorad/bms48.jpg",
    shortDescription:
      "Architecture & hardware design of 48V BMS using NXP MCU and AFE with EMI-safe power routing.",
    tags: ["BMS", "Power Systems", "NXP", "Battery Safety"],
    modal: {
      images: [
        "/projects/Files/EMotorad/bms48.jpg"
      ],
      description:
        "Designed a production-ready BMS solution for high-current two-wheeler battery packs.",
      bullets: [
        "AFE + Microcontroller based monitoring for NMC cells",
        "Pre-charge circuitry design with thermal sizing",
        "EMI/EMC-aware PCB layout",
        "SOC/SOH monitoring with lifecycle protection"
      ],
      caseStudyLink: "/projects/emotorad-bms48.html",
      companyWebsite: "https://www.emotorad.com/",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
  {
    id: "4",
    title: "Instrument Cluster – Body Control & Telematics",
    thumbnail: "/projects/Files/EMotorad/cluster.jpg",
    shortDescription:
      "Stackable TCU + BCM system with touch display, voltage protection and telematics.",
    tags: ["Telematics", "Android Display", "BCM"],
    modal: {
      images: [
        "/projects/Files/EMotorad/cluster.jpg"
      ],
      description:
        "Created modular cluster electronics with independent telematics (TCU) and body control (BCM) modules.",
      bullets: [
        "Android system with MIPI touch interface (Quectel module)",
        "Over/under-voltage & reverse polarity protection",
        "Scalable architecture for future product family",
        "Inter-module CAN communication"
      ],
      caseStudyLink: "/projects/emotorad-cluster.html",
      companyWebsite: "https://www.emotorad.com/",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
  {
    id: "5",
    title: "Intelligent BMS – 36V/48V Architecture",
    thumbnail: "/projects/Files/EMotorad/bms-intelligent.jpg",
    shortDescription:
      "Next-gen smart BMS supporting both NMC & LFP chemistries using TI AFE and NXP MCU.",
    tags: ["Smart BMS", "TI AFE", "NXP MCU"],
    modal: {
      images: [
        "/projects/Files/EMotorad/bms-intelligent.jpg"
      ],
      description:
        "Lead hardware engineering for new generation BMS platform enabling flexible chemistry configurations.",
      bullets: [
        "TI AFE + NXP MCU architecture",
        "36V/48V pack compatibility",
        "Optimized for range, battery life & safety",
        "Supports firmware-based smart features"
      ],
      caseStudyLink: "/projects/emotorad-bms-intelligent.html",
      companyWebsite: "https://www.emotorad.com/",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
//   {
//   id: "6",
//   featured: true,  // only for top 4

//   title: "Holosuit 3.0 – Full Body Motion Capture Suit",
//   thumbnail: "/projects/Files/Holoworld/holosuit.jpg",
//   shortDescription:
//     "XR-focused full-body motion capture suit with integrated sensor network and scalable electronics architecture.",
//   tags: ["Motion Capture", "XR/VR", "Wearable Electronics", "Sensor Networks"],
//   modal: {
//     images: [
//       "/projects/Files/Holoworld/holosuit.jpg"
//     ],
//     description:
//       "Led electronics design and hardware engineering of Holosuit 3.0 — a full-body haptic and motion capture system for immersive VR/XR interactions.",
//     bullets: [
//       "Designed electronics system and integrated sensor harnessing",
//       "Developed test jigs and stress-testing methodology for performance validation",
//       "Hardware quality assurance for 40+ motion sensors",
//       "Cross-functional collaboration with software, industrial design, and apparel teams"
//     ],
//     caseStudyLink: "/projects/holosuit.html",
//     companyWebsite: "https://holoworld.one/",
//     companyLinkedIn: "https://www.linkedin.com/company/holoworldtech/"
//   }
// },
{
  id: "7",
  title: "4-Wheeled Omni-Directional Research Robot",
  thumbnail: "/projects/Files/Holoworld/4wrobot.jpg",
  shortDescription:
    "Research robot platform with autonomous navigation, power management and hardware integration.",
  tags: ["Robotics", "Autonomous Navigation", "Power Systems"],
  modal: {
    images: [
      "/projects/Files/Holoworld/4wrobot.jpg"
    ],
    description:
      "Engineered a robust robotic hardware platform with omnidirectional mobility and modular component integration.",
    bullets: [
      "Motor selection, battery sizing and power distribution design",
      "Designed wiring harness architecture for reliability",
      "Seamless integration of controllers, sensors and drive system",
      "Supporting autonomous navigation capability development"
    ],
    caseStudyLink: "/projects/research-robot.html",
    companyWebsite: "https://holoworld.one/",
    companyLinkedIn: "https://www.linkedin.com/company/holoworldtech/"
  }
},
{
  id: "8",
  title: "Lower-Body Exoskeleton – Rehabilitation System",
  thumbnail: "/projects/Files/Holoworld/exoskeleton.jpg",
  shortDescription:
    "Assistive powered exoskeleton enabling guided rehabilitation and gait support.",
  tags: ["Exoskeleton", "Biomechanics", "Motor Control", "Medical Hardware"],
  modal: {
    images: [
      "/projects/Files/Holoworld/exoskeleton.jpg"
    ],
    description:
      "Supported design of an assistive lower-body exoskeleton for medical rehabilitation applications.",
    bullets: [
      "Motor and actuator selection based on torque/biomechanics requirements",
      "Hardware integration and sensor interfacing",
      "Design of wiring harness and mounting solutions",
      "Contributed to early testing and evaluation cycles"
    ],
    caseStudyLink: "/projects/exoskeleton.html",
    companyWebsite: "https://holoworld.one/",
    companyLinkedIn: "https://www.linkedin.com/company/holoworldtech/"
  }
}



];

// assets/js/portfolio-data.js

const portfolioProjects = [
  {
    id: "holosuit",
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
  }

];

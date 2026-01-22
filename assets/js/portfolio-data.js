// assets/js/portfolio-data.js

const portfolioProjects = [
  {
    id: "6",
    featured: true,
    visible: true,
    title: "Holosuit 3.0 – Full Body Immersive Suit",
    thumbnail: "projects/Files/HoloWorld/holosuit_3_0/images/holosuitdisplay.png",
    shortDescription:
      "Full-body motion capture suit with integrated haptic feedback for immersive VR/XR experiences.",
    tags: ["Mo-Cap", "VR/XR", "Wear-Tech", "Haptics"],
    modal: {
      images: [
        "projects/Files/HoloWorld/holosuit_3_0/images/sensors.png",
        "projects/Files/HoloWorld/holosuit_3_0/images/sensors123.png"
      ],
      description:
        "Led electronics design and comprehensive product development of Holosuit 3.0 — a full-body haptic and motion capture system for immersive VR/XR interactions.",
      bullets: [
        "Designed comprehensive electronics system with 40+ integrated sensors",
        "Integrated harness solutions for functionality, aesthetics, and maintenance",
        "Developed test jigs and stress-testing methodology for performance validation",
        "Cross-functional collaboration with software, mechanical, industrial design, and apparel teams"
      ],
      caseStudyLink: "/projects/holosuit_3_0.html",
      companyWebsite: "/projects/holosuit_3_0.html",
      companyLinkedIn: "https://www.linkedin.com/company/holoworldtech/"
    }
  },
  {
    id: "E-Bike-Motor-Controller",
    title: "Smart Motor Controller – 250W E-Bike",
    featured: true,
    visible: true,
    thumbnail: "/projects/Files/SmartBike/B6.jpg",
    shortDescription:
      "250W BLDC motor controller based on NXP's S32Kxx MCU with integrated Connectivity features for Indian roads.  ",
    tags: ["Motor Drive", "NXP", "BLE", "EMI/EMC"],
    modal: {
      images: [
        "/projects/Files/SmartBike/2.png",
        "/projects/Files/SmartBike/1.jpg"
      ],
      description:
        "Lead hardware design for a 250W brushless DC motor controller enabling power-efficient drive control and wireless connectivity.",
      bullets: [
        "Power calculations, HW architecture & component engineering",
        "Integrated Bluetooth communication for rider-app interface",
        "AIS-004 Part-3 compliance testing",
        "Vendor, production & validation support"
      ],
      caseStudyLink: "/projects/ebike_controller.html",
      companyWebsite: "/projects/ebike_controller.html",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },

  {
    id: "2",
    title: "Connected Display Module – E-Bike",
    featured: false,
    visible: true,
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
      caseStudyLink: "/projects/ebike_display.html",
      companyWebsite: "/projects/ebike_display.html",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
  {
    id: "3",
    title: "48V BMS – Electric Two-Wheeler",
    featured: false,
    visible: false,
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
      caseStudyLink: "/projects/bms_48v.html",
      companyWebsite: "/projects/bms_48v.html",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
  {
    id: "4",
    title: "Instrument Cluster – Body Control & Telematics",
    featured: false,
    visible: false,
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
      caseStudyLink: "/projects/TCU.html",
      companyWebsite: "/projects/TCU.html",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  },
  {
    id: "5",
    title: "Intelligent BMS – 36V/48V Architecture",
    featured: false,
    visible: false,
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
      caseStudyLink: "/projects/bms_intelligent.html",
      companyWebsite: "/projects/bms_intelligent.html",
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
    featured: false,
    visible: false,
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
      caseStudyLink: "/projects/research_robot.html",
      companyWebsite: "/projects/research_robot.html",
      companyLinkedIn: "https://www.linkedin.com/company/holoworldtech/"
    }
  },
  {
    id: "8",
    title: "Lower-Body Exoskeleton – Rehabilitation System",
    featured: false,
    visible: false,
    thumbnail: "/projects/Files/Holoworld/exoskeleton.jpg",
    shortDescription:
      "Assistive powered exoskeleton enabling guided rehabilitation and gait support.",
    tags: ["Exoskeleton", "Biomechanics", "Motor Control", "Medical Hardware"],
    modal: {
      images: [
        "/projects/Files/Holoworld/exoskeleton.jpg"
      ],
      description:
        "Contributed to design of an assistive lower-body exoskeleton for medical rehabilitation applications with comprehensive motor, control, and mechanical integration.",
      bullets: [
        "Motor and actuator selection based on torque and biomechanics requirements",
        "Control electronics integration and sensor interfacing",
        "Design of wiring harness and mechanical mounting solutions",
        "Contributed to testing and evaluation cycles for clinical validation"
      ],
      caseStudyLink: "/projects/exoskeleton.html",
      companyWebsite: "/projects/exoskeleton.html",
      companyLinkedIn: "https://www.linkedin.com/company/holoworldtech/"
    }
  },
  {
    id: "9",
    title: "Holosuit 1.7 – Project Management & Production",
    featured: false,
    visible: false,
    thumbnail: "/projects/Files/holosuittt3/holosuitdisplay.png",
    shortDescription:
      "Product management and manufacturing oversight ensuring quality and timely delivery.",
    tags: ["Project Management", "Production", "Quality Assurance", "Customer Delivery"],
    modal: {
      images: [
        "/projects/Files/holosuittt3/holosuitdisplay.png"
      ],
      description:
        "Managed Holosuit 1.7 product line overseeing manufacturing, quality assurance, and customer delivery while resolving critical reliability and connectivity issues.",
      bullets: [
        "Resolved reliability and connectivity issues improving performance and user experience",
        "Oversaw manufacturing processes ensuring timely delivery to customers",
        "Implemented process improvements enhancing usability and convenience",
        "Awarded HoloStar for pivotal role in product success and team leadership"
      ],
      caseStudyLink: "/projects/holosuit_1_7.html",
      companyWebsite: "/projects/holosuit_1_7.html",
      companyLinkedIn: "https://www.linkedin.com/company/holoworldtech/"
    }
  },
  {
    id: "10",
    title: "BAJA SAE – All Terrain Vehicle | Electrical Lead",
    featured: false,
    visible: false,
    thumbnail: "/projects/Files/baja_vehicle.jpg",
    shortDescription:
      "Electrical systems lead for SAE competition ATV with 35% weight reduction and 8th place cost ranking.",
    tags: ["Electrical Systems", "Team Leadership", "Data Acquisition", "Vehicle Testing"],
    modal: {
      images: [
        "/projects/Files/baja_vehicle.jpg"
      ],
      description:
        "Led electrical systems team for BAJA SAE All Terrain Vehicle competition entry, achieving 21st overall and 8th cost ranking among 100+ schools through data-driven optimization.",
      bullets: [
        "Led 4-person electrical engineering team over 28-month development cycle",
        "Implemented NI cDAQ, Arduino, and MATLAB-based data acquisition and analysis",
        "Achieved 35% weight reduction and 25% parts reduction through optimization",
        "Managed relationships with 20+ sponsors ensuring resource availability",
        "Secured competitive rankings at BAJA SAE Arizona 2020"
      ],
      caseStudyLink: "/projects/baja_sae.html",
      companyWebsite: "/projects/baja_sae.html",
      companyLinkedIn: "https://www.sae.org/"
    }
  }



];

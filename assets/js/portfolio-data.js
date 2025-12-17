// assets/js/portfolio-data.js

const portfolioProjects = [
  {
    id: "rover",
    title: "Autonomous Rover Control PCB",
    thumbnail: "/assets/images/rover/cover.jpg",
    shortDescription:
      "STM32-based control board for autonomous navigation with IMU fusion and motor drivers.",

    tags: ["STM32", "IMU", "Motor Drivers", "Power Design"],

    modal: {
      images: [
        "/assets/images/rover/pcb-top.jpg",
        "/assets/images/rover/pcb-bottom.jpg"
      ],
      description:
        "Designed a multi-layer control PCB supporting sensor fusion, closed-loop motor control, and efficient power distribution under tight EMI constraints.",
      bullets: [
        "4-layer PCB with split analog/digital grounds",
        "STM32 + IMU sensor fusion",
        "Motor driver thermal optimization",
        "EMI/EMC-aware layout"
      ],
      caseStudyLink: "/projects/rover.html"
    }
  },

  {
    id: "power",
    title: "Low-Noise Power Supply Module",
    thumbnail: "/assets/images/power/cover.jpg",
    shortDescription:
      "High-efficiency, low-ripple power module optimized for sensitive analog and RF subsystems.",

    tags: ["DC-DC", "LDO", "EMI", "Thermal Design"],

    modal: {
      images: [
        "/assets/images/power/layout.jpg",
        "/assets/images/power/thermal.jpg"
      ],
      description:
        "Designed a compact power module achieving <10mV ripple with optimized thermal performance.",
      bullets: [
        "Synchronous buck + LDO post regulation",
        "Thermal simulation and copper optimization",
        "EMI mitigation with spread-spectrum"
      ],
      caseStudyLink: "/projects/power.html"
    }
  }
];

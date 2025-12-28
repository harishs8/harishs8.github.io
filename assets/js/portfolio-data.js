// assets/js/portfolio-data.js

const portfolioProjects = [
  {
    id: "holosuit",
    title: "HoloSuit VR Full-Body Tracking and Haptics",
    thumbnail: "/projects/Files/holosuittt3/holosuitdisplay.png",
    shortDescription:
      "Motion capture suit with integrated IMUs and haptic feedback for immersive VR experiences.",

    tags: ["RP2040", "IMU", "Haptics", "Mo-Cap"],

    modal: {
      images: [
        "/projects/Files/TCU/test1.jpg",
        "/projects/Files/TCU/test1.jpg",
        "/projects/Files/TCU/test1.jpg"
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
    id: "rover1",
    title: "Autonomous Rover Control PCB",
    thumbnail: "/projects/Files/TCU/test1.jpg",
    shortDescription:
      "STM32-based control board for autonomous navigation with IMU fusion and motor drivers.",

    tags: ["STM32", "IMU", "Motor Drivers", "Power Design"],

    modal: {
      images: [
        "/projects/Files/TCU/test1.jpg",
        "/projects/Files/TCU/test1.jpg"
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
    id: "power",
    title: "Low-Noise Power Supply Module",
    thumbnail: "/projects/Files/TCU/test1.jpg",
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
      caseStudyLink: "/projects/power.html",
      companyWebsite:"/projects/power.html",
      companyLinkedIn: "https://www.linkedin.com/company/emotorad/"
    }
  }
];

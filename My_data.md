export const personalInfo = {
  name: "Vrushal Patil",
  title: "AI & Systems Developer",
  tagline: "Building the future with code, one algorithm at a time.",
  email: "pvrushal.2005@gmail.com",
  phone: "8624948206",
  location: "Pune",
  linkedin: "linkedin.com/in/vrushal-patil/",
  github: "github.com/itsVrushal",
};

export const education = {
  institution: "Vishwakarma Institute of Technology, Pune",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  period: "Nov 2022 – May 2026",
  cgpa: "9.06",
};
export const address = {
  place: "Front of Stanza Living syzran house, Bakul Nagar, Bibwewadi",
};
export const experience = [
  {
    company: "PTC Inc.",
    role: "Software Engineering Intern",
    // period: "July 2025 - Present",
    description: [
      "Built a multi-agent AI system (LangChain) for autonomous task routing across Snowflake + PostgreSQL.",
      "Added Redis intelligent caching cutting LLM calls by 60–90% and reducing latency to 10–50ms (cache hits).",
      "Optimized pipelines over 1.15M tokens / 219 API calls, delivering 4.8× faster responses.",
      "Developed MCP servers for database connectivity, and facility to accommodate 3rd party servers.",
      "Implemented session memory + summarization for scalable multi-tenant deployments.",
    ],
  },
  {
    company: "OneShot Technologies",
    role: "Founding Engineer",
    // period: "2024 - Present",
    description: [
      "Led end-to-end development of a scalable video monitoring platform integrating multi-brand IP cameras using RTSP→WebRTC (go2rtc).",
      "Architected core system infrastructure (Edge Gateway + VPN), enabling secure, real-time streaming across 10+ remote sites with zero public exposure.",
      "Established foundational backend systems (Flask, MongoDB), access control, and deployment workflows, contributing to 0 recurring software cost via open-source stack.",
      "Drove early-stage product decisions, technical architecture, and deployment strategy as part of the founding team.",
    ],
  },
];

export const projects = [

  {
    name: "Multi-Agentic AI Orchestration Network",
    organization: "PTC",
    tech: ["Python", "LangChain", "Redis", "Snowflake", "PostgreSQL"],
    description: [
      "Designed scalable agent orchestration layer with cross-DB reasoning.",
      "Achieved 801× speedup on cached queries (31.9s→0.03s).",
      "Reduced embedding latency from 67s→sub-second using semantic caching.",
    ],
  },
  {
    name: "Metro Station Safety Surveillance",
    organization: "PUNE MAHAMETRO",
    tech: ["YOLO", "OpenCV", "Python"],
    description: [
      "Developed a real-time surveillance pipeline achieving 95% accuracy for platform and escalator safety monitoring.",
      "Containerised and deployed the inference service to process CCTV feeds and trigger automated alerts.",
    ],
  },
  {
    name: "Multi-Brand Camera Integration System",
    organization: "Vishwakarma Institute of Technology",
    tech: ["RTSP", "WebRTC", "go2rtc", "WireGuard", "YOLO"],
    description: [
      "Built a scalable live-streaming platform integrating multi-brand IP cameras using RTSP→WebRTC conversion (go2rtc).",
      "Reduced bandwidth usage by~60% via dual-stream optimization; supported real-time 4K streaming.",
      "Implemented secure VPN (WireGuard/Tailscale) with zero public exposure and end-to-end encryption.",
      "Designed cost-efficient deployment model achieving~50% hardware savings and 0 software licensing cost.",
      "Enabled centralized monitoring across 10+ sites with role-based access and audit logging.",
    ],
  },
  {
    name: "Cyberbullying Detection",
    organization: "Vishwakarma Institute of Technology",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF"],
    description: [
      "Benchmarked 9 ML classifiers on Twitter cyberbullying data.",
      "Bagging Classifier achieved best accuracy (92.92%) and F1 (94.5%).",
      "Published in Springer LNNS, ICTIS 2024 (Scopus-indexed).",
    ],
  },
  {
    name: "Skin Cancer Detection using Machine Learning",
    organization: "Vishwakarma Institute of Technology",
    tech: ["Python", "Machine Learning", "CNN", "Image Processing"],
    description: [
      "Developed an early-stage skin disease detection system using ML to assist in diagnosing conditions that are difficult to identify with the naked eye.",
      "Addresses the shortage of dermatologists, especially in rural areas, by providing automated preliminary screening.",
      "Uses image-based analysis for accurate, early, and objective diagnosis to overcome disadvantages of traditional visual examination.",
      "Aims to reduce diagnostic costs and provide timely medical intervention for skin diseases.",
    ],
  },
];

export const skills = {
  languages: ["Python", "Java", "C"],
  ai_llm: [
    "LangChain",
    "RAG",
    "LLM Optimization",
    "Vector Embeddings",
    "Semantic Search",
    "MCP",
    "Multi-Agent Systems",
  ],
  backend_data: [
    "Redis",
    "PostgreSQL",
    "Snowflake",
    "SQL",
    "Session Management",
    "Distributed Caching",
    "RTSP",
    "WebRTC",
  ],
  ml_cv: ["CNN", "YOLOv8", "NLP"],
  devops: [
    "Docker",
    "Docker Compose",
    "Async Workflows",
    "Performance Profiling",
    "Telemetry Logging",
  ],
};

export const achievements = [
  "Runner-Up at HackMITWPU'24 for an advanced video analytics solution with Maha-Metro",
  "Published a peer-reviewed research paper in Springer Proceedings (ICTIS 2024)",
  "Patent granted for an innovative video surveillance system",
  "Led and mentored teams in hackathons and academic projects",
];

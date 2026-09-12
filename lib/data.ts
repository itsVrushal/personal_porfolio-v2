export const personalInfo = {
  name: "Vrushal Patil",
  title: "AI & Systems Developer",
  tagline: "Building the future with code, one algorithm at a time.",
  email: "pvrushal.2005@gmail.com",
  phone: "8624948206",
  location: "Pune, India (Remote)",
  website: "vrushalpatil.vercel.app",
  linkedin: "linkedin.com/in/vrushal-patil",
  github: "github.com/itsVrushal",
};

export const education = {
  institution: "Vishwakarma Institute of Technology, Pune",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  period: "Nov 2022 – May 2026",
  cgpa: "9.14",
};

export const address = {
  place: "Pune, India (Remote)",
};

export const experience = [
  {
    company: "Exponential-Functions",
    role: "ML Developer",
    period: "July 2026 – Present",
    description: [
      "Engineered end-to-end MLOps pipelines using PyTorch and Docker to fine-tune and deploy quantized models across NVIDIA DGX spark and edge/ARM nodes (Minisforum AMD Ryzen 9), boosting localized inference throughput by 3.4×.",
      "Architected localized Multi-Agent Orchestration networks via LangChain, shifting core workloads strictly to edge hardware to cut cloud LLM API costs by 100% and reduce latency to sub-30ms.",
      "Built full-stack software wrappers over fine-tuned edge models using Python and asynchronous REST APIs, accelerating deployment cycles from weeks to 4 hours while maintaining 99.9% uptime.",
      "Developed and deployed interactive resource-planning tooling, reducing edge Out-of-Memory (OOM) failures by 95% and streamlining hardware-to-model matching.",
    ],
  },
  {
    company: "PTC Pune",
    role: "AI Engineering Intern",
    period: "July 2025 – June 2026",
    description: [
      "Designed a production-grade multi-agent orchestration layer using LangChain for autonomous task routing, dynamically dispatching cross-database queries without human intervention.",
      "Achieved an 801× query speedup (31.9s → 0.03s) via Redis-backed semantic caching, cutting redundant LLM API calls by 60–90% and serving cache hits at 10–50ms latency.",
      "Optimized end-to-end pipelines processing 1.15M+ tokens, delivering 4.8× faster responses via prompt compression and batching, while developing plug-and-play MCP servers.",
      "Built a hybrid RAG pipeline (semantic + keyword) achieving a 92% cache hit rate, slashing embedding latency from 67 seconds to sub-second retrieval times.",
    ],
  },
];

export const projects = [
  {
    name: "Scalable Video Monitoring & Edge Streaming Platform",
    organization: "WebRTC, RTSP, VPN, Edge Gateway, Python | 2026",
    tech: ["WebRTC", "RTSP", "VPN", "Edge Gateway", "Python"],
    description: [
      "Architected an edge-to-cloud video streaming infrastructure converting raw RTSP feeds into ultra-low-latency WebRTC streams, establishing a high-throughput data pipeline essential for real-time edge AI inference.",
      "Engineered a secure Edge Gateway + VPN networking layer, enabling distributed ML model deployment, remote management, and continuous data ingestion across 300+ active sites.",
    ],
  },
  {
    name: "Natural Language to Selenium Test Agent (RAG)",
    organization: "PTC",
    tech: ["Python", "LangChain", "ChromaDB", "Redis"],
    description: [
      "Built a RAG-based AI agent capable of translating natural language requirements into executable Selenium test scripts, reducing manual QA engineering effort by 80%.",
      "Optimized retrieval performance and context management using semantic caching, cutting generation latency by 3x.",
      "Delivered an autonomous software validation pipeline where the agent iteratively generates, executes, and self-corrects testing scripts based on environment feedback.",
    ],
  },
  {
    name: "Intelligent Metro Safety & Accident Detection Pipeline",
    organization: "Pune MahaMetro",
    tech: ["Python", "YOLOv8", "PyTorch", "Docker", "OpenCV"],
    description: [
      "Developed and trained an advanced computer vision model using YOLOv8 for real-time platform safety monitoring and automated anomaly and accident detection.",
      "Architected an intelligent edge-inference agent to process live CCTV feeds, achieving 95% detection accuracy while dynamically triggering automated safety alerts for immediate incident response.",
      "Containerized the complete ML pipeline via Docker for scalable edge deployment, optimizing inference speed and hardware utilization for resource-constrained environments.",
    ],
  },
  {
    name: "Multi-Agentic AI Orchestration Network",
    organization: "PTC",
    tech: ["Python", "LangChain", "Redis", "Snowflake", "PostgreSQL", "MCP"],
    description: [
      "Architected an autonomous multi-agent orchestration layer using LangChain, enabling cross-database reasoning across Snowflake and PostgreSQL with dynamic task routing.",
      "Engineered Redis-backed semantic caching delivering an 801× query speedup (31.9s → 0.03s), slashing redundant LLM API calls by 60–90% and serving cache hits at 10–50ms latency.",
      "Built a hybrid RAG pipeline (semantic + keyword retrieval) and modular Model Context Protocol (MCP) servers, optimizing pipelines over 1.15M+ tokens with 4.8× faster responses.",
    ],
  },
  {
    name: "Cyberbullying Detection",
    organization: "Springer LNNS / Vishwakarma Institute of Technology",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Ensemble Learning", "Springer LNNS"],
    description: [
      "Engineered an end-to-end NLP classification pipeline benchmarking 9 machine learning algorithms across 47,000+ multi-class social media and Twitter/X records.",
      "Formulated advanced text preprocessing using tokenization, lemmatization, stop-word filtering, and TF-IDF feature extraction to capture nuanced linguistic patterns.",
      "Achieved 92.92% accuracy and 94.5% F1-score with an optimized Ensemble Bagging Classifier, outperforming standard baseline classification models.",
      "Authored and published peer-reviewed research in Springer Lecture Notes in Networks and Systems (LNNS), Scopus-indexed (ICTIS 2024).",
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
  languages: ["Python", "SQL", "Java", "C"],
  agentic_ai: [
    "LangChain",
    "Multi-Agent Orchestration",
    "Hybrid RAG",
    "LLM Fine-Tuning & Quantization",
    "Semantic Caching",
    "MCP",
  ],
  ml_vision: [
    "PyTorch",
    "YOLOv8",
    "OpenCV",
    "NLP (TF-IDF, BM25)",
    "Edge Inference",
  ],
  mlops_infra: [
    "Docker",
    "Kubernetes",
    "NVIDIA DGX",
    "AWS / GCP",
    "CI/CD (GitHub Actions)",
    "Serverless",
  ],
  databases_vectors: [
    "ChromaDB",
    "Redis",
    "PostgreSQL",
    "Snowflake",
    "Distributed Caching",
  ],
  backend_networking: [
    "FastAPI",
    "Flask",
    "REST APIs",
    "WebRTC",
    "RTSP",
    "Edge Gateways",
    "VPNs",
  ],
  // Backwards-compatible aliases
  ai_llm: [
    "LangChain",
    "Multi-Agent Orchestration",
    "Hybrid RAG",
    "LLM Fine-Tuning & Quantization",
    "Semantic Caching",
    "MCP",
  ],
  backend_data: [
    "ChromaDB",
    "Redis",
    "PostgreSQL",
    "Snowflake",
    "FastAPI",
    "Flask",
    "WebRTC",
    "RTSP",
  ],
  ml_cv: ["PyTorch", "YOLOv8", "OpenCV", "NLP (TF-IDF, BM25)", "Edge Inference"],
  devops: [
    "Docker",
    "Kubernetes",
    "NVIDIA DGX",
    "AWS / GCP",
    "CI/CD (GitHub Actions)",
    "Serverless",
  ],
};

export const achievements = [
  "Runner-Up at HackMITWPU'24 for an advanced video analytics solution with Maha-Metro",
  "Published a peer-reviewed research paper in Springer Proceedings (ICTIS 2024)",
  "Patent granted for an innovative video surveillance system",
  "Led and mentored teams in hackathons and academic projects",
];

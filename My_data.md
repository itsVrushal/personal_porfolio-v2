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
    name: "Scalable Video Monitoring & Edge Streaming Platform",
    organization: "WebRTC, RTSP, VPN, Edge Gateway, Python | 2026",
    category: "Agentic & Systems",
    tech: ["WebRTC", "RTSP", "VPN", "Edge Gateway", "Python"],
    description: [
      "Architected an edge-to-cloud video streaming infrastructure converting raw RTSP feeds into ultra-low-latency WebRTC streams, establishing a high-throughput data pipeline essential for real-time edge AI inference.",
      "Engineered a secure Edge Gateway + VPN networking layer, enabling distributed ML model deployment, remote management, and continuous data ingestion across 300+ active sites.",
    ],
  },
  {
    name: "Multi-Agentic AI Orchestration Network",
    organization: "PTC",
    category: "Agentic & Systems",
    tech: ["Python", "LangChain", "Redis", "Snowflake", "PostgreSQL", "MCP"],
    description: [
      "Architected an autonomous multi-agent orchestration layer using LangChain, enabling cross-database reasoning across Snowflake and PostgreSQL with dynamic task routing.",
      "Engineered Redis-backed semantic caching delivering an 801× query speedup (31.9s → 0.03s), slashing redundant LLM API calls by 60–90% and serving cache hits at 10–50ms latency.",
      "Built a hybrid RAG pipeline (semantic + keyword retrieval) and modular Model Context Protocol (MCP) servers, optimizing pipelines over 1.15M+ tokens with 4.8× faster responses.",
    ],
  },
  {
    name: "Natural Language to Selenium Test Agent (RAG)",
    organization: "PTC",
    category: "Agentic & Systems",
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
    category: "Computer Vision",
    tech: ["Python", "YOLOv8", "PyTorch", "Docker", "OpenCV"],
    description: [
      "Developed and trained an advanced computer vision model using YOLOv8 for real-time platform safety monitoring and automated anomaly and accident detection.",
      "Architected an intelligent edge-inference agent to process live CCTV feeds, achieving 95% detection accuracy while dynamically triggering automated safety alerts for immediate incident response.",
      "Containerized the complete ML pipeline via Docker for scalable edge deployment, optimizing inference speed and hardware utilization for resource-constrained environments.",
    ],
  },
  {
    name: "Real-Time Pothole Detection & Road Damage Assessment",
    organization: "Smart Infrastructure & Edge Vision",
    category: "Computer Vision",
    tech: ["YOLOv8m", "PyTorch", "Roboflow", "OpenCV", "GPU Inference"],
    colab: "https://colab.research.google.com/drive/1ch5FIPDii44S8kyYiUnjZxil9OzGMVtA?usp=sharing",
    description: [
      "Trained an Ultralytics YOLOv8m object detector for 70 epochs on road surface imagery to identify and localize potholes and structural asphalt hazards.",
      "Achieved real-time GPU inference speeds of 11–14 ms per frame (~75–90 FPS), enabling high-speed onboard vehicle deployment for automated road condition audits.",
      "Validated precision and recall curves via confusion matrices and deployed end-to-end video inference across continuous road footage.",
    ],
  },
  {
    name: "Autonomous Women Safety & Harassment Surveillance",
    organization: "Video Analytics & Public Safety",
    category: "Computer Vision",
    tech: ["PyTorch", "YOLOv5", "OpenCV", "Video Processing", "Real-Time Inference"],
    colab: "https://colab.research.google.com/drive/1DCSLXlu-JABWnB6B6dR1pD4bpNibDZ0J?usp=sharing",
    description: [
      "Built an autonomous video analytics pipeline powered by a custom-trained YOLOv5 detector to classify surveillance feeds into harassment vs. safe public interactions.",
      "Implemented frame-by-frame inference with dynamic bounding-box visual overlays, confidence thresholding, and real-time incident categorization.",
      "Automated video compilation with OpenCV VideoWriter, exporting fully annotated incident monitoring streams for rapid security intervention.",
    ],
  },
  {
    name: "Deep Transfer Learning for Harassment Localization",
    organization: "Computer Vision & Surveillance AI",
    category: "Computer Vision",
    tech: ["TensorFlow", "DenseNet121", "OpenCV", "Pascal VOC XML", "Smooth L1 Loss"],
    colab: "https://colab.research.google.com/drive/1n-mUCxxbnIQt1k6rYJ9LxMuYIN5poOby?usp=sharing",
    description: [
      "Architected a deep convolutional bounding-box regression model utilizing a DenseNet121 backbone to localize physical harassment incidents in surveillance frames.",
      "Developed a streaming batch data generator parsing Pascal VOC XML annotations with real-time coordinate normalization and image preprocessing.",
      "Trained utilizing Smooth L1 loss and mean Intersection over Union (IoU) evaluation, featuring a custom callback to automatically checkpoint peak validation IoU weights.",
    ],
  },
  {
    name: "Turbofan Jet Engine Predictive Maintenance (RUL)",
    organization: "Industrial AI & Reliability Engineering",
    category: "Deep Learning & AI",
    tech: ["TensorFlow", "Keras", "Stacked LSTM", "Time-Series Forecasting", "NASA C-MAPSS"],
    colab: "https://colab.research.google.com/drive/1maDLJrOS7Zj-Z8gQJtRt1I0kbTxj6c4B?usp=sharing",
    description: [
      "Architected an industrial predictive maintenance deep network utilizing stacked LSTM layers with dropout regularization to predict Remaining Useful Life (RUL) of aircraft jet engines.",
      "Engineered multi-sensor time-series pipelines on NASA C-MAPSS run-to-failure telemetry using MinMax feature scaling and 60-cycle sliding-window sequence generators.",
      "Achieved a test Mean Absolute Error (MAE) of 12.40 operational cycles and an R² score of 0.756 (75.64%) on unseen test jet engine degradation profiles.",
    ],
  },
  {
    name: "Parkinson's Disease Detection via Spiral & Wave Drawings",
    organization: "Medical AI & Healthcare Diagnostics",
    category: "Deep Learning & AI",
    tech: ["TensorFlow", "Keras", "CNN", "ImageDataGenerator", "Medical Imaging"],
    colab: "https://colab.research.google.com/drive/1eLHgAEEaCyGjWD1bzy8d65srvwGPzCLu?usp=sharing",
    description: [
      "Developed a non-invasive early diagnostic screening pipeline using Convolutional Neural Networks (CNN) to detect Parkinson's disease from motor tremor patterns in hand-drawn spirals and waves.",
      "Applied real-time data augmentation (random shear, zoom, horizontal flips) via Keras ImageDataGenerator to prevent overfitting on clinical drawing samples.",
      "Achieved 93% test classification accuracy on unseen test spiral drawings utilizing early stopping and adaptive learning rate plateau scheduling.",
    ],
  },
  {
    name: "Protein Structural Classification & Property Prediction",
    organization: "Bioinformatics & Computational Biology",
    category: "Deep Learning & AI",
    tech: ["Scikit-learn", "Python", "Pandas", "Ensemble Methods", "PDB Dataset"],
    colab: "https://colab.research.google.com/drive/1zUUGLhsI5GhiXumNV0HoK-O3i1x3F55X?usp=sharing",
    description: [
      "Conducted large-scale benchmarking of 9 machine learning classification algorithms across 16,000+ protein structures and crystallographic attributes from the Protein Data Bank (PDB).",
      "Engineered robust feature preprocessing pipelines addressing extreme class imbalance, pH outlier filtering, Matthews correlation density, and molecular weight normalization.",
      "Achieved 87.87% accuracy with Decision Trees and 86.47% test accuracy with 10-fold cross-validated Random Forest ensembles across complex bio-molecular classes.",
    ],
  },
  {
    name: "Capacitated Vehicle Routing Optimization (CVRP)",
    organization: "Operations Research & Geospatial AI",
    category: "Agentic & Systems",
    tech: ["Python", "TLBO Algorithm", "Bing Maps API", "Folium", "SciPy", "Pandas"],
    colab: "https://colab.research.google.com/drive/1pJKc40fl8vdskATPUnYom1fIVGQCf7td?usp=sharing",
    description: [
      "Formulated a Teaching-Learning-Based Optimization (TLBO) metaheuristic to solve the Capacitated Vehicle Routing Problem (CVRP) across distributed depots, warehouses, and delivery nodes.",
      "Integrated Bing Maps REST API for real-time driving route matrix calculation, duration estimation, and polyline coordinate fetching under realistic road network conditions.",
      "Enforced hard truck payload limits (4,000 kg capacity) and driver operational thresholds (9-hour maximum shift limit with 30-min per-stop delivery latency penalty).",
      "Rendered dynamic, interactive multi-fleet GPS routes and depot markers using Folium GIS mapping for logistics visualization.",
    ],
  },
  {
    name: "Cyberbullying Detection",
    organization: "Springer LNNS / Vishwakarma Institute of Technology",
    category: "Deep Learning & AI",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Ensemble Learning", "Springer LNNS"],
    description: [
      "Benchmarked 9 ML classifiers on Twitter cyberbullying data.",
      "Bagging Classifier achieved best accuracy (92.92%) and F1 (94.5%).",
      "Published in Springer LNNS, ICTIS 2024 (Scopus-indexed).",
    ],
  },
  {
    name: "Skin Cancer Detection using Machine Learning",
    organization: "Vishwakarma Institute of Technology",
    category: "Deep Learning & AI",
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
  languages: ["Python", "SQL", "Java", "C", "TypeScript"],
  agentic_ai: [
    "LangChain",
    "Multi-Agent Orchestration",
    "Hybrid RAG",
    "LLM Fine-Tuning & Quantization",
    "Semantic Caching",
    "Model Context Protocol (MCP)",
  ],
  ml_vision: [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "YOLOv8 & YOLOv5",
    "OpenCV",
    "Scikit-learn",
    "DenseNet & CNNs",
    "Deep LSTM (Time-Series)",
    "NLP (TF-IDF, BM25)",
    "Edge Inference",
    "Roboflow",
  ],
  mlops_infra: [
    "Docker",
    "Kubernetes",
    "NVIDIA DGX / CUDA",
    "AWS / GCP",
    "CI/CD (GitHub Actions)",
    "Serverless",
    "Edge AI Deployment",
  ],
  databases_vectors: [
    "ChromaDB",
    "Redis",
    "PostgreSQL",
    "Snowflake",
    "Vector Search & Embeddings",
    "Distributed Caching",
  ],
  backend_networking: [
    "FastAPI",
    "Flask",
    "REST APIs",
    "WebRTC",
    "RTSP (go2rtc)",
    "Edge Gateways",
    "WireGuard / VPNs",
    "Folium / GIS APIs",
  ],
};

export const achievements = [
  "Runner-Up at HackMITWPU'24 for an advanced video analytics solution with Maha-Metro",
  "Published a peer-reviewed research paper in Springer Proceedings (ICTIS 2024)",
  "Patent granted for an innovative video surveillance system",
  "Led and mentored teams in hackathons and academic projects",
];

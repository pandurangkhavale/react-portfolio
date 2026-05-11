import {
  Code2, Rocket, Trophy, GraduationCap, Terminal, Sparkles, Cpu,
  Database, Scan, Zap, Globe, Shield, GitBranch, Vote
} from "lucide-react";

export const HERO = {
  name: "Pandurang",
  surname: "Khavale",
  tagline: "Machine Learning Enthusiast & AI Systems Architect",
  description: "Pioneering the next generation of Intelligent Systems. Specializing in high-performance Machine Learning architectures and Generative AI deployment.",
  status: "AI Engineer & Machine Learning Specialist"
};

export const WORDS = [
  "Machine Learning Enthusiast.",
  "Generative AI Explorer.",
  "Full-Stack Developer.",
  "Computer Science & Business Systems Student.",
];

export const STATS = [
  { n: 1, s: "+", label: "Years of Engineering", icon: <Code2 size={32} className="gc" /> },
  { n: 4, s: "+", label: "Production Projects", icon: <Rocket size={32} className="ga" /> },
  { n: 5, s: "", label: "Specialized Certs", icon: <Trophy size={32} style={{ color: "var(--purple)" }} /> },
  { n: 93, s: "%", label: "Academic Excellence", icon: <GraduationCap size={32} style={{ color: "var(--pink)" }} /> },
];

export const SKILLS = [
  { name: "Python", ic: <Terminal size={18} />, pct: 85, desc: "Building robust ML pipelines, automation scripts, and RAG architectures with LangChain and Vector DBs." },
  { name: "Generative AI", ic: <Sparkles size={18} />, pct: 75, desc: "Developing LLM-based applications, prompt engineering, and fine-tuning strategies for enterprise solutions." },
  { name: "Machine Learning", ic: <Cpu size={18} />, pct: 80, desc: "Expertise in Scikit-learn, PyTorch, and TensorFlow for predictive modeling and deep learning tasks." },
  { name: "SQL & DBs", ic: <Database size={18} />, pct: 78, desc: "Designing optimized schemas in MySQL and managing high-performance vector databases for AI retrieval." },
  { name: "Computer Vision", ic: <Scan size={18} />, pct: 88, desc: "Implementing real-time object detection (YOLOv8-v11) and image analysis with OpenCV and PyTorch." },
  { name: "Modern Web", ic: <Zap size={18} />, pct: 72, desc: "Building reactive frontend architectures with ReactJS, focusing on performance and modern design patterns." },
  { name: "DevOps & Tools", ic: <GitBranch size={18} />, pct: 74, desc: "Version control with Git, containerization basics, and collaborative workflows in VS Code and Linux." },
  { name: "Core Engineering", ic: <Globe size={18} />, pct: 82, desc: "Solid foundation in Algorithms, Data Structures, and Computer Science principles for scalable software." },
];

export const TECH = ["Python", "SQL", "JavaScript", "ReactJS", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "PyTorch", "TensorFlow", "LangChain", "Vector DBs", "YOLOv11", "OpenCV", "Git", "GitHub", "MySQL", "VS Code"];

export const PROJECTS = [
  {
    title: "Surface Defect Detection",
    sub: "Computer Vision · Neural Networks",
    desc: "A professional manufacturing QA system replacing manual inspection. Custom-trained YOLOv11 achieves 89.8% detection accuracy with 66 FPS real-time inference on surface anomalies.",
    tags: ["YOLOv11", "OpenCV", "Python", "Deep Learning"],
    gh: "#", live: null, accent: "var(--cyan)", icon: <Scan size={32} />,
  },
  {
    title: "Portfolio",
    sub: "Modern Web · Design Systems",
    desc: "A high-performance portfolio featuring glassmorphism, dynamic animations, and a custom design system. Built with React and optimized for modern browsers.",
    tags: ["React", "CSS3", "Design Systems"],
    gh: "https://github.com/PandurangKhavale/Portfolio",
    live: "https://pandurangkhavale.github.io/Portfolio/",
    accent: "var(--amber)", icon: <Globe size={32} />,
  },
  {
    title: "VoteSaathi",
    sub: "AI Civic Tech · Election Assistance Platform",
    desc: "A modern AI-powered election assistant focused on voter education and civic engagement. Features a hybrid AI chatbot with Gemini 1.5 Flash integration, interactive civic quizzes, voter guides, fact-checking resources, and a premium glassmorphism interface with dark mode support.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Gemini API",
      "Context API",
      "Civic Tech"
    ],
    gh: "https://github.com/PandurangKhavale/VoteSaathi",
    live: "https://vote-saathi.vercel.app/",
    accent: "var(--cyan)",
    icon: <Vote size={32} />,
  },
];

export const WORK = [
  {
    yr: "Jan 2026 — Now",
    role: "Machine Learning Intern",
    org: "Volazi eConsulting Pvt. Ltd.",
    desc: "Architecting Generative AI applications using RAG pipelines, LangChain, and vector databases. Executing end-to-end ML workflows including feature engineering with Pandas/NumPy and model optimization via hyperparameter tuning.",
    tags: ["Generative AI", "LLMs", "RAG", "Scikit-Learn", "LangChain"],
    c: "var(--purple)"
  },
];

export const EDUCATION = [
  { yr: "2022 — Now", role: "B.Tech in CS & Business Systems", org: "KIT's College of Engineering (Autonomous)", desc: "Deepening expertise in algorithms, data structures, and business systems. Active hackathon participant and technical innovator.", stats: "GPA: 7.01 | 65.01%", tags: ["CSBS", "Core CS"], c: "var(--cyan)" },
  { yr: "2020–21", role: "HSC (Science) · 93.00%", org: "K.D. Junior College Parawa", desc: "Achieved academic excellence in the science stream, building a strong mathematical foundation for engineering.", stats: "Distinction", tags: ["Science", "Math"], c: "var(--amber)" },
  { yr: "2018–19", role: "SSC · 88.60%", org: "Bhartiya Bal Vidhya Mandir", desc: "Graduated with distinction, demonstrating early aptitude for technical and analytical subjects.", stats: "Distinction", tags: ["SSC"], c: "var(--purple)" },
];

export const CERTS = [
  { yr: "Apr 2026", role: "OCI AI Foundations Associate", org: "Oracle", desc: "Certified expertise in Oracle Cloud Infrastructure AI services and machine learning integration.", icon: <Shield size={24} />, c: "var(--cyan)", l: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7222CB2D20567E400954CFC361A93D5BD007FF909A790664DC8CE2873E234B7B" },
  { yr: "Oct 2025", role: "Google AI Essentials", org: "Coursera × Google", desc: "Mastery of generative AI foundations, prompt engineering, and ethical implementation.", icon: <Sparkles size={24} />, c: "var(--amber)", l: "https://www.coursera.org/account/accomplishments/verify/2PV9HGU0JO3Q?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
  { yr: "Aug 2025", role: "Adobe India Hackathon", org: "Adobe India", desc: "Successfully competed in a 48-hour national-level hackathon, building rapid prototypes.", icon: <Trophy size={24} />, c: "var(--cyan)", l: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/9c549726-3577-491d-9f0f-a1e8f707ccbd.jpg" },
];

export const BLOG = [
  { t: "Real-Time Surface Defect Detection: My YOLOv11 Journey", cat: "AI / ML", min: "8 min", date: "Dec 2025", sub: "Training custom YOLOv11 on manufacturing datasets and deploying real-time defect detection pipelines from scratch." },
  { t: "My Generative AI Journey: From APIs to Prompt Engineering", cat: "Generative AI", min: "6 min", date: "Nov 2025", sub: "How Google's AI Essentials course reshaped how I think about building with large language models." },
  { t: "DevOps for Students: Lightweight CI/CD for ML Projects", cat: "DevOps", min: "5 min", date: "Oct 2025", sub: "Setting up GitHub Actions to automate testing and deployment of ML experiments — without a cloud bill." },
];

export const SHOW_TIMELINE = true;

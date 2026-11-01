/**
 * Professional Training & Education Configuration
 * Chala Jima — INSA 2026 Summer Camp & Jimma University
 */

export const insaTrainingData = {
  organization: "Information Network Security Administration (INSA), Ethiopia",
  shortOrg: "INSA, Ethiopia",
  program: "INSA 2026 Summer Camp",
  position: "Cybersecurity Trainee",
  year: "2026",
  area: "Cybersecurity and Information Security",
  status: "Active / Scheduled Trainee (2026)",
  description: "INSA 2026 Summer Camp Cybersecurity Trainee, developing knowledge and practical understanding of cybersecurity and information security through professional training and learning.",
  highlights: [
    "Specialized intensive cybersecurity training under Ethiopia's national cyber authority (INSA)",
    "Hands-on immersion in defensive security postures, network defense, and practical security methodologies",
    "Collaboration with peers and professionals passionate about safeguarding digital infrastructure",
    "Rigorous learning curriculum focused on practical understanding of information security"
  ],
  focusAreas: [
    { title: "Defensive Principles", desc: "Understanding critical infrastructure defense, network segmentation, and secure architecture principles." },
    { title: "Threat & Vulnerability Analysis", desc: "Analyzing cyber threat vectors, common software vulnerabilities, and mitigation techniques." },
    { title: "Security Operations", desc: "Practical orientation towards incident detection, defensive monitoring, and response coordination." }
  ],
  disclosure: "Official professional training program with INSA, Ethiopia. Recorded as professional cybersecurity training and education (not commercial employment or completed certification)."
};

export const educationData = {
  institution: "Jimma University",
  degree: "Bachelor of Science in Computer Science",
  stage: "Third Year Undergraduate Student",
  status: "Currently Enrolled (Active)",
  location: "Jimma, Oromia Region, Ethiopia",
  description: "Pursuing bachelor-level Computer Science studies at Jimma University, building strong foundations in computing theory, algorithms, database systems, networking, and software engineering.",
  coreCoursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming (Java & C++)",
    "Computer Networks & Data Communications",
    "Operating Systems & Computer Architecture",
    "Software Engineering Methodologies",
    "Web Application Development",
    "Discrete Mathematics & Logic"
  ],
  futureMilestonesNote: "As a third-year student, I am focused on applying my skills through practical engineering, security research, upcoming internship opportunities, and industry certifications.",
  targetCertifications: [
    {
      title: "CompTIA Security+",
      status: "In Active Preparation",
      area: "Information Security Fundamentals",
      note: "Studying core security domains, threat management, cryptography, and network defense."
    },
    {
      title: "Practical CTF & Security Labs",
      status: "Ongoing Hands-on Practice",
      area: "Application & Network Security",
      note: "Continuous challenge solving on TryHackMe and curated cybersecurity lab platforms."
    },
    {
      title: "Cloud & DevSecOps Fundamentals",
      status: "Targeted Milestone",
      area: "Cloud Infrastructure Security",
      note: "Planned study of secure containerization, API gateways, and cloud security basics."
    }
  ]
};

export const learningJourney = [
  {
    phase: "Phase 1",
    title: "Computer Science Foundations",
    period: "Year 1",
    status: "Completed",
    iconName: "Binary",
    description: "Built rigorous theoretical foundations in discrete mathematics, Boolean logic, problem-solving methodologies, and computing architecture fundamentals at Jimma University.",
    deliverables: ["Discrete logic", "Basic computer organization", "Algorithmic thinking"]
  },
  {
    phase: "Phase 2",
    title: "Core Programming: C++ & Java",
    period: "Year 1 - Year 2",
    status: "Completed",
    iconName: "Code",
    description: "Developed strong object-oriented programming principles, memory management concepts in C++, and modular class architectures in Java.",
    deliverables: ["C++ memory & pointers", "Java OOP principles", "Command-line applications"]
  },
  {
    phase: "Phase 3",
    title: "Data Structures & Algorithms",
    period: "Year 2",
    status: "Completed",
    iconName: "Boxes",
    description: "Studied linear and non-linear data structures (arrays, linked lists, stacks, queues, trees, graphs) and Big-O computational complexity analysis.",
    deliverables: ["Algorithm efficiency", "Sorting & searching", "Graph traversal"]
  },
  {
    phase: "Phase 4",
    title: "Database Management Systems",
    period: "Year 2",
    status: "Completed",
    iconName: "Database",
    description: "Mastered relational modeling, ER diagrams, schema normalization (1NF through 3NF), transaction ACID properties, and structured SQL querying.",
    deliverables: ["SQL queries & joins", "Schema design", "Relational integrity"]
  },
  {
    phase: "Phase 5",
    title: "Frontend Development Fundamentals",
    period: "Year 2 - Year 3",
    status: "Completed",
    iconName: "Layout",
    description: "Acquired modern web development skills using semantic HTML5, responsive CSS3, and modern ES6+ JavaScript for interactive user interfaces.",
    deliverables: ["Responsive design", "DOM manipulation", "Visit Jimma showcase concept"]
  },
  {
    phase: "Phase 6",
    title: "Backend Development with Node.js & Express",
    period: "Year 3 (Current)",
    status: "In Progress",
    iconName: "Server",
    description: "Building scalable server-side RESTful architectures, routing pipelines, custom middleware chains, and PostgreSQL database integration.",
    deliverables: ["REST API architecture", "Middleware chains", "Authentication handling"]
  },
  {
    phase: "Phase 7",
    title: "API Security & SecureAPI Guard",
    period: "Year 3 (Current)",
    status: "Completed",
    iconName: "ShieldAlert",
    description: "Deepened practical security understanding by engineering SecureAPI Guard—enforcing rate limits, Helmet security headers, and heuristic threat pattern screening.",
    deliverables: ["SecureAPI Guard gateway", "Rate limiting controls", "Injection screening"]
  },
  {
    phase: "Phase 8",
    title: "Intrusion Detection Systems & MiniIDS",
    period: "Year 3 (Current)",
    status: "Completed",
    iconName: "ShieldCheck",
    description: "Built MiniIDS in C++ to analyze authentication logs, detect brute-force login attempts, cross-reference IP blacklists, and generate structured security alerts.",
    deliverables: ["MiniIDS tool", "Auth log auditing", "C++ STL file parser"]
  },
  {
    phase: "Phase 9",
    title: "INSA 2026 Summer Camp — Cybersecurity",
    period: "2026",
    status: "In Progress",
    iconName: "Award",
    description: "Selected as a Cybersecurity Trainee for the INSA 2026 Summer Camp, advancing practical understanding of cybersecurity, defense architectures, and information security.",
    deliverables: ["INSA professional training", "Information security immersion", "Defensive lab exercises"]
  },
  {
    phase: "Phase 10",
    title: "Python & Data Analytics Path",
    period: "Year 3 (Current)",
    status: "In Progress",
    iconName: "LineChart",
    description: "Developing practical data analytics skills with Python, Pandas, NumPy, SQL, exploratory data analysis workflows, and visual reporting.",
    deliverables: ["Pandas data cleaning", "Exploratory analysis scripts", "Matplotlib visual charts"]
  }
];

export const learningRoadmap = [
  {
    track: "Cybersecurity & Information Security Track",
    iconName: "Shield",
    color: "#00f0ff",
    items: [
      { name: "Networking Fundamentals & Protocol Analysis", status: "Learning" },
      { name: "Linux & Kali Linux System Administration", status: "Learning" },
      { name: "Web Application Security (OWASP Top 10)", status: "Learning" },
      { name: "API Security & Threat Mitigation", status: "Learning" },
      { name: "Log Analysis & Intrusion Detection (MiniIDS)", status: "Learning" },
      { name: "Vulnerability Assessment & Scanning", status: "Learning" },
      { name: "Penetration Testing Fundamentals", status: "Learning" },
      { name: "Digital Forensics & Incident Response", status: "Planned" },
      { name: "TryHackMe & Practical CTF Challenges", status: "Learning" }
    ]
  },
  {
    track: "Full-Stack Development Track",
    iconName: "Layers",
    color: "#3b82f6",
    items: [
      { name: "Modern JavaScript (ES6+, Async, Promises)", status: "Learning" },
      { name: "React Component Architecture & Hooks", status: "Learning" },
      { name: "Node.js & Express RESTful Server Engineering", status: "Learning" },
      { name: "PostgreSQL Relational Modeling & Indexing", status: "Learning" },
      { name: "Authentication (JWT, Sessions, Cookies)", status: "Learning" },
      { name: "API Security Middleware & Rate Limiting", status: "Learning" },
      { name: "Docker Containerization Fundamentals", status: "Planned" },
      { name: "CI/CD & Cloud Deployment Pipelines", status: "Planned" }
    ]
  },
  {
    track: "Python & Data Analytics Track",
    iconName: "PieChart",
    color: "#10b981",
    items: [
      { name: "Python for Data Analysis & Automation", status: "Learning" },
      { name: "NumPy & Pandas Data Manipulation", status: "Learning" },
      { name: "Advanced SQL Queries & Analytics Functions", status: "Learning" },
      { name: "Data Cleaning & Preprocessing Workflows", status: "Learning" },
      { name: "Exploratory Data Analysis (EDA) Techniques", status: "Learning" },
      { name: "Matplotlib & Data Visualization Best Practices", status: "Learning" },
      { name: "Power BI Interactive Dashboards", status: "Learning" },
      { name: "Statistical Thinking & Data Interpretation", status: "Learning" }
    ]
  },
  {
    track: "Computer Science Foundations Track",
    iconName: "Terminal",
    color: "#a855f7",
    items: [
      { name: "Data Structures (Trees, Graphs, Hash Tables)", status: "Learning" },
      { name: "Algorithm Analysis & Dynamic Programming", status: "Learning" },
      { name: "Operating Systems (Processes, Concurrency, Memory)", status: "Learning" },
      { name: "Computer Networks (Routing, TCP/IP, Sockets)", status: "Learning" },
      { name: "Software Engineering & Clean Architecture", status: "Learning" },
      { name: "Problem Solving & Algorithmic Practice", status: "Learning" }
    ]
  }
];

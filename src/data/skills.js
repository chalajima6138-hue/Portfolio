/**
 * Professional Technical Skills Data
 * Categorized into 4 domains with honest, verifiable proficiency levels.
 * Labels: Studied | Beginner | Practicing | Project Experience | Currently Learning
 */

export const skillCategories = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & Information Security",
    iconName: "ShieldCheck",
    badge: "Primary Professional Direction",
    description: "Focusing on defensive security principles, application and API protection, vulnerability testing, and security log analysis.",
    highlights: [
      "SecureAPI Guard: Educational API security gateway featuring rate limiting, heuristic threat detection & security headers",
      "MiniIDS: C++ authentication log parser and brute-force detection tool",
      "INSA 2026 Summer Camp: Specialized cybersecurity training with the Information Network Security Administration"
    ],
    skills: [
      { name: "Cybersecurity Fundamentals", level: "Practicing", context: "Core confidentiality, integrity, availability (CIA) principles & defensive hygiene" },
      { name: "Information Security", level: "Practicing", context: "Data governance, risk awareness, and asset security concepts" },
      { name: "Network Security Fundamentals", level: "Practicing", context: "TCP/IP models, packet filtering, firewall concepts, and protocols" },
      { name: "Web Application Security", level: "Practicing", context: "Defensive countermeasures against common web application vulnerabilities" },
      { name: "SQL Injection & XSS Defense", level: "Practicing", context: "Parameterized queries, input sanitization, and output escaping" },
      { name: "API Security", level: "Project Experience", context: "Implemented in SecureAPI Guard with token validation, rate limits & header controls" },
      { name: "Authentication & Authorization", level: "Project Experience", context: "Session handling, token mechanisms, and role-based access control" },
      { name: "Cookies, Sessions & Tokens", level: "Practicing", context: "Secure flag, HttpOnly, SameSite attributes, and stateless token life cycles" },
      { name: "Penetration Testing Fundamentals", level: "Beginner", context: "Reconnaissance methods, security lab practice, and structured testing" },
      { name: "Vulnerability Assessment", level: "Practicing", context: "Identifying software weaknesses, configuration flaws, and security checks" },
      { name: "Security Monitoring & Log Analysis", level: "Project Experience", context: "Implemented in MiniIDS for tracking anomalous patterns and auth bursts" },
      { name: "Intrusion Detection Fundamentals", level: "Project Experience", context: "Rule-based and heuristic anomaly detection implemented in C++ MiniIDS" },
      { name: "Digital Forensics Fundamentals", level: "Currently Learning", context: "Artifact identification, evidence integrity, and investigative processes" },
      { name: "Incident Response Fundamentals", level: "Currently Learning", context: "Incident handling lifecycle, triage, containment, and reporting concepts" },
      { name: "OWASP Top 10", level: "Practicing", context: "Mitigation strategies for prevalent application security threats" },
      { name: "Linux & Kali Linux", level: "Currently Learning", context: "Command-line navigation, system administration, and security tooling" },
      { name: "CTF & Security Lab Practice", level: "Practicing", context: "Hands-on challenge platforms and guided security testing labs" }
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    iconName: "Code2",
    badge: "Engineering Core",
    description: "Building responsive, modern frontend interfaces and structured backend RESTful services with relational databases.",
    highlights: [
      "RESTful API design and middleware pipelines using Node.js & Express",
      "Relational schema modeling and structured SQL querying with PostgreSQL",
      "Modern semantic web architectures and responsive user interfaces"
    ],
    skills: [
      { name: "HTML5", level: "Practicing", context: "Semantic document structure, accessibility standards, and SEO layout" },
      { name: "CSS3", level: "Practicing", context: "Modern Flexbox, CSS Grid, media queries, animations, and custom styling" },
      { name: "JavaScript (ES6+)", level: "Practicing", context: "Asynchronous programming, promises, DOM manipulation, and modern syntax" },
      { name: "Responsive Web Design", level: "Practicing", context: "Fluid mobile-first layouts adaptable across mobile, tablet, and desktop" },
      { name: "UI/UX Fundamentals", level: "Practicing", context: "User-centered visual hierarchy, contrast ratios, and intuitive interaction design" },
      { name: "Node.js", level: "Project Experience", context: "Server runtime environment powering the SecureAPI Guard gateway" },
      { name: "Express.js", level: "Project Experience", context: "Custom middleware chains, route handlers, error management, and security wrappers" },
      { name: "REST API Development", level: "Project Experience", context: "Standardized endpoints, HTTP status codes, JSON payload communication" },
      { name: "Middleware & Request Pipelines", level: "Project Experience", context: "Request screening, header injection, logging, and rate limiting" },
      { name: "API Testing", level: "Project Experience", context: "Functional endpoint testing, payload validation, and simulated attack testing" },
      { name: "PostgreSQL", level: "Practicing", context: "Relational database schema creation, constraints, foreign keys, and indexes" },
      { name: "SQL", level: "Practicing", context: "CRUD operations, joins, aggregations, subqueries, and data normalization" },
      { name: "Database Design Fundamentals", level: "Practicing", context: "Entity-Relationship (ER) modeling and 3NF database normalization" },
      { name: "Visual Studio Code", level: "Practicing", context: "Primary development environment with debugging and linting workflows" },
      { name: "Google Antigravity", level: "Practicing", context: "Advanced agentic development, pair programming, and automated task execution" },
      { name: "Git & GitHub", level: "Practicing", context: "Version control, commit history, branch management, and repository collaboration" },
      { name: "npm", level: "Practicing", context: "Package management, dependency resolution, and script automation" }
    ]
  },
  {
    id: "data",
    title: "Python & Data Analytics",
    iconName: "BarChart3",
    badge: "Analytical Direction",
    description: "Positioned as an additional professional development direction: extracting insights through data cleaning, EDA, and visual reporting.",
    highlights: [
      "Data manipulation and cleaning using Python, Pandas, and NumPy",
      "Exploratory data analysis (EDA) and pattern interpretation",
      "Interactive reporting concepts and visualization with Matplotlib & Power BI"
    ],
    skills: [
      { name: "Python Programming", level: "Practicing", context: "Core syntax, data structures, automation scripts, and analytical workflows" },
      { name: "SQL for Analytics", level: "Practicing", context: "Data filtering, group aggregations, window functions, and analytics queries" },
      { name: "Microsoft Excel", level: "Practicing", context: "Formulas, data sorting, pivot tables, and tabular summaries" },
      { name: "Data Cleaning", level: "Practicing", context: "Handling missing values, outlier detection, data type casting, and deduplication" },
      { name: "Exploratory Data Analysis (EDA)", level: "Practicing", context: "Discovering distribution patterns, correlations, and dataset summaries" },
      { name: "Pandas", level: "Practicing", context: "DataFrame indexing, transformations, grouping, merging, and data reshaping" },
      { name: "NumPy", level: "Practicing", context: "Array operations, vectorization, and numerical calculations" },
      { name: "Matplotlib", level: "Practicing", context: "Data visualization: line charts, bar plots, scatter plots, and histograms" },
      { name: "Power BI", level: "Beginner", context: "Dashboard design concepts, KPI cards, and visual metric reporting" },
      { name: "Data Visualization", level: "Practicing", context: "Designing clear charts with appropriate scales, legends, and readability" },
      { name: "Statistical Analysis", level: "Studied", context: "Descriptive statistics, mean/median distributions, variance, and probability" },
      { name: "Data Interpretation", level: "Practicing", context: "Translating quantitative observations into meaningful problem-solving insights" }
    ]
  },
  {
    id: "computerscience",
    title: "Computer Science & Programming Foundations",
    iconName: "Cpu",
    badge: "Theoretical Grounding",
    description: "A concise overview of fundamental computing principles underpinning robust, scalable software engineering.",
    highlights: [
      "Object-oriented design and systems programming in C++ and Java",
      "Algorithmic complexity, data structures, and computer architecture",
      "Database systems, computer networks, and structured software methodologies"
    ],
    skills: [
      { name: "C++ Programming", level: "Project Experience", context: "Systems programming, STL containers, file I/O, used in building MiniIDS" },
      { name: "Java Programming", level: "Practicing", context: "Object-oriented design, class hierarchies, interfaces, and algorithms" },
      { name: "Object-Oriented Programming (OOP)", level: "Practicing", context: "Encapsulation, inheritance, polymorphism, and abstraction principles" },
      { name: "Data Structures & Algorithms", level: "Practicing", context: "Arrays, linked lists, stacks, queues, trees, searching, sorting, and Big-O" },
      { name: "Database Management Systems (DBMS)", level: "Practicing", context: "Relational models, ACID transactions, concurrency, and indexing" },
      { name: "Computer Networks", level: "Studied", context: "OSI 7 layers, TCP/IP stack, DNS, HTTP/HTTPS, and routing fundamentals" },
      { name: "Software Engineering", level: "Practicing", context: "Software development lifecycle (SDLC), modular architecture, and testing" },
      { name: "Operating Systems & Architecture", level: "Studied", context: "Process management, memory paging, file systems, and CPU scheduling" },
      { name: "Problem-Solving & Logical Thinking", level: "Practicing", context: "Structured decomposition of complex technical and computational challenges" }
    ]
  }
];

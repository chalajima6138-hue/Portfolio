/**
 * Projects Data Configuration
 * Chala Jima — Verified Projects, Architecture & Statuses
 */

export const projects = [
  {
    id: "secureapi-guard",
    title: "SecureAPI Guard",
    subtitle: "Educational API Security Gateway",
    badge: "Featured Security Project",
    category: "Cybersecurity",
    status: "Completed Educational Project",
    statusType: "completed",
    technologies: ["Node.js", "Express.js", "JavaScript", "Helmet", "Express Rate Limit"],
    shortDescription: "An educational API security gateway developed using Node.js and Express to demonstrate API protection, request monitoring, and basic threat detection.",
    overview: "SecureAPI Guard is an educational API security gateway developed to investigate and demonstrate how proactive application-layer security controls can safeguard REST endpoints before incoming traffic reaches internal business logic. It operates as an intermediary defensive layer that inspects, throttles, and logs traffic.",
    architecture: "Middleware reverse-proxy pipeline architecture. Incoming HTTP requests pass sequentially through HTTP response header fortification (Helmet), client-based rate limiting (Express Rate Limit), heuristic request inspection screening for signature patterns, and structured event logging before delegating to downstream mock routes.",
    features: [
      "API Security Controls: Centralized defensive middleware enforcing access parameters and sanitization rules",
      "Request Monitoring: Continuous inspection and structured recording of incoming client traffic parameters",
      "Heuristic-Based Threat Detection: Pattern-screening logic checking query parameters and body payloads for SQL injection and XSS markers",
      "Rate Limiting: Dynamic threshold throttling to mitigate brute-force attempts and burst request flooding",
      "Security Headers: HTTP header hardening via Helmet (Strict-Transport-Security, X-Frame-Options, Content-Security-Policy)",
      "Request Identification: Unique tracking identifiers assigned to requests for traceability and auditing",
      "Automated Testing: Scripted test suite validating normal API traffic against synthetic injection vectors",
      "Interactive Dashboard Concept: Visual interface displaying simulated traffic metrics, blocked attempts, and alert counts"
    ],
    testingResults: "Simulated stress and boundary testing confirmed that burst requests exceeding configured thresholds correctly receive HTTP 429 (Too Many Requests). Heuristic screening successfully identified synthetic injection payloads and produced structured alert logs without application crashes.",
    limitations: "Engineered strictly for educational and demonstration purposes. Threat detection relies on heuristic pattern matching rather than a production-grade Web Application Firewall (WAF) or machine-learning detection engine. Uses local memory storage rather than distributed caching.",
    githubUrl: null,
    isConfidential: false
  },
  {
    id: "mini-ids",
    title: "MiniIDS",
    subtitle: "C++ Educational Intrusion Detection Project",
    badge: "C++ Systems Project",
    category: "Cybersecurity",
    status: "Completed Educational Project",
    statusType: "completed",
    technologies: ["C++", "STL", "Log Analysis", "File Handling", "Pattern Matching"],
    shortDescription: "A C++ educational intrusion detection project focused on analyzing authentication logs and identifying suspicious activity.",
    overview: "MiniIDS is a systems-level educational project designed to explore host-based security monitoring through log parsing and pattern analysis. Written in standard C++, it demonstrates how raw authentication records can be processed to uncover anomalous security events.",
    architecture: "Modular log processing pipeline consisting of a file stream reader, timestamped log entry tokenizer, rule-based threat evaluation engine (blacklist matching and burst frequency tracking), and an alert notification reporter.",
    features: [
      "Authentication Log Analysis: Parses standard Linux auth.log style records, extracting timestamps, service tags, and host IPs",
      "Suspicious Activity Detection: Detects brute-force authentication sequences by tracking failed attempt frequency per source IP",
      "Blacklist Management: Cross-references connecting source addresses against a configurable hostile IP registry",
      "Alert Generation: Generates prioritized alerts highlighting threat severity, offending IP, and triggered rule criteria",
      "File Handling: Efficient file stream operations using native C++ STL with zero external library dependencies"
    ],
    testingResults: "Evaluated using synthetic log datasets simulating repeated failed SSH logins and blacklisted IP connections. The parser consistently flagged simulated brute-force sequences and produced accurate console alerts with sub-second execution.",
    limitations: "Functions as an offline, post-event log analyzer. Does not perform real-time kernel packet inspection or live socket sniffing.",
    githubUrl: null,
    isConfidential: false
  },
  {
    id: "proof-startup",
    title: "PROOF – Prove Your Skills",
    subtitle: "Confidential Startup Concept",
    badge: "Confidential Startup Concept",
    category: "Full-Stack",
    status: "In Active Development",
    statusType: "confidential",
    technologies: ["Confidential"],
    shortDescription: "This project is private; further information is not shared publicly.",
    overview: "Project details are confidential and are not shared publicly.",
    architecture: "Project details are confidential and are not shared publicly.",
    features: [],
    testingResults: "Project details are confidential and are not shared publicly.",
    limitations: "Project details are confidential and are not shared publicly.",
    githubUrl: null,
    isConfidential: true
  },
  {
    id: "del-fre-system",
    title: "DEL FRE School Student Registration System",
    subtitle: "School Administration Workflow Concept",
    badge: "Concept / In Progress",
    category: "Full-Stack",
    status: "Concept / Work in Progress",
    statusType: "concept",
    technologies: ["Web Technologies", "Relational Database Design", "Systems Analysis"],
    shortDescription: "A school student registration system concept focused on organizing student registration information and administrative records.",
    overview: "Designed as an academic and community-oriented software project, this system addresses the challenges faced by educational institutions relying on manual, paper-based registration. It provides a structured data model to streamline student record persistence.",
    architecture: "Three-tier architecture concept consisting of a responsive administrative user interface, a centralized API service layer, and a relational PostgreSQL database schema designed according to 3NF normalization rules.",
    features: [
      "Student demographic registration and enrollment record management",
      "Classroom, grade level, and section assignment mapping",
      "Administrative dashboard concept for student records and status overview",
      "Relational database schema designed with referential integrity and role boundaries"
    ],
    testingResults: "Entity-Relationship (ER) diagrams and initial schema prototypes validated for relational normalization and primary/foreign key consistency.",
    limitations: "Currently at the conceptual and prototype design stage; full backend integration and production deployment remain in progress.",
    githubUrl: null,
    isConfidential: false
  },
  {
    id: "visit-jimma",
    title: "Visit Jimma",
    subtitle: "Tourism & Cultural Heritage Showcase Concept",
    badge: "Concept / In Progress",
    category: "Concepts",
    status: "Concept / Work in Progress",
    statusType: "concept",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    shortDescription: "A tourism-focused web development concept designed to present Jimma's attractions, culture, and visitor information.",
    overview: "Visit Jimma is a front-end web development concept dedicated to presenting Jimma's rich historical attractions, cultural legacy, and visitor information. Jimma is celebrated for its historical kingdom, the Palace of Abba Jifar, and its renowned coffee heritage.",
    architecture: "Mobile-first, responsive static web concept utilizing semantic HTML5 markup, modern modular CSS styling, and client-side JavaScript interactions.",
    features: [
      "Showcase of Jimma's historical landmarks including the Palace of Abba Jifar and Jimma Museum",
      "Cultural presentation of Jimma's historic coffee origin, traditional ceremonies, and heritage",
      "Interactive discovery cards and visitor information guide",
      "Responsive, accessible design optimized across mobile devices and desktop screens"
    ],
    testingResults: "Layout tested for responsive behavior across viewport widths from 360px to 1920px using browser developer tools.",
    limitations: "Front-end showcase concept focused on visual layout and information presentation. Server-side booking and database persistence are future extensions.",
    githubUrl: null,
    isConfidential: false
  }
];

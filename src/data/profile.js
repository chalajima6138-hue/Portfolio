/**
 * Centralized Personal Profile & Identity Configuration
 * Chala Jima — Jimma University & INSA 2026 Summer Camp Trainee
 */

export const profile = {
  // Professional Identity
  fullName: "Chala Jima",
  preferredName: "Chala",
  headline: "Building Secure Technology. Turning Ideas Into Solutions.",
  academicLevel: "Third-Year Computer Science Student",
  university: "Jimma University",
  faculty: "Department of Computer Science",
  location: "Jimma, Ethiopia",
  
  // Professional Positioning Tags
  positioning: [
    "Computer Science Student",
    "Cybersecurity Enthusiast",
    "INSA 2026 Summer Camp Trainee",
    "Full-Stack Developer",
    "Aspiring Data Analyst"
  ],

  // Professional Biography
  bio: "I am a third-year Computer Science student at Jimma University with a strong interest in cybersecurity, software engineering, full-stack development, and data analytics. I enjoy developing practical technical skills, building useful applications, exploring security technologies, analyzing problems, and continuously improving through hands-on learning.",

  // Extended About Narrative
  aboutExtended: [
    "As a third-year Computer Science student at Jimma University, my academic journey is centered around developing solid theoretical computing foundations and translating them into tangible, secure, and practical software solutions.",
    "I have a deep interest in cybersecurity and defensive information security—investigating web and API security controls, authentication safeguards, and log auditing. Through hands-on laboratory exercises, personal projects like SecureAPI Guard and MiniIDS, and practical training, I strive to understand both system vulnerabilities and protective architectures.",
    "Alongside security, I actively develop full-stack applications with Node.js, Express, and PostgreSQL, while exploring data analytics with Python, Pandas, and SQL. I am driven by practical learning, honest engineering ethics, and a passion for creating impactful technology."
  ],

  // Real Contact Information & Channels
  contact: {
    email: "chalajima6138@gmail.com",
    githubUrl: "https://github.com/chalajima6138-hue",
    githubUsername: "chalajima6138-hue",
    linkedinUrl: "https://www.linkedin.com/in/chala-jima-011560417",
    phonePrimary: "+251961388060",
    phoneSecondary: "0714613938",
    telegramHandle: "@Natf518",
    telegramUrl: "https://t.me/Natf518"
  },

  // Profile Image Configuration (with fallback logic)
  profileImage: {
    src: "/images/profile.jpg",
    alt: "Chala Jima — Computer Science Student & Cybersecurity Enthusiast",
    initials: "CJ",
    isUploaded: false // Set to true once personal photo is uploaded into public/images/profile.jpg
  },

  // Document URLs
  cvUrl: "/cv.pdf",

  // Key Academic & Professional Highlights
  stats: [
    { label: "Academic Standing", value: "3rd Year CS", detail: "Jimma University" },
    { label: "Professional Training", value: "INSA 2026", detail: "Cybersecurity Trainee" },
    { label: "Technical Focus", value: "Cybersecurity", detail: "Web, API & Systems" },
    { label: "Hands-on Projects", value: "5 Implementations", detail: "Built & Concepts" }
  ]
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Training", href: "#training" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Education", href: "#education" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#contact" }
];

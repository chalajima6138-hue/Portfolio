# Professional Personal Portfolio | Computer Science Student

A modern, responsive, and production-quality personal portfolio website for a third-year Computer Science student at Jimma University, Ethiopia. Built with **React**, **Vite**, **Lucide Icons**, and clean modern CSS with an electric blue & dark navy cyber aesthetic.

---

## 🌟 Highlights & Features

- **Professional Identity**: Presented honestly as a 3rd-year CS student, cybersecurity enthusiast, full-stack developer, and aspiring data analyst.
- **Defensive Cyber Aesthetic**: Deep navy and charcoal backgrounds (`#070b14`), electric blue (`#00f0ff`) and cyan accents, subtle glassmorphism, and a lightweight interactive cyber particle canvas.
- **Honest Proficiency Standards**: No invented percentages or inflated claims. Skills are transparently labeled as *Learning*, *Beginner*, *Practicing*, or *Project Experience*.
- **Deep-Dive Project Architecture**: Modal breakdown for projects (such as **SecureAPI Guard** and **MiniIDS**), showcasing system architectures, test results, and engineering limitations.
- **Confidentiality Respect**: The private startup project (**PROOF – Prove Your Skills**) is protected without exposing proprietary code or architecture.
- **Real Working CV Download**: Pre-configured with a downloadable, formatted CV (`public/cv.pdf`).
- **Interactive Timeline & Roadmap**: Chronological Learning Journey and 4-track Professional Development Roadmap with clear *Learning* and *Planned* milestones.
- **Client-Validated Contact Form**: Real-time validation for name, email, subject, and message, plus one-click email copy action.
- **Accessibility & Performance**: Keyboard navigation, ARIA attributes, and automatic `@media (prefers-reduced-motion: reduce)` compliance.

---

## 📁 Project Architecture

```
portfolio/
├── index.html                   # HTML entry point with SEO metadata
├── vite.config.js               # Vite configuration (port 3000)
├── package.json                 # Dependencies (React 18, Vite 5, Lucide React)
├── public/
│   ├── shield.svg               # Cyber shield favicon
│   └── cv.pdf                   # Downloadable CV file
└── src/
    ├── main.jsx                 # React root entry
    ├── App.jsx                  # Main application structure
    ├── data/
    │   └── portfolioData.js     # Central content & configuration file
    ├── styles/
    │   └── index.css            # Dark theme, cyber styles, glassmorphism
    └── components/
        ├── CyberBackground.jsx  # Interactive background canvas (reduced-motion safe)
        ├── Navbar.jsx           # Fixed navigation header with mobile drawer
        ├── Hero.jsx             # Hero section with headline, CTA, and stats
        ├── About.jsx            # Academic background at Jimma University & pillars
        ├── Skills.jsx           # Categorized skills with tabs, search, and badges
        ├── Projects.jsx         # Filterable project showcase
        ├── ProjectModal.jsx     # Deep-dive architecture & limitations modal
        ├── LearningJourney.jsx  # 10-step visual timeline
        ├── EducationExperience.jsx # Jimma University & future milestones
        ├── LearningRoadmap.jsx  # 4-track future development roadmap
        ├── Contact.jsx          # Contact info and validated message form
        ├── Footer.jsx           # Navigation, social links, dynamic year
        └── Icons.jsx            # Crisp vector GitHub & LinkedIn icons
```

---

## 🛠️ How to Customize Your Content

All website content is centralized in **`src/data/portfolioData.js`**. You don't need to dig through component code to update your info:

1. **Your Name & Links**:
   Open `src/data/portfolioData.js` and edit `personalInfo`:
   ```javascript
   export const personalInfo = {
     name: "Your Full Name",
     role: "Computer Science Student",
     institution: "Jimma University, Ethiopia",
     socialLinks: {
       github: "https://github.com/your-username",
       linkedin: "https://linkedin.com/in/your-username",
       email: "your.name@example.com"
     }
     // ...
   };
   ```

2. **Your Real CV (PDF)**:
   Drop your updated CV file into `public/cv.pdf`. The "Download CV" buttons in the navigation bar, hero section, and mobile drawer will immediately serve your updated file.

3. **Projects & Repositories**:
   Update repository URLs, screenshots, and descriptions inside `projects` in `src/data/portfolioData.js`.

---

## 🚀 Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:3000/`.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready assets will be generated in the `dist/` directory.

4. **Preview the Production Build Locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Free Deployment Options

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. Framework Preset will automatically detect **Vite**.
4. Click **Deploy**.

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and click **Add new site** > **Import an existing project**.
2. Select your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

### Option 3: GitHub Pages
1. In `vite.config.js`, set `base: '/portfolio/'` (matching your repository name).
2. Run `npm run build`.
3. Deploy the `dist` folder to GitHub Pages using the `gh-pages` package or GitHub Actions.

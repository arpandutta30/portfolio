# 💼 Arpan Dutta — Personal Developer Portfolio

<div align="center">

[![Deploy to GitHub Pages](https://github.com/arpandutta30/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/arpandutta30/portfolio/actions/workflows/deploy.yml)
[![Live Website](https://img.shields.io/badge/Live_Demo-GitHub_Pages-0b1120?style=flat-square&logo=github&logoColor=white)](https://arpandutta30.github.io/portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](#license)

**A clean, minimal, responsive, and lightweight personal engineering portfolio website.**  
Showcasing my background as a Computer Science & Engineering undergraduate, technical competencies, hackathon achievements, and software projects.

[🌐 View Live Site](https://arpandutta30.github.io/portfolio/) • [📄 Download Resume](assets/docs/resume.pdf) • [💬 Get in Touch](https://arpandutta30.github.io/portfolio/#contact) • [Report Issue](https://github.com/arpandutta30/portfolio/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Key Features](#key-features)
- [Site Architecture](#site-architecture)
- [Featured Projects](#featured-projects)
- [Hackathon Achievements](#hackathon-achievements)
- [Technical Skills](#technical-skills)
- [Dual-Theme Design System](#dual-theme-design-system)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Contact & Connect](#contact-connect)
- [License](#license)

---

## Overview

This repository hosts the source code for my personal developer portfolio, engineered to provide a fast-loading, accessible, and distraction-free overview of my technical profile. 

Built strictly with native web technologies—**HTML5**, **CSS3**, and **vanilla modern JavaScript (ES6+)**—the site requires zero runtime dependencies, package managers, or bundlers, guaranteeing near-instant load times and 100% standard compliance across modern desktop and mobile browsers.

---

## Live Demo

The website is continuously deployed and served via **GitHub Pages**:

👉 **[https://arpandutta30.github.io/portfolio/](https://arpandutta30.github.io/portfolio/)**

---

## Key Features

- **High Performance & Zero Dependencies:** Pure vanilla client stack with no heavy frameworks, virtual DOMs, or build tools.
- **Dual-Theme System:**
  - **Dark Navy Mode (Default):** Midnight navy canvas (`#0b1120`), slate navy surface cards (`#131d31`), and sky-blue accents (`#38bdf8`).
  - **Warm Cream Light Mode:** Soft editorial cream background (`#F7F5EF`), crisp white cards (`#FFFFFF`), and deep charcoal typography (`#252525`).
  - **Zero-Flash Rendering:** Inline pre-render logic reads `localStorage` before paint to eliminate layout shifts or flashing.
- **5-Section Architecture:** Focused single-page navigation covering **Home**, **About**, **Skills**, **Projects**, and **Contact**.
- **Dynamic ScrollSpy:** Automatically tracks the viewport position and illuminates the active navigation tab in real time.
- **Fully Responsive:** Mobile-first layout with smooth slide-out drawer navigation, touch-friendly tap targets, and resilient CSS Grid / Flexbox viewports.
- **One-Click Email Copy:** Click-to-copy email card with instant interactive toast notifications.
- **Accessible & SEO-Optimized:** Semantic HTML5 landmarks, ARIA attributes, structured `sitemap.xml`, and search crawler `robots.txt`.

---

## Site Architecture

The portfolio consolidates all relevant developer information into five cohesive sections:

| Section | Focus Areas | Details |
| :--- | :--- | :--- |
| **`#home`** | First Impression | Hero headline, brief value proposition, quick-action CTAs (Projects, About, Contact, Resume), and active social channels. |
| **`#about`** | Background & Credentials | Concise biography, academic milestones at Netaji Subhash Engineering College (NSEC), ML internship at Skill Ladders, and compact certification cards (Google/Kaggle, Skill Ladders, Tata). |
| **`#skills`** | Technical Competencies | Four focused domains: Programming, Web Development, AI & Machine Learning, and Systems & Tools. |
| **`#projects`** | Engineering & Innovation | 5 featured software and hardware/software projects, complemented by hackathon achievement highlights. |
| **`#contact`** | Direct Communication | Direct interactive channels for Email (with copy toast), LinkedIn, and GitHub profile links. |

---

## Featured Projects

| Project | Description | Stack | Status / Recognition |
| :--- | :--- | :--- | :--- |
| **Bharat Legal Sahayak** | AI-powered multilingual legal assistance platform simplifying legal access through voice interaction and conversational guidance. | `Kotlin` `Jetpack Compose` `Python` `Django REST` `Gemini API` | 🏆 **Second Prize – Hackathon** |
| **Autonomous Drone Swarm Simulation** | Virtual simulation environment exploring autonomous drone swarm coordination and decentralized routing for disaster relief operations. | `Python` `Autonomous Systems` `Simulation` `AI Algorithms` | 🏆 **Second Prize – Hackathon** |
| **HeatShield** | Microclimate heatwave monitoring and localized thermal risk assessment platform integrating real-time environmental data feeds. | `Python` `FastAPI` `Open-Meteo API` `Uvicorn` | `Active Project` |
| **Biometric Payment System** | Hardware-software prototype for biometric fingerprint authentication and secure transaction processing. | `Python` `R307S Sensor` `Tkinter` `SQLite` | `Prototype Complete` |
| **Personal Developer Portfolio** | Lightweight, high-performance static portfolio engineered with pure web standards and automated CI/CD deployment. | `HTML5` `CSS3` `JavaScript (ES6+)` `GitHub Actions` | `Production / Maintained` |

---

## Hackathon Achievements

- **🥈 Second Prize — Bharat Legal Sahayak Hackathon**  
  *Recognized for the technical presentation and development of an AI-driven multilingual legal assistance platform facilitating voice-first access to legal guidance.*

- **🥈 Second Prize — Autonomous Drone Simulation Hackathon (2025)**  
  *Awarded for developing an AI-assisted autonomous drone swarm coordination concept designed for rapid disaster relief mapping and localized reconnaissance.*

---

## Technical Skills

The portfolio organizes technical proficiency into four practical engineering disciplines:

- **Programming:** Python, C, C++, JavaScript
- **Web Development:** HTML5, CSS3, Responsive Web Design, REST API Fundamentals
- **AI & Machine Learning:** Machine Learning Fundamentals, Python for ML, AI Concepts
- **Systems & Tools:** Git & GitHub, Linux Fundamentals, Ubuntu, Kali Linux, VirtualBox, WSL, SQLite, Basic Networking, Cybersecurity Fundamentals

---

## Dual-Theme Design System

| Element | Dark Mode (Default) | Light Mode (Warm Cream) |
| :--- | :--- | :--- |
| **Canvas Background** | `#0b1120` (Midnight Navy) | `#F7F5EF` (Warm Cream) |
| **Card / Surface** | `#131d31` (Slate Navy) | `#FFFFFF` (Crisp White) |
| **Primary Typography** | `#f8fafc` (Slate 50) | `#252525` (Warm Charcoal) |
| **Secondary Typography** | `#94a3b8` (Slate 400) | `#555555` (Subtle Muted Gray) |
| **Accent / Highlight** | `#38bdf8` (Electric Sky Blue) | `#0284c7` (Deep Sky Blue) |
| **Borders & Dividers** | `rgba(255, 255, 255, 0.08)` | `rgba(0, 0, 0, 0.08)` |

---

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD workflow for automated Pages deployment
├── assets/
│   ├── css/
│   │   └── style.css           # Modular stylesheet containing design tokens, layouts & themes
│   ├── docs/
│   │   └── resume.pdf          # Professional resume document
│   ├── images/                 # Favicons, project previews, and image assets
│   └── js/
│       └── main.js             # Client engine (theme switcher, dynamic scrollspy, drawer, toast)
├── 404.html                    # Branded 404 error page matching website styling
├── about.html                  # Legacy route redirecting to index.html#about
├── contact-me.html             # Legacy route redirecting to index.html#contact
├── index.html                  # Main single-page application entry point
├── LICENSE                     # MIT Open-Source License
├── README.md                   # Repository documentation
├── robots.txt                  # Search engine crawler instructions
├── sitemap.xml                 # Canonical XML sitemap
├── skills.html                 # Legacy route redirecting to index.html#skills
└── style.css                   # Root stylesheet importing assets/css/style.css
```

---

## Local Development

No complex installations, dependencies, or compilers are required. You can preview and run the project locally using any of the following methods:

### 1. Clone the Repository
```bash
git clone https://github.com/arpandutta30/portfolio.git
cd portfolio
```

### 2. Launch Local Server

**Option A: Using Python 3 (Recommended)**
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

**Option B: Using Node.js (`npx`)**
```bash
npx serve .
```

**Option C: Using VS Code Live Server**
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

**Option D: Direct File Opening**
Double-click `index.html` to open it directly in any web browser.

---

## GitHub Pages Deployment

The portfolio is configured with an automated continuous deployment pipeline using **GitHub Actions**.

### Deployment Workflow (`.github/workflows/deploy.yml`)
1. Every `git push` to the `main` branch triggers the deployment workflow.
2. The workflow checks out the repository, configures the GitHub Pages runtime, packages the static artifacts, and deploys directly to the Pages environment.
3. Live status can be monitored under the **Actions** tab of the GitHub repository.

### Configuring GitHub Pages for Forks
If you fork this repository to deploy your own version:
1. Navigate to **Settings** > **Pages** in your repository.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push a commit to `main` (or run the workflow manually via **Actions** > **Deploy to GitHub Pages** > **Run workflow**).
4. Your site will be published at `https://<username>.github.io/<repo-name>/`.

---

## Contact & Connect

Feel free to connect or reach out regarding software engineering opportunities, collaborative projects, or technical inquiries:

- **LinkedIn:** [linkedin.com/in/arpandutta30](https://www.linkedin.com/in/arpandutta30/)
- **GitHub:** [github.com/arpandutta30](https://github.com/arpandutta30)
- **Email:** [arpandutta30@gmail.com](mailto:arpandutta30@gmail.com)
- **Portfolio:** [https://arpandutta30.github.io/portfolio/](https://arpandutta30.github.io/portfolio/)

---

## License

This project is licensed under the [MIT License](LICENSE) — free to use and adapt with attribution.

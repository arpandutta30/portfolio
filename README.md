# 💼 Arpan Dutta — Personal Engineering Portfolio

[![GitHub Pages Deployment](https://github.com/arpandutta30/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/arpandutta30/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-38bdf8?logo=github)](https://arpandutta30.github.io/portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Personal engineering portfolio website for **Arpan Dutta**, Computer Science and Engineering undergraduate student at **Netaji Subhash Engineering College (NSEC)**, Kolkata. Built with clean, lightweight **HTML5**, **modular CSS3**, and **Vanilla JavaScript (ES6+)** with a minimalist aesthetic, hosted on **GitHub Pages**.

---

## 🚀 Live Preview
- **Live URL:** [https://arpandutta30.github.io/portfolio/](https://arpandutta30.github.io/portfolio/)

---

## 👤 Profile Overview

- **Name:** Arpan Dutta
- **Institution:** Netaji Subhash Engineering College (NSEC), Kolkata
- **Degree:** B.Tech in Computer Science and Engineering (August 2024 – June 2028)
- **Hometown:** Jharkhand, India | **Current Location:** Kolkata, West Bengal, India
- **Professional Headline:** Computer Science Engineering Student | Aspiring Software Engineer | AI/ML Enthusiast
- **Areas of Interest:** Software Engineering, Machine Learning, Cybersecurity, Emerging Technologies

---

## 🧭 Site Structure (5 Clean Navigation Sections)

1. **Home (`#home`):** Hero headline, brief biography hook, status indicator, action buttons (Projects, About, Contact, Resume), and social links.
2. **About (`#about`):** Concise personal overview, integrated **Experience & Education** subsections (Skill Ladders internship; NSEC B.Tech, St. Xavier's, St. Viveka), and compact **Certifications** (Google/Kaggle AI Agents, Skill Ladders AI/ML, Tata Cybersecurity).
3. **Skills (`#skills`):** 4 core engineering domains (Programming, Web Development, AI & Machine Learning, Systems & Tools).
4. **Projects (`#projects`):** 5 engineering projects with concise descriptions, tech tags, and the **🏆 Second Prize – Hackathon** achievement callout.
5. **Contact (`#contact`):** Direct communication cards for Email (with 1-click clipboard copy + live toast), LinkedIn, and GitHub.

---

## 🎨 Dual Theme System

- **Dark Navy Mode (Default):** Deep midnight navy (`#0b1120`), slate navy cards (`#131d31`), and steel blue accents (`#38bdf8`).
- **Warm Cream Light Mode:** Soft editorial cream canvas (`#F7F5EF`), crisp white cards (`#FFFFFF`), warm charcoal text (`#252525`), and subtle borders.
- **Zero-Flash Technology:** Instant inline theme evaluation prevents any flash of the wrong theme on page load.
- **Persistent:** User selection is saved across sessions via `localStorage`.

---

## 📁 Repository Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── assets/
│   ├── css/
│   │   └── style.css           # Lightweight, modular stylesheet (~450 lines)
│   ├── js/
│   │   └── main.js             # Lightweight client engine (theme, scrollspy, clipboard, drawer)
│   ├── images/                 # Project assets and icons
│   └── docs/
│       └── resume.pdf          # Downloadable resume document
├── 404.html                    # Branded 404 error page
├── about.html                  # Legacy fallback redirecting to index.html#about
├── contact-me.html             # Legacy fallback redirecting to index.html#contact
├── index.html                  # Main 5-section portfolio
├── README.md                   # Complete documentation
├── robots.txt                  # Search crawler indexing rules
├── sitemap.xml                 # SEO sitemap
├── skills.html                 # Legacy fallback redirecting to index.html#skills
└── style.css                   # Root stylesheet forwarding to assets/css/style.css
```

---

## 💻 Local Preview & Setup

No build tools or node packages required. Preview locally with any of these methods:

### Method 1: Direct File
Simply double-click `index.html` to open it in your browser.

### Method 2: Python HTTP Server
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

### Method 3: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🌐 GitHub Pages Deployment

1. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Refine portfolio into lightweight 5-section architecture"
   git push origin main
   ```
2. **GitHub Pages Source:**
   - In your repository: go to **Settings > Pages**.
   - Under **Build and deployment > Source**, ensure **GitHub Actions** is selected.
   - Your site will automatically build and publish to `https://arpandutta30.github.io/portfolio/`.

---

## 📬 Contact

- **Email:** [arpandutta30@gmail.com](mailto:arpandutta30@gmail.com)
- **LinkedIn:** [linkedin.com/in/arpandutta30](https://www.linkedin.com/in/arpandutta30/)
- **GitHub:** [github.com/arpandutta30](https://github.com/arpandutta30)
- **Location:** Kolkata, West Bengal, India

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).

# Personal Portfolio — jerryn-joy.github.io

Source code for my personal portfolio site, built with Jekyll and hosted on GitHub Pages.

**Live site:** https://jerryn-joy.github.io

---

## What's on the site

- **About** — who I am and what I do
- **Experience** — career highlights
- **Projects** — work I have built
- **Skills** — technical and professional strengths
- **Certifications** — awards and courses
- **Contact** — ways to get in touch

---

## Projects

**[Zero-Cost Lead Qualification Pipeline](https://github.com/jerryn-joy/zero-cost-lead-qualification-pipeline)**
A fully automated lead-qualification pipeline built with free-tier tools. Uses a pre-trained NLP model for intent scoring and routes qualified leads to HubSpot automatically.

**[Nova — AI Sales Analyst Agent (n8n + Groq)](https://github.com/jerryn-joy/ai-sales-analyst-agent)**
A privacy-friendly AI chatbot that answers natural-language sales questions from your Google Sheet. Built with n8n, Groq LLMs, and a composable two-workflow architecture with chart generation.

**[Automated Access Provisioning Workflow](https://github.com/jerryn-joy/automated-access-provisioning-workflow)**
An event-driven access request and provisioning workflow built with n8n and Supabase. Covers the full lifecycle from form submission to API-based group assignment with audit logging.

---

## Tech Stack

- **Jekyll** — static site generator
- **GitHub Pages** — hosting
- **HTML, CSS, JavaScript** — customization and design

---

## Repo Structure

```
.
├── _layouts/                # HTML layout templates
│   └── layout.html
├── _site/                   # Auto-generated site (ignored in Git)
├── assets/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── personal-files/
├── _config.yml              # Jekyll configuration
├── Gemfile
├── about.md
├── certifications.md
├── contact.md
├── education.md
├── experience.md
├── home.md
├── projects.md
└── skills.md
```

---

## Run Locally

**Prerequisites:** Ruby 2.7+, Bundler (`gem install bundler`)

```bash
git clone https://github.com/jerryn-joy/jerryn-joy.github.io.git
cd jerryn-joy.github.io
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser. If port 4000 is busy, Jekyll will use the next available port.

---

## Deployment

Any push to `main` is automatically built and published via GitHub Pages.

---

## Forking & Customization

You are welcome to fork and adapt this for your own portfolio. If you do:

1. Update the `.md` files with your own content
2. Modify `assets/` for styles, images, and scripts
3. Adjust `_config.yml` for site-wide settings

Please credit the original if you use it as a base.

---

## Contact

- [Email](jerrynjoy.jj@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/jerryn-cheenical-joy/)

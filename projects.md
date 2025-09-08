---
layout: default
title: "Projects • Jerryn Joy"
description: "Selected AI, automation, and product projects."
permalink: /projects/
---

<!-- Page-scoped tweak: keep 3-column grid on this page so a single card doesn't grow -->
<style>
  .projects.projects--lock .projects-grid {
    grid-template-columns: repeat(3, minmax(350px, 1fr));
  }
  /* Preserve your existing mobile stack */
  @media (max-width: 768px) {
    .projects.projects--lock .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<section class="projects projects--lock">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">AI-Driven Automation with No/Low-Code Solutions</h2>
      <p class="contact-sub">
        A selection of projects where I had the opportunity to explore, experiment with, and implement the latest technologies-demonstrating innovation, problem-solving, and practical application of modern tools.
      </p>
    </div>
    
    <div class="projects-grid">
      <!-- KEEP: Zero-Cost AI Lead Qualification -->
      <div class="project-card">
        <div class="project-image">
          <img src="/assets/images/ai_lead_qualification_banner.svg" alt="E-Commerce Platform" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="project-content">
          <h3 class="project-title">Zero-Cost AI Lead Qualification</h3>
          <p class="project-description">Fully automated, no-code AI-driven pipeline for qualifying B2B hydrogen industry leads using advanced machine learning models.</p>
          <div class="project-tech">
            <span class="tech-tag">AI Classification</span>
            <span class="tech-tag">Make.com</span>
            <span class="tech-tag">HubSpot</span>
            <span class="tech-tag">Airtable</span>
            <span class="tech-tag">MailerLite</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/jerryn-joy/Lead-Qualification-Pipeline" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="https://github.com/jerryn-joy/Lead-Qualification-Pipeline" class="project-link" target="_blank"><i class="fab fa-github"></i> Code</a>
          </div>
        </div>
      </div>
      <!-- other project cards removed -->
    </div>
  </div>
</section>

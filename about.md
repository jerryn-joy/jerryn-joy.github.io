---
layout: default
title: "About • Jerryn Joy"
description: "About Jerryn Joy — background and philosophy."
permalink: /about/
---

<!-- ============== ABOUT (modern, matches example layout but uses your design tokens) ============== -->
<section class="about about--modern">
  <div class="container">

    <!-- Header -->
    <header class="about-header section-header">
      <h1 class="section-title">I build AI & automation systems that boost efficiency and elevate customer experience.</h1>

      <!-- Education-style badge (from example, but with your blue theme) -->
      <div class="about-badge" aria-label="Current focus badge">
        <svg class="about-badge__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
        <span><strong>AI Project/Automation</strong> • Product & workflow design, research, delivery</span>
      </div>
    </header>

    <!-- Content grid -->
    <div class="about-grid">
      <!-- Journey (left) -->
      <article class="about-journey">
        <h2 class="about-h2">My Journey</h2>
        <p>I design and manage AI and automation systems that help businesses work more efficiently and improve customer experience. I’ve built smart workflows, chatbots, and automated ops for sales, marketing, and support.</p>
        <p>I also have a strong background in project management, partnering with cross-functional teams and stakeholders to deliver digital products in fast-moving environments. I’m currently exploring roles as an <strong>AI Project Manager</strong>, <strong>Automation Specialist</strong>, or <strong>AI Product Manager</strong>.</p>
        <p>I’m curious, collaborative, and hands-on — whether it’s discussing new tech trends, refining a design, or troubleshooting a gnarly bug.</p>
        <p>Outside of coding, I enjoy traveling and gaming. Let’s connect and build something awesome together!</p>
      </article>

      <!-- How I Work (right) -->
      <aside class="about-work">
        <h2 class="about-h2 about-work__title">How I Work</h2>
        <div class="about-work__grid">
          <!-- Card 1 -->
          <div class="about-card">
            <div class="about-card__head">
              <div class="about-card__icon">⌁</div>
              <h3>Clean Systems</h3>
            </div>
            <p>Design first, then automate. I model processes clearly so the code and workflows stay reliable and maintainable.</p>
          </div>
          <!-- Card 2 -->
          <div class="about-card">
            <div class="about-card__head">
              <div class="about-card__icon">★</div>
              <h3>Practical Innovation</h3>
            </div>
            <p>I pilot LLM features where they matter — measurable wins in response time, cost, or customer satisfaction.</p>
          </div>
          <!-- Card 3 -->
          <div class="about-card">
            <div class="about-card__head">
              <div class="about-card__icon">🤝</div>
              <h3>Collaboration</h3>
            </div>
            <p>Cross-functional by default. I align stakeholders early, share progress often, and de-risk delivery.</p>
          </div>
          <!-- Card 4 -->
          <div class="about-card">
            <div class="about-card__head">
              <div class="about-card__icon">⚡</div>
              <h3>Performance</h3>
            </div>
            <p>Fast, observable, and accessible. I optimize flows, add telemetry, and keep UX crisp end-to-end.</p>
          </div>
        </div>
      </aside>
    </div>

    <!-- Stats (3-up) -->
    <section class="about-stats" aria-label="Quick stats">
      <div class="about-stat">
        <span class="about-stat__num">10+</span>
        <span class="about-stat__label">Projects Delivered</span>
      </div>
      <div class="about-stat">
        <span class="about-stat__num">3+</span>
        <span class="about-stat__label">Years Experience</span>
      </div>
      <div class="about-stat">
        <span class="about-stat__num">30+</span>
        <span class="about-stat__label">Tools &amp; Tech</span>
      </div>
    </section>

  </div>
</section>

<!-- ===== Scoped styles: only for this page; use your tokens & cards ===== -->
<style>
  /* Page wrapper tweaks */
  .about.about--modern { padding: 6rem 0; background: var(--bg); }

  /* Header */
  .about-header { margin-bottom: 3rem; text-align: center; }
  .about-accent { color: var(--blue); }
  .about-sub { color: var(--muted); max-width: 70ch; margin: .5rem auto 1.25rem; }

  .about-badge{
    display:inline-flex; align-items:center; gap:.6rem;
    padding:.6rem 1rem; border-radius:999px;
    background: color-mix(in oklab, var(--blue) 14%, transparent);
    border:1px solid color-mix(in oklab, var(--blue) 30%, var(--border));
    color: var(--text);
  }
  .about-badge__icon{ width:18px; height:18px; color:var(--blue); }

  /* Grid */
  .about-grid{
    display:grid;
    grid-template-columns: 1.1fr 1fr; /* text slightly wider (like your hero) */
    gap: 2.5rem;
    align-items:start;
    margin-top: 1rem;
  }
  .about-h2{
    font-size:1.35rem; font-weight:800; color:var(--text);
    margin: .25rem 0 1rem;
  }
  .about-journey p{ color:var(--muted); line-height:1.8; margin:.8rem 0; }

  /* Work cards (reuse your card language & variables) */
  .about-work__title { text-align:left; }
  .about-work__grid{
    display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;
  }
  .about-card{
    background: var(--bg-alt);
    border: 1px solid var(--border);
    border-radius: 15px;
    padding: 1.25rem;
    box-shadow: 0 4px 18px rgba(0,0,0,.06);
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    position: relative; overflow: hidden;
  }
  .about-card::before{
    content:""; position:absolute; left:0; right:0; top:0; height:3px;
    background: linear-gradient(90deg, var(--blue), var(--blue-light));
    opacity:.9;
  }
  .about-card:hover{
    transform: translateY(-4px);
    box-shadow: var(--shadow);
    border-color: color-mix(in oklab, var(--blue) 22%, var(--border));
  }
  .about-card__head{
    display:flex; align-items:center; gap:.75rem; margin-bottom:.5rem;
  }
  .about-card__icon{
    width:44px; height:44px; border-radius:12px;
    background: var(--blue);
    color: var(--on-blue); display:flex; align-items:center; justify-content:center;
    font-weight:700; font-size:1.1rem; box-shadow: var(--shadow);
  }
  .about-card h3{ font-size:1.05rem; font-weight:700; color:var(--text); }
  .about-card p{ color:var(--muted); line-height:1.6; margin-top:.35rem; }

  /* Stats */
  .about-stats{
    display:grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
    margin-top:2.5rem;
  }
  .about-stat{
    background: var(--bg-alt);
    border:1px solid var(--border);
    border-radius: 15px;
    text-align:center;
    padding: 2rem 1rem;
    box-shadow: 0 4px 18px rgba(0,0,0,.06);
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  }
  .about-stat:hover{
    transform: translateY(-4px);
    box-shadow: var(--shadow);
    border-color: color-mix(in oklab, var(--blue) 22%, var(--border));
  }
  .about-stat__num{
    display:block; font-weight:800; font-size:2.2rem; color:var(--blue);
    line-height:1; margin-bottom:.25rem;
  }
  .about-stat__label{ color:var(--muted); font-weight:600; }

  /* Responsive */
  @media (max-width: 1024px){
    .about-grid{ grid-template-columns: 1fr; gap:2rem; }
    .about-work__grid{ grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 768px){
    .about-work__grid{ grid-template-columns: 1fr; }
    .about-stats{ grid-template-columns: 1fr; }
  }

  /* Small entrance animation (respect reduced motion) */
  @keyframes fadeInUp{ from{opacity:0; transform:translateY(14px);} to{opacity:1; transform:translateY(0);} }
  @media (prefers-reduced-motion: no-preference){
    .about-header, .about-journey, .about-work, .about-stats > * { animation: fadeInUp .6s ease both; }
    .about-stats > *:nth-child(2){ animation-delay:.05s; }
    .about-stats > *:nth-child(3){ animation-delay:.1s; }
  }
</style>

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
      <h1 class="section-title">Building smarter businesses with customer-focused automation.</h1>
    </header>

        <!-- Stats (3-up) -->
    <section class="about-stats" aria-label="Quick stats">
      <div class="about-stat">
        <span class="about-stat__num">3+</span>
        <span class="about-stat__label">Years in Automation</span>
      </div>
      <div class="about-stat">
        <span class="about-stat__num">20+</span>
        <span class="about-stat__label">AI / SaaS Integrations</span>
      </div>
      <div class="about-stat">
        <span class="about-stat__num">1000+</span>
        <span class="about-stat__label">Hours of Work Automated</span>
      </div>
    </section>

    <!-- Content grid -->
    <div class="about-grid">
      <!-- Journey (left) -->
      <article class="about-journey">
        <h2 class="about-h2">My Background and Focus</h2>

        <ul class="about-bullets">
          <li>I am a dedicated <strong>Automation Specialist</strong> with a strong track record of building <strong>scalable, AI-enhanced workflows</strong> using <strong>Make.com</strong>, <strong>Zapier</strong>, <strong>n8n</strong>, and <strong>Power Automate</strong>.</li>
          <li>With hands-on experience in <strong>business development</strong> and <strong>sales</strong>, I understand customer pain points and turn them into digital solutions. Having onboarded and supported <strong>50+ international B2B vendors</strong>, I know how to think from the user’s perspective to design processes that truly deliver value.</li>
          <li>My career bridges <strong>automation</strong>, <strong>AI product management</strong>, and <strong>customer-facing roles</strong>, enabling me to create solutions that are both <strong>technically sound</strong> and <strong>commercially impactful</strong> — from <strong>sales pipeline automation</strong> to <strong>chatbots</strong> and <strong>AI-powered tools</strong>. I bring both technical execution and business strategy to the table.</li>
          <li>I also have a strong background in <strong>project management</strong>, collaborating with <strong>cross-functional teams</strong> and stakeholders to deliver products in <strong>fast-moving environments</strong>. I’m currently exploring roles as an <strong>AI Project Manager</strong>, <strong>Automation Specialist</strong>, or <strong>AI Product Manager</strong>.</li>
          <li><strong>Curious, collaborative, and hands-on</strong>, I enjoy exploring new <strong>AI tools</strong> and building side projects that test how technology creates value in real workflows.</li>
        </ul>
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
            <p> Design first, then automate. I map processes clearly so workflows in Make.com, Zapier, or n8n stay reliable and scalable.</p>
          </div>
          <!-- Card 2 -->
          <div class="about-card">
            <div class="about-card__head">
              <div class="about-card__icon">★</div>
              <h3>Practical Innovation</h3>
            </div>
            <p> I pilot AI where it matters - Chatbots, RAG pipelines or AI agents - always measured by real impact: faster responses, lower costs, higher satisfaction.</p>
          </div>
          <!-- Card 3 -->
          <div class="about-card">
            <div class="about-card__head">
              <div class="about-card__icon">🤝</div>
              <h3>Collaboration</h3>
            </div>
            <p>Cross-functional by default. I align sales, marketing, and product teams early, share progress often, and de-risk delivery with Agile practices</p>
          </div>
          <!-- Card 4 -->
          <div class="about-card">
            <div class="about-card__head">
              <div class="about-card__icon">⚡</div>
              <h3>Performance</h3>
            </div>
            <p> Automation is not just speed - it is outcomes. I track KPIs like lead conversion, engagement, and accuracy to ensure solutions are measurable and user-friendly.</p>
          </div>
        </div>
      </aside>
    </div>

  </div>
</section>

<!-- ===== Scoped styles: only for this page; use your tokens & cards ===== -->
<style>
  /* Page wrapper tweaks */
  .about.about--modern { padding: 3rem 0; background: var(--bg); }

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

  /* Widen the About container ONLY (more room left/right) */
  .about .container {
    max-width: 1647px;     /* wider than global --max */
    padding: 0 3rem;       /* comfy inner gutter */
  }

  /* Grid (more space between columns; wider text column; keep card size) */
  .about-grid{
    display:grid;
    grid-template-columns: 1.25fr minmax(700px, 740px); /* text wider; cards col capped */
    column-gap: 8rem;        /* more distance between text and cards */
    row-gap: 2rem;
    align-items:start;
    margin-top: 4rem;
  }

  .about-h2{
    font-size:1.35rem; font-weight:800; color:var(--text);
    margin: .25rem 0 1rem;
  }
  .about-journey p{ color:var(--muted); line-height:1.8; margin:.8rem 0; }

  /* Bullet list for My Journey */
  .about-journey .about-bullets {
    margin: .5rem 0 0;
    padding-left: 1.25rem;
    color: var(--muted);
    line-height: 1.8;
  }
  .about-journey .about-bullets li { margin: .6rem 0; }
  .about-journey .about-bullets li::marker { color: var(--blue); font-weight: 700; }

  /* How I Work cards (keep card size the same) */
  .about-work__title { text-align:left; }
  .about-work { max-width: 740px; } /* lock the whole column */
  .about-work__grid{
    display:grid;
    grid-template-columns: repeat(2, 350px); /* fixed card width */
    justify-content: start;                   /* don’t stretch */
    gap: 1rem;
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
  @media (max-width: 1200px){
    .about-grid{ grid-template-columns: 1fr; }
    .about-work { max-width: none; }
    .about-work__grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 768px){
    .about-work__grid{ grid-template-columns: 1fr; }
    .about-stats{ grid-template-columns: 1fr; }
    .about .container { padding: 0 1.25rem; } /* a bit tighter on small screens */
    .about-grid { column-gap: 1.5rem; }
  }

  /* Small entrance animation (respect reduced motion) */
  @keyframes fadeInUp{ from{opacity:0; transform:translateY(14px);} to{opacity:1; transform:translateY(0);} }
  @media (prefers-reduced-motion: no-preference){
    .about-header, .about-journey, .about-work, .about-stats > * { animation: fadeInUp .6s ease both; }
    .about-stats > *:nth-child(2){ animation-delay:.05s; }
    .about-stats > *:nth-child(3){ animation-delay:.1s; }
  }
</style>


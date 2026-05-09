---
layout: layout
title: "About • Jerryn Joy"
description: "About Jerryn Joy — AI systems, automation, and operational thinking."
permalink: /about/
---

<section class="hero about">
  <div class="container">

    <div class="section-header">
      <h1 class="section-title">Building intelligent systems that simplify operations</h1>
      <p class="about-sub">AI workflows, automation systems, and operational process design.</p>
    </div>

    <!-- Metrics -->
    <section class="about-metrics" aria-label="Key metrics">
      <div class="metric">
        <div class="metric-number">3+</div>
        <div class="metric-copy">years in automation & AI systems</div>
      </div>
      <div class="metric">
        <div class="metric-number">10+</div>
        <div class="metric-copy">end-to-end workflow systems built</div>
      </div>
      <div class="metric">
        <div class="metric-number">500+</div>
        <div class="metric-copy">hours of manual work automated</div>
      </div>
    </section>

    <!-- Grid -->
    <div class="about-grid">

      <!-- Left -->
      <article class="about-journey">
        <ul class="about-bullets">
          <li>Design and deliver AI agents, RAG pipelines, and automated workflows with low/no-code tools and Python.</li>
          <li>Build AI assistants, chatbots, and workflow systems that improve customer experience and reduce operational overhead.</li>
          <li>Focus on practical, scalable solutions that save time, reduce friction, and support business growth.</li>
        </ul>

        <div class="about-flow">
          <div class="flow-step">
            <span class="step-num">01</span>
            <span class="step-label">Analyze</span>
          </div>
          <div class="flow-step">
            <span class="step-num">02</span>
            <span class="step-label">Automate</span>
          </div>
          <div class="flow-step">
            <span class="step-num">03</span>
            <span class="step-label">Optimize</span>
          </div>
          <div class="flow-step">
            <span class="step-num">04</span>
            <span class="step-label">Scale</span>
          </div>
        </div>

        <p class="about-note">I enjoy turning complex operational processes into systems teams can actually use.</p>
      </article>

      <!-- Right -->
      <aside class="about-work">
        <div class="about-work__grid">
          <div class="about-card">
            <div class="about-card__icon">⌁</div>
            <h3>Process-first</h3>
            <p>Workflows before tools.</p>
          </div>
          <div class="about-card">
            <div class="about-card__icon">⚡</div>
            <h3>Practical automation</h3>
            <p>Systems that reduce friction and save time.</p>
          </div>
          <div class="about-card">
            <div class="about-card__icon">🤝</div>
            <h3>Collaborative execution</h3>
            <p>Solutions built with teams, not around them.</p>
          </div>
          <div class="about-card">
            <div class="about-card__icon">📈</div>
            <h3>Scalable systems</h3>
            <p>Flexible automation architectures for growth.</p>
          </div>
        </div>
      </aside>

    </div>
  </div>
</section>

<style>
  .about { padding: 3rem 0; }
  .about.hero { background: var(--bg-hero); }

  .about-sub { color: var(--muted); line-height: 1.8; }

  /* Metrics */
  .about-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 2.5rem auto;
    max-width: 900px;
  }

  .metric {
    background: #ffffff;
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: 0 4px 16px rgba(65, 127, 184, 0.08);
  }

  .metric-number {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--blue);
    line-height: 1;
    margin: 0;
  }

  .metric-copy {
    font-size: 0.95rem;
    color: var(--muted);
    line-height: 1.6;
    margin: 0;
  }

  /* Grid */
  .about-grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 2rem;
    align-items: start;
    margin-top: 2rem;
  }

  /* Left */
  .about-lead {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.6;
    color: var(--text);
    margin-bottom: 1.5rem;
  }

  .about-bullets {
    list-style: none;
    margin: 0 0 1.5rem 0;
    padding: 0;
  }

  .about-bullets li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: var(--muted);
    line-height: 1.6;
  }

  .about-bullets li::before {
    content: "✦";
    position: absolute;
    left: 0;
    color: var(--blue);
    font-weight: bold;
  }

  .about-flow {
    display: flex;
    align-items: stretch;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 1.5rem;
    background: #ffffff;
  }

  .flow-step {
    flex: 1;
    padding: 0.75rem 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    background: #ffffff;
    border-right: 1px solid var(--border);
    transition: background 0.2s ease;
  }

  .flow-step:last-child { border-right: none; }
  .flow-step:hover { background: var(--bg-alt); }

  .step-num {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--blue);
    letter-spacing: 0.05em;
  }

  .step-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
    text-align: center;
  }

  .about-note {
    font-size: 0.95rem;
    color: var(--muted);
    line-height: 1.7;
    border-left: 3px solid var(--blue-soft);
    padding-left: 1rem;
  }

  /* Right — cards */
  .about-work__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .about-card {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1rem;
    transition: all 0.3s ease;
  }

  .about-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(65, 127, 184, 0.3);
    border-color: var(--blue-light);
  }

  .about-card__icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .about-card h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.25rem;
  }

  .about-card p {
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.5;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .about-grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .about-metrics { grid-template-columns: 1fr; }
    .about-lead { font-size: 1rem; }
  }
</style>
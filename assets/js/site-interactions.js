// Phrase rotator (respects reduced motion)
(function () {
  const el = document.getElementById('phrase-rotator');
  if (!el) return;

  const phrases = [
    "Building the Future of Automations",
    "Bringing AI to Business"
  ];
  const typeDelay = 70, deleteDelay = 45, holdDelay = 1200;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) { el.textContent = phrases[0]; return; }

  let idx = 0, char = 0, deleting = false;
  function tick() {
    const phrase = phrases[idx];
    if (!deleting) {
      char++;
      el.textContent = phrase.slice(0, char);
      if (char === phrase.length) { deleting = true; return setTimeout(tick, holdDelay); }
      return setTimeout(tick, typeDelay);
    } else {
      char--;
      el.textContent = phrase.slice(0, char);
      if (char === 0) { deleting = false; idx = (idx + 1) % phrases.length; return setTimeout(tick, 300); }
      return setTimeout(tick, deleteDelay);
    }
  }
  setTimeout(tick, 400);
})();

// Site interactions
document.addEventListener('DOMContentLoaded', function () {
  // Animate skill bars when in view
  const fills = document.querySelectorAll('.skills.skills--modern .skillsx-fill');
  const animate = el => { const w = el.getAttribute('data-width') || '0'; el.style.width = w + '%'; };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skillsx-fill').forEach(animate);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    document.querySelectorAll('.skills.skills--modern .skillsx-card').forEach(card => io.observe(card));
  } else {
    // Fallback
    setTimeout(() => fills.forEach(animate), 250);
  }

  // Row hover (no inline styles)
  document.querySelectorAll('.skills.skills--modern .skillsx-row').forEach(row => {
    row.addEventListener('mouseenter', () => row.classList.add('is-hovered'));
    row.addEventListener('mouseleave', () => row.classList.remove('is-hovered'));
  });

  // Navbar shrink on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav toggle (if present)
const toggle = document.querySelector('.mobile-toggle');
if (toggle) {
  const targetId = toggle.getAttribute('aria-controls');
  const links = document.getElementById(targetId);
  if (links) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
}
});
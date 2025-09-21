(function () {
  const el = document.getElementById('phrase-rotator');
  if (!el) return;

  const phrases = [
    "Building the Future of Automation... One Workflow at a Time",
    "Bringing AI to Business"
  ];

  const typeDelay = 70;    // ms per character when typing
  const deleteDelay = 45;  // ms per character when deleting
  const holdDelay = 1200;  // pause after finishing a phrase

  let idx = 0, char = 0, deleting = false;

  function tick() {
    const phrase = phrases[idx];

    if (!deleting) {
      char++;
      el.textContent = phrase.slice(0, char);
      if (char === phrase.length) {
        deleting = true;
        return setTimeout(tick, holdDelay);
      }
      return setTimeout(tick, typeDelay);
    } else {
      char--;
      el.textContent = phrase.slice(0, char);
      if (char === 0) {
        deleting = false;
        idx = (idx + 1) % phrases.length;
        return setTimeout(tick, 300);
      }
      return setTimeout(tick, deleteDelay);
    }
  }

  setTimeout(tick, 400);
})();


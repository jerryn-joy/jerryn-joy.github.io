(function () {
  const el = document.getElementById('role-rotator');
  if (!el) return;

  const roles = ["Product Owner", "Automation Specialist", "Project Manager"];
  const typeDelay = 70;       // ms per character when typing
  const deleteDelay = 45;     // ms per character when deleting
  const holdDelay = 1200;     // pause after finishing a word

  let idx = 0, char = 0, deleting = false;

  function tick() {
    const word = roles[idx];
    if (!deleting) {
      char++;
      el.textContent = word.slice(0, char);
      if (char === word.length) {
        deleting = true;
        return setTimeout(tick, holdDelay);
      }
      return setTimeout(tick, typeDelay);
    } else {
      char--;
      el.textContent = word.slice(0, char);
      if (char === 0) {
        deleting = false;
        idx = (idx + 1) % roles.length;
        return setTimeout(tick, 300);
      }
      return setTimeout(tick, deleteDelay);
    }
  }

  setTimeout(tick, 400);
})();

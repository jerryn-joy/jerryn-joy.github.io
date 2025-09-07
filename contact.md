---
layout: default
title: "Contact • Jerryn Joy"
description: "Get in touch for AI product, automation, and PM roles."
permalink: /contact/
---

<section class="contact">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Get In Touch</h2>
      <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto;">
        I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
      </p>
    </div>

    <!-- paste your contact-content block as-is -->
    <div class="contact-content">
      <!-- ... your existing contact HTML ... -->
    </div>
  </div>
</section>

<script>
  // Simple client-side handler for the demo form
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
      });
    }
  });
</script>

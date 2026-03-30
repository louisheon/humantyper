// shared.js — injects nav and footer HTML only (styles live in shared.css)

(function () {
  const CHECKOUT = 'https://YOUR_STORE.lemonsqueezy.com/checkout/buy/YOUR_PRODUCT_ID';
  const STORE_EMAIL = 'support@humantyper.com';

  // Expose globals
  window.HT_CHECKOUT = CHECKOUT;
  window.HT_EMAIL = STORE_EMAIL;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // ── Nav ──
  const nav = document.createElement('nav');
  nav.className = 'ht-nav';
  nav.innerHTML = `
    <a href="index.html" class="ht-nav-logo">
      <div class="ht-nav-dot"></div>HumanTyper
    </a>
    <ul class="ht-nav-links">
      <li><a href="index.html#features">Features</a></li>
      <li><a href="index.html#how">How it works</a></li>
      <li><a href="index.html#pricing">Pricing</a></li>
      <li><a href="contact.html" ${currentPage === 'contact.html' ? 'style="color:var(--text)"' : ''}>Contact</a></li>
      <li><a href="${CHECKOUT}" class="ht-nav-cta" target="_blank">Get Pro →</a></li>
    </ul>
  `;
  document.body.prepend(nav);

  // ── Footer ──
  const footer = document.createElement('footer');
  footer.className = 'ht-footer';
  footer.innerHTML = `
    <div class="ht-footer-logo">
      <div class="ht-nav-dot"></div> HumanTyper
    </div>
    <ul class="ht-footer-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="index.html#pricing">Pricing</a></li>
      <li><a href="privacy.html">Privacy Policy</a></li>
      <li><a href="terms.html">Terms of Service</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="ht-footer-copy">© ${new Date().getFullYear()} HumanTyper · All rights reserved</div>
  `;
  document.body.appendChild(footer);

  // Wire any buy buttons on the page
  document.querySelectorAll('[data-checkout]').forEach(el => {
    el.href = CHECKOUT;
    el.target = '_blank';
  });
})();

// Injects the shared header/footer and marks the active nav link.
(function () {
  const NAV_ITEMS = [
    { id: "home", href: "index.html", labelKey: "nav.home" },
    { id: "about", href: "about.html", labelKey: "nav.about" },
    { id: "research", href: "research.html", labelKey: "nav.research" },
    { id: "projects", href: "projects.html", labelKey: "nav.projects" },
    { id: "internationalization", href: "internationalization.html", labelKey: "nav.internationalization" },
    { id: "events", href: "events.html", labelKey: "nav.events" },
    { id: "contact", href: "contact.html", labelKey: "nav.contact" },
  ];

  function buildNavLinks(activePage, linkClassName, listClassName = "") {
    const classList = [linkClassName, listClassName].filter(Boolean).join(" ");
    return `
      <ul class="${listClassName}">
        ${NAV_ITEMS.map((item) => {
          const isActive = activePage === item.id;
          return `<li><a class="${linkClassName} ${isActive ? "active" : ""}" href="${item.href}" data-i18n="${item.labelKey}">${item.id}</a></li>`;
        }).join("")}
      </ul>`;
  }

  function createHeader(activePage) {
    return `
      <a href="#main" class="skip">Skip to main content</a>
      <div class="header-inner container">
        <a href="index.html" class="brand" aria-label="CITECA — ISTEC Porto">
          <span class="brand-mark"><img src="assets/logo.png" alt="CITECA logo"></span>
          <span class="brand-name">CITECA</span>
        </a>
        <nav class="nav-primary" aria-label="Primary">
          ${buildNavLinks(activePage, "nav-link")}
        </nav>
        <div class="actions">
          <button type="button" class="icon-btn search" aria-label="Search"><i data-icon="search" data-size="16"></i></button>
          <button type="button" class="lang-toggle" aria-label="Switch language">
            <span class="en">EN</span><span class="sep" aria-hidden="true">/</span><span class="pt">PT</span>
          </button>
          <button type="button" class="icon-btn mobile-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Menu">
            <span class="ic-menu" data-icon="menu" data-size="20"></span>
            <span class="ic-close hidden" data-icon="close" data-size="20"></span>
          </button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">
        ${buildNavLinks(activePage, "")}
      </nav>`;
  }

  const FOOTER = `
  <div class="foot-inner">
    <div class="foot-grid">
      <div>
        <div class="foot-brand"><img src="assets/logo.png" alt="CITECA logo"><span>CITECA</span></div>
        <p class="foot-desc" data-i18n="footer.description"></p>
        <div class="foot-socials">
          <a href="#" class="foot-social" aria-label="LinkedIn"><i data-icon="linkedin" data-size="16"></i></a>
          <a href="#" class="foot-social" aria-label="Twitter"><i data-icon="twitter" data-size="16"></i></a>
          <a href="#" class="foot-social" aria-label="GitHub"><i data-icon="github" data-size="16"></i></a>
        </div>
      </div>
      <nav class="foot" aria-label="Quick links">
        <h2 data-i18n="footer.quickLinks">Quick Links</h2>
        <ul>
          <li><a href="about.html" data-i18n="nav.about">About</a></li>
          <li><a href="research.html" data-i18n="nav.research">Research</a></li>
          <li><a href="projects.html" data-i18n="nav.projects">Projects</a></li>
          <li><a href="internationalization.html" data-i18n="nav.internationalization">Internationalization</a></li>
          <li><a href="events.html" data-i18n="nav.events">Events</a></li>
          <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </nav>
      <div class="foot">
        <h2 data-i18n="footer.newsletter">Newsletter</h2>
        <p style="margin-top:20px;font-size:15px;color:rgba(255,255,255,.75)" data-i18n="footer.newsletterDesc"></p>
        <form class="news newsletter-form">
          <label class="sr-only" for="nl">Email</label>
          <input id="nl" type="email" required data-i18n-attr="placeholder:footer.email">
          <button type="submit" aria-label="Subscribe"><i data-icon="arrow" data-size="16"></i></button>
        </form>
        <address>
          <p><span data-icon="map" data-size="16"></span> R. de Silva Tapada 115, 4200-501 Porto</p>
          <p><span data-icon="mail" data-size="16"></span> <a href="mailto:citeca@istec.pt">citeca@istec.pt</a></p>
          <p><span data-icon="phone" data-size="16"></span> <a href="tel:+351220108100">+351 220 108 100</a></p>
        </address>
      </div>
    </div>
    <div class="foot-bottom">
      <p>© <span id="yr"></span> CITECA — ISTEC Porto. <span data-i18n="footer.rights"></span>.</p>
      <p data-i18n="footer.wcag"></p>
    </div>
  </div>`;

  const header = document.querySelector("header.header");
  const footer = document.querySelector("footer.site");
  if (header) header.innerHTML = createHeader(header.dataset.active || "");
  if (footer) footer.innerHTML = FOOTER;

  const yearNode = document.getElementById("yr");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
})();
/**
 * Navigation Bar Component & Interactive Handler
 */

// 🌐 ใส่ URL ลิงก์ของเว็บไซต์ภายนอก (Partner Websites) ที่นี่ได้เลยครับ:
export const EXTERNAL_PARTNER_LINKS = [
  { name: 'Protest Engineering', url: 'https://www.protest-eng.com' }, // เปลี่ยน URL ตรงนี้
  { name: 'Wintech', url: 'https://www.wintech.com' },                 // เปลี่ยน URL ตรงนี้
  { name: 'Yamauchi', url: 'https://www.yamauchi-corp.com' },          // เปลี่ยน URL ตรงนี้
  { name: 'MWN', url: 'https://www.mwn-niefern.de' },                  // เปลี่ยน URL ตรงนี้
  { name: 'Tasowheel', url: 'https://www.tasowheel.fi' },              // เปลี่ยน URL ตรงนี้
  { name: 'ST Macchine', url: 'https://www.stmacchine.com' },          // เปลี่ยน URL ตรงนี้
  { name: 'Daesung Engineering', url: 'https://www.daesung.co.kr' },   // เปลี่ยน URL ตรงนี้
];

export function renderNavbar(activePage: string = 'home'): string {
  // สร้างรายการ Dropdown สำหรับ Partner Links อัตโนมัติ
  const partnerLinksHtml = EXTERNAL_PARTNER_LINKS.map(
    (item) => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="dropdown-item">
        <span class="dropdown-title">${item.name}</span>
      </a>
    `
  ).join('');

  return `
  <!-- Main Navigation Header -->
  <header class="site-header" id="siteHeader">
    <div class="nav-container">
      
      <!-- Brand Logo (Text: PM PRO) -->
      <a href="index.html" class="brand-logo" title="PM PRO - Home">
        <span class="brand-text-logo">
          <span class="brand-pm">PM</span>
          <span class="brand-pro">PRO</span>
        </span>
      </a>

      <!-- Navigation Tabs / Links -->
      <nav>
        <ul class="nav-menu" id="navMenu">
          
          <!-- 1. Home -->
          <li class="nav-item ${activePage === 'home' ? 'active' : ''}">
            <a href="index.html" class="nav-link">
              <span>Home</span>
            </a>
          </li>

          <!-- 2. On-Site Service (Dropdown) -->
          <li class="nav-item has-dropdown ${activePage === 'onsite' ? 'active' : ''}">
            <a href="#" class="nav-link dropdown-toggle">
              <span>On-Site Service</span>
              <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <div class="dropdown-menu">
              <a href="headbox-service.html" class="dropdown-item">
                <span class="dropdown-title">Headbox service</span>
              </a>
              <a href="alignment-service.html" class="dropdown-item">
                <span class="dropdown-title">Alignment service</span>
              </a>
              <a href="nip-test-tuning.html" class="dropdown-item">
                <span class="dropdown-title">Nip test and tuning</span>
              </a>
              <a href="cd-profile-system.html" class="dropdown-item">
                <span class="dropdown-title">CD profile system service</span>
              </a>
              <a href="grinding-coating-service.html" class="dropdown-item">
                <span class="dropdown-title">Grinding and coating service</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="other-service.html" class="dropdown-item">
                <span class="dropdown-title">Other service</span>
              </a>
            </div>
          </li>

          <!-- 3. Machine / Equipment / Part (Dropdown) -->
          <li class="nav-item has-dropdown ${activePage === 'equipment' ? 'active' : ''}">
            <a href="#" class="nav-link dropdown-toggle">
              <span>Machine/Equipment/Part</span>
              <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <div class="dropdown-menu">
              <a href="headbox-lips.html" class="dropdown-item">
                <span class="dropdown-title">Headbox top/bottom lips</span>
              </a>
              <a href="superfinishing-machine.html" class="dropdown-item">
                <span class="dropdown-title">Superfinishing machine</span>
              </a>
              <a href="blade-angle-meter.html" class="dropdown-item">
                <span class="dropdown-title">Blade angle meter</span>
              </a>
              <a href="roll-and-cover.html" class="dropdown-item">
                <span class="dropdown-title">Roll and cover</span>
              </a>
              <a href="cd-profiling-component.html" class="dropdown-item">
                <span class="dropdown-title">CD profiling component</span>
              </a>
              <a href="machinery-water-treatment.html" class="dropdown-item">
                <span class="dropdown-title">Machinery/Water treatment system</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="fabric-cleaner-tail-system.html" class="dropdown-item">
                <span class="dropdown-title">Fabric cleaner/Tail threading/Tail cutter/..</span>
              </a>
            </div>
          </li>

          <!-- 4. Contact Us -->
          <li class="nav-item ${activePage === 'contact' ? 'active' : ''}">
            <a href="contact.html" class="nav-link">
              <span>Contact Us</span>
            </a>
          </li>

          <!-- 5. Link (External Partner Dropdown) -->
          <li class="nav-item has-dropdown">
            <a href="#" class="nav-link dropdown-toggle">
              <span>Link</span>
              <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <div class="dropdown-menu">
              ${partnerLinksHtml}
            </div>
          </li>

        </ul>
      </nav>

      <!-- Right Actions & Mobile Hamburger -->
      <div class="nav-actions">
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu">
          <svg class="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

    </div>
  </header>
  `;
}

export function initNavbarInteractions(): void {
  const header = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const dropdownItems = document.querySelectorAll('.has-dropdown');

  // Sticky header blur effect on scroll
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target as Node) && !mobileToggle.contains(e.target as Node)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // Mobile dropdown toggles
  dropdownItems.forEach((item) => {
    const toggle = item.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth < 992) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });
}

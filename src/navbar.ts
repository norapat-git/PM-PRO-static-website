/**
 * Navigation Bar Component & Interactive Handler
 */

// 🌐 ใส่ URL ลิงก์ของเว็บไซต์ภายนอก (Partner Websites) ที่นี่ได้เลยครับ:
export const EXTERNAL_PARTNER_LINKS = [
  { name: 'Wintech', url: 'https://www.wintech.fi/' },
  { name: 'Yamauchi', url: 'https://yamauchi.co.jp/' },
  { name: 'MWN', url: 'http://www.mwn-niefern.de/' },
  { name: 'Tasowheel', url: 'https://www.tasowheel.fi/' },
  { name: 'ST Macchine', url: 'https://www.stmacchine.it/' },
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
      <a href="/index.html" class="brand-logo" title="PM PRO - Home">
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
            <a href="/index.html" class="nav-link">
              <span>Home</span>
            </a>
          </li>

          <!-- 2. On-Site Service (Dropdown) -->
          <li class="nav-item has-dropdown ${activePage === 'onsite' ? 'active' : ''}">
            <a href="/services/index.html" class="nav-link dropdown-toggle">
              <span>On-Site Service</span>
              <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <div class="dropdown-menu">
              <a href="/services/headbox-service.html" class="dropdown-item">
                <span class="dropdown-title">Headbox service</span>
              </a>
              <a href="/services/alignment-service.html" class="dropdown-item">
                <span class="dropdown-title">Alignment service</span>
              </a>
              <a href="/services/nip-test-tuning.html" class="dropdown-item">
                <span class="dropdown-title">Nip test and tuning</span>
              </a>
              <a href="/services/cd-profile-system.html" class="dropdown-item">
                <span class="dropdown-title">CD profile system service</span>
              </a>
              <a href="/services/grinding-coating-service.html" class="dropdown-item">
                <span class="dropdown-title">Grinding and coating service</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="/services/other-service.html" class="dropdown-item">
                <span class="dropdown-title">Other service</span>
              </a>
            </div>
          </li>

          <!-- 3. Machine / Equipment / Part (Dropdown) -->
          <li class="nav-item has-dropdown ${activePage === 'equipment' ? 'active' : ''}">
            <a href="/equipment/index.html" class="nav-link dropdown-toggle">
              <span>Machine/Equipment/Part</span>
              <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <div class="dropdown-menu">
              <a href="/equipment/headbox-lips.html" class="dropdown-item">
                <span class="dropdown-title">Headbox top/bottom lips</span>
              </a>
              <a href="/equipment/superfinishing-machine.html" class="dropdown-item">
                <span class="dropdown-title">Superfinishing machine</span>
              </a>
              <a href="/equipment/blade-angle-meter.html" class="dropdown-item">
                <span class="dropdown-title">Blade angle meter</span>
              </a>
              <a href="/equipment/roll-and-cover.html" class="dropdown-item">
                <span class="dropdown-title">Roll and cover</span>
              </a>
              <a href="/equipment/cd-profiling-component.html" class="dropdown-item">
                <span class="dropdown-title">CD profiling component</span>
              </a>
              <a href="/equipment/machinery-water-treatment.html" class="dropdown-item">
                <span class="dropdown-title">Machinery/Water treatment system</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="/equipment/fabric-cleaner-tail-system.html" class="dropdown-item">
                <span class="dropdown-title">Fabric cleaner/Tail threading/Tail cutter/..</span>
              </a>
            </div>
          </li>

          <!-- 4. Contact Us -->
          <li class="nav-item ${activePage === 'contact' ? 'active' : ''}">
            <a href="/contact.html" class="nav-link">
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

      <!-- Right Actions & Mobile Animated Hamburger -->
      <div class="nav-actions">
        <button class="mobile-toggle animated-hamburger" id="mobileToggle" aria-label="Toggle Menu">
          <span class="hamburger-box">
            <span class="hamburger-line line-top"></span>
            <span class="hamburger-line line-middle"></span>
            <span class="hamburger-line line-bottom"></span>
          </span>
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

  // Mobile menu toggle with smooth 0.5s morphing animation
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target as Node) && !mobileToggle.contains(e.target as Node)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });

    // Close mobile menu when clicking any destination link
    navMenu.querySelectorAll('a:not(.dropdown-toggle)').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Mobile dropdown toggles
  dropdownItems.forEach((item) => {
    const toggle = item.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth < 992) {
          e.preventDefault();
          e.stopPropagation();
          // Close other open dropdowns for a clean accordion effect
          dropdownItems.forEach((other) => {
            if (other !== item) other.classList.remove('open');
          });
          item.classList.toggle('open');
        }
      });
    }
  });
}

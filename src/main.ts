import './style.css';
import { renderNavbar, initNavbarInteractions } from './navbar';

// Image Assets (Reorganized Assets Paths)
import specializedServiceImg from './assets/hb carousel2.jpg';
import qualityProductImg from './assets/sf carousel1.jpg';
import paperMachineImg from './assets/paper-machine.jpg';

import headboxImg from './assets/services/headbox/headbox service.jpg';
import alignmentImg from './assets/services/alignment/alignment service.jpg';
import niptestImg from './assets/services/niptest/niptest service.jpg';
import grindingImg from './assets/services/grindingcoating/grindingcoating service.jpg';
import steamboxImg from './assets/services/steambox/steambox service.jpg';
import otherServicesImg from './assets/services/other services.jpg';

// Helper to determine the current active page
function getCurrentPage(): string {
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('/services') || path.includes('service') || path.includes('nip-test')) {
    return 'onsite';
  }

  if (path.includes('/equipment') || path.includes('blade') || path.includes('roll') || path.includes('machinery') || path.includes('fabric') || path.includes('superfinishing') || path.includes('headbox-lips') || path.includes('cd-profiling')) {
    return 'equipment';
  }

  if (path.includes('contact')) return 'contact';

  return 'home';
}

function renderHomePage() {
  const app = document.getElementById('app');
  if (!app) return;

  const activePage = getCurrentPage();

  app.innerHTML = `
    <!-- Reusable Navbar Component -->
    <div id="navbar-container">
      ${renderNavbar(activePage)}
    </div>

    <!-- Main Content -->
    <main class="main-content">
      
      <!-- Hero Section with Floating Animated Bubbles -->
      <section class="page-hero">
        <div class="hero-container">
          
          <!-- Hero Text (Left Side) -->
          <div class="hero-text">
            <div class="hero-badge">
              <span class="badge-dot"></span>
              <span>WELCOME TO PM PRO</span>
            </div>
            <h1 class="hero-title">Expert Industrial Services & Machinery for Paper Mills</h1>
            <p class="hero-subtitle">
              Established in 2011 by industry specialists, PMPRO delivers high-quality on-site services, equipment renewal, and premium machinery parts to paper and pulp mills across Thailand and Southeast Asia.
            </p>
            <div class="hero-key-points">
              <span class="key-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Experienced Specialists</span>
              </span>
              <span class="key-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Full Maintenance</span>
              </span>
              <span class="key-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>SE Asia Partner</span>
              </span>
            </div>

            <!-- Mobile-Only Hero Action Buttons -->
            <div class="hero-actions mobile-only-actions">
              <a href="#servicesSection" class="btn-mobile-hero btn-mobile-primary">
                <span>Explore Services</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
              <a href="/contact.html" class="btn-mobile-hero btn-mobile-secondary">
                <span>Contact Specialists</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Hero Visual: 3 Floating Animated Bubbles (Desktop) / Modern Card Grid (Mobile) -->
          <div class="hero-visual">
            <div class="hero-bubbles-cluster">
              
              <!-- Card 1: On-Site Services -->
              <div class="hero-bubble bubble-1 desktop-popup-trigger"
                data-popup-title="On-Site Services &amp; Products"
                data-popup-sub="for Paper / Board / Tissue Machines"
                data-popup-desc="Our certified engineers deliver precision on-site services — headbox tuning, roll alignment, nip testing, grinding &amp; coating, and steam-box optimization — keeping your paper machine line at peak performance."
                data-popup-link="/services"
                data-popup-link-label="Explore Services">
                <div class="bubble-desktop-content">
                  <img src="${paperMachineImg}" alt="On-Site Services" class="bubble-bg-img" />
                  <div class="bubble-overlay">
                    <div class="bubble-title">On-Site Services and Products</div>
                    <div class="bubble-sub">for Paper/Board/Tissue Machines</div>
                  </div>
                </div>
                <div class="bubble-mobile-content">
                  <div class="mobile-bubble-img-box">
                    <img src="${headboxImg}" alt="On-Site Services" class="mobile-bubble-img" />
                  </div>
                  <div class="mobile-bubble-text-box">
                    <div class="mobile-bubble-title">ON-SITE SERVICES</div>
                    <div class="mobile-bubble-sub">For Paper, Board & Tissue Machines</div>
                  </div>
                </div>
              </div>

              <!-- Card 2: High Quality Products -->
              <div class="hero-bubble bubble-2 desktop-popup-trigger"
                data-popup-title="High Quality Products"
                data-popup-sub="from World-wide Suppliers"
                data-popup-desc="We source and supply premium paper machine components globally — doctor blades, forming fabrics, press felts, roll covers, suction box covers, and specialist chemicals — ensuring quality you can trust."
                data-popup-link="/equipment"
                data-popup-link-label="Browse Products">
                <div class="bubble-desktop-content">
                  <img src="${qualityProductImg}" alt="High Quality Products" class="bubble-bg-img" />
                  <div class="bubble-overlay">
                    <div class="bubble-title">High Quality Products</div>
                    <div class="bubble-sub">from World-wide Suppliers</div>
                  </div>
                </div>
                <div class="bubble-mobile-content">
                  <div class="mobile-bubble-img-box">
                    <img src="${qualityProductImg}" alt="High Quality Products" class="mobile-bubble-img" />
                  </div>
                  <div class="mobile-bubble-text-box">
                    <div class="mobile-bubble-title">HIGH-QUALITY PRODUCTS</div>
                    <div class="mobile-bubble-sub">Global Sourcing & Supply</div>
                  </div>
                </div>
              </div>

              <!-- Card 3: Specialized Services / Equipment Renewal -->
              <div class="hero-bubble bubble-3 desktop-popup-trigger"
                data-popup-title="Specialized Services"
                data-popup-sub="from PMPRO and Partners"
                data-popup-desc="Beyond standard maintenance, we provide specialized engineering services through our expert network — CD profiling, roll refurbishment, headbox lip rebuilds, superfinishing, and customized solutions tailored to your machine."
                data-popup-link="/services"
                data-popup-link-label="View Specialized Services">
                <div class="bubble-desktop-content">
                  <img src="${specializedServiceImg}" alt="Specialized Services" class="bubble-bg-img" />
                  <div class="bubble-overlay">
                    <div class="bubble-title">Specialized Services</div>
                    <div class="bubble-sub">from PMPRO and Partners</div>
                  </div>
                </div>
                <div class="bubble-mobile-content bubble-mobile-wide">
                  <div class="mobile-bubble-img-box mobile-wide-img">
                    <img src="${specializedServiceImg}" alt="Equipment Renewal" class="mobile-bubble-img" />
                  </div>
                  <div class="mobile-bubble-text-box mobile-wide-text">
                    <div class="mobile-bubble-title">EQUIPMENT RENEWAL</div>
                    <div class="mobile-bubble-sub">Refurbishing & Upgrades</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Bouncing Scroll Down Indicator (Desktop Only) -->
        <a href="#servicesSection" class="scroll-indicator desktop-only-scroll" id="scrollDownBtn" aria-label="Scroll down to services">
          <span class="scroll-text">Explore Services</span>
          <div class="scroll-arrow-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </a>
      </section>

      <!-- Specialized On-Site Services Grid with Scroll-Reveal Fade Animation -->
      <section class="features-section" id="servicesSection">
        <div class="section-header reveal-on-scroll" data-delay="0">
          <span class="section-tag">Our Core Expertise</span>
          <h2 class="section-title">Specialized On-Site Services</h2>
          <p class="section-desc">Delivering advanced engineering solutions, condition testing, precision alignment, and preventive maintenance for paper machinery lines.</p>
        </div>

        <div class="cards-grid">
          
          <!-- Card 1: Headbox Service -->
          <div class="feature-card reveal-on-scroll" data-delay="0">
            <div class="card-img-wrapper">
              <img src="${headboxImg}" alt="Headbox service" class="card-img" loading="lazy" decoding="async" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Headbox service</h3>
              <p class="card-text">
                Headbox plays major role in paper machine line. Improve headbox performance to improve paper quality and runnability..
              </p>
              <a href="/services/headbox-service.html" class="btn-read-more" title="Headbox service details">
                <span>Read more..</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

          <!-- Card 2: Alignment Service -->
          <div class="feature-card reveal-on-scroll" data-delay="120">
            <div class="card-img-wrapper">
              <img src="${alignmentImg}" alt="Alignment service" class="card-img" loading="lazy" decoding="async" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Alignment service</h3>
              <p class="card-text">
                For better paper profile, better production line runnability, lower vibration and longer life time of machine components..
              </p>
              <a href="/services/alignment-service.html" class="btn-read-more" title="Alignment service details">
                <span>Read more..</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

          <!-- Card 3: Nip Test and Tuning -->
          <div class="feature-card reveal-on-scroll" data-delay="240">
            <div class="card-img-wrapper">
              <img src="${niptestImg}" alt="Nip test and tuning" class="card-img" loading="lazy" decoding="async" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Nip test and tuning</h3>
              <p class="card-text">
                To improve press/size press/machine calender nips, the nips need optimization by testing and tuning of the system..
              </p>
              <a href="/services/nip-test-tuning.html" class="btn-read-more" title="Nip test and tuning details">
                <span>Read more..</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

          <!-- Card 4: CD Profile System Service -->
          <div class="feature-card reveal-on-scroll" data-delay="0">
            <div class="card-img-wrapper">
              <img src="${steamboxImg}" alt="CD profile system service" class="card-img" loading="lazy" decoding="async" />
            </div>
            <div class="card-body">
              <h3 class="card-title">CD profile system service</h3>
              <p class="card-text">
                Optimizing cross-direction profile systems, actuator calibration, slice positioning, and moisture profile control for paper mills..
              </p>
              <a href="/services/cd-profile-system.html" class="btn-read-more" title="CD profile system details">
                <span>Read more..</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

          <!-- Card 5: Grinding and Coating Service -->
          <div class="feature-card reveal-on-scroll" data-delay="120">
            <div class="card-img-wrapper">
              <img src="${grindingImg}" alt="Grinding and coating service" class="card-img" loading="lazy" decoding="async" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Grinding and coating service</h3>
              <p class="card-text">
                Precision on-site roll grinding, surface superfinishing, thermal spray coating, and specialized protective roll treatments..
              </p>
              <a href="/services/grinding-coating-service.html" class="btn-read-more" title="Grinding and coating details">
                <span>Read more..</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

          <!-- Card 6: Other Service -->
          <div class="feature-card reveal-on-scroll" data-delay="240">
            <div class="card-img-wrapper">
              <img src="${otherServicesImg}" alt="Other service" class="card-img" loading="lazy" decoding="async" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Other service</h3>
              <p class="card-text">
                Equipment renewal, custom mechanical overhaul, vibration diagnostics, troubleshooting, and 24/7 emergency technical support..
              </p>
              <a href="/services/other-service.html" class="btn-read-more" title="Other service details">
                <span>Read more..</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-brand">
          <strong style="color: #ffffff; font-size: 1.3rem;">PMPRO Co., Ltd.</strong>
          <p>
            110/22 M.2, Soi Sriracha-Nongkhor 17/1 Surasak, Sriracha, Chonburi, Thailand 20110<br>
            Tel: +66 38 774205 | Fax: +66 38 774205
          </p>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/services/index.html">On-Site Service</a></li>
            <li><a href="/equipment/index.html">Machine/Equipment/Part</a></li>
            <li><a href="/contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>On-Site Services</h4>
          <ul>
            <li><a href="/services/headbox-service.html">Headbox Service</a></li>
            <li><a href="/services/alignment-service.html">Alignment Service</a></li>
            <li><a href="/services/nip-test-tuning.html">Nip Test & Tuning</a></li>
            <li><a href="/services/cd-profile-system.html">CD Profile System</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li>Tel: +66 38 774205</li>
            <li>Fax: +66 38 774205</li>
            <li><a href="/contact.html">Contact Key Personnel &rarr;</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} PMPRO Co., Ltd. All Rights Reserved.
      </div>
    </footer>
  `;

  initNavbarInteractions();
  initScrollRevealAnimations();
}

// Initialize Staggered Scroll Reveal Animation using IntersectionObserver
function initScrollRevealAnimations(): void {
  const cards = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
  if (!cards.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(() => {
              el.classList.add('is-revealed');
            }, delay);
            obs.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));
  } else {
    // Fallback if IntersectionObserver is not supported
    cards.forEach((card) => card.classList.add('is-revealed'));
  }
}

// Global Image Lightbox Modal Handler
function initImageLightbox(): void {
  let modal = document.getElementById('imageLightboxModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageLightboxModal';
    modal.className = 'image-lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-content-wrapper" id="lightboxContent">
        <button class="lightbox-close-btn" id="lightboxCloseBtn" aria-label="Close Lightbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img src="" alt="" class="lightbox-image" id="lightboxImg" />
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = document.getElementById('lightboxCloseBtn');
    const lightboxImg = document.getElementById('lightboxImg') as HTMLImageElement;
    const lightboxCaption = document.getElementById('lightboxCaption');

    const closeModal = () => {
      if (modal) modal.classList.remove('active');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeModal();
      }
    });

    // Make all gallery images and service card images clickable
    const attachClickListeners = () => {
      const zoomableElements = document.querySelectorAll<HTMLElement>(
        '.gallery-card, .gallery-img, .service-item-img-wrapper, .service-item-img'
      );

      zoomableElements.forEach((el) => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          let img: HTMLImageElement | null = null;
          if (el instanceof HTMLImageElement) {
            img = el;
          } else {
            img = el.querySelector('img');
          }

          if (img && lightboxImg && lightboxCaption && modal) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'PMPRO Engineering Photo';
            lightboxCaption.textContent = img.alt || '';
            lightboxCaption.style.display = img.alt ? 'block' : 'none';
            modal.classList.add('active');
          }
        });
      });
    };

    attachClickListeners();
  }
}


function initImageSkeletonLoader(): void {
  const images = document.querySelectorAll<HTMLImageElement>('img');

  images.forEach((img) => {
    const parent = img.closest<HTMLElement>(
      '.card-img-wrapper, .service-item-img-wrapper, .gallery-card, .product-card-img-wrapper, .equipment-img-wrapper, .personnel-avatar-wrapper, .service-detail-hero, .hero-bubble'
    );

    const handleLoaded = () => {
      if (parent) parent.classList.add('img-loaded');
      img.style.opacity = '1';
    };

    if (img.complete && img.naturalHeight !== 0) {
      handleLoaded();
    } else {
      img.addEventListener('load', handleLoaded);
      img.addEventListener('error', handleLoaded);
    }
  });
}

// Top Page Loading Progress Bar
function initPageProgressBar(): void {
  let bar = document.getElementById('pageProgressBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'pageProgressBar';
    document.body.prepend(bar);
  }

  bar.style.width = '70%';
  window.addEventListener('load', () => {
    if (bar) {
      bar.style.width = '100%';
      setTimeout(() => {
        bar.style.opacity = '0';
        setTimeout(() => bar.remove(), 400);
      }, 200);
    }
  });
}

// Bubble Popup Modal (Desktop Only)
function initBubblePopup(): void {
  // Only run on desktop
  if (window.matchMedia('(max-width: 900px)').matches) return;

  // Create modal element
  let modal = document.getElementById('bubblePopupModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'bubblePopupModal';
    modal.className = 'bubble-popup-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="bubble-popup-backdrop" id="bubblePopupBackdrop"></div>
      <div class="bubble-popup-card" id="bubblePopupCard">
        <button class="bubble-popup-close" id="bubblePopupClose" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="bubble-popup-img-wrapper">
          <img src="" alt="" class="bubble-popup-img" id="bubblePopupImg" />
          <div class="bubble-popup-img-overlay"></div>
        </div>
        <div class="bubble-popup-body">
          <div class="bubble-popup-sub" id="bubblePopupSub"></div>
          <h3 class="bubble-popup-title" id="bubblePopupTitle"></h3>
          <p class="bubble-popup-desc" id="bubblePopupDesc"></p>
          <a href="#" class="bubble-popup-btn" id="bubblePopupBtn">
            <span id="bubblePopupBtnLabel">Go</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const backdrop = document.getElementById('bubblePopupBackdrop');
  const closeBtn = document.getElementById('bubblePopupClose');
  const popupImg = document.getElementById('bubblePopupImg') as HTMLImageElement;
  const popupTitle = document.getElementById('bubblePopupTitle');
  const popupSub = document.getElementById('bubblePopupSub');
  const popupDesc = document.getElementById('bubblePopupDesc');
  const popupBtn = document.getElementById('bubblePopupBtn') as HTMLAnchorElement;
  const popupBtnLabel = document.getElementById('bubblePopupBtnLabel');

  const openPopup = (trigger: HTMLElement) => {
    const title = trigger.dataset.popupTitle || '';
    const sub = trigger.dataset.popupSub || '';
    const desc = trigger.dataset.popupDesc || '';
    const link = trigger.dataset.popupLink || '#';
    const linkLabel = trigger.dataset.popupLinkLabel || 'Go';
    const bgImg = trigger.querySelector<HTMLImageElement>('.bubble-bg-img');

    if (popupImg && bgImg) {
      popupImg.src = bgImg.src;
      popupImg.alt = bgImg.alt;
    }
    if (popupTitle) popupTitle.innerHTML = title;
    if (popupSub) popupSub.textContent = sub;
    if (popupDesc) popupDesc.textContent = desc;
    if (popupBtn) popupBtn.href = link;
    if (popupBtnLabel) popupBtnLabel.textContent = linkLabel;

    modal!.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    modal!.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Attach listeners to triggers
  const triggers = document.querySelectorAll<HTMLElement>('.desktop-popup-trigger');
  triggers.forEach((trigger) => {
    trigger.style.cursor = 'pointer';
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      // Only on desktop
      if (window.matchMedia('(max-width: 900px)').matches) return;
      openPopup(trigger);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  if (backdrop) backdrop.addEventListener('click', closePopup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) closePopup();
  });
}

// Check which page we are rendering
function initApp() {
  initPageProgressBar();

  const activePage = getCurrentPage();
  const navbarSlot = document.getElementById('navbar-slot');
  
  if (navbarSlot) {
    // Sub-page with navbar-slot
    navbarSlot.innerHTML = renderNavbar(activePage);
    initNavbarInteractions();
  } else {
    // Main index page
    renderHomePage();
  }

  // Initialize lightbox on all pages
  initImageLightbox();

  // Initialize bubble popup (desktop only)
  initBubblePopup();

  // Initialize skeleton shimmer transitions
  initImageSkeletonLoader();
}

// Run on load
document.addEventListener('DOMContentLoaded', initApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
}

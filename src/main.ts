import './style.css';
import { renderNavbar, initNavbarInteractions } from './navbar';

// Image Assets
import specializedServiceImg from './assets/specialized service.jpg';
import qualityProductImg from './assets/quality product.jpg';
import hbTest1Img from './assets/hb test1.jpg';
import headboxImg from './assets/services/headbox service.jpg';
import alignmentImg from './assets/services/alignment service.jpg';
import niptestImg from './assets/services/niptest service.jpg';

// Helper to determine the current active page
function getCurrentPage(): string {
  const path = window.location.pathname.toLowerCase();
  
  // On-Site Service subpages
  if (
    path.includes('headbox-service') ||
    path.includes('alignment-service') ||
    path.includes('nip-test') ||
    path.includes('cd-profile-system') ||
    path.includes('grinding-coating') ||
    path.includes('other-service') ||
    path.includes('onsite-service')
  ) {
    return 'onsite';
  }

  // Machine / Equipment / Part subpages
  if (
    path.includes('headbox-lips') ||
    path.includes('superfinishing') ||
    path.includes('blade-angle') ||
    path.includes('roll-and-cover') ||
    path.includes('cd-profiling') ||
    path.includes('machinery-water') ||
    path.includes('fabric-cleaner') ||
    path.includes('machine-equipment')
  ) {
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
      
      <!-- Hero Section -->
      <section class="page-hero">
        <div class="hero-container">
          <div class="hero-text">
            <h1 class="hero-title"><span>PM PRO</span></h1>
            <p class="hero-subtitle">
              PMPRO company was established in 2011 in Thailand by experienced specialists who used to work many years in paper mill and in a key international paper machine manufacturer/services company. Our mission is to supply the paper mill for high quality services, upgrade and rebuild e.g. condition testing, reconditioning/repairing, maintenance services, trouble shooting, equipment renewal, upgrade of the paper machineries. As well as to supply spare parts, rolls and machineries related to paper industries. Our customers are key paper, board, tissue and pulp mills in Thailand and South East Asia's countries. We work closely with our partners and our principles to deliver the best solutions and services to our customers.
            </p>
          </div>

          <div class="hero-visual">
            <div class="hero-image-card">
              <img src="${specializedServiceImg}" alt="PM PRO Specialized Service" class="hero-img" />
              <div class="hero-card-badge">
                <div>
                  <strong style="color: #006064; font-size: 0.95rem; display: block;">Specialized On-Site Team</strong>
                  <span style="color: #64748b; font-size: 0.8rem;">Expert engineering and technical support</span>
                </div>
                <span style="background: #e0f2f1; color: #00838f; padding: 4px 10px; border-radius: 20px; font-weight: 700; font-size: 0.75rem;">READY 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bouncing Scroll Down Indicator -->
        <a href="#servicesSection" class="scroll-indicator" id="scrollDownBtn" aria-label="Scroll down to services">
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
              <img src="${headboxImg}" alt="Headbox service" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Headbox service</h3>
              <p class="card-text">
                Headbox plays major role in paper machine line. Improve headbox performance to improve paper quality and runnability..
              </p>
              <a href="headbox-service.html" class="btn-read-more" title="Headbox service details">
                <span>Read more..</span>
              </a>
            </div>
          </div>

          <!-- Card 2: Alignment Service -->
          <div class="feature-card reveal-on-scroll" data-delay="120">
            <div class="card-img-wrapper">
              <img src="${alignmentImg}" alt="Alignment service" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Alignment service</h3>
              <p class="card-text">
                For better paper profile, better production line runnability, lower vibration and longer life time of machine components..
              </p>
              <a href="alignment-service.html" class="btn-read-more" title="Alignment service details">
                <span>Read more..</span>
              </a>
            </div>
          </div>

          <!-- Card 3: Nip Test and Tuning -->
          <div class="feature-card reveal-on-scroll" data-delay="240">
            <div class="card-img-wrapper">
              <img src="${niptestImg}" alt="Nip test and tuning" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Nip test and tuning</h3>
              <p class="card-text">
                To improve press/size press/machine calender nips, the nips need optimization by testing and tuning of the system..
              </p>
              <a href="nip-test-tuning.html" class="btn-read-more" title="Nip test and tuning details">
                <span>Read more..</span>
              </a>
            </div>
          </div>

          <!-- Card 4: CD Profile System Service -->
          <div class="feature-card reveal-on-scroll" data-delay="0">
            <div class="card-img-wrapper">
              <img src="${specializedServiceImg}" alt="CD profile system service" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">CD profile system service</h3>
              <p class="card-text">
                Optimizing cross-direction profile systems, actuator calibration, slice positioning, and moisture profile control for paper mills..
              </p>
              <a href="cd-profile-system.html" class="btn-read-more" title="CD profile system details">
                <span>Read more..</span>
              </a>
            </div>
          </div>

          <!-- Card 5: Grinding and Coating Service -->
          <div class="feature-card reveal-on-scroll" data-delay="120">
            <div class="card-img-wrapper">
              <img src="${qualityProductImg}" alt="Grinding and coating service" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Grinding and coating service</h3>
              <p class="card-text">
                Precision on-site roll grinding, surface superfinishing, thermal spray coating, and specialized protective roll treatments..
              </p>
              <a href="grinding-coating-service.html" class="btn-read-more" title="Grinding and coating details">
                <span>Read more..</span>
              </a>
            </div>
          </div>

          <!-- Card 6: Other Service -->
          <div class="feature-card reveal-on-scroll" data-delay="240">
            <div class="card-img-wrapper">
              <img src="${hbTest1Img}" alt="Other service" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Other service</h3>
              <p class="card-text">
                Equipment renewal, custom mechanical overhaul, vibration diagnostics, troubleshooting, and 24/7 emergency technical support..
              </p>
              <a href="other-service.html" class="btn-read-more" title="Other service details">
                <span>Read more..</span>
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
            <li><a href="index.html">Home</a></li>
            <li><a href="headbox-service.html">On-Site Service</a></li>
            <li><a href="headbox-lips.html">Machine/Equipment/Part</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>On-Site Services</h4>
          <ul>
            <li><a href="headbox-service.html">Headbox Service</a></li>
            <li><a href="alignment-service.html">Alignment Service</a></li>
            <li><a href="nip-test-tuning.html">Nip Test & Tuning</a></li>
            <li><a href="cd-profile-system.html">CD Profile System</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li>Tel: +66 38 774205</li>
            <li>Fax: +66 38 774205</li>
            <li><a href="contact.html">Contact Key Personnel &rarr;</a></li>
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

/**
 * Initialize Staggered Scroll Reveal Animation using IntersectionObserver
 */
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

// Check which page we are rendering
function initApp() {
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
}

// Run on load
document.addEventListener('DOMContentLoaded', initApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
}

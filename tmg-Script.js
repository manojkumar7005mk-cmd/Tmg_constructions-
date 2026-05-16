/* ============================================================
   TMG CONSTRUCTION — script
   Link in index.html (before </body>):
     <script src="tmg-script.js"></script>
   ============================================================ */

/* ===== CUSTOM CURSOR ===== */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .service-card, .gallery-item, .social-btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width      = '18px';
    cursor.style.height     = '18px';
    cursorRing.style.width  = '50px';
    cursorRing.style.height = '50px';
    cursorRing.style.borderColor = 'rgba(232,33,39,0.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width      = '12px';
    cursor.style.height     = '12px';
    cursorRing.style.width  = '36px';
    cursorRing.style.height = '36px';
    cursorRing.style.borderColor = 'var(--red)';
  });
});

/* ===== PAGE LOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 2000);
});

/* ===== STICKY NAVBAR ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scroll-top').classList.toggle('show', window.scrollY > 400);
});

/* ===== MOBILE HAMBURGER MENU ===== */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click',  () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ===== SCROLL TO TOP ===== */
document.getElementById('scroll-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('active');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const step   = target / (2000 / 16);   // ~2 s duration
  let cur = 0;
  const t = setInterval(() => {
    cur += step;
    if (cur >= target) {
      el.textContent = target + '+';
      clearInterval(t);
    } else {
      el.textContent = Math.floor(cur);
    }
  }, 16);
}

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-target]').forEach(animateCounter);
        statsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statsObserver.observe(statsSection);
}

/* ===== RIPPLE EFFECT ===== */
function addRipple(e) {
  const btn  = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(btn.offsetWidth, btn.offsetHeight) * 2;
  const x    = e.clientX - rect.left  - size / 2;
  const y    = e.clientY - rect.top   - size / 2;

  const ripple = document.createElement('span');
  ripple.className   = 'ripple';
  ripple.style.cssText = `width:${size}px; height:${size}px; left:${x}px; top:${y}px`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

document.querySelectorAll('.btn-primary, .btn-submit').forEach(btn => {
  btn.addEventListener('click', addRipple);
});

/* ===== CONTACT FORM (simulated submit) ===== */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
  btn.disabled  = true;

  setTimeout(() => {
    btn.innerHTML = '<i class="fa fa-check"></i> Sent!';
    document.getElementById('formSuccess').style.display = 'block';
    this.reset();

    setTimeout(() => {
      btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
      btn.disabled  = false;
      document.getElementById('formSuccess').style.display = 'none';
    }, 4000);
  }, 1800);
});

/* ===== STAGGER REVEAL DELAYS ===== */
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.1) + 's';
});
document.querySelectorAll('.gallery-item').forEach((item, i) => {
  item.style.transitionDelay = (i * 0.08) + 's';
});

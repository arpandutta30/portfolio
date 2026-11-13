/**
 * Arpan Dutta — Engineering Portfolio Client Engine
 * Lightweight, Clean & Dependency-Free
 * Features:
 * - Dark Navy / Warm Cream Theme Switcher with localStorage
 * - Accurate ScrollSpy Section Navigation (5 Links)
 * - Accessible Mobile Drawer Menu
 * - 1-Click Email Clipboard Copy with Toast
 * - Smooth Back-to-Top Navigation
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Theme Switcher (Dark Navy / Warm Cream Light Mode)
  // ---------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'portfolio-theme';
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function getSavedTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }

  // Sync icon with current theme
  applyTheme(getSavedTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // ---------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation
  // ---------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu() {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      navMenu.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    } else {
      navMenu.classList.add('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    }
  }

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    }
  }

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', function (event) {
      if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        closeMobileMenu();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 3. ScrollSpy: Dynamic Active Section Indicator (5 Sections)
  // ---------------------------------------------------------------------------
  const trackedSections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Highlight contact if scrolled to the very bottom
    if (scrollY + windowHeight >= docHeight - 30) {
      navLinks.forEach(function (link) {
        if (link.getAttribute('href') === '#contact') {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      return;
    }

    trackedSections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // ---------------------------------------------------------------------------
  // 4. One-Click Email Clipboard Copy with Toast
  // ---------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toastNotice = document.getElementById('toast-notice');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (!toastNotice) return;
    if (toastMessage) toastMessage.textContent = message;

    toastNotice.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      const email = 'arpandutta30@gmail.com';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function () {
          showToast('Email address copied to clipboard!');
        }).catch(function () {
          fallbackCopyText(email);
        });
      } else {
        fallbackCopyText(email);
      }
    });
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Email address copied to clipboard!');
    } catch (err) {
      showToast('Email: arpandutta30@gmail.com');
    }
    document.body.removeChild(textArea);
  }

  // ---------------------------------------------------------------------------
  // 5. Back-to-Top Floating Button
  // ---------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 280) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

})();

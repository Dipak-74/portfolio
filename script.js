/* =========================================================
   DIPAK GAIKWAD — DEVELOPER PORTFOLIO
   File: script.js
   Theme: Cyan / Orbitron / Dark Blue Cyberpunk
========================================================= */

"use strict";

/* ---------- 1. HELPER FUNCTIONS ---------- */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

function safeExternalURL(value) {
  if (!value || value === "#") return "";
  try {
    const url = new URL(value, window.location.href);
    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.href;
    }
  } catch (error) {
    console.warn("Invalid URL:", value);
  }
  return "";
}

/* ---------- 2. PROJECT DATA ---------- */
const projects = {
  fullstack: [
    {
      title: "Sales Platform",
      description: "A role-based sales application with authentication, access control and customer-facing workflows.",
      details: "A comprehensive enterprise sales management platform built with Java, Spring Boot, and MySQL. Implements secure role-based access control (RBAC), customer lifecycle tracking, and JWT-authenticated REST APIs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      features: [
        "JWT token authentication & RBAC",
        "Customer & lead management workflows",
        "RESTful backend APIs with MySQL database"
      ],
      liveDemo: "https://sales-platform-frontend.onrender.com",
      github: "https://github.com/Dipak-74"
    },
    {
      title: "Class Management System",
      description: "A web platform for organizing classes and academic workflows.",
      details: "A full-stack class management system featuring a responsive React frontend, robust Spring Boot REST services, and relational MySQL database storage.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      technologies: ["React.js", "Spring Boot", "MySQL"],
      features: [
        "Class scheduling and student enrollment",
        "Interactive responsive UI with real-time feedback",
        "REST API integration & MySQL persistence"
      ],
      liveDemo: "https://classmanagement-frontend.onrender.com/",
      github: "https://github.com/Dipak-74/ClassManagementSys"
    },
    {
      title: "SpeedX Bike Showroom Website",
      description: "Modern showroom website with product categories, booking flow, and rich visuals.",
      details: "An interactive digital showroom built to showcase premium bikes, model specifications, test ride bookings, and responsive modern layouts.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Dynamic bike catalog and specification viewer",
        "Interactive test ride booking flow",
        "Smooth animations and responsive layout"
      ],
      liveDemo: "https://speedxbike.netlify.app",
      github: "https://github.com/Dipak-74"
    },
    {
      title: "B2B Farm Website",
      description: "A business website connecting agricultural products with business buyers.",
      details: "A B2B commerce and showcase platform connecting farmers and agricultural producers directly with bulk commercial buyers and suppliers.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Agricultural product listings & bulk inquiries",
        "Supplier and buyer inquiry forms",
        "Mobile-optimized responsive design"
      ],
      liveDemo: "",
      github: "https://github.com/Dipak-74"
    }
  ],

  apps: [
    {
      title: "Rakshak AI",
      description: "A Flutter-based AI application designed to provide a focused, helpful mobile experience.",
      details: "A smart personal safety application exploring SOS workflows, shake detection, trigger-based alerts, and real-time emergency coordinates.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
      technologies: ["Flutter", "Dart", "AI", "Firebase"],
      features: [
        "Shake detection & emergency SOS trigger",
        "Real-time location sharing via GPS",
        "Firebase authentication & cloud sync"
      ],
      liveDemo: "",
      github: "https://github.com/Dipak-74"
    },
    {
      title: "ChatApp",
      description: "Private messaging app built with Flutter and Dart for secure communication.",
      details: "A private messaging app focused on simple conversations and a secure, approachable mobile experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
      technologies: ["Flutter", "Dart", "Firebase"],
      features: [
        "Private messaging",
        "Firebase integration",
        "Cross-platform Flutter UI"
      ],
      liveDemo: "https://msg-a7a9d.web.app",
      github: "https://github.com/Dipak-74"
    },
    {
      title: "No-Dues Form App",
      description: "A mobile form workflow that makes no-dues submissions and tracking simpler.",
      details: "A digital academic workflow app that digitizes the college clearance/no-dues process for students, staff, and department heads.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      technologies: ["Flutter", "Dart", "Forms", "Firebase"],
      features: [
        "Multi-department clearance approval flow",
        "Real-time status tracking for students",
        "Automated form tracking & role permissions"
      ],
      liveDemo: "https://insta-5474e.web.app/",
      github: "https://github.com/Dipak-74"
    },
    {
      title: "SecureCam",
      description: "A background video recording app that records video even when the phone screen is turned off.",
      details: "A background security and surveillance recording tool designed to capture background video discreetly and securely even when the mobile display is turned off or locked.",
      image: "img/securecam.jpg",
      technologies: ["Flutter", "Dart", "Background Service", "Firebase"],
      features: [
        "Background video recording with phone screen off",
        "Stealth security mode & discreet capture",
        "Firebase authentication & secure local storage"
      ],
      liveDemo: "https://loginregisterform-50dc6.web.app/",
      github: "https://github.com/Dipak-74"
    }
  ],

  agenticAI: [
    {
      title: "Agentic AI Project Generator — Multi-Agent System",
      description: "A multi-agent system concept for planning, coordinating, and generating complete project workflows.",
      details: "An advanced multi-agent orchestrator where specialized LLM agents collaborate on project architecture, code generation, testing, and deployment plans.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
      technologies: ["Python", "LLM", "Multi-Agent Systems", "Spring Boot"],
      features: [
        "Multi-agent prompt routing and coordination",
        "Automated project scaffolding and code generation",
        "Self-critique and validation pipeline"
      ],
      liveDemo: "",
      github: "https://github.com/Dipak-74"
    }
  ],

  dataAnalytics: [
    {
      title: "Data Analysis Project",
      description: "An interactive data analysis experience for exploring metrics, trends, and useful insights.",
      details: "An interactive data dashboard application providing data exploration, trend discovery, visualization charts, and statistical breakdowns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      technologies: ["Python", "Data Analysis", "Visualization"],
      features: [
        "Interactive KPI metrics and visual charts",
        "Statistical correlation and trend insights",
        "Responsive web data dashboard"
      ],
      liveDemo: "",
      github: "https://github.com/Dipak-74"
    }
  ],

  games: [
    {
      title: "Neon Survivor",
      description: "A focused survival game experience built around movement, timing, and escalating challenges.",
      details: "A fast-paced HTML5 Canvas survival game with neon aesthetics, particle effects, enemy wave progression, and high score tracking.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
      technologies: ["JavaScript", "Canvas", "Game Logic"],
      features: [
        "Fluid keyboard and touch movement controls",
        "Escalating enemy spawn algorithms",
        "Neon particle explosion effects and score saving"
      ],
      liveDemo: "https://games-4dqh.onrender.com",
      github: "https://github.com/Dipak-74"
    }
  ]
};

// Create dynamic "all" category with all 11 projects
projects.all = [
  ...projects.fullstack,
  ...projects.apps,
  ...projects.agenticAI,
  ...projects.dataAnalytics,
  ...projects.games
];

const categoryMeta = {
  all: {
    heading: "All Projects",
    icon: "fa-layer-group"
  },
  fullstack: {
    heading: "Full Stack & Web Projects",
    icon: "fa-globe"
  },
  apps: {
    heading: "App Development Projects",
    icon: "fa-mobile-screen-button"
  },
  agenticAI: {
    heading: "Agentic AI Projects",
    icon: "fa-robot"
  },
  dataAnalytics: {
    heading: "Data Analytics Projects",
    icon: "fa-chart-line"
  },
  games: {
    heading: "Game Development Projects",
    icon: "fa-gamepad"
  }
};


/* ---------- 3. PROJECT GALLERY & MODAL ---------- */

function initProjectGallery() {
  const projectGrid = $("#projectGrid");
  const projectCount = $("#projectCount");
  const projectsHeading = $("#projectsHeading");
  const categoryCards = $$(".category-card");
  const projectModal = $("#projectModal");

  if (!projectGrid) return;

  // Default to Full Stack
  let activeCategory = "fullstack";

  function renderProjects(category) {
    const items = projects[category];
    const meta = categoryMeta[category];

    if (!items || !meta) return;

    activeCategory = category;

    if (projectCount) {
      projectCount.textContent = `${items.length} Projects Found`;
    }

    if (projectsHeading) {
      projectsHeading.innerHTML = `<i class="fa-solid ${escapeHTML(meta.icon)}"></i> <span>${escapeHTML(meta.heading)}</span>`;
    }

    projectGrid.innerHTML = items.map((project, index) => {
      const demoBtn = project.liveDemo
        ? `<a href="${escapeHTML(project.liveDemo)}" class="btn-card-demo" target="_blank" rel="noopener noreferrer">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
           </a>`
        : "";

      const githubBtn = project.github
        ? `<a href="${escapeHTML(project.github)}" class="btn-card-github" target="_blank" rel="noopener noreferrer">
             <i class="fa-brands fa-github"></i> GitHub
           </a>`
        : "";

      const tagsHtml = (project.technologies || []).map(t => `<span>${escapeHTML(t)}</span>`).join("");

      return `
        <article class="project-card" data-category="${escapeHTML(category)}" data-index="${index}">
          <div class="project-image">
            <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" loading="lazy" />
          </div>

          <div class="project-body">
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>

            <div class="tags">
              ${tagsHtml}
            </div>

            <div class="card-actions">
              ${demoBtn}
              ${githubBtn}
              <button
                class="btn-card-details"
                type="button"
                data-category="${escapeHTML(category)}"
                data-project-index="${index}"
                aria-label="View details for ${escapeHTML(project.title)}"
              >
                Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Attach click listeners to Details buttons
    $$(".btn-card-details", projectGrid).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const cat = btn.dataset.category;
        const idx = Number(btn.dataset.projectIndex);
        openModal(cat, idx);
      });
    });

    // Also clicking anywhere on the card opens modal
    $$(".project-card", projectGrid).forEach((card) => {
      card.addEventListener("click", (e) => {
        // If clicked on an actual link/button, let it work
        if (e.target.closest("a") || e.target.closest("button")) return;
        const cat = card.dataset.category;
        const idx = Number(card.dataset.index);
        openModal(cat, idx);
      });
    });
  }

  function openModal(category, index) {
    if (!projectModal) return;

    const project = projects[category]?.[index];
    if (!project) return;

    const modalImage = $("#modalImage");
    const modalTitle = $("#modalTitle");
    const modalDescription = $("#modalDescription");
    const modalTags = $("#modalTags");
    const modalFeatures = $("#modalFeatures");
    const modalDemoBtn = $("#modalDemoBtn");
    const modalGithubBtn = $("#modalGithubBtn");

    if (modalImage) {
      modalImage.src = project.image;
      modalImage.alt = project.title;
    }

    if (modalTitle) {
      modalTitle.textContent = project.title;
    }

    if (modalDescription) {
      modalDescription.textContent = project.details || project.description;
    }

    if (modalTags) {
      modalTags.innerHTML = (project.technologies || [])
        .map(t => `<span class="modal-tag">${escapeHTML(t)}</span>`)
        .join("");
    }

    if (modalFeatures) {
      modalFeatures.innerHTML = (project.features || [])
        .map(f => `<li>${escapeHTML(f)}</li>`)
        .join("");
    }

    if (modalDemoBtn) {
      if (project.liveDemo) {
        modalDemoBtn.href = project.liveDemo;
        modalDemoBtn.style.display = "inline-flex";
      } else {
        modalDemoBtn.style.display = "none";
      }
    }

    if (modalGithubBtn) {
      if (project.github) {
        modalGithubBtn.href = project.github;
        modalGithubBtn.style.display = "inline-flex";
      } else {
        modalGithubBtn.style.display = "none";
      }
    }

    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Category tab clicks
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      if (!projects[category]) return;

      categoryCards.forEach((item) => {
        const isActive = item === card;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      renderProjects(category);
    });
  });

  // Modal close handlers
  if (projectModal) {
    $$("[data-modal-close]", projectModal).forEach((el) => {
      el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && projectModal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  // Render initial category
  renderProjects(activeCategory);
}


/* ---------- 4. MOBILE NAVIGATION ---------- */

function initNavigation() {
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");

  if (!menuToggle || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$(".nav-link", navLinks).forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });
}


/* ---------- 5. TYPED TEXT ANIMATION ---------- */

function initTypedText() {
  const typedTarget = $("#typedText");
  if (!typedTarget) return;

  if (typeof Typed !== "undefined") {
    new Typed("#typedText", {
      strings: [
        "Software Developer",
        "Java Full-Stack Developer",
        "Flutter App Developer",
        "Agentic AI Enthusiast"
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  } else {
    typedTarget.textContent = "Software Developer";
  }
}


/* ---------- 6. SCROLL REVEAL & ACTIVE NAV ---------- */

function initScrollEffects() {
  const reveals = $$(".reveal");
  const navLinks = $$(".nav-link");
  const sections = $$("section[id]");
  const backToTop = $("#backToTop");

  function onScroll() {
    const scrollPos = window.scrollY;

    // Reveal elements
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.classList.add("visible");
      }
    });

    // Back to top button
    if (backToTop) {
      if (scrollPos > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }

    // Active navigation highlight
    let currentId = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${currentId}`);
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run once initially

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}


/* ---------- 7. EMAILJS CONTACT FORM ---------- */

function initContactForm() {
  const contactForm = $("#contactForm");
  const formStatus = $("#formStatus");

  if (!contactForm) return;

  const PUBLIC_KEY = "3hExFz3l3xbrsW6Iv";
  const SERVICE_ID = "service_pi3pr93";
  const TEMPLATE_ID = "template_77nhdqr";

  if (typeof emailjs !== "undefined") {
    emailjs.init(PUBLIC_KEY);
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!formStatus) return;

    formStatus.textContent = "Sending your message...";
    formStatus.className = "form-note sending";

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    if (typeof emailjs === "undefined") {
      formStatus.textContent = "Email service unavailable. Please contact via direct email or LinkedIn.";
      formStatus.className = "form-note error";
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(() => {
        formStatus.textContent = "✓ Message sent successfully! I will get back to you soon.";
        formStatus.className = "form-note success";
        contactForm.reset();
        if (submitBtn) submitBtn.disabled = false;
        setTimeout(() => {
          formStatus.textContent = "";
        }, 6000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        formStatus.textContent = "✗ Message failed to send. Please reach out via LinkedIn or email directly.";
        formStatus.className = "form-note error";
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}


/* ---------- 8. CURRENT YEAR ---------- */

function initYear() {
  const yearEl = $("#currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}


/* ---------- 9. INIT ON DOM READY ---------- */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTypedText();
  initProjectGallery();
  initScrollEffects();
  initContactForm();
  initYear();
});

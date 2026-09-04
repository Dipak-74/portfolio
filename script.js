const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");
const revealElements = document.querySelectorAll(".reveal");
const backToTop = document.getElementById("backToTop");
const cursorGlow = document.getElementById("cursorGlow");
const loader = document.getElementById("loader");
const projects = {
  websites: [
    { title: "SpeedX Bike Showroom Website", description: "Modern showroom website with product categories, booking flow, and rich visuals.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80", technologies: ["HTML", "CSS", "JavaScript"], liveDemo: "https://speedxbike.netlify.app", github: "#", details: "A responsive showroom experience focused on product discovery, visual storytelling, and a clear booking journey.", features: ["Responsive product showcase", "Booking-focused user flow", "Rich visual presentation"] },
    { title: "Class Management System", description: "A structured web platform for organizing classes, learners, and day-to-day academic workflows.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80", technologies: ["HTML", "CSS", "JavaScript"], liveDemo: "https://classmanagement-frontend.onrender.com/", github: "#", details: "A practical management interface designed to keep class information and recurring academic tasks organized.", features: ["Class organization", "Responsive dashboard layout", "Clear workflow-focused UI"] },
    { title: "B2B Farm Website", description: "A professional business website connecting agricultural products with business-focused buyers.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80", technologies: ["HTML", "CSS", "JavaScript"], liveDemo: "#", github: "#", details: "A B2B agriculture experience focused on presenting products, building trust, and making business enquiries clear.", features: ["Business-first presentation", "Product discovery", "Responsive contact journey"] }
  ],
  apps: [
    { title: "Rakshak AI", description: "A Flutter-based AI application designed to provide a focused, helpful mobile experience.", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80", technologies: ["Flutter", "Dart", "AI"], liveDemo: "#", github: "#", details: "Rakshak AI is a mobile product concept combining Flutter UI with AI-assisted interactions.", features: ["Mobile-first experience", "AI-assisted interaction", "Clean Flutter interface"] },
    { title: "ChatApp", description: "Private messaging app built with Flutter and Dart for secure communication.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80", technologies: ["Flutter", "Dart", "Firebase"], liveDemo: "https://volatexchat.netlify.app/", github: "#", details: "A private messaging app focused on simple conversations and a secure, approachable mobile experience.", features: ["Private messaging", "Firebase integration", "Cross-platform Flutter UI"] },
    { title: "No-Dues Form App", description: "A mobile form workflow that makes no-dues submissions and tracking simpler.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80", technologies: ["Flutter", "Dart", "Forms"], liveDemo: "#", github: "#", details: "A streamlined app concept for collecting no-dues information through a clear, accessible form flow.", features: ["Structured form flow", "Mobile-friendly inputs", "Submission-focused design"] }
  ],
  games: [
    { title: "Neon Survivor", description: "A focused survival game experience built around movement, timing, and escalating challenges.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80", technologies: ["JavaScript", "Canvas", "Game Logic"], liveDemo: "#", github: "#", details: "Neon Survivor is a game concept centered on fast decisions, readable feedback, and progressive survival challenges.", features: ["Responsive controls", "Progressive challenge", "Score-based feedback"] }
  ],
  dataAnalytics: [
    { title: "Data Analysis Project — Netlify", description: "An interactive data analysis experience for exploring metrics, trends, and useful insights.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", technologies: ["Python", "Data Analysis", "Visualization"], liveDemo: "#", github: "#", details: "A data-focused project that presents analyzed information through clear visual summaries and insight-driven reporting.", features: ["Metric visualization", "Trend exploration", "Insight-focused reporting"] }
  ],
  agenticAI: [
    { title: "Agentic AI Project Generator — Multi-Agent System", description: "A multi-agent system concept for planning, coordinating, and generating complete project workflows.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80", technologies: ["Python", "LLM", "Multi-Agent Systems"], liveDemo: "#", github: "#", details: "An agentic AI project generator concept where specialized agents collaborate to turn an idea into a structured project plan.", features: ["Multi-agent coordination", "Task decomposition", "Structured project generation"] }
  ]
};

const categoryMeta = { websites: { heading: "Web Development Projects", icon: "fa-globe" }, apps: { heading: "App Development Projects", icon: "fa-mobile-screen-button" }, games: { heading: "Game Development Projects", icon: "fa-gamepad" }, dataAnalytics: { heading: "Data Analytics Projects", icon: "fa-chart-line" }, agenticAI: { heading: "Agentic AI Projects", icon: "fa-robot" } };
const projectGrid = document.getElementById("projectGrid");
const projectCount = document.getElementById("projectCount");
const projectsHeading = document.getElementById("projectsHeading");
const categoryCards = document.querySelectorAll(".category-card");
const projectModal = document.getElementById("projectModal");
let activeCategory = "websites";

const linkMarkup = (url, label, icon, className = "") => `<a href="${url}" class="btn-small ${className}"${url === "#" ? " aria-disabled=\"true\"" : " target=\"_blank\" rel=\"noopener\""}><i class="${icon}"></i> ${label}</a>`;

const renderProjects = (category) => {
  const items = projects[category];
  const meta = categoryMeta[category];
  projectCount.textContent = items.length;
  projectsHeading.innerHTML = `<i class="fa-solid ${meta.icon}"></i> ${meta.heading}`;
  projectGrid.innerHTML = items.map((project, index) => `<article class="project-card tilt reveal visible" style="--card-index: ${index}"><div class="project-image"><img src="${project.image}" alt="${project.title}" loading="lazy" /></div><div class="project-body"><h3>${project.title}</h3><p>${project.description}</p><div class="tags">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div><div class="card-actions">${linkMarkup(project.liveDemo, "Live Demo", "fa-solid fa-arrow-up-right-from-square")}${linkMarkup(project.github, "GitHub", "fa-brands fa-github", "btn-small-outline")}<button class="btn-small btn-details" type="button" data-project="${category}-${index}">Details <i class="fa-solid fa-arrow-right"></i></button></div></div></article>`).join("");
  projectGrid.querySelectorAll(".btn-details").forEach((button) => button.addEventListener("click", () => openModal(category, Number(button.dataset.project.split("-").pop()))));
  addTiltHandlers();
};

const openModal = (category, index) => {
  const project = projects[category][index];
  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalImage").alt = project.title;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.details;
  document.getElementById("modalTags").innerHTML = project.technologies.map((technology) => `<span>${technology}</span>`).join("");
  document.getElementById("modalFeatures").innerHTML = project.features.map((feature) => `<li>${feature}</li>`).join("");
  document.getElementById("modalActions").innerHTML = `${linkMarkup(project.liveDemo, "Live Demo", "fa-solid fa-arrow-up-right-from-square")} ${linkMarkup(project.github, "GitHub", "fa-brands fa-github", "btn-small-outline")}`;
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => { projectModal.classList.remove("open"); projectModal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };
categoryCards.forEach((card) => card.addEventListener("click", () => { activeCategory = card.dataset.category; categoryCards.forEach((item) => { item.classList.toggle("active", item === card); item.setAttribute("aria-selected", item === card ? "true" : "false"); }); renderProjects(activeCategory); }));
projectModal.querySelectorAll("[data-modal-close]").forEach((element) => element.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && projectModal.classList.contains("open")) closeModal(); });

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

if (window.Typed) {
  new Typed("#typedText", {
    strings: ["Web Developer", "App Developer", "Data Analyst"],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1300,
    loop: true
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".progress span");
        bars.forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });
        progressObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

const skillsWrap = document.querySelector("#skills .skills-wrap");
if (skillsWrap) {
  progressObserver.observe(skillsWrap);
}

const setActiveNav = () => {
  let currentSection = "";

  sections.forEach((section) => {
    const offsetTop = section.offsetTop - 140;
    if (window.scrollY >= offsetTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinkItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
};

const toggleBackToTop = () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};

window.addEventListener("scroll", () => {
  setActiveNav();
  toggleBackToTop();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const addTiltHandlers = () => document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});

addTiltHandlers();
renderProjects(activeCategory);

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 600);
  setActiveNav();
  toggleBackToTop();
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector("button");
  const originalText = btn.textContent;

  if (!window.emailjs) {
    alert("Email service is not loaded.");
    return;
  }

  // Replace these values with your real EmailJS keys.
  const PUBLIC_KEY = "3hExFz3l3xbrsW6Iv";
  const SERVICE_ID = "service_pi3pr93";
  const TEMPLATE_ID = "template_77nhdqr";

  emailjs.init(PUBLIC_KEY);
  btn.textContent = "Sending...";
  btn.disabled = true;

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
    () => {
      alert("✅ Message Sent Successfully!");
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    },
    () => {
      alert("❌ Failed to send message");
      btn.textContent = originalText;
      btn.disabled = false;
    }
  );
});

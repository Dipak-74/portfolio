const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");
const revealElements = document.querySelectorAll(".reveal");
const backToTop = document.getElementById("backToTop");
const cursorGlow = document.getElementById("cursorGlow");
const loader = document.getElementById("loader");

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

document.querySelectorAll("#skills .skills-list").forEach((container) => {
  progressObserver.observe(container);
});

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

document.querySelectorAll(".tilt").forEach((card) => {
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

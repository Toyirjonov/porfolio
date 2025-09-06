import data from "./data.js";

// DOM Elements
const time = document.querySelector("#time");
const template = document.querySelector("#portfolio-template");
const portfolioList = document.querySelector(".portfolio__list");
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navClose = document.querySelector("#nav-close");
const navLinks = document.querySelectorAll(".nav__link");
const portfolioFilters = document.querySelectorAll(".portfolio__filter");
const scrollUp = document.querySelector("#scroll-up");
const contactForm = document.querySelector("#contact-form");
const loadMoreBtn = document.querySelector("#load-more");

// Typed text animation
const typedTextElement = document.querySelector("#typed-text");
const typedTexts = [
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer",
  "React Developer",
  "UI/UX Enthusiast",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = typedTexts[textIndex];

  if (isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typedTexts.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

// Initialize typing animation
if (typedTextElement) {
  typeText();
}

// Set current year
if (time) {
  time.textContent = new Date().getFullYear();
}

// Navigation menu toggle
function toggleNav() {
  if (navMenu) {
    navMenu.classList.toggle("show-menu");
  }
}

function closeNav() {
  if (navMenu && window.innerWidth <= 768) {
    navMenu.classList.remove("show-menu");
  }
}

if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
}

if (navClose) {
  navClose.addEventListener("click", closeNav);
}

// Close navigation when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu && window.innerWidth <= 768) {
      navMenu.classList.remove("show-menu");
    }
  });
});

// Active navigation link
function setActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active-link"));
      if (navLink) {
        navLink.classList.add("active-link");
      }
    }
  });
}

// Portfolio data with categories and descriptions
const projectCategories = {
  "Healthy Recipe": "react",
  "Github user search": "app",
  "Todo-app": "app",
  Dessert: "react",
  Imtixon: "react",
  Pixora: "react",
  Unsplash: "app",
  "Product Shop": "react",
  "Context Shop": "react",
  CUsers: "app",
  "My Book | Book shop": "react",
  "Random user generator": "app",
  "Desserts | Exam": "landing",
  "Uzum market": "app",
  "Turistic Company": "landing",
  Uztube: "vanilla",
  "Music Player | Macan playlist": "vanilla",
  "Finsweet Agency": "landing",
  "Namanganliklar 24": "landing",
  "Tech book club": "landing",
  "Single Page Design Portfolio": "landing",
  "My Team": "landing",
  "Product card": "landing",
  "Stats-preview-card-component": "landing",
  "Blog-preview-card": "landing",
  "3-Column Preview Card": "landing",
  "Social Links": "landing",
  "Cafe Street": "landing",
  Power: "landing",
  "Recipe Page": "landing",
  AnsorMed: "landing",
  AkademNashr: "landing",
};

const projectDescriptions = {
  "Healthy Recipe":
    "A recipe browsing application with search, filters, and detailed cooking instructions.",
  "Github user search":
    "A modern user search application using GitHub API with real-time search functionality.",
  "Todo-app":
    "Interactive todo application with CRUD operations and local storage persistence.",
  Dessert:
    "Beautiful dessert showcase landing page with modern design and animations.",
  Imtixon:
    "Educational platform with interactive features and responsive design.",
  Pixora:
    "Image gallery application with advanced filtering and search capabilities.",
  Unsplash:
    "Photo sharing platform clone using Unsplash API with infinite scroll.",
  "Product Shop":
    "E-commerce application with product catalog and shopping cart functionality.",
  "Context Shop":
    "React-based shopping app demonstrating Context API for state management.",
  CUsers: "User management system with CRUD operations and modern UI design.",
  "My Book | Book shop":
    "Online bookstore with search, filtering, and shopping cart features.",
  "Random user generator":
    "Application generating random user profiles with customizable filters.",
  "Desserts | Exam":
    "Dessert catalog with filtering and modern card-based layout.",
  "Uzum market":
    "E-commerce marketplace clone with product browsing and cart functionality.",
  "Turistic Company":
    "Travel agency website with destination showcase and booking features.",
  Uztube:
    "Video sharing platform with custom player and playlist functionality.",
  "Music Player | Macan playlist":
    "Custom music player with playlist management and controls.",
  "Finsweet Agency":
    "Digital agency landing page with modern design and animations.",
  "Namanganliklar 24":
    "News website with article management and responsive layout.",
  "Tech book club":
    "Book club platform with member features and book recommendations.",
  "Single Page Design Portfolio":
    "Minimalist portfolio showcasing design projects and skills.",
  "My Team": "Team showcase page with member profiles and social links.",
  "Product card":
    "Product display components with hover effects and modern styling.",
  "Stats-preview-card-component":
    "Statistical data presentation card with visual elements.",
  "Blog-preview-card": "Blog post preview components with modern card design.",
  "3-Column Preview Card":
    "Three-column layout component with hover interactions.",
  "Social Links": "Social media links component with animated hover effects.",
  "Cafe Street":
    "Coffee shop landing page with menu display and contact features.",
  Power: "Fitness website with workout programs and membership features.",
  "Recipe Page":
    "Recipe sharing platform with ingredient lists and instructions.",
  AnsorMed: "Medical clinic website with appointment booking and services.",
  AkademNashr:
    "Educational institution website with course catalog and enrollment.",
};

const projectTags = {
  "Healthy Recipe": ["JavaScript", "React", "CSS3"],
  "Github user search": ["JavaScript", "API", "CSS3"],
  "Todo-app": ["JavaScript", "LocalStorage", "CSS3"],
  Dessert: ["HTML5", "CSS3", "JavaScript"],
  Imtixon: ["JavaScript", "CSS3", "HTML5"],
  Pixora: ["React", "API", "CSS3"],
  Unsplash: ["JavaScript", "API", "CSS3"],
  "Product Shop": ["JavaScript", "CSS3", "LocalStorage"],
  "Context Shop": ["React", "Context API", "CSS3"],
  CUsers: ["JavaScript", "CRUD", "CSS3"],
  "My Book | Book shop": ["JavaScript", "CSS3", "API"],
  "Random user generator": ["JavaScript", "API", "CSS3"],
  "Desserts | Exam": ["HTML5", "CSS3", "JavaScript"],
  "Uzum market": ["JavaScript", "E-commerce", "CSS3"],
  "Turistic Company": ["HTML5", "CSS3", "JavaScript"],
  Uztube: ["JavaScript", "Video API", "CSS3"],
  "Music Player | Macan playlist": ["JavaScript", "Audio API", "CSS3"],
  "Finsweet Agency": ["HTML5", "CSS3", "JavaScript"],
  "Namanganliklar 24": ["HTML5", "CSS3", "JavaScript"],
  "Tech book club": ["HTML5", "CSS3", "JavaScript"],
  "Single Page Design Portfolio": ["HTML5", "CSS3", "JavaScript"],
  "My Team": ["HTML5", "CSS3", "JavaScript"],
  "Product card": ["HTML5", "CSS3", "JavaScript"],
  "Stats-preview-card-component": ["HTML5", "CSS3"],
  "Blog-preview-card": ["HTML5", "CSS3"],
  "3-Column Preview Card": ["HTML5", "CSS3"],
  "Social Links": ["HTML5", "CSS3"],
  "Cafe Street": ["HTML5", "CSS3", "JavaScript"],
  Power: ["HTML5", "CSS3", "JavaScript"],
  "Recipe Page": ["HTML5", "CSS3", "JavaScript"],
  AnsorMed: ["HTML5", "CSS3", "JavaScript"],
  AkademNashr: ["HTML5", "CSS3", "JavaScript"],
};

// Portfolio display variables
let currentFilter = "all";
let displayedItems = 6;
const itemsPerLoad = 6;

// Create portfolio items
function createPortfolioItem(project, index) {
  if (!template) return null;

  const clone = template.content.cloneNode(true);
  const portfolioItem = clone.querySelector(".portfolio__item");
  const portfolioCounter = clone.querySelector(".portfolio__counter");
  const portfolioTitle = clone.querySelector(".portfolio__title");
  const portfolioDescription = clone.querySelector(".portfolio__description");
  const portfolioTags = clone.querySelector(".portfolio__tags");
  const linkGithub = clone.querySelector(".link-github");
  const linkVercel = clone.querySelector(".link-vercel");

  // Set category
  const category = projectCategories[project.title] || "app";
  portfolioItem.setAttribute("data-category", category);

  // Set counter (reverse order to show newest first)
  portfolioCounter.textContent = String(data.length - index).padStart(2, "0");

  // Set title
  portfolioTitle.textContent = project.title;

  // Set description
  portfolioDescription.textContent =
    projectDescriptions[project.title] ||
    "A modern web application built with latest technologies.";

  // Set tags
  const tags = projectTags[project.title] || ["HTML5", "CSS3", "JavaScript"];
  portfolioTags.innerHTML = "";
  tags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.className = "portfolio__tag";
    tagSpan.textContent = tag;
    portfolioTags.appendChild(tagSpan);
  });

  // Set links
  linkGithub.href = project.github;
  linkVercel.href = project.vercel;

  return clone;
}

// Display portfolio items
function displayPortfolioItems() {
  if (!portfolioList) return;

  portfolioList.innerHTML = "";

  let filteredData = data;
  if (currentFilter !== "all") {
    filteredData = data.filter((project) => {
      const category = projectCategories[project.title] || "app";
      return category === currentFilter;
    });
  }

  const itemsToShow = filteredData.slice(0, displayedItems);

  itemsToShow.forEach((project, index) => {
    const portfolioItem = createPortfolioItem(project, data.indexOf(project));
    if (portfolioItem) {
      portfolioList.appendChild(portfolioItem);
    }
  });

  // Update load more button visibility
  if (loadMoreBtn) {
    if (itemsToShow.length >= filteredData.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "block";
    }
  }

  // Animate portfolio items
  animatePortfolioItems();
}

// Portfolio filtering
function filterPortfolio(filter) {
  currentFilter = filter;
  displayedItems = itemsPerLoad;

  // Update active filter
  portfolioFilters.forEach((filterBtn) => {
    filterBtn.classList.remove("active-filter");
  });

  const activeFilter = document.querySelector(`[data-filter="${filter}"]`);
  if (activeFilter) {
    activeFilter.classList.add("active-filter");
  }

  displayPortfolioItems();
}

// Portfolio filter event listeners
portfolioFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const filterValue = filter.getAttribute("data-filter");
    filterPortfolio(filterValue);
  });
});

// Load more functionality
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    displayedItems += itemsPerLoad;
    displayPortfolioItems();
  });
}

// Animate portfolio items
function animatePortfolioItems() {
  const portfolioItems = document.querySelectorAll(".portfolio__item");
  portfolioItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";

    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".about__card, .skills__item, .contact__card"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("animate-up");
    }
  });
}

// Scroll events
function handleScroll() {
  setActiveLink();
  animateOnScroll();

  // Show/hide scroll up button
  if (scrollUp) {
    if (window.pageYOffset > 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }

  // Change navigation background on scroll
  const nav = document.querySelector(".nav");
  if (nav) {
    if (window.pageYOffset > 50) {
      nav.style.background = "rgba(23, 23, 40, 0.98)";
    } else {
      nav.style.background = "rgba(23, 23, 40, 0.95)";
    }
  }
}

window.addEventListener("scroll", handleScroll);

// Contact form handling
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert(
      `Thank you ${name}! Your message has been sent. I'll get back to you soon.`
    );
    contactForm.reset();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Initialize intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-up");
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".hero__content, .about__card, .skills__item, .portfolio__item, .contact__card"
  );

  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });
});

// Preloader (if you want to add one)
window.addEventListener("load", () => {
  // Hide preloader if exists
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

// Initialize the portfolio display
displayPortfolioItems();

// Particle animation for hero section (optional enhancement)
function createParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(124, 58, 237, 0.5);
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: float ${5 + Math.random() * 10}s infinite linear;
      z-index: -1;
    `;
    hero.appendChild(particle);
  }

  // Add particle animation CSS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px) translateX(0px); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// Initialize particles
// createParticles();

console.log(`Portfolio loaded with ${data.length} projects`);

// Matrix Animation with Skills Icons
class MatrixRain {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.resizeCanvas();

    // Skills symbols - using simple recognizable characters and symbols
    this.skillSymbols = [
      "H",
      "C",
      "J",
      "R",
      "S",
      "B",
      "G",
      "※",
      "F",
      "<>",
      "{}",
      "[]",
      "()",
      "=",
      "+",
      "-",
      "*",
      "/",
      "&",
      "#",
      "@",
      "$",
      "%",
      "^",
      "|",
      "\\",
      "~",
      "`",
      "?",
      "!",
      ":",
      ";",
      '"',
      "'",
      "0",
      "1",
    ];

    this.drops = [];
    this.fontSize = 18;
    this.columns = Math.floor(this.canvas.width / this.fontSize);

    this.initDrops();
    this.animate();

    // Resize handler
    window.addEventListener("resize", () => {
      this.resizeCanvas();
      this.columns = Math.floor(this.canvas.width / this.fontSize);
      this.initDrops();
    });
  }

  resizeCanvas() {
    this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight;
  }

  initDrops() {
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = {
        y: Math.random() * this.canvas.height,
        speed: 1 + Math.random() * 4,
        symbol:
          this.skillSymbols[
            Math.floor(Math.random() * this.skillSymbols.length)
          ],
        opacity: 0.3 + Math.random() * 0.7,
      };
    }
  }

  draw() {
    // Semi-transparent background for trailing effect
    this.ctx.fillStyle = "rgba(23, 23, 40, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Set font
    this.ctx.font = `${this.fontSize}px monospace`;
    this.ctx.textAlign = "center";

    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i];

      // Create gradient from purple to pink
      const gradient = this.ctx.createLinearGradient(
        0,
        drop.y - 50,
        0,
        drop.y + 50
      );
      gradient.addColorStop(0, `rgba(124, 58, 237, ${drop.opacity * 0.8})`);
      gradient.addColorStop(1, `rgba(255, 110, 199, ${drop.opacity * 0.6})`);

      this.ctx.fillStyle = gradient;

      // Draw symbol
      this.ctx.fillText(
        drop.symbol,
        i * this.fontSize + this.fontSize / 2,
        drop.y
      );

      // Move drop down
      drop.y += drop.speed;

      // Reset drop when it goes off screen
      if (drop.y > this.canvas.height) {
        drop.y = -this.fontSize;
        drop.speed = 1 + Math.random() * 4;
        drop.symbol =
          this.skillSymbols[
            Math.floor(Math.random() * this.skillSymbols.length)
          ];
        drop.opacity = 0.3 + Math.random() * 0.7;
      }
    }
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize Matrix Rain when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Small delay to ensure canvas is properly sized
  setTimeout(() => {
    new MatrixRain("matrix-canvas");
  }, 100);
});

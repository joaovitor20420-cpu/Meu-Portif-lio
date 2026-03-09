document.addEventListener("DOMContentLoaded", () => {
  // 1. Typing Effect for the Showcase
  const typingSpan = document.querySelector(".typewriter");
  if (typingSpan) {
    const textArray = [
      "A professional web developer",
      "A creative coder",
      "Always learning new tech",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = textArray[textIndex];

      if (isDeleting) {
        typingSpan.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingSpan.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500; // Pause before new word
      }

      setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000); // Initial delay
  }

  // 2. Dynamic Navbar Background & Active Link Update on Scroll
  const navbar = document.querySelector(".nav-bar-container");
  const sections = document.querySelectorAll("div[id]"); // Selects divs with an ID (home, sobre, habilidades)
  const navLinks = document.querySelectorAll(".nav-links a.nav-item");

  window.addEventListener("scroll", () => {
    // Navbar blur effect
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active Link Update
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // 3. Scroll Reveal for Sections (Intersection Observer)
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of element is visible
    },
  );

  hiddenElements.forEach((el) => observer.observe(el));
});

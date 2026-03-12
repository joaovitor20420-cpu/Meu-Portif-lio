document.addEventListener("DOMContentLoaded", () => {

  const translations = {
    pt: {
      "nav-item": {
        home: "Início",
        sobre: "Sobre mim",
        habilidades: "Habilidades",
        projetos: "Projetos",
        contato: "Contato",
      },
      "text": "Oi, eu sou João/&gt;",
      "typing-text": [
        "Desenvolvedor Web",
        "Criador de Experiências Digitais",
        "Sempre aprendendo novas tecnologias",
      ],
      "about-me-text": {
        "about-me-block": [
          {
            "code-bracket-start": "&lt;",
            "p": "Desenvolvedor apaixonado por criar interfaces modernas e interativas, transformando ideias complexas em experiências digitais intuitivas. Sempre buscando o equilíbrio perfeito entre design e código limpo.",
            "code-bracket-end": "/&gt;"
          },
          {
            "code-bracket-start": "&lt;",
            "p": "Desenvolvedor apaixonado por criar interfaces modernas e interativas, transformando ideias complexas em experiências digitais intuitivas. Sempre buscando o equilíbrio perfeito entre design e código limpo.",
            "code-bracket-end": "/&gt;"
          },
          {
            "code-bracket-start": "&lt;",
            "p": "Continuamente aprendendo e explorando novas tendências da área de tecnologia, como animação, design de componentes e arquiteturas escaláveis.",
            "code-bracket-end": "/&gt;"
          }
        ]
      },
      "section-titles": {
        "sobre": "Sobre mim",
        "habilidades": "Habilidades",
        "projetos": "Projetos"
      },
      "skills": {
        "html": "Linguagem responsável por definir o esqueleto de sites. Possuo amplo domínio.",
        "css": "Linguagem responsável por definir o estilo dos sites. Possuo amplo domínio.",
        "js": "Linguagem responsável por adicionar lógica aos sites. Possuo amplo domínio."
      },
      "projects": [
        { "title": "Projeto 1", "desc": "Descrição curta do projeto focada em HTML. Construído com semântica." },
        { "title": "Projeto 2", "desc": "Descrição focada em estilização com CSS, demonstração de layouts complexos." },
        { "title": "Projeto 3", "desc": "Uma aplicação robusta de Javascript provando interatividade real-time e assíncrona." },
        { "title": "Projeto 4", "desc": "Desenvolvimento focado em UX, aplicando animações e micro-interações fluidas." },
        { "title": "Projeto 5", "desc": "Outro projeto incrível desenvolvido visando a responsividade impecável." }
      ]
    },
    en: {
      "nav-item": {
        home: "Home",
        sobre: "About me",
        habilidades: "Skills",
        projetos: "Projects",
        contato: "Contact",
      },
      "text": "Hi, I'm João/&gt;",
      "typing-text": [
        "Web Developer",
        "Digital Experience Creator",
        "Always learning new technologies",
      ],
      "about-me-text": {
        "about-me-block": [
          {
            "code-bracket-start": "&lt;",
            "p": "Passionate developer about creating modern and interactive interfaces, transforming complex ideas into intuitive digital experiences. Always seeking the perfect balance between design and clean code.",
            "code-bracket-end": "/&gt;"
          },
          {
            "code-bracket-start": "&lt;",
            "p": "My specialty is Front-end development, using current technologies and methodologies to ensure performance, responsiveness, and accessibility in every project built.",
            "code-bracket-end": "/&gt;"
          },
          {
            "code-bracket-start": "&lt;",
            "p": "Continuously learning and exploring new trends in the technology area, such as animation, component design, and scalable architectures.",
            "code-bracket-end": "/&gt;"
          }
        ]
      },
      "section-titles": {
        "sobre": "About me",
        "habilidades": "Skills",
        "projetos": "Projects"
      },
      "skills": {
        "html": "Language responsible for defining the skeleton of websites. I have broad mastery.",
        "css": "Language responsible for defining the styling of websites. I have broad mastery.",
        "js": "Language responsible for adding logic to websites. I have broad mastery."
      },
      "projects": [
        { "title": "Project 1", "desc": "Short project description focused on HTML. Built with semantics." },
        { "title": "Project 2", "desc": "Description focused on styling with CSS, demonstration of complex layouts." },
        { "title": "Project 3", "desc": "A robust Javascript application proving real-time and asynchronous interactivity." },
        { "title": "Project 4", "desc": "Development focused on UX, applying fluid animations and micro-interactions." },
        { "title": "Project 5", "desc": "Another amazing project developed with impeccable responsiveness in mind." }
      ]
    }
  };

  // State for typing effect
  let currentLang = 'pt';
  let textArray = translations[currentLang]["typing-text"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimeout;

  const typingSpan = document.querySelector(".typewriter");

  window.changeLanguage = function(lang) {
    currentLang = lang;

    // Update active button styling
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang.toLowerCase()) {
            btn.classList.add('active');
        }
    });

    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keys = el.getAttribute('data-i18n').split('.');
      let translatedText = translations[lang];
      keys.forEach(key => {
        translatedText = translatedText[key];
      });
      if (translatedText) {
          el.innerHTML = translatedText;
      }
    });

    // Special case for id="text" since we didn't add data-i18n yet
    const textEl = document.getElementById("text");
    if(textEl && translations[lang]["text"]) {
        textEl.innerHTML = translations[lang]["text"];
    }

    // Update typing effect array and reset
    textArray = translations[lang]["typing-text"];
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typingSpan) {
        typingSpan.textContent = "";
    }
  };

  // 1. Typing Effect for the Showcase
  if (typingSpan) {
    function type() {
      // Safety check in case textArray changes and textIndex is out of bounds
      if (textIndex >= textArray.length) {
          textIndex = 0;
      }
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

      clearTimeout(typeTimeout);
      typeTimeout = setTimeout(type, typeSpeed);
    }

    typeTimeout = setTimeout(type, 1000); // Initial delay
  }

  // 1.5. Theme Switcher Logic
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.body.classList.add(currentTheme);
      if (currentTheme === 'light-mode') {
          toggleSwitch.checked = true;
      }
  }

  function switchTheme(e) {
      if (e.target.checked) {
          document.body.classList.add('light-mode');
          localStorage.setItem('theme', 'light-mode');
      } else {
          document.body.classList.remove('light-mode');
          localStorage.setItem('theme', 'dark-mode');
      }    
  }

  if (toggleSwitch) {
      toggleSwitch.addEventListener('change', switchTheme, false);
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
        } else {
          entry.target.classList.remove("show"); // Remove class to animate again on scroll
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of element is visible
    },
  );

  hiddenElements.forEach((el) => observer.observe(el));

  // 4. Showcase Parallax Effect
  const showcase = document.querySelector(".showcase-container");
  
  if (showcase) {
    showcase.addEventListener("mousemove", (e) => {
      const offsetX = (e.clientX / window.innerWidth - 0.5) * 20; // Max movement 20px
      const offsetY = (e.clientY / window.innerHeight - 0.5) * 20;
      
      // Move the background image position relative to center
      showcase.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
    });

    // Reset when mouse leaves
    showcase.addEventListener("mouseleave", () => {
      showcase.style.backgroundPosition = "center";
    });
  }
    // 5. Projects Carousel Logic
    // Lógica removida. O carrossel agora flui unicamente pelo scroll nativo do CSS (overflow-x: auto),
    // sem botões ou javascript forçando movimento.
});

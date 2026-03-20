document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    pt: {
      "nav-item": {
        home: "Início",
        sobre: "Sobre mim",
        habilidades: "Habilidades",
        projetos: "Projetos",
        contato: "Contato",
        hire: "Contrate-me",
      },
      "hero": {
        heading: "CONSTRUINDO<br>FUTUROS <span class='hero-highlight'>DIGITAIS.</span>",
        subtitle: "Arquiteto de sistemas digitais de alto desempenho, interfaces modernas e experiências digitais de alto nível.",
        cta: "VER PORTFÓLIO",
      },
      "typing-text": [
        "Desenvolvedor Web",
        "Criador de Experiências Digitais",
        "Sempre aprendendo novas tecnologias",
      ],
      "about": {
        label: "// SOBRE MIM",
        title: "A Engenharia por trás do Código",
        stat1: "Anos de experiência",
        stat2: "Projetos entregues",
      },
      "about-me-text": `Desenvolvedor apaixonado por criar <strong>interfaces modernas e interativas</strong>, transformando ideias complexas em <strong>experiências digitais intuitivas</strong>. Sempre buscando o equilíbrio perfeito entre <strong>design e código limpo</strong>.

                            Minha especialidade é o <strong>desenvolvimento Front-end</strong>, utilizando tecnologias e metodologias atuais para garantir <strong>performance</strong>, <strong>responsividade</strong> e <strong>acessibilidade</strong> em cada projeto construído.

                            Continuamente aprendendo e explorando novas tendências da área de tecnologia, como <strong>animação</strong>, <strong>design de componentes</strong> e <strong>arquiteturas escaláveis</strong>.`,
      "section-titles": {
        "sobre": "Sobre mim",
        "habilidades": "Ferramentas de Construção",
        "projetos": "Sistemas em Operação",
        "contato": "Iniciar Nova Conexão"
      },
      "skills": {
        "label": "// TECNOLOGIAS",
        "html": "Linguagem responsável por definir o esqueleto de sites. Possuo amplo domínio.",
        "css": "Linguagem responsável por definir o estilo dos sites. Possuo amplo domínio.",
        "js": "Linguagem responsável por adicionar lógica aos sites. Possuo amplo domínio."
      },
      "projects": {
        "label": "// PROJETOS",
        "0": { "title": "NEURAL_SHIELD V2", "desc": "Descrição curta do projeto focada em HTML. Construído com semântica." },
        "1": { "title": "Projeto 2", "desc": "Descrição focada em estilização com CSS, demonstração de layouts complexos." },
        "2": { "title": "Projeto 3", "desc": "Uma aplicação robusta de Javascript provando interatividade real-time e assíncrona." },
      },
      "contact": {
        "label": "// CONTATO",
        "subtitle": "Vamos trabalhar juntos!",
        "description": "Sinta-se à vontade para entrar em contato comigo caso tenha alguma oportunidade, ideia de projeto ou apenas queira dizer olá!",
        "form": {
            "firstname": "Primeiro Nome",
            "lastname": "Último Nome",
            "email": "Seu Email",
            "message": "Sua Mensagem",
            "button": "INICIAR PROTOCOLO →"
        }
      },
      "footer": {
        "rights": "Todos os direitos reservados."
      },
    },
    en: {
      "nav-item": {
        home: "Home",
        sobre: "About me",
        habilidades: "Skills",
        projetos: "Projects",
        contato: "Contact",
        hire: "Hire me",
      },
      "hero": {
        heading: "BUILDING<br>DIGITAL <span class='hero-highlight'>FUTURES.</span>",
        subtitle: "Architect of high-performance digital systems, modern interfaces, and top-level digital experiences.",
        cta: "VIEW PORTFOLIO",
      },
      "typing-text": [
        "Web Developer",
        "Digital Experience Creator",
        "Always learning new technologies",
      ],
      "about": {
        label: "// ABOUT ME",
        title: "The Engineering Behind the Code",
        stat1: "Years of experience",
        stat2: "Projects delivered",
      },
      "about-me-text": `Passionate developer dedicated to creating <strong>modern and interactive interfaces</strong>, transforming complex ideas into <strong>intuitive digital experiences</strong>. Always seeking the perfect balance between <strong>design and clean code</strong>.

                            My specialty is <strong>Front-end development</strong>, using current technologies and methodologies to ensure <strong>performance</strong>, <strong>responsiveness</strong>, and <strong>accessibility</strong> in every project built.

                            Continuously learning and exploring new trends in the technology area, such as <strong>animation</strong>, <strong>component design</strong>, and <strong>scalable architectures</strong>.`,
      "section-titles": {
        "sobre": "About me",
        "habilidades": "Build Tools",
        "projetos": "Systems in Operation",
        "contato": "Start New Connection"
      },
      "skills": {
        "label": "// TECHNOLOGIES",
        "html": "Language responsible for defining the skeleton of websites. I have broad mastery.",
        "css": "Language responsible for defining the styling of websites. I have broad mastery.",
        "js": "Language responsible for adding logic to websites. I have broad mastery."
      },
      "projects": {
        "label": "// PROJECTS",
        "0": { "title": "NEURAL_SHIELD V2", "desc": "Short project description focused on HTML. Built with semantics." },
        "1": { "title": "Project 2", "desc": "Description focused on styling with CSS, demonstration of complex layouts." },
        "2": { "title": "Project 3", "desc": "A robust Javascript application proving real-time and asynchronous interactivity." },
      },
      "contact": {
        "label": "// CONTACT",
        "subtitle": "Let's work together!",
        "description": "Feel free to reach out to me if you have any opportunities, project ideas, or just want to say hello!",
        "form": {
            "firstname": "First Name",
            "lastname": "Last Name",
            "email": "Your Email",
            "message": "Your Message",
            "button": "START PROTOCOL →"
        }
      },
      "footer": {
        "rights": "All rights reserved."
      }
    }
  };

  let currentLang = 'pt';
  let textArray = translations[currentLang]["typing-text"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimeout;
  const typingSpan = document.querySelector(".typewriter");

  window.changeLanguage = function(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang.toLowerCase()) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keys = el.getAttribute('data-i18n').split('.');
      let translatedText = translations[lang];
      for (const key of keys) {
        if (translatedText && translatedText[key] !== undefined) {
          translatedText = translatedText[key];
        } else {
          translatedText = null;
          break;
        }
      }
      if (translatedText) {
          el.innerHTML = translatedText;
      }
    });

    textArray = translations[lang]["typing-text"];
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typingSpan) {
        typingSpan.textContent = "";
    }
  };

  if (typingSpan) {
    function type() {
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
        typeSpeed = 2000; 
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500; 
      }
      clearTimeout(typeTimeout);
      typeTimeout = setTimeout(type, typeSpeed);
    }
    typeTimeout = setTimeout(type, 1000); 
  }

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

  const navbar = document.querySelector(".nav-bar-container");
  const sections = document.querySelectorAll("div[id]"); 
  const navLinks = document.querySelectorAll(".nav-links a.nav-item");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

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

  const hiddenElements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); 
        }
      });
    },
    {
      threshold: 0.2, 
    },
  );
  hiddenElements.forEach((el) => observer.observe(el));

  // Parallax background on hero
  const showcase = document.querySelector(".showcase-container");
  if (showcase) {
    showcase.addEventListener("mousemove", (e) => {
      const offsetX = (e.clientX / window.innerWidth - 0.5) * 15; 
      const offsetY = (e.clientY / window.innerHeight - 0.5) * 15;
      showcase.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
    });
    showcase.addEventListener("mouseleave", () => {
      showcase.style.backgroundPosition = "center";
    });
  }

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const submitBtn = contactForm.querySelector('.submit-btn');
          const originalText = submitBtn.innerText;
          submitBtn.innerText = currentLang === 'pt' ? 'Enviando...' : 'Sending...';
          submitBtn.disabled = true;
          const formData = new FormData(contactForm);
          fetch('https://formsubmit.co/ajax/joaovitor20420@gmail.com', {
              method: 'POST',
              body: formData,
              headers: {
                  'Accept': 'application/json'
              }
          })
          .then(response => {
              if (response.ok) {
                  alert(currentLang === 'pt' ? 'Mensagem enviada com sucesso! Entrarei em contato em breve.' : 'Message sent successfully! I will get back to you soon.');
                  contactForm.reset();
              } else {
                  alert(currentLang === 'pt' ? 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.' : 'An error occurred while sending the message. Please try again later.');
              }
          })
          .catch(error => {
              alert(currentLang === 'pt' ? 'Erro de conexão. Verifique sua internet.' : 'Connection error. Please check your internet.');
          })
          .finally(() => {
              submitBtn.innerText = originalText;
              submitBtn.disabled = false;
          });
      });
  }
});

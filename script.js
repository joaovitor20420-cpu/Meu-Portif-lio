document.addEventListener("DOMContentLoaded", () => {
  // 1. Typing Effect for the Showcase
  const typingSpan = document.querySelector(".typewriter");
  if (typingSpan) {
    const textArray = [
      "Desenvolvedor Web",
      "Criador de Experiências Digitais",
      "Sempre aprendendo novas tecnologias",
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
    // 5. Projects Carousel Logic (Infinite Netflix Style)
    const projectsContainer = document.querySelector('.projects-container');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    
    if (projectsContainer && leftBtn && rightBtn) {
        // Obter o tamanho do scroll baseado na largura de um item mais o gap
        const getScrollAmount = () => {
            const itemWidth = document.querySelector('.project-item').offsetWidth;
            const gap = 30; // Correspondente ao gap no CSS
            return itemWidth + gap;
        };

        const maxScrollLeft = projectsContainer.scrollWidth - projectsContainer.clientWidth;
        let isScrolling = false;

        const handleInfiniteScroll = (direction) => {
            if(isScrolling) return;
            isScrolling = true;
            
            projectsContainer.scrollBy({ left: direction * getScrollAmount(), behavior: 'smooth' });
            
            setTimeout(() => {
                if (direction === 1 && projectsContainer.scrollLeft >= projectsContainer.scrollWidth - projectsContainer.clientWidth - 10) {
                    // Chegou final da lista indo pra direita, move o primeiro pro final e 're-scrola'
                    projectsContainer.appendChild(projectsContainer.firstElementChild);
                    projectsContainer.scrollBy({ left: -getScrollAmount(), behavior: 'instant' });
                } else if (direction === -1 && projectsContainer.scrollLeft <= 0) {
                     // Chegou final da lista indo pra esquerda, move o ultimo pro inicio e 're-scrola'
                     projectsContainer.prepend(projectsContainer.lastElementChild);
                     projectsContainer.scrollBy({ left: getScrollAmount(), behavior: 'instant' });
                }
                isScrolling = false;
            }, 400); // Wait for smooth scroll to finish
        };


        leftBtn.addEventListener('click', () => {
            handleInfiniteScroll(-1);
        });

        rightBtn.addEventListener('click', () => {
             handleInfiniteScroll(1);
        });

        // Lógica de Autoplay (Rolar sozinho)
        let autoPlayInterval;

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                handleInfiniteScroll(1); // Rola para a direita a cada intervalo
            }, 3000); // 3 segundos
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        // Inicia o autoplay quando a página carrega
        startAutoPlay();

        // Pausa o autoplay quando o mouse entra no carrossel
        projectsContainer.parentElement.addEventListener('mouseenter', stopAutoPlay);
        
        // Retoma o autoplay quando o mouse sai do carrossel
        projectsContainer.parentElement.addEventListener('mouseleave', startAutoPlay);
    }
});

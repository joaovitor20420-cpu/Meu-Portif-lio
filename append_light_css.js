const fs = require('fs');
const cssToAppend = `
/* ============================================= */
/* LIGHT MODE POLISH - IMPROVED AESTHETICS */
/* ============================================= */

body.light-mode {
    --bg-color: #f4f6f8; 
    --text-color: #2b3440; 
    --primary-color: #02a382; 
    --secondary-color: #ffffff;
    --nav-bg: rgba(244, 246, 248, 0.85);
    --glass-bg: rgba(255, 255, 255, 0.65); 
    --glass-hover: rgba(255, 255, 255, 1);
    --hover-bg: rgba(2, 163, 130, 0.1); 
    --primary-glow: rgba(2, 163, 130, 0.25);
    --primary-glow-strong: rgba(2, 163, 130, 0.4);
}

/* Remove dark background image in light mode & add softer premium gradient */
.light-mode .showcase-container {
    background-image: radial-gradient(circle at top right, rgba(2, 163, 130, 0.1), transparent 40%), linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    box-shadow: inset 0 -150px 100px -50px var(--bg-color);
}

/* Fix navbar font colors so they show properly on the light background */
.light-mode .showcase-container h1,
.light-mode .nav-bar-container:not(.scrolled) ul li a,
.light-mode .nav-bar-container:not(.scrolled) .nav-logo {
    color: var(--text-color);
}
.light-mode .nav-bar-container:not(.scrolled) .lang-btn,
.light-mode .nav-bar-container:not(.scrolled) .lang-sep,
.light-mode .nav-bar-container:not(.scrolled) .slider i {
    color: var(--text-color);
}

/* Fix components glassmorphism on light mode so it doesn't look washed out */
.light-mode .about-me-block {
    background: var(--glass-bg);
    border-left: 2px dashed rgba(2, 163, 130, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), inset 0 0 20px rgba(2, 163, 130, 0.05);
}
.light-mode .about-me-block:hover {
    background: var(--glass-hover);
    border-left-color: var(--primary-color);
    box-shadow: -5px 0 15px rgba(2, 163, 130, 0.15);
}

.light-mode .skill-item, .light-mode .project-item {
    background: var(--glass-bg);
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}
.light-mode .skill-item:hover, .light-mode .project-item:hover {
    background: var(--glass-hover);
    box-shadow: 0 15px 35px rgba(2, 163, 130, 0.25), 0 0 15px var(--primary-glow);
    border-color: var(--primary-color);
}

.light-mode .hamburger-btn {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0,0,0,0.1);
}

/* Fix avatar glowing color */
.light-mode .img-tech-wrapper img {
    box-shadow: 0 0 20px rgba(2, 163, 130, 0.25);
    border-color: rgba(2, 163, 130, 0.5);
    filter: brightness(0.95) contrast(1.1);
}
.light-mode .img-tech-wrapper:hover img {
    box-shadow: 0 0 30px rgba(2, 163, 130, 0.4);
    filter: brightness(1) contrast(1.1);
}
/* Typing text color */
.light-mode .typing-text {
    color: var(--primary-color);
}
`;
fs.appendFileSync('c:\\Users\\ErmelindaSouza\\Desktop\\Projetos-Portifólio\\Portifólio\\style.css', '\\n' + cssToAppend);

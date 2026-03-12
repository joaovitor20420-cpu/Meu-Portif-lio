const fs = require('fs');
const cssToAppend = `
/* CSS Logo Stylings */
.nav-bar-container {
    align-items: center;
}
.nav-logo {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
    display: flex;
    align-items: center;
    margin-right: auto;
    letter-spacing: 0.05rem;
    z-index: 100;
    transition: 0.3s ease;
}
.nav-logo:hover {
    transform: scale(1.05);
}
.nav-logo .code-bracket-logo {
    color: var(--primary-color);
    font-family: monospace;
    font-weight: 800;
    font-size: 1.6rem;
}
.nav-logo .stylized-j {
    font-family: 'Poppins', sans-serif;
    color: var(--primary-color);
    font-style: italic;
    font-size: 1.9rem;
    margin-right: 1px;
    text-shadow: 0 0 10px var(--primary-glow);
}
.light-mode .nav-bar-container:not(.scrolled) .nav-logo {
    color: #ffffff;
}
`;
fs.appendFileSync('c:\\Users\\ErmelindaSouza\\Desktop\\Projetos-Portifólio\\Portifólio\\style.css', cssToAppend);

:root {
    --primary-color: #0066cc;
    --secondary-color: #004c99;
    --accent-color: #ff9900;
    --text-color: #333;
    --background-light: #f9f9f9;
    --background-dark: #333;
    --font-main: 'Arial', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

body {
    font-family: var(--font-main);
    line-height: 1.6;
    color: var(--text-color);
    font-size: 1rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.25rem;
}

/* Acessibilidade */
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 0.5rem;
    z-index: 100;
    transition: top 0.3s;
}

.skip-link:focus {
    top: 0;
}

:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Header e navegação */
header {
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9375rem 0;
}

.logo img {
    height: 3.125rem;
    width: auto;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 1.875rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    transition: color 0.3s ease;
}

.nav-links a:hover, .nav-links a:focus {
    color: var(--primary-color);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero section */
.hero-section {
    background-image: url('hero-background.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1.25rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 1.875rem;
}

/* Botões */
.cta-button {
    display: inline-block;
    background-color: var(--accent-color);
    color: white;
    padding: 0.75rem 1.875rem;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover, .cta-button:focus {
    background-color: #e68a00;
    transform: translateY(-3px);
}

/* Seções */
.section-padding {
    padding: 5rem 0;
}

.bg-light {
    background-color: var(--background-light);
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1.875rem;
    text-align: center;
    color: var(--primary-color);
}

/* Produtos */
.produtos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.875rem;
}

.produto-card {
    background-color: white;
    padding: 1.875rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.produto-card:hover {
    transform: translateY(-5px);
}

.produto-card i {
    color: var(--primary-color);
    margin-bottom: 1.25rem;
}

/* Formulários */
.form-group {
    margin-bottom: 1.25rem;
}

label {
    display: block;
    margin-bottom: 0.3125rem;
}

input, textarea, select {
    width: 100%;
    padding: 0.625rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
}

/* Footer */
footer {
    background-color: var(--background-dark);
    color: white;
    padding: 3.75rem 0 1.25rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    margin-bottom: 1.875rem;
}

.footer-section h3 {
    margin-bottom: 1.25rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.625rem;
}

.footer-section a {
    color: white;
    text-decoration: none;
}

.social-icons a {
    font-size: 1.5rem;
    margin-right: 0.9375rem;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: var(--accent-color);
}

.footer-bottom {
    text-align: center;
    margin-top: 2.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid #555;
}

/* WhatsApp button */
.whatsapp-button {
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    background-color: #25d366;
    color: white;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
    z-index: 1000;
}

.whatsapp-button:hover {
    transform: scale(1.1);
}

/* Back to Top Button */
#backToTop {
    position: fixed;
    bottom: 1.25rem;
    right: 5.625rem;
    background-color: var(--primary-color);
    color: white;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, background-color 0.3s ease;
    z-index: 1000;
}

#backToTop.show {
    opacity: 1;
}

#backToTop:hover {
    background-color: var(--secondary-color);
}

/* Responsividade */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 4.375rem;
        left: 0;
        width: 100%;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links li {
        margin: 0;
        text-align: center;
    }

    .nav-links a {
        display: block;
        padding: 0.9375rem;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .produtos-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 2rem;
    }

    .cta-button {
        padding: 0.625rem 1.25rem;
    }

    .whatsapp-button {
        width: 3.125rem;
        height: 3.125rem;
        font-size: 1.5rem;
    }
}

/* Animações */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-in forwards;
}

/* Melhorias de desempenho */
img {
    max-width: 100%;
    height: auto;
}

/* Estilos de impressão */
@media print {
    .no-print {
        display: none;
    }

    body {
        font-size: 12pt;
    }

    a[href]:after {
        content: " (" attr(href) ")";
    }
}

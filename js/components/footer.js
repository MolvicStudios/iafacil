/* ═══════════════════════════════════════════════════════════
   FOOTER COMPONENT - IAFACIL.HELP
   Footer reutilizable
   ═══════════════════════════════════════════════════════════ */

export function renderFooter(container) {
    container.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">
                        <span class="logo-icon">🤖</span>
                        <span class="logo-text">IAFACIL<span class="logo-accent">.HELP</span></span>
                    </div>
                    <p class="footer-desc">La plataforma más fácil para aprender Inteligencia Artificial sin programar.</p>
                </div>

                <div class="footer-col">
                    <h4 class="footer-title">Plataforma</h4>
                    <ul class="footer-links">
                        <li><a href="/pages/cursos/">Cursos</a></li>
                        <li><a href="/pages/herramientas/">Herramientas</a></li>
                        <li><a href="/pages/explorador.html">Explorador IA</a></li>
                        <li><a href="/pages/glosario.html">Glosario</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-title">Comunidad</h4>
                    <ul class="footer-links">
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Discord</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-title">Legal</h4>
                    <ul class="footer-links">
                        <li><a href="/pages/legal/privacidad.html">Privacidad</a></li>
                        <li><a href="/pages/legal/terminos.html">Términos</a></li>
                        <li><a href="/pages/legal/cookies.html">Cookies</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} IAFACIL.HELP — Hecho con 💜 para la comunidad hispanohablante</p>
            </div>
        </div>
    </footer>`;
}

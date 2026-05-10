import "../../../styles/footer/footer.css";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* esquerda */}
                <a id="logo-codando" className="logo-codando" href="/">
                    <img src="/img/codando-logo.svg" alt="logo-codando" />
                </a>

                {/* centro */}
                <p id="footer-text" className="footer-text">Todos os direitos reservados à Codando Community</p>

                <div className="footer-right">
                    {/* direita */}
                    <div id="footer-links" className="footer-links">
                        <a href="https://instagram.com/codando.community" target="_blank" rel="noopener noreferrer">
                            <img src="/img/logo-instagram.svg" alt="Instagram" className="logos-contato" />
                        </a>
                        <a href="https://linkedin.com/company/codando-community" target="_blank" rel="noopener noreferrer">
                            <img src="/img/logo-linkedin.svg" alt="Linkedin" className="logos-contato" />
                        </a>
                        <a href="https://discord.gg/4FUGptNTW" target="_blank" rel="noopener noreferrer">
                            <img src="/img/logo-discord.svg" alt="Discord" className="logos-contato" />
                        </a>
                        <a href="mailto:codando.community@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="/img/logo-email.svg" alt="E-mail" className="logos-contato" />
                        </a>
                    </div>
                    <span className="enter-contact">Entre em contato conosco</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
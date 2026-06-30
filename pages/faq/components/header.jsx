import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id="header" className={menuOpen ? "nav-open" : ""}>
            <nav className="navbar">
                <div className="container">
                    <a className="logo" href="/">
                        <img src="/img/codando-logo-icon.svg" alt="Logo" />
                    </a>

                    <ul className="nav-links">
                        <li><a href="/">QUEM SOMOS</a></li>
                        <li><a href="#pilares">NOSSOS PILARES</a></li>
                        <li><a href="#projetos">PROJETOS</a></li>
                        <li><a href="/pages/eventos/index.html">EVENTOS</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>

                    <button className="acessibility-icon">
                        <img src="/img/faq/acessibilidade.svg" alt="acessibilidade" />
                    </button>

                    <a href="#search-bar" className="header-search">
                    <img src="/img/faq/pesquise-sua-duvida.svg" alt="search-icon"/>
                    </a>

                    <button className="hamburger" onClick={toggleMenu} aria-label="Abrir menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>   
                </div>
            </nav>
        </header>
    );
}

export default Header;
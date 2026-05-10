import "./styles/hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                 <img src="/img/faq/cody.svg" alt="logo-cody" className="logo-cody" />
                <div className="hero-arrows"></div>
                <div className="hero-box">
                    <h1 className="hero-text">FAQ</h1>
                    <span className="hero-codando">codando</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
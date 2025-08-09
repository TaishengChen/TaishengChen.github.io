export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__left">
                <img src="/me.jpg" alt="Taisheng portrait" className="avatar" />
            </div>
            <div className="hero__right">
                <h1 className="hero__title">FULL-STACK<br/>DEVELOPER</h1>
                <p className="hero__subtitle">
                    I build reliable, scalable web applications — from database to deployment.
                </p>
                <div className="hero__actions">
                    <a className="btn btn--primary" href="/Taisheng-Chen-CV.pdf" target="_blank" rel="noreferrer">
                        Download Resume
                    </a>
                    <a className="btn btn--ghost" href="#projects">View My Work</a>
                </div>
            </div>
            <div className="hero__glow" aria-hidden />
        </div>
    );
}

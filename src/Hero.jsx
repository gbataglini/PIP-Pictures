import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <nav className="navbar">
          <img src="logo.png" alt="logo" />
          <button className="sign-btn">Sign In</button>
        </nav>
        <div className="hero-text">
          <div className="hero-text-content">
            <h1>LIGHTS, CAMERA, DISCOVER!</h1>
            <h3>YOUR MOVIE, YOUR WAY</h3>
          </div>
        </div>
        <div className="hero-desc">
          <p>
            Unleash Your Inner Film Critic: <br />
            <span className="hero-desc-span">Discover, Save,</span> and{" "}
            <span className="hero-desc-span">Share </span>
            your must-see movies
            <br /> with our easy-to-use platform!
          </p>
        </div>
        <div className="btn">
          <button className="join-btn">Join the Club</button>
        </div>
      </div>
      <div className="copyright">
        <p className="group">CFG 2023 - GROUP 03</p>
      </div>
    </section>
  );
}

export default Hero;

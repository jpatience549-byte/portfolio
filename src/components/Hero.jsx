import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Blur Effects */}
      <div className="blur blur-one"></div>
      <div className="blur blur-two"></div>

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <div className="availability">
            <span className="status-dot"></span>
            Available for Opportunities
          </div>

          <h1>
            Building Digital
            <br />
            Experiences That
            <br />
            <span>Matter.</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Patience Joseph</strong>, a passionate
            <strong> Full-Stack Developer</strong> dedicated to building modern,
            responsive, and scalable web applications using today's best
            frontend and backend technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Dedication</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-right">
          <div className="hero-card">
            <img src="/profile.jpg" alt="Patience Joseph" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
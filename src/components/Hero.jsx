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
            Available for opportunities
          </div>

          <h1>
          Software Engineer
          <br />
          & Full-Stack Developer
          <br />
          <span>Building for impact.</span>
          </h1>

          <p className="hero-description">
          Hi, I'm <strong>Patience Joseph</strong>, a software engineer and
          computer science undergraduate building maintainable web applications,
          REST APIs, and cross-platform products that solve practical problems.
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
              <h3>7+</h3>
              <span>Selected Projects</span>
            </div>

            <div className="stat-card">
              <h3>15+</h3>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <h3>UTC+1</h3>
              <span>West Africa Time</span>
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
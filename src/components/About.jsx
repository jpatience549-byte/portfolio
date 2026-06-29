import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-image">
          <div className="about-card">
            <img src="/profile.jpg" alt="Patience Joseph" />
          </div>
        </div>

        <div className="about-content">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            I am <span>Patience Joseph</span>
          </h2>

          <div className="line"></div>

          <p>
            I'm a <strong>Full-Stack Developer</strong> focused on building
            responsive, scalable, and user-friendly web applications that solve
            real business problems.
          </p>

          <p>
            My work combines modern frontend technologies with powerful backend
            solutions to create applications that are fast, reliable, and easy
            to use. I enjoy turning ideas into digital products with clean code,
            thoughtful design, and a strong focus on user experience.
          </p>

          <p>
            Beyond software development, I actively contribute to tech
            communities, create educational content, and believe that technology
            should be accessible to everyone through collaboration, continuous
            learning, and knowledge sharing.
          </p>

          <h3>WHAT I BRING</h3>

          <div className="about-grid">

            <div className="about-box">
              ✅ Responsive & Modern Web Applications
            </div>

            <div className="about-box">
              ✅ REST APIs & Backend Development
            </div>

            <div className="about-box">
              ✅ Clean, Maintainable Code
            </div>

            <div className="about-box">
              ✅ Continuous Learning & Team Collaboration
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
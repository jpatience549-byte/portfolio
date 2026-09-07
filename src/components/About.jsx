import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-image">
          <div className="about-card">
            <img className="about-img" src="/logo.jpg" alt="Patience Joseph" />
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
            I'm a <strong>Software Engineer and Full-Stack Developer</strong>
            focused on building responsive, scalable, and user-friendly
            applications that solve real business problems.
          </p>

          <p>
            My experience spans React, Next.js, Node.js, FastAPI, MongoDB,
            PostgreSQL, and C#/.NET. I connect frontend interfaces, backend
            services, databases, and authentication into reliable end-to-end
            products.
          </p>

          <p>
            I am currently a Software Developer Intern and a Computer Science
            undergraduate at Modibbo Adama University. I enjoy collaborative
            Git-based workflows, code reviews, testing, and continuous learning.
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
              ✅ Testing, Git & Agile Collaboration
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
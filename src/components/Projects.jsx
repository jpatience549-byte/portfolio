import "./projects.css";

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application built with React that displays real-time weather information and forecasts.",
    tech: "React • CSS • API",
  },

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, technical skills, and professional experience with a modern user interface.",
    tech: "React • CSS • JavaScript",
  },

  {
    title: "Student Management API",
    description:
      "A backend application for managing student records with CRUD operations and API endpoints.",
    tech: "Python • FastAPI • MongoDB",
  },

  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot capable of handling user queries and providing conversational responses.",
    tech: "Python • AI • API Integration",
  },

  {
    title: "Expense Tracker",
    description:
      "A web application that helps users track income, expenses, and spending habits through a clean dashboard.",
    tech: "React • JavaScript • Local Storage",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <span className="section-tag">
          FEATURED PROJECTS
        </span>

        <h2>
          Projects I've Built
        </h2>

        <p className="section-description">
          A selection of projects that demonstrate my experience building
          frontend interfaces, backend systems, and full-stack applications.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                Project Preview
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech-stack">
                  {project.tech}
                </span>

                <div className="project-buttons">
                  <a href="#">
                    Live Demo
                  </a>

                  <a href="#">
                    GitHub
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
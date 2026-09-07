import "./Skills.css";

const techStack = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "C# / .NET 8",
      "WPF",
      "Authentication",
      "Testing",
      "CRUD Operations",
      "Database Integration",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "Gradle",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <span className="section-tag">TECH STACK</span>

        <h2>Technologies I Work With</h2>

        <p className="section-description">
          I use modern technologies to design, build, test and deploy
          scalable web applications that deliver great user experiences.
        </p>

        <div className="skills-grid">
          {techStack.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>

              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="logo">
        PJ
      </div>

      <nav className="nav-container">
        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#certificates">Certificates</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </nav>

      <a href="#contact" className="hire-btn">
        Hire Me
      </a>

    </header>
  );
};

export default Navbar;
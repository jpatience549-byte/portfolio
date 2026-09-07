import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-left">
          <p className="footer-name">Patience Joseph</p>

          <p className="footer-description">
            Software engineer building maintainable full-stack applications,
            REST APIs, and cross-platform products from Nigeria.
          </p>
        </div>

        <div className="footer-right">
          <p className="footer-links-title">Quick Links</p>
          <nav className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

      </div>

      <div className="footer-bottom">
        © {year} Patience Joseph. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
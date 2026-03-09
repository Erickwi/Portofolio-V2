import { useState } from "react";
import "./Header.css";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "habilities", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header>
      <nav>
        <ul className={`nav-bar ${isMenuOpen ? "nav-active" : ""}`}>
          <div className="bg"></div>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => handleNavClick(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={`hamburger ${isMenuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

import React, {useState} from "react";
import hamburgerMenuIcon from "../../icons/hamburger-menu.svg"

const MainNav = () => {
  const [showMobileNav, mobileNavToggle] = useState(false);

  const toggleNavMenu = () => {
    mobileNavToggle(!showMobileNav);
  }

  const navItems = [
    {
      href: "#about",
      content: "Acerca de mí"
    },
    {
      href: "#skills",
      content: "Habilidades"
    },
    {
      href: "#recent-projects",
      content: "Proyectos Recientes"
    },
    {
      href: "#galery",
      content: "Galería"
    },
    {
      href: "#contact",
      content: "Contáctame"
    }
  ];

  const renderNavItems = () => {
    return navItems.map((item) => {
      return (
        <li key={item.href} className="main-nav__item main-nav-reveal">
          <a href={item.href} className="main-nav__link">{item.content}</a>
        </li>
      )
    })
  }

  return (
    <React.Fragment>
      {/* Menú para tamaño móvil */}
      <div className="mobile-nav-btn" onClick={toggleNavMenu}>
        <img src={hamburgerMenuIcon} alt="hamburger menu icon" />
      </div>
      <div className={`mobile-nav-container ${showMobileNav ? "mobile-nav-container-reveal" : ""}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav__list">
            <li className="mobile-nav__item"><a href="#about" className="mobile-nav__link">Acerca de mí</a></li>
            <li className="mobile-nav__item"><a href="#skills" className="mobile-nav__link">Habilidades</a></li>
            <li className="mobile-nav__item"><a href="#recent-projects" className="mobile-nav__link">Proyectos Recientes</a></li>
            <li className="mobile-nav__item"><a href="#gallery" className="mobile-nav__link">Galería</a></li>
            <li className="mobile-nav__item"><a href="#contact" className="mobile-nav__link">Contáctame</a></li>
          </ul>
        </nav>
      </div>

      {/* Menú para tamaño normal */}
      <nav className="main-nav main-nav-small">
        <ul className="main-nav__list">
          {renderNavItems()}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default MainNav;

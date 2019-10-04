import React, {useState} from "react";
import hamburgerMenuIcon from "../../icons/hamburger-menu.svg"

const MainNav = () => {
  const [showMobileNav, mobileNavToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNavMenu = () => {
    mobileNavToggle(!showMobileNav);
  }

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    setScrollPosition(scrollY);
  });

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
      href: "#gallery",
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

  const renderMobileNavItems = () => {
    return navItems.map(item => {
      return (
        <li key={item.href}
          onClick={() => mobileNavToggle(false)}
          className="mobile-nav__item"
        >
          <a href={item.href} className="mobile-nav__link">{item.content}</a>
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
            {renderMobileNavItems()}
          </ul>
        </nav>
      </div>

      {/* Menú para tamaño normal */}
      <nav className={`main-nav ${scrollPosition >= 250 && "main-nav-small"}`}>
        <ul className="main-nav__list">
          {renderNavItems()}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default MainNav;

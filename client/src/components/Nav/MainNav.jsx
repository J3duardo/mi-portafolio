import React, {useState} from "react";
import hamburgerMenuIcon from "../../icons/hamburger-menu.svg";
import {connect} from "react-redux";
import {scrollToSection} from "../../redux/actions";

const MainNav = (props) => {
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
      content: "Fotografía"
    },
    {
      href: "#web-development",
      content: "Desarrollo Web"
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
        <li 
          key={item.href}
          className="main-nav__item main-nav-reveal"
          onClick={() => props.setSelectedSection(item.href)}
        >
          <span className="main-nav__link" style={{cursor: "pointer"}}>{item.content}</span>
        </li>
      )
    })
  }

  const renderMobileNavItems = () => {
    return navItems.map(item => {
      return (
        <li key={item.href}
          onClick={() => {
            mobileNavToggle(false);
            props.setSelectedSection(item.href)
          }}
          className="mobile-nav__item"
        >
          <span className="mobile-nav__link" style={{cursor: "pointer"}}>{item.content}</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedSection: (sectionId) => {
      dispatch(scrollToSection(sectionId))
    }
  }
}

export default connect(null, mapDispatchToProps)(MainNav);

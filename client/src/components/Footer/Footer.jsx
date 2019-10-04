import React from "react";
import githubLogo from "../../icons/github-logo.svg";
import facebookLogo from "../../icons/facebook-logo.svg";
import behanceLogo from "../../icons/behance.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info-container">
        <p className="footer__text">Desarrollado por Jesús Guzmán &copy; {new Date().getFullYear()} Todos los derechos reservados</p>
        <div
          className="fb-share-button"
          data-href="https://jegq-portafolio.herokuapp.com/"
          data-layout="button_count"
          data-size="large"
        >
        </div>
        <nav className="footer__icons-container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://github.com/J3duardo" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="Github logo" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a href="https://www.facebook.com/jesus.e.guzman.q/" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={facebookLogo} alt="Facebook logo" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a href="https://www.behance.net/JEduardo_/" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={behanceLogo} alt="behance logo" className="footer__icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

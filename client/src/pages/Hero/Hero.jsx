import React from 'react';
import MainNav from "../../components/Nav/MainNav";
import DownArrow from "../../icons/down-arrow.svg";
import {connect} from "react-redux";
import {scrollToSection} from "../../redux/actions";
import {sectionScroller} from "../../utils/scroller";

const Hero = (props) => {
  //Hacer scroll a la sección About
  if(props.selectedSection === "#about") {
    sectionScroller("#about", props.setSelectedSection) 
  }

  return (
    <header className="hero-section">
      <MainNav />
      <div className="hero-text">
        <h1 className="hero-text__title main-title-reveal">Jesús Guzmán</h1>
        <h2 className="hero-text__subtitle hero-text__subtitle--1 secondary-title-reveal">Desarrollador Full Stack</h2>
        <h2 className="hero-text__subtitle hero-text__subtitle--1 secondary-title-reveal">Fotógrafo</h2>
        <h2 className="hero-text__subtitle hero-text__subtitle--3 secondary-title-reveal">Editor Audiovisual</h2>
      </div>

      <div className="picture-container">
        <picture className="hero-background">
          <source srcSet="https://res.cloudinary.com/dzytlqnoi/image/upload/v1564447967/portafolio-hero-section/hero-large_rx2fgr.jpg" media="(min-width: 1400px)" className="hero-background__img" alt="Fortín de La Galera"/>
          <source srcSet="https://res.cloudinary.com/dzytlqnoi/image/upload/v1564447949/portafolio-hero-section/hero-medium_v16elq.jpg" media="(min-width: 600px)" className="hero-background__img" alt="Fortín de La Galera"/>
          <img src="https://res.cloudinary.com/dzytlqnoi/image/upload/v1564447921/portafolio-hero-section/hero-small_ywsgoq.jpg" className="hero-background__img" alt="Fortín de La Galera"/>
        </picture>
      </div>

      <div className="hero-overlay"></div>

      <div
        id="hero-arrow"
        className="main-nav__link hero-arrow arrow-reveal"
        onClick={() => props.setSelectedSection("#about")}
      >
        <p>Continuar</p>
        <img src={DownArrow} alt="down arrow icon"/>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedSection: state.selectedSection.selectedSection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedSection: (sectionId) => {
      dispatch(scrollToSection(sectionId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);

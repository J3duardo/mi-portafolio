import React from "react";
import {connect} from "react-redux";
import {scrollToSection} from "../../redux/actions";
import {sectionScroller} from "../../utils/scroller";

const About = (props) => {

  //Hacer scroll a la sección About
  if(props.selectedSection === "#about") {
    sectionScroller("#about", props.setSelectedSection)
  }

  return (
    <section className="about" id="about">
    <article className="about__info">
      <h2 className="about__title">Acerca de mí</h2>
      <div className="about__content">
        <div className="about__text-container">
          <p className="about__text">Ingeniero, con una curiosidad innata por la naturaleza, la ciencia y los números. Entre mis pasiones están la fotografía, el postprocesado, el VFX, el motion graphics y el mundo audiovisual en general. Durante mis años como estudiante de ingeniería, aunque a manera de hobby, me desarrollé como fotógrafo aficionado utilizando una simple compacta de 8 megapíxels, y con el pasar el tiempo mi pasión por la fotografía creción hasta convertirse prácticamente en mi segunda profesión.</p>
          <p className="about__text">Además de la fotografía y el mundo audiovisual, desarrollé un creciente interés por el amplio mundo de las teconologías web, dedicándome de lleno durante varios años al aprendizaje de las distintas tecnologías web, tanto frontend como backend, hasta convertirme actualmente en desarrollador freelance a tiempo completo.</p>
        </div>
        <picture className="about__img-container">
          <source srcSet="/img/about-me-cuadrada.jpg" media="(max-width: 650px)" className="about__img"/>
          <img src="/img/about-me.jpg" alt="me" className="about__img"/>
        </picture>
      </div>
    </article>
  </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

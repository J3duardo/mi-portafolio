import React from 'react';
import projectsData from "./data.json";
import WebProject from './WebProject.jsx';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import {connect} from "react-redux";
import {scrollToSection} from "../../redux/actions";
import {sectionScroller} from "../../utils/scroller"; 

const WebProjects = (props) => {
  const data = projectsData;

  const projects = () => data.map(item => {
    return <WebProject key={item.title} data={item} />
  });

  //Hacer scroll a la sección Projects
  if(props.selectedSection === "#web-development") {
    sectionScroller("#web-development", props.setSelectedSection)
  }

  return (
    <section className="web-development" id="web-development">
      <article className="web-development__info">
        <h2 className="web-development__title">Proyectos Web</h2>
        <AliceCarousel
          items={projects()}
          autoPlayInterval={4000}
          autoPlayDirection="ltr"
          autoPlay={true}
          duration={900}
          mouseDragEnabled={true}
          stopAutoPlayOnHover={false}
          buttonsDisabled={true}
          dotsDisabled={false}
          playButtonEnabled
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(WebProjects);

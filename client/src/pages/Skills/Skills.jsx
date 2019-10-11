import React, {useState} from "react";
import iconLeftArrow from "../../icons/left-arrow.svg";
import iconRightArrow from "../../icons/right-arrow.svg";
import slidesData from "./slidesData.json";
import {connect} from "react-redux";
import {scrollToSection} from "../../redux/actions";
import {sectionScroller} from "../../utils/scroller";

const Skills = (props) => {
  const [activeContent, setActiveContent] = useState("1");
  const [activeImg, setActiveImg] = useState(1);
  
  const slides = slidesData;
  const renderSlides = () => {
    return slides.map((slide, i) => {
      return (
        <img
          key={i}
          className={`${slide.className} ${slide.active === activeImg && "show"}`}
          src={slide.src}
          alt={slide.alt}
        />
      )
    });
  }

  //Generar las pestañas
  const createTabs = () => {
    const tabsContent = [
      {
        id: "1",
        content: "Fotografía"
      },
      {
        id: "2",
        content: "Retoque Fotográfico"
      },
      {
        id: "3",
        content: "Motion Graphics"
      },
      {
        id: "4",
        content: "Desarrollo Web"
      }
    ];

    const tabs = tabsContent.map(tab => {
      return (
        <h3
          key={tab.id}
          id={tab.id}
          onClick={(e) => setActiveTab(e)}
          className={`skills__tab tab-${tab.id} ${activeContent === tab.id && "skills__active-tab"}`}
        >
          {tab.content}
        </h3>
      )
    });

    return tabs;
  }

  //Mostrar la pestaña activa
  const setActiveTab = (e) => {
    const tabIndex = e.target.id;
    setActiveContent(tabIndex);
  }

  //Mostrar la imagen activa en el slider
  const showImg = (e) => {
    if(e.target.id === "leftArrow") {
      setActiveImg(activeImg - 1);
      if(activeImg <= 1) {
        setActiveImg(9)
      }
    }

    if(e.target.id === "rightArrow") {
      setActiveImg(activeImg + 1);
      if(activeImg >= 9) {
        setActiveImg(1)
      }
    }
  }

  //Hacer scroll a la sección Skills
  if(props.selectedSection === "#skills") {
    sectionScroller("#skills", props.setSelectedSection)
  } 

  return (
    <section className="skills" id="skills">
      <article className="skills__info">
        <h2 className="skills__title">Habilidades</h2>

        {/* Pestañas para mostrar el contenido */}
        <div className="skills__tabs">
          {createTabs()}
        </div>

        {/* Fotografía */}
        <div className="skills__imgs-container">
          <div className={`skills__img ${activeContent === "1" && "skills__active-img"}`}>
            <h3 className="skills__skill-title skills__skill-title--1">Fotografía</h3>
            <div style={{display: `${activeContent === "1" ? "flex" : "none"}`}} className="arrows-container show-arrows">
              <img
                className="arrow left-arrow"
                id="leftArrow"
                src={iconLeftArrow}
                onClick={(e) => showImg(e)}
                alt="left arrow icon"
              />
              <img
                className="arrow right-arrow"
                id="rightArrow"
                src={iconRightArrow}
                onClick={(e) => showImg(e)}
                alt="right arrow icon"
              />
            </div>
            <p 
              className="img-number"
              style={{display: `${activeContent === "1" ? "block" : "none"}`}}
            >
              {`${activeImg}/${slides.length}`}
            </p>
            <div className="skills__img-slider" id="slider">
              {renderSlides()}
            </div>
          </div>

          {/* Retoque */}
          <div className={`skills__img ${activeContent === "2" && "skills__active-img"}`}>
            <h3 className="skills__skill-title skills__skill-title--2">Retoque</h3>
            <img src="/img/after.jpg" alt="Paisaje" />
            <div className="skills__text">
              <p>Después...</p>
            </div>
          </div>

          {/* Motion graphics */}
          <div className={`skills__img ${activeContent === "3" && "skills__active-img"}`}>
            <h3 className="skills__skill-title skills__skill-title--3">Motion Graphics</h3>
            <video
              src="/img/post/motion-graphics-optimized.mp4"
              poster="/img/post/poster.jpg"
              autoPlay
              playsInline
              loop
              preload=""
              muted
              className="skills__video"
            >
            </video>
          </div>

          {/* Desarrollo web */}
          <div className={`skills__img ${activeContent === "4" && "skills__active-img"}`}>
            <h3 className="skills__skill-title skills__skill-title--2">Tecnologías Web</h3>
            <div className="skills__img-web-icons-container">
              <div className="skills__img-web-icon">
                <img src="/img/dev-icons/react.png" alt="react icon"/>
                <p>ReactJS</p>
                <div className="skills__skill-level">
                  <div className="skills__skill-level-bar">
                    <div 
                      style={{width: "90%"}}
                      className={`skills__skill-level-bar-fill ${activeContent === "4" && "bar-reveal"}`}
                    >
                    </div>
                  </div>
                  <span>90%</span>
                </div>
              </div>
              <div className="skills__img-web-icon">
                <img src="/img/dev-icons/nodejs.png" alt="nodejs icon"/>
                <p>NodeJs</p>
                <div className="skills__skill-level">
                  <div className="skills__skill-level-bar">
                    <div 
                      style={{width: "80%"}} 
                      className={`skills__skill-level-bar-fill ${activeContent === "4" && "bar-reveal"}`}
                    >
                    </div>
                  </div>
                  <span>80%</span>
                </div>
              </div>
              <div className="skills__img-web-icon">
                <img src="/img/dev-icons/mongodb.png" alt="mongodb icon"/>
                <p>MogoDB</p>
                <div className="skills__skill-level">
                  <div className="skills__skill-level-bar">
                    <div 
                      style={{width: "75%"}}
                      className={`skills__skill-level-bar-fill ${activeContent === "4" && "bar-reveal"}`}
                    >
                    </div>
                  </div>
                  <span>75%</span>
                </div>
              </div>
              <div className="skills__img-web-icon">
                <img src="/img/dev-icons/css3.png" alt="css3 icon"/>
                <p>CSS3</p>
                <div className="skills__skill-level">
                  <div className="skills__skill-level-bar">
                    <div 
                      style={{width: "95%"}}
                      className={`skills__skill-level-bar-fill ${activeContent === "4" && "bar-reveal"}`}
                    >
                    </div>
                  </div>
                  <span>95%</span>
                </div>
              </div>
              <div className="skills__img-web-icon">
                <img src="/img/dev-icons/sass.png" alt="sass icon"/>
                <p>Sass</p>
                <div className="skills__skill-level">
                  <div className="skills__skill-level-bar">
                    <div 
                      style={{width: "90%"}}
                      className={`skills__skill-level-bar-fill ${activeContent === "4" && "bar-reveal"}`}
                    >
                    </div>
                  </div>
                  <span>90%</span>
                </div>
              </div>
              <div className="skills__img-web-icon">
                <img src="/img/dev-icons/javascript.png" alt="javascript icon"/>
                <p>JavaScript</p>
                <div className="skills__skill-level">
                  <div className="skills__skill-level-bar">
                    <div 
                      style={{width: "80%"}} 
                      className={`skills__skill-level-bar-fill ${activeContent === "4" && "bar-reveal"}`}
                    >
                    </div>
                  </div>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
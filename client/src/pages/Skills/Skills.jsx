import React, {useState} from "react";
import iconLeftArrow from "../../icons/left-arrow.svg";
import iconRightArrow from "../../icons/right-arrow.svg";
import slidesData from "./slidesData.json";

const Skills = () => {
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

  return (
    <section className="skills" id="skills">
      <article className="skills__info">
        <h2 className="skills__title">Habilidades</h2>

        {/* Pestañas para mostrar el contenido */}
        <div className="skills__tabs">
          <h3
            id="1"
            onClick={(e) => setActiveTab(e)}
            className={`skills__tab tab-1 ${activeContent === "1" && "skills__active-tab"}`}
          >
            Fotografía
          </h3>
          <h3
            id="2"
            onClick={(e) => setActiveTab(e)}
            className={`skills__tab tab-2 ${activeContent === "2" && "skills__active-tab"}`}
          >
            Retoque Fotográfico
          </h3>
          <h3
            id="3"
            onClick={(e) => setActiveTab(e)}
            className={`skills__tab tab-3 ${activeContent === "3" && "skills__active-tab"}`}
          >
            Motion Graphics
          </h3>
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
            <p className="img-number">{`${activeImg}/${slides.length}`}</p>
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
        </div>
      </article>
    </section>
  );
}

export default Skills;
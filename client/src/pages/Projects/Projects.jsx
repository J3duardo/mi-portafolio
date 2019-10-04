import React, {useState} from "react";
import projectsData from "../../projects-imgs-data.json";
import Project from "./Project.jsx";
import iconClose from "../../icons/close.svg"
import {connect} from "react-redux";
import {clearSelectedImg} from "../../redux/actions";
import Spinner from "../../components/Spinner/Spinner.jsx";

const Projects = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const isLoadingHandler = (val) => {
    setIsLoading(val);
  }

  const projectsDB = projectsData;

  const renderProjects = () => {
    return projectsDB.map(project => {
      return (
        <Project key={project.name} projectData={project} />
      )
    })
  }

  return (
    <section className="recent-projects" id="recent-projects">
      <h2 className="recent-projects__title">Proyectos Recientes</h2>
      <article className="projects-container">
        {renderProjects()}
      </article>

      {props.selectedImage && 
        <div className="img-full-width-container" style={{display: "flex", flexDirection: "column"}}>
          <div className="img-full-width">
            <picture className="imagenPantallaCompleta">
              <source
                onLoad={(e) => {
                    e.target.parentElement.style.opacity = 1;
                    isLoadingHandler(false)
                  }
                }                
                srcSet={props.selectedImage.urlLarge}
                media="(min-width: 1400px)"
                className="project__img"
                alt="full screen"
              />
              <source
                onLoad={(e) => {
                    e.target.parentElement.style.opacity = 1;
                    isLoadingHandler(false)
                  }
                }
                srcSet={props.selectedImage.urlMedium}
                media="(min-width: 600px)"
                className="project__img"
                alt="full screen"
              />
              <img
                onLoad={(e) => {
                    e.target.parentElement.style.opacity = 1;
                    isLoadingHandler(false)
                  }
                }
                srcSet={props.selectedImage.urlSmall}
                className="project__img"
                alt="full screen"
              />
            </picture>
            <Spinner show={isLoading} />
            <img
              onClick={() => {
                  props.closeImage();
                  isLoadingHandler(true)
                }
              }
              src={iconClose} alt="close icon"
              title="Close image"
              className="img-close"
              style={{opacity: `${isLoading ? "0" : "1"}`, zIndex: "30"}}
            />
          </div>
        </div>
      }
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedImage: state.selectedImage.selectedImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeImage: () => {
      dispatch(clearSelectedImg())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

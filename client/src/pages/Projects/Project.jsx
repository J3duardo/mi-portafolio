import React, {useState} from "react";
import locationIcon from "../../icons/location.svg";
import Gallery from "./Gallery";

const Project = (props) => {
  const [toggleGallery, setToggleGallery] = useState(false);

  const toggleGalleryHandler = () => {
    setToggleGallery(!toggleGallery)
  }

  const {name, title, description, category, location, backgroundImg, galleryImgs} = props.projectData
  return (
    <div className={`project ${name}`}>
      <div className="project__content" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImg})`}}>
        <div className="project__info">
          <div className="project__text">
          <h3>{title}<span>{category}</span></h3>
          <p>{description}</p>
          <button
            onClick={() => toggleGalleryHandler()}
            className="show-gallery">
              {!toggleGallery ? "Ver más" : "Ver menos"}
          </button>
          </div>

          <div className="project__location">
            <div className="project__location-city">
              <img src={locationIcon} alt="Location icon" />
              <h4>{location.city}</h4>
            </div>
            <p className="project__location-state">{location.state}</p>
            <p className="project__location-country">{location.country}</p>
          </div>
        </div>
      </div>

      {/* Galería del proyecto */}
      <Gallery gallery={galleryImgs} projectName={name} toggleGallery={toggleGallery}/>
    </div>
  );
}

export default Project;

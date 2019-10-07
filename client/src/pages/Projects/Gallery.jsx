import React from "react";
import GalleryImg from "./GalleryImg";

const Gallery = (props) => {
  const galleryNum = props.projectName.split("-")[1];

  const renderImages = () => {
    return props.gallery.map((el, i) => {
      return <GalleryImg key={i} data={el} galleryNum={galleryNum} />
    })
  }

  return (
    <div
      className={`project__gallery project__gallery--${galleryNum} ${props.toggleGallery && "project__gallery--show"}`}
    >
      {renderImages()}
    </div>
  );
}

export default Gallery;

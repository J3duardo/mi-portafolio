import React from "react";
import galleryData from "./galleryData.json";
import GalleryItem from "./GalleryItem.jsx";
import {connect} from "react-redux";
import {scrollToSection} from "../../redux/actions";
import {sectionScroller} from "../../utils/scroller";

const Gallery = (props) => {
  const galleryItems = galleryData;

  const renderGalleryItems = () => {
    return galleryItems.map(item => {
      return <GalleryItem key={item.id} data={item} />
    })
  }

  //Hacer scroll a la sección Gallery
  if(props.selectedSection === "#gallery") {
    sectionScroller("#gallery", props.setSelectedSection)
  } 

  return (
    <section className="gallery" id="gallery">
      <article className="gallery__container">
        <div className="gallery__grid">
          {renderGalleryItems()}
        </div>
      </article>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedSection: (sectionId) => {
      dispatch(scrollToSection(sectionId))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSection: state.selectedSection.selectedSection
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

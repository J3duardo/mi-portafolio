import React from "react";
import galleryData from "./galleryData.json";
import GalleryItem from "./GalleryItem.jsx";

const Gallery = () => {
  const galleryItems = galleryData;

  const renderGalleryItems = () => {
    return galleryItems.map(item => {
      return <GalleryItem key={item.id} data={item} />
    })
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

export default Gallery;

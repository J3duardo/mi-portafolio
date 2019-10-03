import React, {useState} from "react";
import diaphragmIcon from "../../icons/diaphragm.svg";
import stopwatchIcon from "../../icons/stopwatch.svg";
import isoIcon from "../../icons/iso.svg";
import Spinner from "../../components/Spinner/Spinner";

const GalleryItem = (props) => {
  const [hoverImg, setHoverImg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const mouseEnterHandler = () => {
    setHoverImg(true)
  }

  const mouseLeaveHandler = () => {
    setHoverImg(false)
  }

  const isLoadingHandler = (val) => {
    setIsLoading(val);
  }

  const {id, title, src, alt, aperture, speed, iso} = props.data;

  return (
    <div
      className={`gallery__img gallery__img--${id}`}
      onMouseEnter={(e) => mouseEnterHandler(e)}
      onMouseLeave={(e) => mouseLeaveHandler(e)}
    >
      <div className={`gallery__exif-data ${hoverImg && "exifHover"}`}>
        <p className="exif-title">Datos Exif</p>
        <div className="aperture">
          <img className="icon" src={diaphragmIcon} alt="lens aperture icon"/>
          <p>1/{aperture}</p>
        </div>
        <div className="speed">
          <img className="icon" src={stopwatchIcon} alt="speed icon"/>
          <p>{speed}</p>
        </div>
        <div className="iso">
          <img className="icon" src={isoIcon} alt="iso icon"/>
          <p>{iso}</p>
        </div>
      </div>
      <h3 className="gallery__img-title">{title}</h3>
      <img
        style={{opacity: 0}}
        className={`imagen ${hoverImg && "imgHover"}`}
        src={src}
        alt={alt}
        onLoad={(e) => {
            e.target.style.opacity = 1;
            isLoadingHandler(false)
          }
        }
      />
      <Spinner show={isLoading} />
    </div>
  );
}

export default GalleryItem;

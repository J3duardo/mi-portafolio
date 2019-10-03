import React from "react";
import expandIcon from "../../icons/expand.svg";
import {connect} from "react-redux";
import {selectImg} from "../../redux/actions";

const GalleryImg = (props) => {
  const selectedHandler = (imgData) => {
    props.selectImg(imgData)
  }

  return (
    <div onClick={() => selectedHandler(props.data)} className={`project__img-${props.galleryNum} project__img-container`}>
      <img src={props.data.thumb} alt="galery thumb"/>
      <div  onClick={() => selectedHandler(props.data)} className="img-hover">
        <p>Ver en pantalla completa</p>
        <img src={expandIcon} alt="full-screen icon" />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectImg: (data) => {
      dispatch(selectImg(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(GalleryImg);
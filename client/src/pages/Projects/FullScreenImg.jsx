import React from "react";

const FullScreenImg = (props) => {
  return (
    <React.Fragment>
      <source srcSet={props.data.urlLarge} media="(min-width: 1400px)" className="project__img" alt="Crepúsculo 1" />
      <source srcSet={props.data.urlMedium} media="(min-width: 600px)" className="project__img" alt="Crepúsculo 1" />
      <img srcSet={props.data.urlSmall} className="project__img" alt="Crepúsculo 1" />
    </React.Fragment>
  );
}

export default FullScreenImg;

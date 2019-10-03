import React from "react";
import "./spinner.css";

const Spinner = (props) => {
  return (
    <React.Fragment>
      {props.show && 
        <div className="la-ball-clip-rotate la-2x">
          <div></div>
        </div>     
      }
    </React.Fragment>
  );
}

export default Spinner;
import React from "react";
//import "./style.css"



const TextMarquee = (props) => {
  const {elements} = props;

  
  return (
    <div className="marquee">
        <div className="marquee-text scroll">
          {elements? elements : ""}
        </div>
        <div className="marquee-text scroll">
          {elements? elements : ""}
        </div>
    </div>
  );
};

export default TextMarquee;

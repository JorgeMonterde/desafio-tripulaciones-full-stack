import React from "react";
import Marquee from "react-fast-marquee";
//import "./style.css"



const TextMarquee = () => {




  
  return (
    <div className="marquee">
      {/* <Marquee speed={200} pauseOnHover={true}> */}
        <div className="marquee-text scroll">
{/*       <h3>Ahorro Silencio Durabilidad Confort Sostenible</h3> */}          
          <h3 className="banner">Ahorro</h3>
          <h3 className="banner">Silencio</h3>
          <h3 className="banner">Durabilidad</h3>
          <h3 className="banner">Confort</h3>
          <h3 className="banner">Sostenible</h3>
        </div>
        <div className="marquee-text scroll">
          <h3 className="banner">Ahorro</h3>
          <h3 className="banner">Silencio</h3>
          <h3 className="banner">Durabilidad</h3>
          <h3 className="banner">Confort</h3>
          <h3 className="banner">Sostenible</h3>
        </div>
        
      {/* </Marquee> */}
      
      {/* <h2>Mariangelica</h2>
      <h2>Romina</h2>
      <h2>Clara</h2>
      <h2>Alberto</h2> */}
    </div>
  );
};

export default TextMarquee;

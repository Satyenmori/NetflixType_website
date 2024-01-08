import React from "react";

function Card(props) {
  return (    
    
      <div className="card">
        <div className="cardimage">
          <img src={props.imgsrc}></img>
        </div>
        <div className="card-conent">
          <p>{props.title}</p>
          <h3>{props.sname}</h3>
          <a href={props.link} target="_blank" className="btn">
            Watch Now
          </a>
        </div>
      </div>
      
   
  );
}

export default Card;

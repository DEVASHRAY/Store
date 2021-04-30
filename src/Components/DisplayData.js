import React from "react";
import ImageCarousel from "./ImageCarousel";

const DisplayData = (props) => {
  // console.log("props of Display" , props.data.name);
  return (
    <div className="card">
      <ImageCarousel imgArr={props.data.images} />
      <div className="card-content">
        <h3 className="item-name">{props.data.name}</h3>
        <p className="item-price">{props.data.price}</p>
      </div>
    </div>
  );
};

export default DisplayData;

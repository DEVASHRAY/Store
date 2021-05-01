import React from "react";
import ImageCarousel from "./ImageCarousel";

const DisplayData = (props) => {
  // console.log("props of Display" , props.data.name);
  return (
    <div className="card">
      <ImageCarousel imgArr={props.data.images} stock={props.data.is_in_stock }/>
      <div className="card-content">
        <h3 className="item-name">{props.data.name}</h3>
        <p className="item-price"> ₹ {props.data.price}</p>
        <button className="nodata-dbtn"><a href = "./GetInput.js">Go Back</a></button>
        <small className = {props.data.is_in_stock > 0 ? "available" : "out_of_stock"}>{props.data.is_in_stock > 0 ? "Available" : "Out Of Stock"}</small>
      </div>
      
    </div>
  );
};

export default DisplayData;

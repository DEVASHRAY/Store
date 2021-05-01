import React from "react";
import ImageCarousel from "./ImageCarousel";

/** Component recieves the data to be displayed and passes the ImageArray Recieved as props to Image Carousel 
    Component 
 */

const DisplayData = (props) => {
    
console.log("3-DISPLAYDATA");
  return (
    <div className="card">
      <ImageCarousel
        imgArr={props.data.images}
        stock={props.data.is_in_stock}
        id={props.data.id}
      />
      <div className="card-content">
        <h3 className="item-name">{props.data.name}</h3>
        <p className="item-price"> ₹ {props.data.price}</p>
        <small
          className={props.data.is_in_stock > 0 ? "available" : "out_of_stock"}
        >
          {props.data.is_in_stock > 0 ? "Available" : "Out Of Stock"}
        </small>
      </div>
    </div>
  );
};

export default DisplayData;

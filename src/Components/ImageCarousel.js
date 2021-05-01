import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageCarousel = (props) => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = props.imgArr.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const previousSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  if (!Array.isArray(props.imgArr || props.imgArr.length <= 0)) {
    return null;
  }

  return (
    <>
      {props.imgArr.map((img, index) => {
        return (
          <>
         
            {index === currentImg && (
             <div className = "cardd">
                    <section className = "slider">
                <img className={props.stock > 0 ? "img-available card-image" : "card-image img-out_of_stock"} src={img} alt={Image} />
                <FaArrowAltCircleLeft
                  className="left-arrow"
                  onClick={previousSlide}
                />
                <FaArrowAltCircleRight
                  className="right-arrow"
                  onClick={nextSlide}
                />
              </section>
             </div>   
              
            )}
          </>
        );
      })}
    </>
  );
};

export default ImageCarousel;

import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

/**  Component recieves the Array of images to be displayed and then perform some functionality to convert
            all the images to a carousel and returns it with two icons of left and right for swaping
    **/

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
  let k = 100;
  return (
    <>
      {props.imgArr.map((img, index) => {
        return (
          <>
            {index === currentImg && (
              <div className="cardd">
                <section className="slider">
                  <img
                    className={
                      props.stock > 0
                        ? "img-available card-image"
                        : "card-image img-out_of_stock"
                    }
                    src={img}
                    key={ k - 1}
                    alt="PICS"
                  />
                  <FaArrowAltCircleLeft key={ k + 1}
                    className="left-arrow"
                    onClick={previousSlide}
                  />
                  <FaArrowAltCircleRight key={ k - 10}
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

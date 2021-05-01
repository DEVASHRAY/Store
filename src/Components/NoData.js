import React from "react";
import NoData1 from "../NoData1.jpeg";

/** Component returns the img when the serach item is not found in data */


const NoData = () => {

  return (
    <div className="nodata">
      <img className="nodata-img" src={NoData1} alt ="Pic" />
    </div>
  );
};

export default NoData;

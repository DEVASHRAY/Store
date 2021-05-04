import React from "react";
import NoData1 from "../NoData1.png";

/** Component returns the img when the serach item is not found in data */


const NoData = (props) => {

  return (
    <>
    <div className = "show-search">
                <p>Showing search results for {`"${props.searchItem}"`}</p> 
            </div>
    <div className="nodata">
      <img className="nodata-img" src={NoData1} alt ="Pic" />
    </div>
</>
  );
};

export default NoData;

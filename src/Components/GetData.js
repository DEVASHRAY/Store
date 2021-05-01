import React from "react";
import Data from "../Data";
import BackBtn from "./BackBtn";
import DisplayData from "./DisplayData";
import NoData from "./NoData";

/** Component recieves the props and uses Array method to extract data from Data.js file 
    based on the search item and value of checkbox and then passes the Extracted Data to DisplayData
    Component for Display.
 */

export const GetData = (props) => {
    console.log("2-GETDATA");
  let ExtractedData;

  // Checking for empty inputbox and checkbox value

  if (props.searchItem === "" && !props.isChecked) {
    ExtractedData = Data.map((obj) => {
      return obj;
    });
  } else {
    ExtractedData = Data.filter((obj) => {
      return obj.is_in_stock > 0;
    });
  }

  // Filtering Data based on user search

  if (props.searchItem !== "") {
    ExtractedData = Data.filter((obj) => {
      let filteredItem;

      if (obj.name.toLowerCase().includes(props.searchItem.toLowerCase())) {
        if (props.isChecked && obj.is_in_stock > 0) {
          filteredItem = obj;
        }
        if (!props.isChecked && obj.is_in_stock >= 0) {
          filteredItem = obj;
        }
      }
      return filteredItem;
    });
  }
  return (
    <>
      {/* Check whether the searched item is present in the database or not. if no items matches the item in database
        then NoData Component is returned else DisplayData Component is returned */}

      {ExtractedData.length === 0 ? (
        <NoData searchItem = {props.searchItem}/>
      ) : (
        <>
        {props.searchItem !== "" ? 
            <div className = "show-search">
                <p>Showing search results for {`"${props.searchItem}"`}</p> 
            </div> : null}
          <div className="grid--item">
            {ExtractedData.map((item, index) => {
              return <DisplayData data={item} key={item.id} id={index} />;
            })}
          </div>
        </>
      )}

      {/* Checking if its the landing Page then BackBtn Component wont be rendered and if its a searched page 
        the BackBtn C willl be rendered */}

      {props.searchItem !== "" ? <BackBtn /> : null}
    </>
  );
};



export const MemoizedData = React.memo(GetData)

import React from "react";
import Data from "../Data";
import BackBtn from "./BackBtn";
import DisplayData from "./DisplayData";
import NoData from "./NoData";

const GetData = (props) => {
  console.log("serach Item", props.searchItem);
  let ExtractedData;

  if (props.searchItem === "" && !props.isChecked) {
    ExtractedData = Data.map((obj) => {
      return obj;
    });
  } else {
    ExtractedData = Data.filter((obj) => {
      return obj.is_in_stock > 0;
    });
  }

  if (props.searchItem !== "") {
    ExtractedData = Data.filter((obj) => {
      let filteredItem;
      // obj.name = obj.name.replace(/ +/g, "");

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
  console.log("ExtractedData", ExtractedData);
  return (
    <>
      {ExtractedData.length === 0 ? (
        <NoData />
      ) : (
        <>
          <div className="grid--item">
            {ExtractedData.map((item, index) => {
              return <DisplayData data={item} key={item.id} id={index} />;
            })}
          </div>
        </>
      )}
      {props.searchItem != "" ? <BackBtn/> : null}
    </>
  );
};

export default GetData;

import React from "react";
import Data from "../Data";
import DisplayData from "./DisplayData";

// const GetData = () => {
// const  [searchItem , setSreachItem] = useState("")

// const handleSubmit = (event , input) => {
//     event.preventDefault();
//     setSreachItem(input)
// }

// console.log(searchItem);
//     return(
//         <>
//         <GetInput handleSubmit={handleSubmit} />
//         </>
//     )
// }

// export default GetData

const GetData = (props) => {
  console.log("serach Item", props.searchItem);
  let ExtractedData = Data.filter((obj) => {
    let filteredItem;
    // obj.name = obj.name.replace(/ +/g, "");
    if (props.searchItem !== "") {
      if (obj.name.toLowerCase().includes(props.searchItem.toLowerCase())) {
        if (!props.isChecked && obj.is_in_stock > 0) {
          filteredItem = obj;
        }
        if (props.isChecked && obj.is_in_stock >= 0) {
          filteredItem = obj;
        }
      }
    }
    return filteredItem;
  });
 
  return (
    <div className="grid--item">
      {ExtractedData.map((item, index) => {
        return <DisplayData data={item} key={item.index} />;
      })}
    </div>
  );
};

export default GetData;

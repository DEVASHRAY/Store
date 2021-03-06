import React, { useState } from "react";
import {MemoizedData} from "./GetData";

/** Component To Take input then set that value to search for the item and to manage the state of Checkbox 
     and then pass the search value and checkbox State to GetData
 **/

const GetInput = (props) => {

const[input , setInput] = useState("")
  const [searchItem, setSreachItem] = useState("");
  const [isChecked, setIsChecked] = useState(false);

    
  const handleChange = (event) => {
    const { value } = event.target;
        setInput(value)
  };

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSreachItem(input);
  };

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <input
          className="search--bar"
          type="text"
          value={input}
          placeholder="Search a product or any keyword"
          onChange={handleChange}
        />
        <button className="search--button">Search</button>
        <div className="search--options">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          <label>Hide out-of-stock Items</label>
        </div>
      </form>
      <MemoizedData searchItem={searchItem} isChecked={isChecked} />
    </>
  );
};

export default GetInput;

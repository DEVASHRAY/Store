import React, { useState } from "react";
import GetData from "./GetData";

const GetInput = (props) => {
  console.log("RENDER GETINPUT 1");
  const [input, setInput] = useState("");
  const [searchItem, setSreachItem] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
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
            placeholder="Search an item"
            value={input}
            onChange={handleChange}
          />
          <button className="search--button">Search</button>
          <div className="search--options">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckbox}
            />
            <label>
              {isChecked
                ? "Hide out-of-stock Items"
                : "Show out-of-stock Items"}{" "}
            </label>
          </div>
        </form>
   
        <GetData searchItem={searchItem} isChecked={isChecked} />
    
    </>
  );
};

export default GetInput;

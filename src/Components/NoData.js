import React from "react"
import NoData1 from "../NoData1.jpeg"

const NoData = () => {
    console.log("NODATA");




    return (
    <div className = "nodata">
        <img className = "nodata-img"src = {NoData1}/>
         <button className="nodata-btn"><a href = "./GetData.js">Go Back</a></button>
    </div>
    )
}


export default NoData;
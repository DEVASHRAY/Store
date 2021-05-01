import React from "react"
import NoData1 from "../NoData1.jpeg"
import BackBtn from "./BackBtn";

const NoData = () => {
    console.log("NODATA");




    return (
    <div className = "nodata">
        <img className = "nodata-img"src = {NoData1}/>
         <BackBtn/>
    </div>
    )
}


export default NoData;
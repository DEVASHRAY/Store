import React from "react"
import GetInput from "./GetInput";

const NoData = () => {
    console.log("NODATA");

const handleClick = () => {
    return <GetInput/>
}


    return (
    <>
        <h3>No Items Found</h3>
        <button onClick = {handleClick}>Go Back</button>
    </>
    )
}


export default NoData;
import React from "react";
import HogItem from "./HogItem";
import hogs from "../porkers_data.js"


function HogList () {



return (
    <div>
        {hogs.map((hog) => {
        <HogItem name={hog.name} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} image={hog.image}/>
    })}
    </div>
)



}



export default HogList
import React from "react";
import HogItem from "./HogItem";
import hogs from "../porkers_data.js"


function HogList () {

const displayHogList = hogs.map((hog) => {
         return (
         <HogItem name={hog.name} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} image={hog.image}/>
         )
    })

return (
    <div>
        {displayHogList}
    </div>
)



}



export default HogList
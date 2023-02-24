import React from "react";
import HogItem from "./HogItem";
import hogs from "../porkers_data.js"


function HogList () {

const displayHogList = hogs.map((hog) => {
    console.log(hog['highest medal achieved'])
         return (
         <HogItem name={hog.name} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} image={hog.image} highestMedalAchieved= {hog['highest medal achieved']} />
         )
    })

return (
    <div>
        {displayHogList}
    </div>
)



}



export default HogList
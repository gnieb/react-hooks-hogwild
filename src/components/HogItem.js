import React from "react";
import hogs from "../porkers_data.js"

console.log(hogs)

function HogItem (hog) {

    // const highestMedal = 'highest medal achieved'
    // const highestMedalKey = hog[highestMedal]
    // console.log(hog)
    return (

        <div className='pigTile'>
            <h3>{hog.name}</h3>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased.toString()} </p>
            <p>Highest medal achieved: {hog.highestMedalAchieved} </p>
            <img src={hog.image} />
            

        </div>
    )
}

export default HogItem;
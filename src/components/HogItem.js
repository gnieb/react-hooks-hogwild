import React from "react";
import hogs from "../porkers_data.js"

console.log(hogs)

function HogItem (hog) {



    return (

        <div>
            <h3>{hog.name}</h3>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased}</p>
            <p></p>
            <img src={hog.image} />




        </div>
    )
}

export default HogItem;
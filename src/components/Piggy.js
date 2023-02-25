import {useState} from "react";


const Front = ({name, image}) =>  {
    return (
    <div>
        <h1>{name}</h1> 
        <img src={image} alt={name} />
    </div>
    )
}
const Back = ( {specialty, weight, highestMedal, greased}) => {


    return (
        <div>
        <h2>{specialty}</h2>
        <h3>{weight} kilos</h3>
        <p className="achievementText">{highestMedal} medal achieved</p>
        {greased? <h2>READY FOR FUN</h2> : <h2>no greasy fun today</h2>}
        </div>
    )
}

function Piggy ({hogObj, }) {

const [showFront, setShowFront] = useState(true)
const toggleFront = () => setShowFront(showFront => !showFront)


    return (
        <div onClick={toggleFront} className="ui four wide column image pigTile">
           {showFront ? 
           <Front name={hogObj.name} image={hogObj.image}/> : 
           <Back specialty={hogObj.specialty} weight={hogObj.weight} highestMedal={hogObj["highest medal achieved"]} greased={hogObj.greased}/>}
        </div>
    )
}

export default Piggy;
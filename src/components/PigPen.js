import Piggy from "./Piggy";

function PigPen ({hogs}) {

const piggyList = hogs.map( hogObj => <Piggy key={ hogObj.name } hogObj={hogObj} />)

return (
    <div className="ui grid container">
        {piggyList}
    </div>
)



}

export default PigPen
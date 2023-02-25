import React, {useState} from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data"; 
import PigPen from "./PigPen";


function App() {

	const [grease, setgrease] = useState(false)
	const toggleGrease = () => {
		setgrease(g => !g)
	}
	const onlyGreased = hogObj => hogObj.greased 

	const filteredHogs= grease ? 
	hogsData.filter( onlyGreased ) :  
	hogsData

	const [sort, setSort] = useState('')
	const toggleSort = string =>  setSort(string)

	const byNameOrWeight = (hogA, hogB) => {
		switch(sort ) {
			case 'name':
				if (hogA.name < hogB.name) {
					return -1
				} else {
				return 1 }

			case 'weight':
				return hogA.weight - hogB.weight
			default: 
				return 0
		}
	}

	const sortedHogs = [...filteredHogs].sort(byNameOrWeight)

	return (
		<div className="App">
			<Nav toggleGrease={toggleGrease} toggleSort={toggleSort}/>
			<PigPen hogs={sortedHogs} />
		</div>
	);
}

export default App;






import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"

import hogs from "../porkers_data";

function App() {

	const [filter, setFilter] = useState(false);
	const [displayHogs, setHogs] = useState(hogs)
	const [sort, setSort] = useState(false)

	function handleSort(event) {
		if (sort === false) {
			event.target.innerText = " Sort by Name ";
			setSort(true);
			setHogs(hogs.sort((a, b) => {return (a.weight > b.weight) ? 1 : -1}));
		} else if (sort) {
			event.target.innerText = " Sort by Weight ";
			setSort(false);
			setHogs(hogs.sort((a, b) => {return (a.name > b.name) ? 1 : -1}));
		}
	}

	return (
		<div className="App">
			<Nav 
				filter={filter} 
				setFilter={setFilter} 
				hogs={hogs}
				handleSort={handleSort}
			/>
			<HogList 
				hogs={displayHogs}
				filter={filter} 
			/>
		</div>
	);
}

export default App;

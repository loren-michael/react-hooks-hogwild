import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ filter, setFilter, handleSort }) => {
	// console.log(sort)
	// const hogsByName = hogs.sort((a, b) => {return (a.name > b.name)});
	// const hogsByWeight = hogs.sort((a, b) => {return (a.weight > b.weight)});
	// console.log("weight", hogsByWeight)

	function handleFilter(event) {
		if (filter === false) {
			setFilter(true);
			event.target.innerText = " Show all 🐖  ";
		} else if (filter) {
			setFilter(false);
			event.target.innerText = " Show greased 🐷  "
		}
	}

	// function handleSort(event) {
	// 	if (sort === false) {
	// 		event.target.innerText = " Sort by Name ";
	// 		setSort(true);
	// 		setHogs(hogs.sort((a, b) => {return (a.weight > b.weight)}));
	// 	} else if (sort) {
	// 		event.target.innerText = " Sort by Weight ";
	// 		setSort(false);
	// 		setHogs(hogs.sort((a, b) => {return (a.name > b.name)}));
	// 	}
	// }


	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<br></br>
			<button id="btn-filter" onClick={handleFilter} > Show greased 🐷 </button>
			<button id="btn-sort" onClick={handleSort} > Sort by Weight </button>
		</div>
	);
};

export default Nav;

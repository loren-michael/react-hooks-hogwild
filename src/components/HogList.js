import React from 'react';
import HogTile from "./HogTile"

function HogList({ hogs, filter }) {


    function handleDetails(event) {
        // const detailDiv = event.target.nextSibling;
        console.log("hello")
        // if (detailDiv.className === "hidden") {
            // detailDiv.className = "";
            // event.target.innerText = " Hide details "
        // } else if (detailDiv.className === "") {
            // detailDiv.className = "hidden";
            // event.target.innerText = "Show more 🐖 "
        // }
    }

    if (filter) {
        return (
            hogs.filter(hog => hog.greased === true).map(hog => {
                return <HogTile 
                    // className="ui eight wide column"
                    handleDetails={handleDetails}
                    key={hog.name}
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    image={hog.image}
                    // medal={hog."highest medal achieved"}
            />})
        )} else if (filter === false) {
            return hogs.map(hog => {
                return <HogTile 
                    // className="ui eight wide column"
                    handleDetails={handleDetails}
                    key={hog.name}
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    image={hog.image}
                    // medal={hog."highest medal achieved"}
                />
            })
        }
    };

export default HogList
import React from 'react'

function HogTile({ name, specialty, greased, weight, image, handleDetails }) {

    // function handleDetails(event) {
    //     const detailDiv = event.target.nextSibling;
    //     if (detailDiv.className === "hidden") {
    //         detailDiv.className = "";
    //         // event.target.innerText = " Hide details "
    //     } else if (detailDiv.className === "") {
    //         detailDiv.className = "hidden";
    //         // event.target.innerText = "Show more 🐖 "
    //     }
    // }

    return (
        <div className="ui card" onClick={handleDetails}>
            <img src={image} alt={name} width="290px" margin-left="auto" margin-right="auto" />
            <h3>{name}</h3>
            {/* <button onClick={handleDetails}> Show more 🐖 </button> */}
            <div id="hogDetails" className="hidden" >
                <p>I'm good at: {specialty}</p>
                {greased ? <p>I'm lubed up!</p> : <p>Dry as a porkchop!</p>}
                <p>{weight} units!</p>
            </div>
        </div>
    )
}

export default HogTile
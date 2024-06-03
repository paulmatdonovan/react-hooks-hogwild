import React from "react";


function handleClick() {
    console.log()
}
function Hogcard(props) {
    return (
        <div className="ui grid container">
            <div className="pigTile">
                <h1>{props.name}</h1>
                <img src={props.image} alt="A cute pig" />
                <button onClick={handleClick}>More Porky Details</button>
                <li>
                    <ul></ul>
                </li>
            </div>
        </div>

    )
}
export default Hogcard
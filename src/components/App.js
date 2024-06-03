import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import hogs from "../porkers_data";
import Hogcard from "./Hogcard";



function App() {


	const pigCards = hogs.map((hogObj) => {
		return <Hogcard key={hogObj.id} name={hogObj.name} image={hogObj.image} />
	})
	return (
		<div className="App">
			<Nav />
			{pigCards}

		</div>
	);
}

export default App;

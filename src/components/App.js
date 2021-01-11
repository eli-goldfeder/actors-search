import React, { useState } from "react";
import ActorsView from "./ActorsView";
import SearchInput from "./SearchInput";
import actorsData from "./actorsData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const App = () => {
	const [actors] = useState(actorsData);
	const [searchedActors, setActor] = useState("");

	const handleSearch = (e) => {
		const searchWord = e.target.value.toLowerCase();
		const filteredActors = actors.filter(({ firstName, lastName }) => {
			const actorsName = `${firstName} ${lastName}`.toLowerCase();
			return actorsName.includes(searchWord);
		});
		setActor(filteredActors);
	};

	return (
		<div>
			<h1 className="title">Actors App</h1>
			<SearchInput handleSearch={handleSearch} />
			<ActorsView
				actors={searchedActors.length < 1 ? actors : searchedActors}
			/>
		</div>
	);
};

export default App;

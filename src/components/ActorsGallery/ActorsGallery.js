import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ActorsCard from "./ActorsCard";
import calculateAge from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Container } from "react-bootstrap";

const ActorsGallery = () => {
	const [actorsList, setActorsData] = useState([]);
	const [searchedActors, setActor] = useState("");

	const getActorsData = async () => {
		try {
			const response = await axios.get("/actors.json");
			const { data } = response;
			return setActorsData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getActorsData();
	}, [searchedActors]);

	const handleSearch = (e) => {
		const searchWord = e.target.value.toLowerCase();
		const filteredActors = actorsList.filter(({ firstName, lastName }) => {
			const actorsName = `${firstName} ${lastName}`.toLowerCase();
			return actorsName.includes(searchWord);
		});
		setActor(filteredActors);
	};

	const handleSelect = (e) => {
		const selectValue = e.target.value.toLowerCase();
		switch (selectValue) {
			case "first name":
				const firstNameSelect = actorsList.sort((a, b) =>
					a.firstName.localeCompare(b.firstName)
				);
				setActor(firstNameSelect);
				break;
			case "last name":
				const lastNameSelect = actorsList.sort((a, b) =>
					a.lastName.localeCompare(b.lastName)
				);
				setActor(lastNameSelect);
				break;
			case "age":
				const ageSelect = actorsList.sort(
					(a, b) => calculateAge(a.birthDate) - calculateAge(b.birthDate)
				);
				setActor(ageSelect);
				break;
			default:
				return actorsList;
		}
	};

	return (
		<Container>
			<h1 className="title">Actors Search</h1>
			<SearchInput handleSearch={handleSearch} handleSelect={handleSelect} placeholder={'Search for actor'} />
			<ActorsCard
				actorsList={searchedActors.length < 1 ? actorsList : searchedActors}
			/>
		</Container>
	);
}; 

export default ActorsGallery;
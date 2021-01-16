import React, { useState } from "react";
import SearchInput from "./SearchInput";
import MoviesCard from "./MoviesCard";
import moment from "moment";
import axios from "axios";
import { Container } from "react-bootstrap";

const MoviesGallery = () => {
const [searchResults, setSearchResult] = useState([]);

	const apiKey = "dad9c546cdaf48309fa111caf0cb0175";

	const handleSearch = async (searchText) => {
		if (!searchText) {
			setSearchResult([]);
			return;
		}
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`);
        const { data } = response;
        const movies = data.results.map((movie) => {
           return {
                title: movie.title,
                id: movie.id,
                year: moment(movie.release_date).year(),
                img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            };
        })
        setSearchResult(movies);
	};

	return (
		<Container>
			<h1 className="title">Movies Search</h1>
			<SearchInput
				placeholder={"Search for movie"}
				handleSearch={handleSearch}
			/>
			<MoviesCard movies={searchResults} />
		</Container>
	);
};

export default MoviesGallery;

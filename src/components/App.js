import React from "react";
import ActorsGallery from "./ActorsGallery/ActorsGallery";
import MoviesGallery from "./MoviesGallery/MoviesGallery";
import NavBar from "./Nav";
import HomePage from "./HomePage";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
	return (
		<Container>
			<HashRouter>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/actors">
						<ActorsGallery />
					</Route>
					<Route exact path="/movies">
						<MoviesGallery />
					</Route>
				</Switch>
			</HashRouter>
		</Container>
	);
};

export default App;

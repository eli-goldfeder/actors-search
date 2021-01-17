import React from "react";
import { Jumbotron } from "react-bootstrap";

const HomePage = () => {
	return (
		<Jumbotron className="text-center">
			<h1 className="margin-auto">Welcome to Movie Application</h1>
			<p>
				You can search here for movies and actors.
			</p>
		</Jumbotron>
	);
};

export default HomePage;

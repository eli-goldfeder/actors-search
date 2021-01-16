import React from "react";
import _ from "lodash";
import { Card, Container, Row } from "react-bootstrap";
import calculateAge from "../utils";

const ActorsCard = ({ actorsList }) => {
	const actorsCard = actorsList.map(
		({ firstName, lastName, imdbLink, img, birthDate }) => {
			return (
				<Card key={_.uniqueId()} className="card">
					<Card.Img variant="top" src={img} className="img" />
					<Card.Body>
						<Card.Title>
							<a href={imdbLink}>
								{firstName} {lastName}
							</a>
						</Card.Title>
						<Card.Text>Birth date: {birthDate}</Card.Text>
						<Card.Text>Age: {calculateAge(birthDate)}</Card.Text>
					</Card.Body>
				</Card>
			);
		}
	);

	return (
		<Container>
			<Row>{actorsCard}</Row>
		</Container>
	);
};

export default ActorsCard;

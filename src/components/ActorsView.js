import React  from "react";
import _ from "lodash";
import { Card, CardGroup } from "react-bootstrap";
import calculateAge from './utils';

const ActorsView = ({ actors }) => {
	const actorsCard = actors.map(({ firstName, lastName, imdbLink, img, birthDate }) => {
		return (
			<Card key={_.uniqueId()} className="card">
				<Card.Img variant="top" src={img} className="img" />
                <Card.Body>
                    <Card.Title><a href={imdbLink}>{firstName} {lastName}</a></Card.Title>
                    <Card.Text>Birth date: {birthDate}</Card.Text>
                    <Card.Text>Age: {calculateAge(birthDate)}</Card.Text>
                </Card.Body> 
            </Card>
		);
	});

	return <CardGroup className="cardGroup">{actorsCard}</CardGroup>;
};

export default ActorsView;

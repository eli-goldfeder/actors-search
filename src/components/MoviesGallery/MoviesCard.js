import React from "react";
import { Card, Container, Row } from "react-bootstrap";


const MoviesCard = ({ movies }) => {
	const movieCard = movies.map(
		({ title, id, year, img }) => {
			return (
				<Card key={id} className="card">
                    <Card.Img variant="top" src={img} className="img" />
					<Card.Body>
						<Card.Title>
							{title}
						</Card.Title>
						<Card.Text>Year: {year}</Card.Text>
					</Card.Body>
				</Card>
			);
		}
	);

	return (
		<Container>
			<Row>{movieCard}</Row>
		</Container>
	);
};

export default MoviesCard;
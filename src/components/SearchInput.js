import React from "react";
import { Form, Container, Row } from "react-bootstrap";

const SearchInput = ({ handleSearch, handleSelect }) => {
	return (
		<Container className="search">
				<Form.Group className="search" as={Row}>
					<Form.Control
						size="sm"
						type="text"
						placeholder="Search for actor"
						className="search-input"
						onChange={handleSearch}
					/>
					<Form.Control size="sm" as="select" className="select-input" onChange={handleSelect}>
						<option>First Name</option>
						<option>Last Name</option>
						<option>Age</option>
					</Form.Control>
				</Form.Group>
		</Container>
	);
};

export default SearchInput;

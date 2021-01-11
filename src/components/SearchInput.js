import React from "react";
import { Form } from "react-bootstrap";

const SearchInput = ({ handleSearch }) => {
	return (
		<Form className="search">
			<Form.Control
				size="md"
				type="text"
				placeholder="Search for actor"
                className="search"
				onChange={handleSearch}
			/>
		</Form>
	);
};

export default SearchInput;

import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SearchInput = ({ handleSearch, placeholder }) => {
	const [value, setValue] = useState('');

	const handleInput = (e) => {
		setValue(e.target.value);
		handleSearch(value);
	}
	return (
		<div className="c-live-search-box">
			<Form.Control
				type="search"
				onChange={handleInput}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	);
};

export default SearchInput;

import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange, searchField}) => {
	return (
		<div className='container'>
			<input
				className='search'
				type='search'
				placeholder={placeholder}
				onChange={handleChange}
				value={searchField}
			/>
		</div>
	);
};

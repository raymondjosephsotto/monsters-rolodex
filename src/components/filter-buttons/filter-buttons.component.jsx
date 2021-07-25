import React from 'react';
import './filter-buttons.styles.css';

export const FilterButtons = ({ categories, filterCategories }) => {
	return (
		<div>
			{categories.map((category, index) => {
				return (
					<button
						type='button'
						className='filter-btn'
						key={index}
						onClick={() => filterCategories(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

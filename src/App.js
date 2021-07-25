import React, { useState, useEffect } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import {FilterButtons} from './components/filter-buttons/filter-buttons.component.jsx'

import { monstersData } from './data';

const allCategories = ['all', ...new Set(monstersData.map(monster => monster.category))]

console.log(allCategories)

const App = () => {
	const [monsters, setMonsters] = useState(monstersData);
	const [categories, setCategories] = useState(allCategories)
	const [searchField, setSearchField] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleChange = (event) => {
		setSearchField(event.target.value);
	};

	const filterCategories = category => {
		if(category === 'all'){
			setMonsters(monstersData);
			return;
		}
		const filteredCategory = monstersData.filter((monster) => monster.category === category);
		setMonsters(filteredCategory);
	}


	useEffect(() => {
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		);
		setSearchResults(filteredMonsters);
	}, [searchField, monsters]);

	return (
		<div className='App'>
			<FilterButtons 
			categories={categories} 
			filterCategories={filterCategories} />
			<SearchBox
				placeholder='Search Monsters'
				handleChange={handleChange}
				searchField={searchField}
			/>
			<CardList monsters={searchResults} />
		</div>
	);
};

export default App;

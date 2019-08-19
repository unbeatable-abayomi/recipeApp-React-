import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = 'ca0de5ec';
	const APP_KEY = 'b8385036c3aa2f5ed464c36331d62dc5';
	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('Rice');

	useEffect(
		() => {
			getRecipes();
			// console.log('Effect has been run')
		},
		[ query ]
	);
	const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const getRecipes = async () => {
		const response = await fetch(exampleReq);

		const data = await response.json();
		console.log(data.hits);
		setRecipes(data.hits);
	};
	const updateSearch = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};
	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};
	return (
		<div className="App color-change-3x">
			<h1 className="meal-ingridio-text">Meal-Ingridio</h1>
			<center>
				<h3>
					This application gives you different types of recipe,one can cook by just searching for a word..e.g
					Chicken, Pork, etc
				</h3>
			</center>

			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					autoComplete="on"
					placeholder="enter a word e.g Salad, Rice, Chicken ,Pork etc"
					type="text"
					value={search}
					onChange={updateSearch}
					required
				/>

				<button className="search-button" type="submit">
					{' '}
					search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;

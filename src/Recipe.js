import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<center>
				<h2>Recipe</h2>
				<span className="title-text">{title} </span>
			</center>

			<img className={style.image} id="image" src={image} alt="images" />
			<ol className="ingredients">
				{ingredients.map((ingredient) => <li key={ingredient.text}>{ingredient.text}</li>)}
			</ol>

			<h4>Carlories</h4>
			<span className="calories"> {calories}</span>
		</div>
	);
};

export default Recipe;

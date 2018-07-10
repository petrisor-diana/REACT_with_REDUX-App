import React from 'react';

export default (props) => (
	<div className="home-cocktail">
		<img src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink} />
		<div className="home-cocktail-title">
			<span>{props.cocktail.strDrink}</span>
		</div>
	</div>
)

import React from 'react';
import HomeCocktail from './home-cocktails';

export default (props) => {
	console.log('home render: ', props);
	return (
		<div className="home-cocktails">
			{props.cocktails.map(cocktail => {
					return (
						<div className="home-cocktail">
							<img src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink} />
	                    	<div className="home-cocktail-title"></div>
		                	<span>{props.cocktail.strDrink}</span>
		                </div>
					
			)
		} )}
		</div>
	)
}


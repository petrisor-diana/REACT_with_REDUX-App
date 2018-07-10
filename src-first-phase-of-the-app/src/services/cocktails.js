import axios from 'axios';

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

export function getCocktails() {
	let params = {
		a: 'Alcoholic'
	}
	return axios.get(SEARCH_URL, {params})
					.then(response => {
						console.log('cocktails request:', response);
						let drinks = response.data.drinks || [];
						return drinks.slice(0, 25);
					});
}

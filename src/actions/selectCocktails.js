
export function selectCocktail (idDrink){
    console.log(idDrink);
    return {
        type: 'COCKTAIL_SELECTED',
        payload: idDrink
    };
}
import {combineReducers} from 'redux';
import CocktailsReducer from './reducer_cocktails';
import SelectedCocktailReducer from './reducer_selected_cocktail';

const rootReducer = combineReducers({
    cocktails: CocktailsReducer,
    selectedCocktailId: SelectedCocktailReducer
});

export default rootReducer;
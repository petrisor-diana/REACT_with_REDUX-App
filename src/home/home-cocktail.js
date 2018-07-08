import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {selectCocktail} from '../actions/selectCocktails';

class HomeCocktails extends Component {
	render (){
		return(
	<div className="home-cocktail" 
	        onClick={() => this.props.selectCocktail(this.props.cocktail.idDrink)} >
		<img src={this.props.cocktail.strDrinkThumb} alt={this.props.cocktail.strDrink} />
		<div className="home-cocktail-title">
			<span>{this.props.cocktail.strDrink}</span>
		</div>
	</div>
		)}
	}

function mapDispatchToProps(dispatch){
   return bindActionCreators({selectCocktail: selectCocktail}, dispatch);
}

export default connect(null, mapDispatchToProps)(HomeCocktails);

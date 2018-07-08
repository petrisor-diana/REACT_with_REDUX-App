import React, {Component} from 'react';
import HomeCocktail from './home-cocktail';
import connect from 'react-redux/lib/connect/connect';
import {bindActionCreators} from 'redux';
import {fetchCocktails} from '../actions/fetch_cocktails';


class Home extends Component {
	 componentDidMount(){
		this.props.fetchCocktails();
	}
	render(){
	return (
		<div className="home-cocktails">
			{this.props.cocktails.map(cocktail => (
				<HomeCocktail
					key={cocktail.idDrink}
					cocktail={cocktail}
				/>
			))}
		</div>
	    )
	}
}

	function mapStateToProps(state) {
		return {
			cocktails: state.cocktails
		}
	}

	function mapDispatchToProps(dispatch){
		return bindActionCreators({fetchCocktails:fetchCocktails}, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

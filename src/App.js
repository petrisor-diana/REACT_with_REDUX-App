import React, { Component } from 'react';
import Header from './commons/header';
import Home from './home/home';
import { connect } from 'react-redux';

class App extends Component {

  render() {
		console.log('app render');
    return (
			<React.Fragment>
				<Header />
                   {this.props.selectedCocktailId ? (
				   <div>Currently selected {this.props.selectedCocktailId}</div>) : ( 
				   <Home/>
				   )}
			</React.Fragment>
    );
  }
}

function mapStateToProps(state){
	return {
		selectedCocktailId: state.selectedCocktailId
	};
}

export default connect(mapStateToProps)(App);

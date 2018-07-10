import React, { Component } from 'react';
import Header from './commons/header';
import Home from './home/home';
import {getCocktails} from './services/cocktails';


class App extends Component {
  constructor(props) {
		console.log('app constructor');
		super(props);

		this.state = {
			cocktails: []
    }
  }

  componentDidMount() {
		console.log('app didmount');
		getCocktails().then(cocktails => {
			this.setState({cocktails: cocktails});
		})
	}
    
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Home
					cocktails={this.state.cocktails}
        />
      </React.Fragment>
    );
  }
}

export default App;

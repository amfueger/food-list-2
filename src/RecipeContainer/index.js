import React, { Component } from 'react';
import RandomRecipes from './RandomRecipes';
import RecipeSearch from './RecipeSearch';
import RecipeResults from './RecipeResults';


class RecipeContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			results: []
		};
	}

	handleQuery = async (query) => {
		try {
			const recipes = await fetch(`http://localhost:9000/recipe/search?query=${query}`);
			const parsedResponse = await recipes.json();
			this.setState({
				results: parsedResponse.data.body.results,
			});
		} catch(error){
			console.log(error);
		}
	}
//<RandomRecipes />
	render() {
		return(
			<div className="container">
				<h2>Food List</h2>
				<RandomRecipes />
				<RecipeSearch handleQuery={this.handleQuery}/>
				<RecipeResults results={this.state.results} />
			</div>
		)
	}
}

export default RecipeContainer;
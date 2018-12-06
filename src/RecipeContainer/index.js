import React, { Component } from 'react';
import RandomRecipes from './RandomRecipes';
import RecipeSearch from './RecipeSearch';
import RecipeResults from './RecipeResults';


class RecipeContainer extends Component {
	constructor() {
		super()

		this.state = {
			query: '',
			results: []
		}
	}

	handleQuery = (query) => {
		this.setState({ 
			query: query
		})
	}

	render() {
		return(
			<div>
				<RandomRecipes />
				<RecipeSearch handleQuery={this.handleQuery}/>
				<RecipeResults query={this.state.query} />
			</div>
		)
	}
}

export default RecipeContainer;
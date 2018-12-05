import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap';
import AddRecipe from '../AddRecipe';

class RecipeResults extends Component {
	constructor() {
		super();
		this.state = {
			randomRecipes: []
		}
	}
getResults = async (query) => {
	const result = await fetch('/recipe/search?=' + query);
	const resultJson = await result.json();
	if(result.status !== 200) {
		console.log(result, "Error in getting result");
	}
}
componentDidMount(){
	this.getResults()
	.then(randomRecipes => this.setState({
		randomRecipes: randomRecipes.data
	})).catch((err) => {
		console.log(err, "error in componentDidMount RecipeResults, List");
	})
}
	render(){
		const imgStyle = {
			height: '180px',
			width: '316px'
		}
		const recipes = this.state.results.map((recipe, i) => {
			return(
				<Card key={i}>
					<CardImg style={{imgStyle}} top width="100%" src={this.recipe.recipes.image} />
					<CardBody>
						<CardTitle>{this.recipe.recipes.title}</CardTitle>
						<CardText>{this.recipe.recipes.servings}</CardText>
						<AddRecipe 
						onClick={this.props.addRecipe.bind(null, this.state)}/>
					</CardBody>
				</Card>
				)
		})
		return(
				<div>{recipes}</div>
			)
	}
}


export default RecipeResults;
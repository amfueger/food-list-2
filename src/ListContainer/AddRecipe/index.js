import React, { Component } from 'react';
import { Button } from 'reactstrap';

class AddRecipe extends Component {
	constructor(){
		super();
		this.state = {
			recipe: '',
			ingredients: [{
				ingredient: '',
				quantity: '',
				measurement: ''
			}],
		}
	}
	//Get recipe by id

	getRecipe = async (id, e) => {
		const recipeIngredients = await fetch('http://localhost:9000/recipe/search/' + id);
		const parsedResponse = await recipeIngredients.json();
		return parsedResponse;
	}
	componentDidMount() {
		this.getRecipe().then((recipe) => {
			this.setState({
				recipe: recipe.data
			}).catch((err) => {
				console.log(err, "componentDidMount error Add Recipe");
			})
		})
	}
	//Have the recipe, map the ingredients. 
	getIngredients = async () => {
		const ingredients = await this.props.recipe.extendedIngredients.map((ingredient, i) => {
			const quantity = await this.props.recipe.extendedIngredients[i].name
			const amount = await this.props.recipe.extendedIngredients[i].measures.us.amount
			const measure = await this.props.recipe.extendedIngredients[i].measures.us.unitShort
			this.setState({
				ingredients: [...this.state.ingredients, ingredients]
			})
		})
	}

	//The route I want for this 
	render(){
		return(
			<Button 
			color="blue"
			type="Submit"
			onClick={this.props.addRecipeIngredients}
			>Select Recipe</Button>
			)
	}
}

export default AddRecipe; 

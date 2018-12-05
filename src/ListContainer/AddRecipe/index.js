import React, { Component } from 'react';
import { Button } from 'reactstrap';

class AddRecipe extends Component {
	constructor(){
		super();
		this.state = {
			ingredients: []
		}
	}
	getRecipeIngredients = async (id, e) => {
		const recipeIngredients = await fetch('http://localhost:9000/list/add/' + id);
		const parsedResponse = await recipeIngredients.json();
		return parsedResponse;
	}
	componentDidMount() {
		this.getRecipeIngredients().then((ingredients) => {
			this.setState({
				ingredients: ingredients.data
			}).catch((err) => {
				console.log(err, "componentDidMount error Add Recipe");
			})
		})
	}

	//The route I want for this 
	render(){
		return(
			<Button 
			color="blue"
			type="Submit"
			onClick={this.props.addRecipe}
			>Select Recipe</Button>
			)
	}
}

export default AddRecipe; 

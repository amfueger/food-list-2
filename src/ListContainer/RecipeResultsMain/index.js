import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button, CardColumns } from 'reactstrap';
// import AddRecipe from '../AddRecipe';

class RecipeResults extends Component {
	render() {
		const imgStyle = {
			height: '180px',
			width: '316px'
		}
		const recipes = this.props.results.map((recipe, i) => {
			return (
				<Card key={i}>
					<CardImg style={imgStyle} top width="100%" src={`https://spoonacular.com/recipeImages/${recipe.image}`} />					
					<CardBody>
						<CardTitle><a href={recipe.url}>{recipe.title}</a></CardTitle>
						<CardText>{recipe.servings}</CardText>
						<Button color="primary" onClick={() => this.props.addRecipeIngredients(recipe.id)}>
							Select Recipe
						</Button>
					</CardBody>
				</Card>
			)
		})
		return(
				<div>
				<CardColumns>{recipes}</CardColumns>
				</div>
			)
	}
}

export default RecipeResults;

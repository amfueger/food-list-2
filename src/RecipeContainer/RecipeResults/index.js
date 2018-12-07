import React, { Component } from 'react';
import { Card, CardColumns, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class RecipeResults extends Component {
	render(){
		const imgStyle = {
			height: '180px',
			width: '316px'
		}
		const recipes = this.props.results.map((recipe, i) => {
			return(
				<Card key={i}>
					<CardImg style={{imgStyle}} top src={`https://spoonacular.com/recipeImages/${recipe.image}`} />					
					<CardBody>
						<CardTitle><a href={recipe.url}>{recipe.title}</a></CardTitle>
						<CardText>Servings: {recipe.servings}</CardText>
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
import React, { Component } from 'react';
import { Card, CardColumns, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class RecipeResults extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
		}
	}
	render(){
		const imgStyle = {
			height: '180px',
			width: '316px'
		}
		const recipes = this.state.results.map((recipe, i) => {
			return(
				<Card key={i}>
					<CardImg style={imgStyle} top width="100%" src={this.recipe.recipes.image} />
					<CardBody>
						<CardTitle>{this.recipe.recipes.title}</CardTitle>
						<CardText>{this.recipe.recipes.servings}</CardText>
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
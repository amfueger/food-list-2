import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class RecipeResults extends Component {
	constructor() {
		super();
		this.state = {
			results: [],
			query: this.props.query
		}
	}
getResults = async () => {
	const result = await fetch('/recipe/search' + this.query, {
		method: 'POST',
		data: '', 
		headers: {
			'Content-Type': 'application/json'
		}
	});
	
	const resultJson = await result.json();
	if(result.status !== 200) {
		console.log(result, "Error in getting result");
	}
}
componentDidMount(){
	this.getResults()
	.then((queryResult) => {this.setState({
			results: queryResult})
	}).catch((err) => {
		console.log(err, "componentDidMount recipeResults");
	})
}
	render(){
		const imgStyle = {
			height: '180px',
			width: '316px'
		}
		console.log(this.props.query, "this.props.query");
		console.log(this.props "this.props");
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
				<div>{recipes}</div>
			)
	}
}


export default RecipeResults;
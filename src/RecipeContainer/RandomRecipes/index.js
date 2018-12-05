import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


class RandomRecipes extends Component {
	constructor() {
		super()

		this.state = {
			recipes: []

		}
	}
getRandomRecipes = async () => {
		try {
		const recipes = await fetch('http://localhost:9000/recipe/random');
		const parsedResponse = await recipes.json()
		return parsedResponse;
		} catch(error){
			console.log(error);
		}
		
}
componentDidMount() {
	
	this.getRandomRecipes().then((recipes) => {
		console.log(recipes.data, "recipes.data in componentDidMount");
		this.setState({
			recipes: recipes.data.body.recipes
		})
		}).catch((err) => {
			console.log(err);
		})
	}


	render() {	
		const imgStyle = {
			height: '180px',
			width: '318px'
		};
		const recipe = this.state.recipes.map((recipe, i) => {
			return(
				<Col sm="4" key={recipe._id}>
					<Card>
					<CardImg style={{imgStyle}} top src={recipe.image} />
					<CardBody>
						<CardTitle><a href={recipe.url}>{recipe.title}</a></CardTitle>
						<CardText>Servings: {recipe.servings}</CardText>
					</CardBody>
				</Card>	
			</Col>	
				)
		})
		return(
			<div>
			<Row>
			{recipe}
			</Row>
			</div>
			)
	}
}

export default RandomRecipes;
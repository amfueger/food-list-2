
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class PastRecipeContainer extends Component {
	constructor() {
		super();
		this.state = {
			recipes: []
		}
	}
	getPastRecipes = async () => {
			try {
			const recipes = await fetch('http://localhost:9000/list/past/recipes');
			const parsedRecipes = await recipes.json();
			return parsedRecipes
			} catch(e){
				console.log(e, "getPastRecipes, error");
			}
			
	}
	componentDidMount(){
	this.getPastRecipes().then((recipes) => {
		console.log(recipes.data, "recipes from past recipes");
		this.setState({
			recipes: recipes.data
		})
	}).catch((err) => {
		console.log(err);
	})
	}
    render(){
    	const recipe = this.state.recipes.map((recipe, i) => {
    		return(
     <ListGroupItem key={recipe._id}><a href={recipe.url}>{recipe.title}</a></ListGroupItem>
    			)
    	})
        return(
        	<ListGroup>
           {recipe} 
          </ListGroup>
        )
    }
}
export default PastRecipeContainer;

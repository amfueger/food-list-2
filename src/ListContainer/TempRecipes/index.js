import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const TempRecipes = (props) => {
	const recipes = props.recipes.map((recipe, i) => {
		return(
			<ListGroupItem key={i}>
			<Button 
				type="submit" 
				color="secondary"
				onClick={() => { props.openAndEdit(recipe); }}>Edit</Button>
				<Button
				type="submit" 
				color="secondary"
				onClick={() => { props.deleteRecipe(i); }}>Delete</Button>
				</ListGroupItem>	
			)
	})

		return(
			<div>
				<ListGroup>
					{recipes}
				</ListGroup>
			</div>
			)
	}




export default TempRecipes; 

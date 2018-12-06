import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const TempIngredients = (props) => {
		const ingredients = this.state.ingredients.map((ingredient, i) => {
			return( 
				<ListGroupItem key={i}>
				 {ingredient.quantity} : {ingredient.measurement} - {ingredient.ingredient}
				<Button 
				type="submit" 
				color="secondary"
				onClick={props.openAndEdit.bind(null, ingredient)}>Edit</Button>
				<Button
				type="submit" 
				color="secondary"
				onClick={props.deleteMovie.bind(null, i)}>Delete</Button>
				</ListGroupItem>
				)
		})
		return(
			<div>
			<ListGroup>
				{ingredients}
			</ListGroup>
			</div>
			)
	


}

export default TempIngredients; 

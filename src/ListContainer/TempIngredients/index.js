import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const TempIngredients = (props) => {
	const ingredients = props.ingredients.map((ingredient, i) => {
		return(
			<ListGroupItem key={i}>
				{ingredient.quantity} : {ingredient.measurement} - {ingredient.ingredient}
				<Button type="submit" color="secondary" onClick={() => props.openAndEdit(ingredient)}>
					Edit
				</Button>
				<Button type="submit" color="secondary" onClick={() => props.deleteIngredient(i)}>
					Delete
				</Button>
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

import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
// import RecipeSearch from './RecipeSearch';
//API here

//Search Bar at the top for recipes. 
//Underneath 6 random recipes
//Upon search, the random recipes component is removed and replaced with the results of the recipe search

class RecipeSearch extends Component {
	constructor() {
		super();

		this.state = {
			query: ''

		}
	}
handleInput = (e) => {
	this.setState({
		[e.currentTarget.name]: e.currentTarget.value
	})
}
handleSubmit = (e) => {
	e.preventDefault();
	this.props.handleQuery(this.state.query);
}
	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<Input type='text' name='query' value={this.state.query} onChange={this.handleInput} placeholder='Look up Recipe'/>
				<Button color="primary" size='large' type='Submit'>Search</Button>
			</Form>
			)
	}
}

export default RecipeSearch;
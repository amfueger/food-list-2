import React, { Component } from 'react';
import { Form, Button, Input, Col } from 'reactstrap';

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
			<Col md={3}>
				<Input 
				type='text' 
				name='query' 
				value={this.state.query} 
				onChange={this.handleInput} 
				placeholder='Look up Recipe'
				style={{marginTop: 10, marginBottom: 10}}
				/>
				<Button color="primary" size='large' type='Submit' style={{marginTop: 10, marginBottom: 10}}>Search</Button>
				</Col>
			</Form>
			)
	}
}

export default RecipeSearch;

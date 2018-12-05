import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';

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
				<Input 
				type='text' 
				name='query' 
				value={this.state.query} 
				onChange={this.handleInput} 
				placeholder='Look up Recipe'/>
				<Button 
				color='secondary' 
				size='large' 
				type='Submit'>Search</Button>
			</Form>
			)
	}
}

export default RecipeSearch;
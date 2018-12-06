import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormTest } from 'reactstrap';

class AddIngredient extends Component {
	constructor(){
		super();
		this.state = {
			ingredient: [{ 
				amount: '',
				measurement: '',
				description: '',
			}]
		}
	}
	
	updateIngredient = (e) => {
		e.preventDefault();
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	render() {
		return(
			<Form 
			onSubmit={this.props.addIngredient.bind(null, this.state.ingredient)}>
				<Label>Add Ingredients Manually</Label>
			<Row>
			<Col md={3}>
				<FormGroup>
				<Label>Amount</Label>
					<Input 
					type="amount" 
					name="amount" 
					placeholder="1oz, 1 cup, etc."
					value={this.state.ingredient.amount}
					onChange={this.updateIngredient}/>
				</FormGroup>
				</Col>
				<Col md={4}>
				<FormGroup>
					<Label>Measurement</Label>
					<Input type="select" 
					name="measurement" 
					value={this.state.ingredient.measurement}
					onChange={this.updateIngredient}>
						<option>N/A</option>
						<option>No measurement</option>
						<option>cup(s)</option>
						<option>tsp</option>
						<option>tbsp</option>
						<option>oz</option>
						<option>lbs</option>
						<option>pint(s)</option>
						<option>quart(s)</option>
						<option>dash</option>
						<option>piece</option>
						</Input>
				</FormGroup>
				</Col>
				<Col md={4}>
				<FormGroup>
					<Label>Ingredient</Label>
					<Input 
					type="ingredient" 
					name="ingredient"
					value={this.state.ingredient.ingredient}
					onChange={this.updateIngredient}/>
				</FormGroup>
				</Col>
				<Col md={1}>
				<Button 
				color="primary" 
				type="Submit">
				Add</Button>
				</Col>
				</Row>
			</Form>
			)
		}
}

export default AddIngredient; 

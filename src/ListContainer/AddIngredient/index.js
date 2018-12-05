import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormTest } from 'reactstrap';

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
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	render() {
		return(
			<Form 
			onSubmit={this.props.addIngredient}>
			<Label>Add Ingredients Manually</Label>
				<FormGroup>
				<Label>Amount</Label>
					<Input 
					type="amount" 
					name="amount" 
					placeholder="1oz, 1 cup, etc."
					value={this.state.ingredient.amount}
					onChange={this.updateIngredient}/>
				</FormGroup>
				<FormGroup>
					<Label>Measurement</Label>
					<Input 
					type="measurement" 
					name="measurement"
					value={this.state.ingredient.measurement}
					onChange={this.updateIngredient}/>
						<option>N/A</option>
						<option>cup(s)</option>
						<option>tsp</option>
						<option>tbsp</option>
						<option>oz</option>
						<option>lbs</option>
						<option>pint(s)</option>
						<option>quart(s)</option>
						<option>dash</option>
				</FormGroup>
				<FormGroup>
					<Label>Ingredient</Label>
					<Input 
					type="ingredient" 
					name="ingredient"
					value={this.state.ingredient.ingredient}
					onChange={this.updateIngredient}/>
				</FormGroup>
				<Button 
				color="blue" 
				type="Submit"
				onClick={() => this.props.addIngredient.bind(null, this.state.ingredient)}>
				Add</Button>
			</Form>
			)
		}
}

export default AddIngredient; 

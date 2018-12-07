import React, { Component } from 'react';
import { Button, Input, Row, Col, Modal, ModalBody, ModalHeader, Form, Label, FormGroup } from 'reactstrap';

class EditIngredient extends Component {
	constructor (props) {
		super(props);

		this.state = {
			quantity: props.ingredientToEdit.quantity || '',
			measurement: props.ingredientToEdit.measurement || '',
			ingredient: props.ingredientToEdit.ingredient || '',
		};
	}
	
	updateIngredient = (e) => {
		e.preventDefault();
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	render () {
		return(
			<Modal isOpen={this.props.open}>
				<ModalHeader>Edit Ingredient</ModalHeader>
				<ModalBody>
					<Form onSubmit={(e) => { this.props.handleIngredientChange(e, this.state); }}>
						<Row>
							<Col sm="2">
								<Label>Amount</Label>
								<Input
									type="text"
									name="quantity"
									value={this.state.quantity}
									onChange={this.updateIngredient}
								/>
							</Col>
							<Col sm="4">
								<Label>Measure</Label>
								<Input
									type="select" 
									name="measurement" 
									value={this.state.measurement}
									onChange={this.updateIngredient}
								>
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
							</Col>
							<Col sm="4">
								<Label>Ingredient</Label>
								<Input
									type="text"
									name="ingredient"
									value={this.state.ingredient}
									onChange={this.updateIngredient}
								/>
							</Col>
							<Col sm="2">
								<Button color="secondary" type="submit">Save</Button>
							</Col>
						</Row>
					</Form>
				</ModalBody>
			</Modal>
		);
	}
}

export default EditIngredient; 

import React, { Component } from 'react';
import { Button, Input, Row, Col, Modal, ModalBody, ModalHeader, Form, Label, FormGroup } from 'reactstrap';

const EditIngredient = (props) => {
		return(
			<Modal open={props.open}>
				<ModalHeader>Edit Ingredient</ModalHeader>
				<ModalBody>
					<Form onSubmit={props.closeAndEdit}>
						<Row>
							<Col sm="1">
								<Label>Amount</Label>
								<Input type="text"/>
							</Col>
							<Col sm="5">
								<Label>Measure</Label>
								<Input type="select"/>
							</Col>
							<Col sm="5">
								<Label>Ingredient</Label>
								<Input type="text"/>
							</Col>
							<Col sm="1">
								<Button color="secondary" type="submit"></Button>
							</Col>
						</Row>
					</Form>
				</ModalBody>
			</Modal>
			)

	


}

export default EditIngredient; 

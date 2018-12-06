import React, { Component } from 'react';
import { Col, Form, Button, Label, FormGroup, Input } from 'reactstrap';


class Login extends Component{
constructor(){
	super();

	this.state={
		username: '',
		password: '',
		hidden: true,
	}
}

handleChange = (e) => {
	this.setState({
		[e.currentTarget.name]: e.currentTarget.value
	})
}
handleSubmit = async (e) => {	
	e.preventDefault();
	const loginResponse = await fetch('http://localhost:9000/auth/login', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(this.state),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const parsedResponse = await loginResponse.json();
	console.log(parsedResponse, "parsedResponse in login");
	if(parsedResponse.data === 'Login successful!'){
		console.log('success login');
	this.props.updateComponentShowing("ListContainer")
	}
}
render(){
	return(
			<Form onSubmit={this.handleSubmit}>
			<Col md={6}>
				<FormGroup>
					<Label> Username: </Label>
					<Input 
					type='text' 
					name='username'
					placeholder='username' 
					onChange={this.handleChange} 
					required/>
				</FormGroup>
				</Col>
				<Col md={6}>
				<FormGroup>
					<Label> Password: </Label>
					<Input 
					type='password' 
					name='password'
					placeholder='password'
					onChange={this.handleChange} 
					required/>
				</FormGroup>
				</Col>
				<Button 
				type='Submit' 
				color='primary'>Login</Button>
			</Form>
		)
}

}

export default Login;


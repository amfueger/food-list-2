import React, { Component } from 'react';
import { Form, Button, Label, FormGroup, Input } from 'reactstrap';

class Login extends Component{
constructor(){
	super();

	this.state={
		username: '',
		password: ''
	}
}
handleChange = (e) => {
	this.setState({
		[e.currentTarget.name]: e.currentTarget.value
	})
}
handleSubmit = async (e) => {	
	const loginResponse = await fetch('http://localhost:4000/auth', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(this.state),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const parsedResponse = await loginResponse.json();

	if(parsedResponse.data === 'login successful'){
		console.log('success login');
		this.props.history.push('/list');
	}
}
render(){
	return(
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label> Username: </Label>
					<Input type='text' name='username' onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<Label> Password: </Label>
					<Input type='text' name='password' onChange={this.handleChange} />
				</FormGroup>
				<Button type='Submit' color='primary'>Login</Button>
			</Form>
		)
}

}

export default Login;
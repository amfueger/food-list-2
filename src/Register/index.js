import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

class Register extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			hidden: true
		}
	}

	//Username taken
	hideMessage = () => {
		this.setState({
			hidden: !this.state.hidden
		})
	}

	//Handle Change
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	//Register User
	handleSubmit = async (e) => {
	console.log(e, "e before e.preventDefault in handle submit register");
	e.preventDefault();
	console.log(e, "e after e.prevent default");
	const register = await fetch('http://localhost:9000/auth/register', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(this.state),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const parsedRegister = await register.json();
	if(parsedRegister.data === 'Registration successful') {
		this.props.handleRegisterLogin(
			parsedRegister.session.username,
			parsedRegister.session.loggedIn
		);
		this.props.updateComponentShowing('ListContainer');
	} else {
		this.hideMessage();
	}
}

render(){
	return(
		<div className="container">
		<Button floated="right" color="green" onClick={() => this.props.updatePageShowing("Login")}>
		<small>Already a user?</small><br/>
		Login
		</Button>
			<h1>Register</h1>
			<Form onSubmit={this.handleSubmit}>
			<p hidden={this.state.hidden}>
			This username already taken!</p>
				<FormGroup>
					<Label> Username: </Label>
					<Input 
					type='text' 
					name='username' 
					onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<Label> Email: </Label>
					<Input 
					type='text' 
					name='email' 
					onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<Label> Password: </Label>
					<Input 
					type='text' 
					name='password' 
					onChange={this.handleChange} />
				</FormGroup>
				<Button type='Submit' 
				color='blue'>Register</Button>
			</Form>
			</div>

		)
}

	}

	export default Register;

import React, { Component } from 'react';
import { NavItem, Navbar, Nav } from 'reactstrap';
import serverURL from '../serverURL.js';

class NavLogged extends Component {
	handleLogout = async () => {
	    try {
	      const logoutRequest = await fetch(serverURL + 'auth/logout', {
	        credentials: 'include'
	      });

	      const parsedResponse = await logoutRequest.json();

	      console.log(`parsedResponse from Logout: `, parsedResponse);

	      this.props.updateComponentShowing('Login');

	    } catch(err){
	        console.log('Error: ', err);
	    }
  	}
	render(){
		return(
			<Navbar color="light" light expand="md">
				<Nav className="ml-auto" navbar>
					<NavItem onClick={() => this.props.updateComponentShowing("CurrentList")}>
				    	Home
					</NavItem>
					<NavItem onClick={() => this.props.updateComponentShowing("Recipes")}>
				    	Recipes
					</NavItem>
					<NavItem onClick={() => this.props.updateComponentShowing("Login")}>
						Past Lists
					</NavItem>
					<NavItem onClick={this.handleLogout}>
					Logout
					</NavItem>
				</Nav>
			</Navbar>
		)
	}
}

export default NavLogged;
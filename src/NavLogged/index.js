import React, { Component } from 'react';
import { NavItem, Navbar, Nav } from 'reactstrap';
import serverURL from '../serverURL.js';


class NavLogged extends Component {
	render(){
		return(
			<Navbar color="light" light expand="md">
				<Nav className="ml-auto" navbar>
					<NavItem 
					className="navigation"
					onClick={() => this.props.updateComponentShowing("ListContainer")}>
				    	Home
					</NavItem>
					<NavItem 
					className="navigation"
					onClick={() => this.props.updateComponentShowing("RecipeContainer")}>
				    	Recipes
					</NavItem>
					<NavItem 
					className="navigation"
					onClick={() => this.props.updateComponentShowing("PastListContainer")}>
						Past Lists
					</NavItem>
					<NavItem 
					className="navigation"
					onClick={this.props.handleLogout}>
					Logout
					</NavItem>
				</Nav>
			</Navbar>
		)
	}
}

export default NavLogged;

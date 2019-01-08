import React, { Component } from 'react';
import { NavItem, Navbar, Nav } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Navb extends Component {

	render(){
		return(
			<Navbar color="light" light expand="md">
				<Nav className="ml-auto" navbar>
					<NavItem className="navigation"
					onClick={() => this.props.updateComponentShowing("ListContainer")}>
				    	Home 
					</NavItem>
					<NavItem className="navigation"
					onClick={() => this.props.updateComponentShowing("RecipeContainer")}>
				    	Recipes 
					</NavItem>
					<NavItem className="navigation"
					onClick={() => this.props.updateComponentShowing("Login")}>
							Login 
					</NavItem>
					<NavItem className="navigation"
					onClick={() => this.props.updateComponentShowing("Register")}>
						Register 
					</NavItem>
				</Nav>
			</Navbar>
		)
	}
}

export default Navb;

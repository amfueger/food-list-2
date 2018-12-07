import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class TempRecipes extends Component{
	constructor(){
		super();
		this.state = {
			recipes: []
		}
	}



	render() {
		const recipe = this.props.recipe


		return(
			<div>
				<ListGroup>
					{recipe}
				</ListGroup>
			</div>
			)
	}


}

export default TempRecipes; 

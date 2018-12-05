import React, { Component } from 'react';
import PastRecipeContainer from './PastRecipeContainer';
import PastTripContainer from './PastTripContainer';


class PastListContainer extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			email: ''
		}
	}

render(){
	return(
		<div>
			<PastRecipeContainer />
			<PastTripContainer />
		</div>)
}
	
}



export default PastListContainer;
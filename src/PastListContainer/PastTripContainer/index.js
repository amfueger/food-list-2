import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class PastTripContainer extends Component {
	constructor() {
		super();
		this.state = {
			trips: []
		}
	}
	getPastTrips = async () => {
			try {
			const trips = await fetch('http://localhost:9000/list/past/trips');
			const parsedTrips = await trips.json();
			return parsedTrips
			} catch(e){
				console.log(e, "getPastTrips, error");
			}
			
	}
	componentDidMount(){
	this.getPastTrips().then((trips) => {
		console.log(trips.data, "trips from past recipes");
		this.setState({
			trips: trips.data
		})
	}).catch((err) => {
		console.log(err);
	})
	}
    render(){
    	const trip = this.state.trips.map((trip, i) => {
    		return(
     <ListGroupItem key={trip._id}><a href={trip.url}>{trip.title}</a></ListGroupItem>
    			)
    	})
        return(
        	<ListGroup>
           {trip} 
          </ListGroup>
        )
    }
}
export default PastTripContainer;

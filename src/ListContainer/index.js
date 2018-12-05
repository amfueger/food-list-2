import React, { Component } from 'react';
import RecipeSearch from './RecipeSearch';
import RecipeResults from './RecipeResults';
import TempIngredients from './TempIngredients';
import TempRecipes from './TempRecipes';
import AddIngredient from './AddIngredient';

import { Form, Label, Input, FormGroup } from 'reactstrap';
import moment from 'moment';

class RecipeContainer extends Component {
	constructor() {
		super()

		this.state = {
			trips: [],
			query: '',
			randomRecipes: [],
			recipeToEdit: {
				amount: ''
			},
			ingredientToEdit: {
				ingredient: '',
				quantity: '',
				measure: ''
			}, 
			showRecipeModal: false,
			showIngredientModal: false,
			currentTrip: [{
				tripName: '',
				date: Date,
				recipeList: [{
					apiRecipeId: null,
					title: ''
				}],
				itemList: [{
					ingredient: '',
					quantity: '',
					measure: ''
					}]
				}]
		}
	}
	// handleQuery = (query) => {
	// 	this.setState({ 
	// 		query: query
	// 	})
	// }
	handle
	addIngredient = (e) => {
		e.preventDefault();
			this.setState({
				ingredientList: [...this.state.ingredientList, this.props.ingredient]
			})	
	}
	addRecipe = (e) => {
		e.preventDefault();
		this.setState({
			recipeList: [...this.state.recipeList, this.props.recipe]
		})
	}
	addRecipeIngredients = (ingredient, e) => {
		e.preventDefault();

	}
  handleIngredientChange = (e) => {
    this.setState({
      ingredientToEdit: {
        ...this.state.ingredientToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
	}
  handleRecipeChange = (e) => {
    this.setState({
      recipeToEdit: {
        ...this.state.recipeToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  }
	deleteRecipe = async (id) => {
		this.setState({
			recipeList: this.state.recipeList.filter((recipe) => recipe._id !== id )
		})
	}
	deleteIngredient = async (id) => {
		this.setState({
			itemList: this.state.itemList.filter((ingredient) => ingredient._id !== id)
		})
	}
	getTrips = async () => {
		const trips = await fetch('http://localhost:9000/list/past/trips')
	}
	addTrip = async (trip, e) => {
			try {
				const newTrip = await fetch('http://localhost:9000/current/complete', {
					method: 'POST',
					body: JSON.stringify(trip),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				const parsedResponse = await newTrip.json();
				console.log(parsedResponse, "parsed new trip");
				this.setState({
					trips: [...this.state.trips, parsedResponse.data]
				})
			} catch(e){
				console.log(e, "e from addTrip in ListContainer");
			}		
	}
	render() {
		return (
			<div>
				<Form>
					<FormGroup>
						<Label>Name of Trip:</Label>
						<Input name="title" type="title" placeholder={moment().format('LLL')}/>
					</FormGroup>
					<FormGroup>
						<Label>Date:</Label>
						<Input name="date" type="date" placeholder={moment().format('LLL')}/>
					</FormGroup>	
					</Form>
				<TempIngredients />
				<AddIngredient 
				addIngredient={this.addIngredient}/>
				<TempRecipes />
				<RecipeSearch handleQuery={this.handleQuery}/>
				<RecipeResults query={this.state.query} />
			</div>
			)
	}
}

export default RecipeContainer;
import React, { Component } from 'react';
import RecipeSearch from './RecipeSearch';
import RecipeResults from './RecipeResults';
import TempIngredients from './TempIngredients';
import TempRecipes from './TempRecipes';
import AddIngredient from './AddIngredient';
import EditIngredients from './EditIngredients';

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
			itemList: [],
			currentTrip: [{
				tripName: '',
				date: Date,
				recipeList: [{
					apiRecipeId: null,
					title: ''
				}],
				itemList: [],
				singleIngredient: {
					ingredient: '',
					quantity: '',
					measure: ''
				}
				}]
		}
	}
	addRecipe = (e) => {
		e.preventDefault();
		console.log();
		// const currentRecipe = e.currentTarget.
		this.setState({
			recipeList: [...this.state.recipeList, this.props.recipe]
		})
	}
		addRecipeIngredients = async (e) => {
		e.preventDefault();
		const ingredients = await fetch('http://localhost:/list/ingredients' + this.state.apiRecipeId + + '/information');		
		const parsedResponse = await ingredients.json();
		const currentList = await this.state.itemList;
		const ingredient = await parsedResponse.data.extendedIngredients;
		for(let i = 0; 0 < ingredient.length; i++){
			this.setState({
				singleIngredient: { 
					ingredient: ingredient[i].name,
					quantity: ingredient[i].measures.us.amount,
					measure: ingredient[i].measures.us.unitShort
				}
			})
			currentList.push(this.state.singleIngredient);
		}
		this.setState({
			itemList: currentList
		})
	}
  handleIngredientChange = (e,  newIngredient) => {
		e.preventDefault();
		const { itemList, ingredientToEdit } = this.state;
		let index = -1;
		itemList.find((item, i) => {
			if(JSON.stringify(item) === JSON.stringify(ingredientToEdit)) {
				index = i;
				return i;
			}
		});
		itemList[index] = newIngredient;

		this.setState({
			showIngredientModal: false,
			itemList,
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
		openAndEdit = (targetIngredient) => {
		this.setState({
			showIngredientModal: true,
			ingredientToEdit: {
				...targetIngredient
			}
		})
	}
	addIngredient = (ingredient) => {
		console.log(ingredient, "ingredient from the button");
		const currentList = this.state.itemList;
		currentList.push(ingredient);
		this.setState({
			itemList: currentList
		});
	}
	// deleteIngredient = async (id) => {
	// 	this.setState({
	// 		itemList: this.state.itemList.filter((ingredient) => ingredient._id !== id)
	// 	})
	// }

		deleteIngredient = (id) => {
		const currentList = this.state.itemList;
		currentList.splice(id, 1);
		this.setState({
			itemList: currentList,
		});
	}
	getTrips = async () => {
		const trips = await fetch('http://localhost:9000/list/past/trips')
		console.log(trips);
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
	//<RecipeResults addRecipe={this.addRecipe} query={this.state.query} />
	//<RecipeSearch handleQuery={this.handleQuery}/>
	render() {
		return (
			<div>
				<Form>
					<FormGroup>
						<Label>Name of Trip:</Label>
						<Input name="title" type="title" placeholder={moment().format('LLL')}/>
					</FormGroup>
						<small>{moment().format('LLL')}</small>
					</Form>
					{this.state.showIngredientModal &&
					<EditIngredients 
					open={this.state.showIngredientModal} 
					ingredientToEdit={this.state.ingredientToEdit} 
					handleIngredientChange={this.handleIngredientChange} />}
				<TempIngredients 
				ingredients={this.state.itemList} 
				deleteIngredient={this.deleteIngredient} 
				openAndEdit={this.openAndEdit}/>
				<AddIngredient 
				addIngredient={this.addIngredient}/>
				<TempRecipes />
				
				
			</div>
			)
	}
}

export default RecipeContainer;
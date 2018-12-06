import React, { Component } from 'react';
import './App.css';
/****Components****/
// import Nav from './Nav';
// import NavLogged from './NavLogged';
import RecipeContainer from './RecipeContainer';
//Login-Register
import Login from './Login';
import Register from './Register';

import Navb from './Navb';
import NavLogged from './NavLogged';

import ListContainer from './ListContainer';

//Server access
import serverURL from './serverURL.js';

import apiUrl from './apiUrl'
console.log(apiUrl);
class App extends Component {
  constructor() {
    super();
    this.state = {
      componentShowing: 'RecipeContainer',
      logged: false,
      username: '',
      email: '',
      recipes: []
    }
  this.updateComponentShowing = this.updateComponentShowing.bind(this)
  }

  handleRegisterLogin = (username, email, isLogged) => {
    this.setState({
      username: username,
      email: email,
      logged: isLogged
    });
  }

  updateComponentShowing = (componentShowing) => {
    this.setState({componentShowing: componentShowing})
}

  render() {
    return (
      <div className="App">
      {this.state.logged ?
        <NavLogged updateComponentShowing={this.updateComponentShowing}/>
        : <Navb updateComponentShowing={this.updateComponentShowing}/>}
     {this.state.componentShowing === "RecipeContainer" ? 
      <div>
    <RecipeContainer 
    updateComponentShowing={this.updateComponentShowing} 
    appState={this.state}/>
      </div> 
     : null}
      {this.state.componentShowing === "Register" ? 
      <div>
        <Register 
        updateComponentShowing={this.updateComponentShowing}
        handleRegisterLogin={this.handleRegisterLogin}
        appState={this.state}
        />
      </div>
      : null}
      {this.state.componentShowing === "Login" ? 
    <div>
      <Login 
      updateComponentShowing={this.updateComponentShowing} 
      handleRegisterLogin={this.handleRegisterLogin} 
      appState={this.state}/>
    </div> 
    : null} 

      {this.state.componentShowing === "ListContainer" ? 
    <div>
      <ListContainer 
      updateComponentShowing={this.updateComponentShowing} 
      appState={this.state}/>
    </div> 
    : null} 
      
  </div>
    );
  }
}

export default App;

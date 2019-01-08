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

import apiUrl from './apiUrl';
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
    };
    this.updateComponentShowing = this.updateComponentShowing.bind(this);
    this.handleRegisterLogin = this.handleRegisterLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleRegisterLogin = (username, isLogged) => {
    this.setState({
      username: username,
      logged: isLogged
    });
  }

  handleLogout = async () => {
    try {
      const logoutRequest = await fetch(serverURL + 'auth/logout', {
        credentials: 'include'
      });

      const parsedResponse = await logoutRequest.json();

      console.log(`parsedResponse from Logout: `, parsedResponse);
      this.setState({
        componentShowing: 'Login',
        username: '',
        logged: false
      });

    } catch(err) {
        console.log('Error: ', err);
    }
  }

  updateComponentShowing = (componentShowing) => {
    this.setState({componentShowing: componentShowing});
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ?
          <NavLogged updateComponentShowing={this.updateComponentShowing} handleLogout={this.handleLogout}/>
          : <Navb updateComponentShowing={this.updateComponentShowing}/>}
        {/* Show currently displayed component for easier debugging */}
        <h1 style={{textAlign: 'left'}}>{this.state.componentShowing}</h1>
        <hr/>
        {this.state.componentShowing === "RecipeContainer" &&
          <div>
            <RecipeContainer
              updateComponentShowing={this.updateComponentShowing}
              appState={this.state}/>
          </div>
        }
        {this.state.componentShowing === "Register" &&
          <div>
            <Register
              updateComponentShowing={this.updateComponentShowing}
              handleRegisterLogin={this.handleRegisterLogin}
              appState={this.state}/>
          </div>
        }
        {this.state.componentShowing === "Login" &&
          <div>
            <Login
              updateComponentShowing={this.updateComponentShowing}
              handleRegisterLogin={this.handleRegisterLogin}
              appState={this.state}/>
          </div>
        }
        {this.state.componentShowing === "ListContainer" &&
          <div>
          <ListContainer
            updateComponentShowing={this.updateComponentShowing}
            appState={this.state}/>
          </div>
        }
      </div>
    );
  }
}

export default App;

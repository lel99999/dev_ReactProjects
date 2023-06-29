//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

// function App() {
class App extends Component {
  formatName(user){
    return user.firstName + ' ' + user.lastName;
  }

  render(){
  const user = {
    firstName: 'Carl',
    lastName: 'Tester'

  };
  return (
    <div>
      <Rating rating="1"/>
      <Rating rating="2"/>
      <Rating rating="3"/>
      <Rating rating="4"/>
      <Rating rating="5"/>
      <h1>This is React with {this.formatName(user)}!</h1>
      <Products />
      <Button>Default</Button>
    </div>
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
  );
}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is working wowowow</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">I LIKE THINGS!</Person>
        <Person name="Diddly" age="14"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Diddly', age: 14 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked')
    this.setState({ persons:
      [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Jeremy', age: 29 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is working wowowow</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>BLAHHHH!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

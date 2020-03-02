import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Diddly', age: 14 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked')
    this.setState({ persons:
      [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: newName, age: 29 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ persons:
      [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: event.target.value, age: 29 }
      ]
    })
  }

  togglerPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
                      name={person.name}
                      age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is working wowowow</p>
        <button
          style={style}
          onClick={this.togglerPersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;

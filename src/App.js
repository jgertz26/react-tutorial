import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Diddly', age: 14 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const personCopy = {
      ...this.state.persons[personIndex]
    };

    personCopy.name = event.target.value;

    const personsCopy = [...this.state.persons]
    personsCopy[personIndex] = personCopy;

    this.setState({ persons: personsCopy})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)  => {
            return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={index}
                      changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'

      }
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p className={classes.join(' ')}>This is working wowowow</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);

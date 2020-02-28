import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState(
    { persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Diddly', age: 14 }
    ]}
  )

  const switchNameHandler = () => {
    console.log('Was clicked')
    setPersonsState({ persons:
      [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Jeremy', age: 29 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is working wowowow</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>BLAHHHH!</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;

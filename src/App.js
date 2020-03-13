import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// Class based component which extends Component
// class App extends Component {

// Function based component
const app = (props) => {

  // useState Hook method
  const [personsState, setPersonsState] = useState({
      persons: [
        { id: 'a', name: 'Tavo', age: 28 }, 
        { id: 'b', name: 'Scarlett', age: 31 }, 
        { id: 'c', name: 'Parker', age: 2 }
      ]
  });

  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: false
  });

  const deletePersonHandler = (personIndex) => {
    // Create a copy of personsState.persons instead of manipulating it!!!
    const updatedPersons = [...personsState.persons];
    updatedPersons.splice(personIndex, 1);
    setPersonsState({persons: updatedPersons});
  }
  
  const nameChangedHandler = (event, id) => {

    console.log(event.target.value);

    const updatedPersonIndex = personsState.persons.findIndex(person =>  {
      return person.id === id
    });

    const person = { ...personsState.persons[updatedPersonIndex] }
    person.name = event.target.value;

    const persons = [...personsState.persons]
    persons[updatedPersonIndex] = person;

    setPersonsState({
      persons: persons
    });
  }

  const style = {
	  backgroundColor: 'green',
	  font: 'inherit',
	  border: '1px solid blue',
    padding:'8px',
    cursor: 'pointer',
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState.showPersons;
    setShowPersonsState({
      showPersons: !doesShow
    })
  }

  // Handle Person's show/hide content toggle
  let persons = null;
  if(showPersonsState.showPersons) {
    persons = (
      <div>
        { 
          personsState.persons.map((person, index) => {
            return <Person 
              key={person.id}
              customClickAction={deletePersonHandler.bind(this, index)}
              name={person.name} 
              age={person.age}
              changed={(event) => {nameChangedHandler(event, person.id)}}
              />
          })
        }
	    </div>
    );
    style.backgroundColor = 'red';
  }

  const classes = [];

  if( personsState.persons.length <= 2) {
    classes.push('red'); // classes = ['red']
  }

  if( personsState.persons.length <= 1) {
    classes.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div className="App">
		  <h1>Hi, I am a React App</h1>
		  <p className={classes.join(' ')}>This is really working!</p>
      {/* One way of adding params back to function on call... This is a slower method.*/}
      <button style={style} onClick={togglePersonsHandler}>Switch Name</button>
      { persons }
    </div>
	);
	// This is the exact same thing as above. This is just an example of what is happening under the hood...
	// return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
}

export default app;
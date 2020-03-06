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
        { name: 'Tavo', age: 28 }, 
        { name: 'Scarlett', age: 31 }, 
        { name: 'Parker', age: 2 }
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
  
  // const nameChangedHandler = (event) => {
	// setPersonsState({
	// 	persons: [
	// 	  {name: 'Tavo', age: '28'},
	// 	  {name: event.target.value, age: '31'},
	// 	  {name: 'Yejun', age: '1'}
	//   ]});
  // }

  const style = {
	  backgroundColor: 'white',
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
              key={index} // This should typically be the id of the data from a DB!!!
              customClickAction={deletePersonHandler.bind(this, index)}
              name={person.name} 
              age={person.age} 
              />
          })
        }
	    </div>
    );
  }



  return (
    <div className="App">
		  <h1>Hi, I am a React App</h1>
		  <p>This is really working!</p>
      {/* One way of adding params back to function on call... This is a slower method.*/}
      <button style={style} onClick={togglePersonsHandler}>Switch Name</button>
      { persons }
    </div>
	);
	// This is the exact same thing as above. This is just an example of what is happening under the hood...
	// return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
}

export default app;
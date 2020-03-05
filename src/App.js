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

  const switchNameHandler = (newName) => {
    // This will not merge, but replace the old state!!!
    setPersonsState({
      persons: [
        {name: newName, age: '28'},
        {name: 'HyeRee', age: '31'},
        {name: 'Yejun', age: '1'}
    ]});
  }
  
  const nameChangedHandler = (event) => {
	setPersonsState({
		persons: [
		  {name: 'Tavo', age: '28'},
		  {name: event.target.value, age: '31'},
		  {name: 'Yejun', age: '1'}
	  ]});
  }

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

  return (
    <div className="App">
		  <h1>Hi, I am a React App</h1>
		  <p>This is really working!</p>
      {/* One way of adding params back to function on call... This is a slower method.*/}
      <button style={style} onClick={togglePersonsHandler}>Switch Name</button>
      { 
        showPersonsState.showPersons ? 
          <div>
	          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person 
              name={personsState.persons[1].name} 
              age={personsState.persons[1].age}
              customClickAction={
                // Another way of adding params back to function call... This is the recommened faster way
                switchNameHandler.bind(this,'Gustavo')
		          }
		          changed={nameChangedHandler}
            >
              My Hobbies: Singing, and Piano
            </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
	        </div>
          : null
      }
    </div>
	);
	// This is the exact same thing as above. This is just an example of what is happening under the hood...
	// return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
}

export default app;
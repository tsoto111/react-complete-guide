import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Tavo', age: 28 }, 
      { name: 'Scarlett', age: 31 }, 
      { name: 'Parker', age: 2 }
    ]
  }

  switchNameHandler = () => {
    console.log("was clicked");
  }

  render() {
    return (
      <div className="App">
		  <h1>Hi, I am a React App</h1>
		  <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
		  <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
		  <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Singing, and Piano</Person>
		  <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
	);
	// This is the exact same thing as above. This is just an example of what is happening under the hood...
	// return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

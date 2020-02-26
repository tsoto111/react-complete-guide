import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
		  <h1>Hi, I am a React App</h1>
		  <p>This is really working!</p>
		  <Person/>
		  <Person/>
		  <Person/>
      </div>
	);
	// This is the exact same thing as above. This is just an example of what is happening under the hood...
	// return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

import React from 'react';
import './Person.css';
import Radium from 'radium';

// ES6's way of creating a function. No use of `this`...
const Person = (props) => {

	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	}

	return (
		<div className='Person' style={style}>
			<p onClick={props.customClickAction}>Hi, I'm {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="type" onChange={props.changed} value={props.name} />
		</div>
	);
}

export default Radium(Person);
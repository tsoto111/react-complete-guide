import React from 'react';
import './Person.css';

// ES6's way of creating a function. No use of `this`...
const Person = (props) => {
	return (
		<div className='Person'>
			<p onClick={props.customClickAction}>Hi, I'm {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="type" />
		</div>
	);
}

export default Person;
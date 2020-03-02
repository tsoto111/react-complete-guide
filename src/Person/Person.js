import React from 'react';

// ES6's way of creating a function. No use of `this`...
const Person = (props) => {
	return (
		<div>
			<p onClick={props.customClickAction}>
				Hi, I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
		</div>
	);
}

export default Person;
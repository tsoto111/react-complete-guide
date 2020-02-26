import React from 'react';

// ES6's way of creating a function. No use of `this`...
const Person = (props) => {
	return (
		<p>
			Hi, I'm {props.name} and I am {props.age} years old!
		</p>
	);
}

export default Person;
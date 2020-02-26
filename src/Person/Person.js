import React from 'react';

// ES6's way of creating a function. No use of `this`...
const Person = () => {
	return (
	<p>
		I'm a Person and I am {Math.floor(Math.random() * 30)} years old!
	</p>
	);
}

export default Person;
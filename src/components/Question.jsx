import React, { Component } from 'react';

import { Button, Paper } from './UIElements.jsx';

const Question = props => {
	const { questionoObject } = props;
	return (
		<Paper>
			<h2>{questionoObject.value}</h2>
			<textarea name="" id="" cols="30" rows="10" />
		</Paper>
	);
};

export default Question;

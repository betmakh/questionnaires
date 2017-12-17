import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Paper } from './UIElements.jsx';

const Quesstionnaire = props => {
	return (
		<Paper>
			<h2>{props.questionnaire.name}</h2>
			<p>Total questions: {props.questionnaire.questions.length}</p>
			<Button>Start</Button>
			<Link to={`/questionnaire/${props.questionnaire.id}`}>
				<Button>Edit</Button>
			</Link>
			<Button>Delete</Button>
		</Paper>
	);
};

export default Quesstionnaire;

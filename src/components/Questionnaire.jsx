import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Paper } from './UIElements.jsx';

const Quesstionnaire = props => {
	var ques = 'tyche sooqa padla?',
		ans = 'da';
	return (
		<Paper>
			<h2>{props.questionnaire.name}</h2>
			<p>Total questions: {props.questionnaire.questions.length}</p>
			<Button>Start</Button>
			<Button>Edit</Button>
			<Button>Delete</Button>
		</Paper>
	);
};

export default Quesstionnaire;

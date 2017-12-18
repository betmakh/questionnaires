import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Paper, ButtonContainer } from './UIElements.jsx';

const Quesstionnaire = props => {
	return (
		<Paper>
			<h2>{props.questionnaire.name}</h2>
			<p>
				Total questions: {props.questionnaire.questions.length}. Times completed: {props.questionnaire.responses.length}
			</p>
			<ButtonContainer>
				<Link to={`/questionnaire/start/${props.questionnaire.id}`}>
					<Button color="green">Start</Button>
				</Link>
				<Link to={`/questionnaire/${props.questionnaire.id}`}>
					<Button>Edit</Button>
				</Link>
				<Link to={`/questionnaireresults/${props.questionnaire.id}`}>
					<Button>View results</Button>
				</Link>
				<Button
					color="red"
					onClick={() => {
						props.onDeleteClick(props.questionnaire.id);
					}}
				>
					Delete
				</Button>
			</ButtonContainer>
		</Paper>
	);
};

export default Quesstionnaire;

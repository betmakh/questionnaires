import React, { Component } from 'react';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { saveQuestionnaire, saveQuestions } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import { Button, StyledLink, Paper } from '../components/UIElements.jsx';

class QuestionnaireResultsContainer extends Component {
	// todo: make pretty table output
	render() {
		var { answers, questionnaire } = this.props;
		console.log('answers', answers);

		return <div>{JSON.stringify(answers, null, '\t')}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	var answers = [],
		questionnaire = state.getIn(['questionnaires', ownProps.match.params.id]) || {};

	// get answers for current questionnaire
	questionnaire.responses.forEach(el => {
		answers.push(state.getIn(['answers', el]));
	});
	return {
		questionnaire,
		answers
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSaveClick: (questionnaire, questions) => {}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireResultsContainer);

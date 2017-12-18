import React, { Component } from 'react';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { saveQuestionnaire, saveQuestions } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import Question from '../components/Question.jsx';
import { Button, StyledLink, Paper } from '../components/UIElements.jsx';

// const Button =

class QuestionnaireProcessContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuestionIndex: 0,
			answers: Immutable.Map()
		};
	}

	nextQuestion() {
		this.setState({ currentQuestionIndex: ++this.state.currentQuestionIndex });
	}

	render() {
		var { currentQuestionIndex } = this.state,
			{ questionnaire, questions } = this.props;
		console.log('currentQuestionIndex', currentQuestionIndex);

		return (
			<div>
				<h1>{questionnaire.name}</h1>
				<Question questionoObject={questions[currentQuestionIndex]} />
			</div>
		);
	}
}

// QuestionnaireProcessContainer.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

const mapStateToProps = (state, ownProps) => {
	var questions = [],
		questionnaire = state.getIn(['questionnaires', ownProps.match.params.id]) || {};

	if (questionnaire.questions) {
		questionnaire.questions.forEach(el => {
			questions.push(state.getIn(['questions', el]));
		});
	}
	return {
		questionnaire,
		questions
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSaveClick: (questionnaire, questions) => {
			console.log('questionnaire', questionnaire);
			console.log('questions', questions);
			dispatch(saveQuestionnaire(questionnaire));
			dispatch(saveQuestions(questions));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireProcessContainer);

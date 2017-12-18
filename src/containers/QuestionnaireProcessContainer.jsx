import React, { Component } from 'react';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { saveAnswers } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import Question from '../components/Question.jsx';
import { Button, StyledLink, Paper } from '../components/UIElements.jsx';

// const Button =

class QuestionnaireProcessContainer extends Component {
	constructor(props) {
		super(props);
		const { questionnaire } = props;
		this.state = {
			currentQuestionIndex: 0,
			answerSet: {
				id: `ans${Date.now()}`,
				questionnaireID: questionnaire.id,
				responses: Immutable.Map()
			}
		};
	}

	navigateQuestion(delta) {
		this.setState({ currentQuestionIndex: this.state.currentQuestionIndex + delta });
	}

	questionUpdated(data) {
		var { answerSet } = this.state;
		answerSet.responses = answerSet.responses.set(data.id, data.value);
		this.setState({ answerSet });
	}

	render() {
		var { currentQuestionIndex, answerSet } = this.state,
			{ questionnaire, questions, submitAnswers } = this.props,
			currentQuestion = questions[currentQuestionIndex];

		return (
			<div>
				<h1>{questionnaire.name}</h1>
				{currentQuestion ? (
					<Question
						questionoObject={currentQuestion}
						onQuestionUpdate={this.questionUpdated.bind(this)}
						response={answerSet.responses.get(currentQuestion.id) || ''}
					/>
				) : (
					<Question
						email
						response={answerSet.responses.get('email') || ''}
						onQuestionUpdate={this.questionUpdated.bind(this)}
					/>
				)}
				{!!currentQuestionIndex && <Button onClick={() => this.navigateQuestion(-1)}>prev. question</Button>}
				{currentQuestionIndex <= questions.length &&
					(currentQuestionIndex < questions.length ? (
						<Button onClick={() => this.navigateQuestion(1)}>next question</Button>
					) : (
						<Link to="/">
							<Button onClick={() => submitAnswers(answerSet)}>Submit unswers</Button>
						</Link>
					))}
			</div>
		);
	}
}

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
		submitAnswers: answerset => {
			dispatch(saveAnswers(answerset));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireProcessContainer);

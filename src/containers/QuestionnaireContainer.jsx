import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editQuestionnaire } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import { Button, StyledLink, Paper } from '../components/UIElements.jsx';

// const Button =

class QuestionnaireContainer extends Component {
	constructor(props) {
		super(props);
		const { questionnaire, questions } = props;
		this.state = {
			questionnaire,
			questions
		};
	}

	componentWillMount() {
		const { dispatch, match } = this.props;
	}

	addQuestion() {
		var { questions } = this.state,
			value = this.questionInput.value.trim();

		if (value && value.length) {
			this.questionInput.value = '';
			questions.push({
				value,
				id: `qst${Date.now()}`
			});

			this.setState({ questions });
		}
	}
	render() {
		var { questions } = this.state;

		return (
			<div>
				<h1>{this.state.questionnaire.name || 'New questionnaire'}</h1>
				<Paper>
					<input
						type="text"
						ref={input => {
							this.questionInput = input;
						}}
					/>
					<Button onClick={this.addQuestion.bind(this)}>Add</Button>
					<hr />
					<ul>{questions.map(qst => <li key={qst.id}>{qst.value}</li>)}</ul>
				</Paper>
				<br />
				<Button fullWidth color="primary">
					<StyledLink to="/questionnaire/new">Save</StyledLink>
				</Button>
			</div>
		);
	}
}

// QuestionnaireContainer.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

const mapStateToProps = (state, ownProps) => {
	var questions = [],
		questionnaire = state.questionnaires.get(ownProps.match.params.id) || {};

	if (questionnaire.questions) {
		questionnaire.questions.forEach(el => {
			questions.push(state.questions.get(el));
		});
	}

	return {
		questionnaire,
		questions
	};
};

export default connect(mapStateToProps)(QuestionnaireContainer);

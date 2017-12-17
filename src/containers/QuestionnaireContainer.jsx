import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { saveQuestionnaire } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import { Button, StyledLink, Paper } from '../components/UIElements.jsx';

// const Button =

class QuestionnaireContainer extends Component {
	constructor(props) {
		super(props);
		var { questionnaire, questions } = props;
		questionnaire.name = questionnaire.name || 'New questionnaire';
		this.state = {
			questionnaire,
			questions
		};
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

	removeQuestion(id) {
		var { questions } = this.state;
		this.setState({
			questions: questions.filter(qst => qst.id != id)
		});
	}

	headerChanged() {
		var { questionnaire } = this.state,
			newName = this.headerElement.value.trim();
		console.info('newName', newName);

		if (newName.length) {
			questionnaire.name = newName;
			this.setState({ questionnaire });
		}
	}

	save() {
		console.log('this.props', this.props);
		const { dispatch } = this.props;
		var { questionnaire, questions } = this.state;
		questionnaire.id = `qst${Date.now()}`;
		questionnaire.questions = questions.map(ask => ask.id);
		this.props.onSaveClick(questionnaire);
	}
	render() {
		var { questions } = this.state;

		return (
			<div>
				<input
					type="text"
					onChange={this.headerChanged.bind(this)}
					ref={header => {
						this.headerElement = header;
					}}
					value={this.state.questionnaire.name}
				/>
				<Paper>
					<input
						type="text"
						ref={input => {
							this.questionInput = input;
						}}
					/>
					<Button onClick={this.addQuestion.bind(this)}>Add</Button>
					<hr />
					<ul>
						{questions.map(qst => (
							<li key={qst.id}>
								{qst.value} <Button onClick={this.removeQuestion.bind(this, qst.id)}>Delete</Button>
							</li>
						))}
					</ul>
				</Paper>
				<br />
				<Button color="primary" onClick={this.save.bind(this)}>
					Save
				</Button>
				<Button>
					<StyledLink to="/">Back</StyledLink>
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

const mapDispatchToProps = dispatch => {
	return {
		onSaveClick: (questionnaire, questions) => {
			dispatch(saveQuestionnaire(questionnaire));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireContainer);

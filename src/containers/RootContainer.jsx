import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editQuestionnaire } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import { Button, StyledLink, Paper } from '../components/UIElements.jsx';

// const Button =

class MainPageContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { questionnaires } = this.props;
		console.log('questionnaires', questionnaires);
		var questionnairesHtml = [],
			questionnairesIterator = questionnaires.values(),
			iteratorValue;

		do {
			iteratorValue = questionnairesIterator.next();
			if (iteratorValue.value) {
				questionnairesHtml.push(
					<Quesstionnaire questionnaire={iteratorValue.value} key={iteratorValue.value.id} />
				);
			}
		} while (!iteratorValue.done);

		return (
			<div>
				<h1>Questionnaries</h1>

				{questionnairesHtml}

				<Link to="/questionnaire/new">
					<Button fullWidth color="primary">
						Add questionnaire
					</Button>
				</Link>

				<br />
				<br />
			</div>
		);
	}
}

// MainPageContainer.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

const mapStateToProps = state => {
	return {
		questionnaires: state.questionnaires
	};
};

export default connect(mapStateToProps)(MainPageContainer);

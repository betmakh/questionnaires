import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editQuestionnaire } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import { Button, StyledLink } from '../components/UIElements.jsx';

// const Button =

class MainPageContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Questionnaries</h1>

				<Button fullWidth color="primary">
					<StyledLink to="/questionnaire/new">Add questionnaire</StyledLink>
				</Button>
				<br />
				<br />
				<Quesstionnaire />
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

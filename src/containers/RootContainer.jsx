import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteQuestionnaire } from '../actions/questionnaireActions.js';
import Quesstionnaire from '../components/Questionnaire.jsx';
import { Button, StyledLink, Paper } from '../components/UIElements.jsx';

// const Button =

class MainPageContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { questionnaires, onDeleteClick } = this.props;
		var questionnairesHtml = [],
			questionnairesArray = questionnaires.valueSeq().toArray(),
			iteratorValue;

		// do {
		// 	iteratorValue = questionnairesIterator.next();
		// 	if (iteratorValue.value) {
		// 		console.log('iteratorValue.value', iteratorValue.value);
		// 		questionnairesHtml.push(
		// 			<Quesstionnaire
		// 				questionnaire={iteratorValue.value}
		// 				onDeleteClick={onDeleteClick}
		// 				key={iteratorValue.value.id}
		// 			/>
		// 		);
		// 	}
		// } while (!iteratorValue.done);

		return (
			<div>
				<h1>Questionnaries</h1>

				{questionnairesArray.map(qst => (
					<Quesstionnaire questionnaire={qst} onDeleteClick={onDeleteClick} key={qst.id} />
				))}

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
		questionnaires: state.get('questionnaires')
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDeleteClick: id => {
			dispatch(deleteQuestionnaire(id));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);

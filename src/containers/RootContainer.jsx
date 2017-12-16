import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Quesstionnaire from '../components/Questionnaire.jsx';

class MainPageContainer extends Component {
	render() {
		return (
			<div>
				<h1>Questionnaries</h1>
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

function mapStateToProps(state) {
	return {
		questionnaires: state.questionnaires
	};
}

export default connect(mapStateToProps)(MainPageContainer);

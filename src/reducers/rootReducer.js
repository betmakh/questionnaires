import Immutable from 'immutable';

import { QUESTIONNAIRE_SAVE, QUESTIONS_SAVE, QUESTIONNAIRE_DELETE } from '../actions/questionnaireActions.js';
import { parseStateFromLocalStorage, saveStateToLocalstorage } from '../utils.js';

const typeActionsMap = {
	[QUESTIONNAIRE_SAVE]: (state, action) => {
		return state.setIn(['questionnaires', action.data.id], action.data);
	},
	[QUESTIONS_SAVE]: (state, action) => {
		console.log('action', action);
		var { questions } = state;
		if (action.data.length) {
			action.data.forEach(ask => {
				state = state.setIn(['questions', ask.id], ask);
			});
		}
		return state;
	},
	[QUESTIONNAIRE_DELETE]: (state, action) => {
		return state.deleteIn(['questionnaires', action.id]);
	}
};

export default (state = parseStateFromLocalStorage(), action) => {
	var result = action.type in typeActionsMap ? typeActionsMap[action.type](state, action) : state;
	console.log('result', result);
	return result;
};

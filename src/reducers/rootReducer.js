import { QUESTIONNAIRE_SAVE } from '../actions/questionnaireActions.js';
import { parseStateFromLocalStorage, saveStateToLocalstorage } from '../utils.js';

const typeActionsMap = {
	[QUESTIONNAIRE_SAVE]: (state, action) => {
		var { questionnaires } = state;
		questionnaires.set(action.data.id, action.data);
		return Object.assign({}, state, {
			questionnaires
		});
	}
};

export default (state = parseStateFromLocalStorage(), action) => {
	saveStateToLocalstorage(state);
	return action.type in typeActionsMap ? typeActionsMap[action.type](state, action) : state;
};

import { QUESTIONNAIRE_SAVE } from '../actions/questionnaireActions.js';

const typeActionsMap = {
	[QUESTIONNAIRE_SAVE]: (state, action) => {
		var { questionnaires } = state;
		questionnaires.set(action.data.id, action.data);
		return Object.assign({}, state, {
			questionnaires
		});
	}
};

export default (
	state = {
		questionnaires: new Map(),
		questions: new Map(),
		responses: new Map()
	},
	action
) => {
	return action.type in typeActionsMap ? typeActionsMap[action.type](state, action) : state;
};

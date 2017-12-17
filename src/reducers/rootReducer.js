import { QUESTIONNAIRE_EDIT } from '../actions/questionnaireActions.js';

const typeActionsMap = {
	[QUESTIONNAIRE_EDIT]: (state, action) => {}
};

export default (
	state = {
		questionnaires: new Map(),
		questions: new Map(),
		responses: new Map()
	},
	action
) => {
	return state;
};

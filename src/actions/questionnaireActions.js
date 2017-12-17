export const QUESTIONNAIRE_CREATE = 'QUESTIONNAIRE_CREATE';
export const QUESTIONNAIRE_SAVE = 'QUESTIONNAIRE_SAVE';

export const saveQuestionnaire = data => {
	console.log('data', data);
	return {
		type: QUESTIONNAIRE_SAVE,
		data
	};
};

export const createQuestionnaire = data => {
	return {
		type: QUESTIONNAIRE_CREATE
	};
};

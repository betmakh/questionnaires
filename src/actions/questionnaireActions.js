export const QUESTIONNAIRE_CREATE = 'QUESTIONNAIRE_CREATE';
export const QUESTIONNAIRE_EDIT = 'QUESTIONNAIRE_EDIT';

export const editQuestionnaire = (
	data = {
		id: `qst${Date.now()}`
	}
) => {
	return {
		type: QUESTIONNAIRE_EDIT,
		data
	};
};

export const createQuestionnaire = data => {
	return {
		type: QUESTIONNAIRE_CREATE
	};
};

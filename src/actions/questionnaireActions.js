export const QUESTIONS_SAVE = 'QUESTIONS_SAVE';
export const QUESTIONNAIRE_SAVE = 'QUESTIONNAIRE_SAVE';
export const QUESTIONNAIRE_DELETE = 'QUESTIONNAIRE_DELETE';
export const ANSWERS_SAVE = 'ANSWERS_SAVE';

export const saveQuestionnaire = data => {
	return {
		type: QUESTIONNAIRE_SAVE,
		data
	};
};

export const deleteQuestionnaire = id => ({
	type: QUESTIONNAIRE_DELETE,
	id
});

export const saveQuestions = data => {
	return {
		type: QUESTIONS_SAVE,
		data
	};
};

export const saveAnswers = data => ({
	type: ANSWERS_SAVE,
	data
});

export const QUESTION_CREATE = 'QUESTION_CREATE';

export const createQuestion = (data, questionnaireID) => {
	return {
		type: QUESTION_CREATE,
		questionnaireID
	};
};

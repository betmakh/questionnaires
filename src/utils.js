import Immutable from 'immutable';

export const saveStateToLocalstorage = state => {
	// var result = {};

	// for (var i in state) {
	// 	let entriesIterator = state[i].entries(),
	// 		mapProcessedResult = [],
	// 		currentEntry;

	// 	do {
	// 		currentEntry = entriesIterator.next();
	// 		if (currentEntry.value) {
	// 			mapProcessedResult.push(currentEntry.value);
	// 		}
	// 	} while (!currentEntry.done);
	// 	result[i] = mapProcessedResult;
	// }

	return window.localStorage.setItem('appState', JSON.stringify(state.toJS()));
};

export const parseStateFromLocalStorage = () => {
	var parsedData,
		result = {},
		dataObj,
		initialData = {
			questionnaires: {},
			questions: {},
			responses: {}
		};
	try {
		parsedData = JSON.parse(window.localStorage.getItem('appState'));
	} catch (e) {
		parsedData = initialData;
	}
	dataObj = Object.assign({}, initialData, parsedData);

	for (var i in dataObj) {
		result[i] = Immutable.Map(dataObj[i]);
	}
	// result = Immutable.Map(dataObj);
	// console.log('result', result);
	return Immutable.Map(result);
};

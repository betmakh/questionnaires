import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';
import Quesstionnaire from './components/Questionnaire.jsx';
import MainPageContainer from './containers/RootContainer.jsx';

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	gapi.load('client:auth2', () => {
	// 		// Retrieve the singleton for the GoogleAuth library and set up the client.
	// 		window.auth2 = gapi.auth2.init({
	// 			client_id: keys.googleAppId,
	// 			cookiepolicy: 'single_host_origin'
	// 		});
	// 		// attachSignin(document.getElementById('customBtn'));
	// 	});
	// }

	render() {
		return (
			<Provider store={store}>
				<MainPageContainer />
			</Provider>
		);
	}
}

const renderApp = () => {
	render(<App />, document.getElementById('root'));
};
renderApp();

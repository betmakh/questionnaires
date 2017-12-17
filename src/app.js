import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from './store.js';
import Quesstionnaire from './components/Questionnaire.jsx';
import MainPageContainer from './containers/RootContainer.jsx';
import QuestionnaireContainer from './containers/QuestionnaireContainer.jsx';
import { saveStateToLocalstorage } from './utils.js';

const browserHistory = createBrowserHistory();

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={MainPageContainer} />
							<Route path="/questionnaire/:id" component={QuestionnaireContainer} />
						</Switch>
					</BrowserRouter>
				</Router>
			</Provider>
		);
	}
}

window.onunload = () => {
	saveStateToLocalstorage(store.getState());
};

const renderApp = () => {
	render(<App />, document.getElementById('root'));
};
renderApp();

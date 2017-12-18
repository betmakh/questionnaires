import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from './store.js';
import Quesstionnaire from './components/Questionnaire.jsx';
import MainPageContainer from './containers/RootContainer.jsx';
import QuestionnaireContainer from './containers/QuestionnaireContainer.jsx';
import QuestionnaireProcessContainer from './containers/QuestionnaireProcessContainer.jsx';
import QuestionnaireResultsContainer from './containers/QuestionnaireResultsContainer.jsx';
import { saveStateToLocalstorage } from './utils.js';

const browserHistory = createBrowserHistory();

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<HashRouter>
						<Switch>
							<Route exact path="/" component={MainPageContainer} />
							<Route exact path="/questionnaire/:id" component={QuestionnaireContainer} />
							<Route exact path="/questionnaire/start/:id" component={QuestionnaireProcessContainer} />
							<Route exact path="/questionnaireresults/:id" component={QuestionnaireResultsContainer} />
						</Switch>
					</HashRouter>
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

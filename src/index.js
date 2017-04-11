import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import multiClientMiddleware from './axiosClients'
import reducers from './reducers'

import App from './component/App';
import './index.css';




const store = createStore(
	reducers,
	compose(
		applyMiddleware(multiClientMiddleware()),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

injectTapEventPlugin();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);

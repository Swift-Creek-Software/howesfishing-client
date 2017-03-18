import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import './index.css';

import todoApp from './reducers'
const store = createStore(todoApp)

injectTapEventPlugin();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);

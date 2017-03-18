import { combineReducers } from 'redux'

const theDefaultReducer = (state = 0, action) => state;

const firstNamedReducer = (state = 1, action) => state;

const secondNamedReducer = (state = 2, action) => state;

const rootReducer = combineReducers({
	theDefaultReducer,
	firstNamedReducer,
	secondNamedReducer
})

export default rootReducer
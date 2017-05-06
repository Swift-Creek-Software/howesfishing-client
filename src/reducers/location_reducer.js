import { combineReducers } from 'redux'
import { actionTypes } from '../actions/LocationActions'

const locations = (state = [], action) => {
	switch (action.type) {
		case actionTypes.fetchLocationsSuccess:
			return action.payload.data
		default:
			return state
	}
}

export default combineReducers({
	locations,
})

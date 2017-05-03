import { combineReducers } from 'redux'
import { actionTypes } from '../actions/GuideActions'

const guides = (state = [], action) => {
	switch (action.type) {
		case actionTypes.fetchGuidesSuccess:
			return action.payload.data
		case actionTypes.addGuideSuccess:
			return [...state, action.payload.data]
		default:
			return state
	}
}

const currentGuide = (state = null, action) => {
	switch (action.type) {
		case actionTypes.setCurrentGuide :
			return action.payload
		default:
			return state
	}
}

const editingGuide = (state = null, action) => {
	switch (action.type) {
		case actionTypes.setEditingGuide :
			return action.payload
		default:
			return state
	}
}

const guideReducer = combineReducers({
	guides,
	currentGuide,
	editingGuide
})

export default guideReducer

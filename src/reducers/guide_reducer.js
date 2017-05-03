import { combineReducers } from 'redux'
import { actionTypes } from '../actions/GuideActions'

const guides = (state = [], action) => {
	switch (action.type) {
		case actionTypes.fetchGuidesSuccess:
			return action.payload.data
		case actionTypes.addGuideSuccess:
			return [...state, action.payload.data]
		case actionTypes.updateGuide:
			console.log('update guide', state, action)
			const guide = action.payload.request.data
			return state.map(stateGuide => {
				if (stateGuide.id === guide.id) {
					return guide
				} else {
					return stateGuide
				}
			})
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

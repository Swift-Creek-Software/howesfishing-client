export const actionTypes = {
	addGuide: 'ADD_GUIDE',
	deleteGuide: 'DELETE_GUIDE',
	fetchGuides: 'FETCH_GUIDES',
	fetchGuidesSuccess: 'FETCH_GUIDES_SUCCESS',
	setCurrentGuide: 'SET_CURRENT_GUIDE',
	setEditingGuide: 'SET_EDITING_GUIDE'
}

export const setCurrentGuide = (id = null) => {
	return {
		type: actionTypes.setCurrentGuide,
		payload: id
	}
}

export const setEditingGuide = (id = null) => {
	return {
		type: actionTypes.setEditingGuide,
		payload: id
	}
}
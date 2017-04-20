export const actionTypes = {
	addGuide: 'ADD_GUIDE',
	deleteGuide: 'DELETE_GUIDE',
	fetchGuides: 'FETCH_GUIDES',
	fetchGuidesSuccess: 'FETCH_GUIDES_SUCCESS',
	setCurrentGuide: 'SET_CURRENT_GUIDE'
}

export const setCurrentGuide = (id) => {
	return {
		type: actionTypes.setCurrentGuide,
		payload: id
	}
}
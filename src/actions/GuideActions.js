export const actionTypes = {
	addGuide: 'ADD_GUIDE',
	deleteGuide: 'DELETE_GUIDE',
	fetchGuides: 'FETCH_GUIDES',
	fetchGuidesSuccess: 'FETCH_GUIDES_SUCCESS',
	setCurrentGuide: 'SET_CURRENT_GUIDE',
	setEditingGuide: 'SET_EDITING_GUIDE',
	updateGuide: 'UPDATE_GUIDE'
}

export const setCurrentGuide = (id = null) => {
	return {
		type: actionTypes.setCurrentGuide,
		payload: id
	}
}

export const fetchGuides = () => {
	return {
		type: actionTypes.fetchGuides,
		payload: {
			request: {
				url: '/guides',
			}
		}
	}
}

export const addGuide = (data) => {
	return {
		type: actionTypes.addGuide,
		payload: {
			request: {
				url: '/guides',
				method: 'post',
				data
			}
		}
	}
}

export const updateGuide = (data) => {
	return {
		type: actionTypes.addGuide,
		payload: {
			request: {
				url: '/guides',
				method: 'put',
				data
			}
		}
	}
}

export const setEditingGuide = (id = null) => {
	return {
		type: actionTypes.setEditingGuide,
		payload: id
	}
}
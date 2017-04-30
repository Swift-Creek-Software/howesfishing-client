export const actionTypes = {
	addTrip: 'ADD_TRIP',
	deleteTrip: 'DELETE_TRIP',
	fetchTrips: 'FETCH_TRIPS',
	fetchTripsSuccess: 'FETCH_TRIPS_SUCCESS',
	setCurrentTrip: 'SET_CURRENT_TRIP',
	updateTrip: 'UPDATE_TRIP'
}

export const login = (email, password) => {
	return {
		type: actionTypes.login,
		payload: {
			request:{
				url:'/auth',
				method: 'post',
				data: {
					email,
					password
				}
			}
		}
	}
}

export const fetchTrips = () => {
	return {
		type: actionTypes.fetchTrips,
		payload: {
			request: {
				url: '/trip',
			}
		}
	}
}

export const addTrip = (data) => {
	return {
		type: actionTypes.addTrip,
		payload: {
			request: {
				url: '/trip',
				method: 'post',
				data
			}
		}
	}
}

export const updateTrip = (data) => {
	return {
		type: actionTypes.updateTrip,
		payload: {
			request: {
				url: `/trip`,
				method: 'put',
				data
			}
		}
	}
}

export const setCurrentTrip = (id = null) => {
	return {
		type: actionTypes.setCurrentTrip,
		payload: id
	}
}
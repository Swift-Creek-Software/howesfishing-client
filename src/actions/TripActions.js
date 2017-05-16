export const actionTypes = {
	addTrip: 'ADD_TRIP',
	addTripSuccess: 'ADD_TRIP_SUCCESS',
	deleteTrip: 'DELETE_TRIP',
	fetchTrips: 'FETCH_TRIPS',
	fetchTripsSuccess: 'FETCH_TRIPS_SUCCESS',
	setCurrentTrip: 'SET_CURRENT_TRIP',
	setCurrentDate: 'SET_CURRENT_DATE',
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

export const fetchTrips = (limit = 1000) => {
	return {
		type: actionTypes.fetchTrips,
		payload: {
			request: {
				url: `/trip?limit=${limit}`,
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
				url: `/trip/${data.id}`,
				method: 'put',
				data
			}
		}
	}
}

export const deleteTrip = (id) => {
	return {
		type: actionTypes.deleteTrip,
		payload: {
			request: {
				url: `/trip/${id}`,
				method: 'put',
				data: {
					deleted: true
				}
			},
			id
		}
	}
}

export const setCurrentTrip = (id = null) => {
	return {
		type: actionTypes.setCurrentTrip,
		payload: id
	}
}

export const setCurrentDate = (date) => {
	return {
		type: actionTypes.setCurrentDate,
		payload: date
	}
}
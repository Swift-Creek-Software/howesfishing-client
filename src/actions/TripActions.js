export const actionTypes = {
	addTrip: 'ADD_TRIP',
	deleteTrip: 'DELETE_TRIP',
	fetchTrips: 'FETCH_TRIPS',
	fetchTripsSuccess: 'FETCH_TRIPS_SUCCESS',
	setCurrentTrip: 'SET_CURRENT_TRIP',
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

export const setCurrentTrip = (id = null) => {
	return {
		type: actionTypes.setCurrentTrip,
		payload: id
	}
}
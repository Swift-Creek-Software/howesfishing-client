import {actionTypes} from '../actions/TripActions'
import { combineReducers } from 'redux'
import moment from 'moment'

const trips = (state = [], action) => {
	switch(action.type) {
		case actionTypes.logout:
			return null
		case actionTypes.fetchTripsSuccess:
			return action.payload.data.map(trip => {
				return { ...trip, startTime: new Date(trip.startTime), endTime: new Date(trip.endTime)}
			})
		case actionTypes.addTripSuccess: {
			const trip = action.payload.data
			return [...state, { ...trip, startTime: new Date(trip.startTime), endTime: new Date(trip.endTime)}]
		}
		case actionTypes.updateTrip: {
			const trip = action.payload.request.data
			return state.map(stateTrip => {
				if (stateTrip.id === trip.id) {
					return { ...trip, startTime: new Date(trip.startTime), endTime: new Date(trip.endTime)}
				} else {
					return stateTrip
				}
			})
		}

		case actionTypes.deleteTrip:
			const tripId = action.payload.id
			return state.filter(stateTrip => stateTrip.id !== tripId)
		default:
			return state
	}
}

const currentTrip = (state = null, action) => {
	switch(action.type) {
		case actionTypes.setCurrentTrip:
			return action.payload
		case actionTypes.logout:
			return null
		default:
			return state
	}
}

const tripReducer = combineReducers({
	currentTrip,
	trips,
})

export default tripReducer

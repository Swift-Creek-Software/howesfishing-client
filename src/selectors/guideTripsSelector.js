import { createSelector } from 'reselect'

import allTripsSelector from './allTripsSelector'

const currentGuide = state => state.guide.currentGuide
const trips = state => allTripsSelector(state)

const getTrips = (currentGuide, trips) => {

	return currentGuide ? trips.filter(trip => {
		console.log('filter', trip.guide, currentGuide)
		return trip.guide.id == currentGuide
		}) : trips
}

export default createSelector(currentGuide, trips, getTrips)

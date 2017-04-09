import { createSelector } from 'reselect'

const currentTrip = state => state.trip.currentTrip
const tripsById = state => state.trip.tripsById

const getTripById = (currentTrip, tripsById) => tripsById[currentTrip] || null

export default createSelector(currentTrip, tripsById, getTripById)
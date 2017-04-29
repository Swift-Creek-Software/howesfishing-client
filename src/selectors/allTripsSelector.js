import { createSelector } from 'reselect'

import guidesById from './guidesById'

const trips = state => state.trip.trips
const guides = state => guidesById(state)


const getAllTrips = (trips, guides) => {
	return trips.reduce((acc, current) => {
		current.guides.forEach(guide => {
			acc.push({...current, guide: guides[guide.id]})
		})
		return acc
	}, [])
}

export default createSelector(trips, guides, getAllTrips)
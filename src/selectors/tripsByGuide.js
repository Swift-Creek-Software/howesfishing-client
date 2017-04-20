import { createSelector } from 'reselect'

const trips = state => state.trip.trips

const getTripsByGuide = (trips) => {
	return trips.reduce((acc, val) => {
		val.guides.forEach(guide => {
			if (acc[guide]) {
				acc[guide].push(val)
			} else {
				acc[guide] = [val]
			}
		})
		return acc
	}, {})
}

export default createSelector(trips, getTripsByGuide)

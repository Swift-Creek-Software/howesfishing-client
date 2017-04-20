import { createSelector } from 'reselect'

import tripsByGuideSelector from './tripsByGuide'

const currentGuide = state => state.guide.currentGuide
const trips = state => state.trip.trips
const tripsByGuide = state => tripsByGuideSelector(state)

const getTrips = (currentGuide, trips, tripsByGuide) => currentGuide ? tripsByGuide[currentGuide] : trips

export default createSelector(currentGuide, trips, tripsByGuide, getTrips)/**
 * Created by andrewgross on 4/20/17.
 */

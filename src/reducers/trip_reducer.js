import {actionTypes} from '../actions/TripActions'
import { combineReducers } from 'redux'


const defaultTrips = [
	{
		id: 1,
		firstName: 'First',
		lastName: 'Last',
		email: 'email@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(),
		endTime: new Date(),
		guests: 5,
		cost: 400,
		location: 'BIGFORK',
		guides: [
			{id: 2, guests: 3, textTemplate: 'new text template'}
		],
		clientEmailTemplate: 'new client email template',
		notes: 'notes here'
	},
	{
		id: 2,
		firstName: 'new',
		lastName: 'person',
		email: 'second@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(2017, 3, 9, 8, 0, 0),
		endTime: new Date(2017, 3, 9, 14, 0, 0),
		guests: 5,
		cost: 400,
		location: 'WEST_SHORE',
		guides: [
			{id: 1, guests: 3},
			{id: 2, guests: 3},
			{id: 4, guests: 3}
		],
		notes: 'more notes here'
	},
	{
		id: 3,
		firstName: 'another',
		lastName: 'person',
		email: 'new@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(2017, 3, 10, 7, 0, 0),
		endTime: new Date(2017, 3, 10, 14, 0, 0),
		guests: 5,
		cost: 400,
		location: 'LAKESIDE_PAT',
		guides: [
			{id: 1, guests: 3},
			{id: 2, guests: 3},
		],
		notes: null
	},
	{
		id: 4,
		firstName: 'first',
		lastName: 'last',
		email: 'new@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(2017, 3, 9, 8, 0, 0),
		endTime: new Date(2017, 3, 12, 14, 0, 0),
		guests: 5,
		cost: 400,
		location: 'LAKESIDE_MARINA', //location id
		guides: [
			{
				id: 9,//guide id
				guests: 3,
				textTemplate: 'new text template'
			}
		],
		clientEmailTemplate: 'new client email template',
		notes: 'another note here'
	}
]

const trips = (state = defaultTrips, action) => {
	switch(action.type) {
		case actionTypes.logout:
			return null
		case actionTypes.fetchTripsSuccess:
			return action.payload.data
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

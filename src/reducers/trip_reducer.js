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
		waterBody: 'flathead',
		guides: [
			'Mike',
			'Cindy'
		]
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
		waterBody: 'flathead',
		guides: [
			'Mike',
			'Cindy'
		]
	},
	{
		id: 3,
		firstName: 'another',
		lastName: 'person',
		email: 'new@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(2017, 3, 10, 8, 0, 0),
		endTime: new Date(2017, 3, 10, 14, 0, 0),
		guests: 5,
		cost: 400,
		waterBody: 'flathead',
		guides: [
			'Mike',
			'Cindy'
		]
	}
]
const defaultIdTrips = {
	1: {
		id: 1,
		firstName: 'First',
		lastName: 'Last',
		email: 'email@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(),
		endTime: new Date(),
		guests: 5,
		cost: 400,
		waterBody: 'flathead',
		guides: [
			'Mike',
			'Cindy'
		]
	},
	2: {
		id: 2,
		firstName: 'new',
		lastName: 'person',
		email: 'second@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(2017, 3, 9, 8, 0, 0),
		endTime: new Date(2017, 3, 9, 14, 0, 0),
		guests: 5,
		cost: 400,
		waterBody: 'flathead',
		guides: [
			'Mike',
			'Cindy'
		]
	},
	3: {
		id: 3,
		firstName: 'another',
		lastName: 'person',
		email: 'new@email.com',
		phone: '(406) 555-5555',
		startTime: new Date(2017, 3, 10, 8, 0, 0),
		endTime: new Date(2017, 3, 10, 14, 0, 0),
		guests: 5,
		cost: 400,
		waterBody: 'flathead',
		guides: [
			'Mike',
			'Cindy'
		],
	}
}
const trips = (state = defaultTrips, action) => {
	switch(action.type) {
		case actionTypes.logout:
			return null
		default:
			return state
	}
}

const tripsById = (state = defaultIdTrips, action) => {
	switch(action.type) {
		case actionTypes.logout:
			return null
		default:
			return state
	}
}


const currentTrip = (state = 2, action) => {
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
	tripsById,
})

export default tripReducer

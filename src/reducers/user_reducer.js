import {actionTypes} from '../actions/UserActions'

const user = (state = null, action) => {
	switch(action.type) {
		case actionTypes.loginSuccess:
			return {...state, ...action.payload.data.user, token: action.payload.data.token}
		case actionTypes.setUserLoggedIn:
			return {...state, isLoggedIn: true}
		case actionTypes.logout:
			return null
		default:
			return state
	}
}

export default user
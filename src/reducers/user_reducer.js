import {actionTypes} from '../actions/UserActions'

const user = (state = {}, action) => {
	switch(action.type) {
		case actionTypes.loginSuccess:
			return {...action.payload.data.user, token: action.payload.data.token}
		case actionTypes.setUserLoggedIn:
			return {...state, isLoggedIn: true}
		case actionTypes.logout:
			return {}
		default:
			return state
	}
}

export default user
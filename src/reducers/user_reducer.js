import {actionTypes} from '../actions/UserActions'

const user = (state = null, action) => {
	switch(action.type) {
		case actionTypes.loginSuccess:
			return {...action.payload.data.user, token: action.payload.data.token}
		default:
			return state
	}
}

export default user
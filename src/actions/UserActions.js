import { fetchTrips } from './TripActions'
import { fetchGuides } from './GuideActions'

export const actionTypes = {
	login: 'LOGIN',
	loginSuccess: 'LOGIN_SUCCESS',
	logout: 'LOG_OUT'
}

export const login = (email, password) => {
	return {
		type: actionTypes.login,
		payload: {
			request: {
				url: '/auth',
				method: 'post',
				data: {
					email,
					password
				}
			}
		}
	}
}

export const userLogin = (email, password) => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			dispatch(login(email, password)).then(() => {
				console.log('user is logged in')
				Promise.all([
					dispatch(fetchGuides()),
					dispatch(fetchTrips()),
				]).then(() => resolve())
			}).catch(() => reject())
		})
	}
}

export const logout = () => {
	return {
		type: actionTypes.logout
	}
}
import { fetchTrips } from './TripActions'
import { fetchGuides } from './GuideActions'

export const actionTypes = {
	login: 'LOGIN',
	loginSuccess: 'LOGIN_SUCCESS',
	logout: 'LOG_OUT',
	setUserLoggedIn: 'SET_USER_LOGGED_IN'
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

export const setUserLoggedIn = () => {
	return {
		type: actionTypes.setUserLoggedIn
	}
}

export const userLogin = (email, password) => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			dispatch(login(email, password)).then((response) => {
				const token = response.payload.data.token
				localStorage.setItem('token', token)
				setTimeout(() => {
					Promise.all([
						dispatch(fetchGuides()),
						dispatch(fetchTrips()),
					]).then(() => {
						dispatch(setUserLoggedIn())
						resolve()
					})
				}, 500)

			}).catch(() => reject())
		})
	}
}

export const logout = () => {
	return {
		type: actionTypes.logout
	}
}
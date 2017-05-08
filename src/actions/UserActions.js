import { fetchTrips } from './TripActions'
import { fetchGuides, setCurrentGuide } from './GuideActions'
import { fetchLocations } from './LocationActions'

export const actionTypes = {
	login: 'LOGIN',
	addUser: 'ADD_USER',
	changePassword: 'CHANGE_PASSWORD',
	deleteUser: 'DELETE_USER',
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
				const user = response.payload.data.user
				console.log('resonse', user)
				if(!user.isAdmin) {
					dispatch(setCurrentGuide(user.guideId))
				}
				// localStorage.setItem('user', {...user, token: response.payload.data.token})
				setTimeout(() => {
					Promise.all([
						dispatch(fetchGuides()),
						dispatch(fetchTrips()),
						dispatch(fetchLocations()),
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

export const addUser = (data) => {
	return {
		type: actionTypes.addUser,
		payload: {
			request: {
				url: '/user',
				method: 'post',
				data
			}
		}
	}
}

export const changePassword = (data) => {
	return {
		type: actionTypes.changePassword,
		payload: {
			request: {
				url: `/user/${data.id}`,
				method: 'put',
				data
			}
		}
	}
}
export const deleteUser = (id) => {
	return {
		type: actionTypes.deleteUser,
		payload: {
			request: {
				url: `/user/${id}`,
				method: 'put',
				data: {
					deleted: true
				}
			}
		}
	}
}
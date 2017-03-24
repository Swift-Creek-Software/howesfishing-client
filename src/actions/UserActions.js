export const actionTypes = {
	login: 'LOGIN',
	loginSuccess: 'LOGIN_SUCCESS',
	logout: 'LOG_OUT'
}

export const login = (email, password) => {
	return {
		type: actionTypes.login,
		payload: {
			request:{
				url:'/auth',
				method: 'post',
				data: {
					email,
					password
				}
			}
		}
	}
}

export const logout = () => {
	return {
		type: actionTypes.logout
	}
}
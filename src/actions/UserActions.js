export const actionTypes = {
	login: 'LOGIN',
	loginSuccess: 'LOGIN_SUCCESS'
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
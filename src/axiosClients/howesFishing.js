import axios from 'axios'

export const howesFishingClient = axios.create({
	baseURL: 'http://45.55.2.165',
	responseType: 'json',
})

export const howesFishingOptions = {
	interceptors: {
		request: [
			({ getState }, config) => {

				const user = getState().user
				if (user && user.token) {
					config.headers[ 'Authorization' ] = 'Bearer ' + user.token
				}

				return config
			}
		]
	}
}
import { multiClientMiddleware } from 'redux-axios-middleware'
import { howesFishingClient } from './howesFishing'
import { nexmoClient, nexmoOptions } from './nexmoClient'

export default () => {
	return multiClientMiddleware(
		{
			default: {
				client: howesFishingClient,
			},
			nexmo: {
				client: nexmoClient,
				options: nexmoOptions
			}
		},
		//options
		{
			returnRejectedPromiseOnError : true
		}
	)
}
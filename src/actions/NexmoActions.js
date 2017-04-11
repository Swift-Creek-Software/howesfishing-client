export const actionTypes = {
	sendSMS: 'SEND_SMS',
}

export const sendSMS = (to, text) => {
	return {
		type: actionTypes.sendSMS,
		payload: {
			client: 'nexmo',
			request:{
				url: '/sms/json',
				params: {
					to,
					text,
					from: '12013514410',
					'api_key': 'c759a595',
					'api_secret': '9cab09f4df0061b8'
				}
			}
		}
	}
}
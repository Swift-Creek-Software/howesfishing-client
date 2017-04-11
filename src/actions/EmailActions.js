
export const actionTypes = {
	sendEmail: 'SEND_EMAIL',
}

export const sendEmail = (values) => {
	return {
		type: actionTypes.sendEmail,
		payload: {
			request:{
				url: '/email/send',
				method: 'post',
				data: {
					sandbox: false,
					recipients: [{
						address: values.email
					}],
					templateId: 'howes-fishing',
					templateData: {
						firstName: values.firstName,
						confirm: "confirm",
						directions: "right down the road",
						from: "Andy",
						subject: `${values.startTime.format('MM-DD-YYYY')} Fishing confirmation`,
						timeCost: values.clientEmailTemplate
					},
					campaignId: 'DEMO_BOSS!HOGG!',
					// info to use in the email tracking data
					meta: {
						metaDataDemo: 'this key/val will be in the email headers'
					},
				}
			}
		}
	}
}
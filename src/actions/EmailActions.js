
export const actionTypes = {
	sendEmail: 'SEND_EMAIL',
}

export const sendClientConfirmationEmail = (values) => {
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
					campaignId: 'Client confirmation',
					// meta: {
					// 	metaDataDemo: 'this key/val will be in the email headers'
					// },
				}
			}
		}
	}
}

export const sendGuideConfirmationEmail = (values) => {
	const recipients = values.emails.map(email => {return {address: email}})
	return {
		type: actionTypes.sendEmail,
		payload: {
			request:{
				url: '/email/send',
				method: 'post',
				data: {
					sandbox: false,
					recipients,
					templateId: 'guide-conf-template',
					templateData: {
						name: values.name,
						subject: `${values.date.format('MM-DD-YYYY')} trip confirmation`,
						body: values.body
					},
					campaignId: 'guide confirmation',
					// meta: {
					// 	metaDataDemo: 'this key/val will be in the email headers'
					// },
				}
			}
		}
	}
}
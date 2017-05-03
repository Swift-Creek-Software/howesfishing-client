import moment from 'moment'

export const actionTypes = {
	sendEmail: 'SEND_EMAIL',
}

export const sendClientConfirmationEmail = (values) => {
	return {
		type: actionTypes.sendEmail,
		payload: {
			request: {
				url: '/email/send',
				method: 'post',
				data: {
					sandbox: false,
					recipients: [
						{
							address: values.email
						},
						{
							address: {
								// todo Change me to admin@aable.com I am a bcc
								"email": "swiftcreeksoftware@gmail.com",
								"header_to": values.email
							}
						}
					],
					templateId: 'howes-fishing',
					templateData: {
						firstName: values.firstName,
						confirm: "confirm",
						directions: values.directions,
						from: values.username,
						subject: `${values.startTime.format('MM-DD-YYYY')} Fishing confirmation`,
						timeCost: values.clientEmailTemplate
					},
					campaignId: 'Client confirmation',
				}
			}
		}
	}
}

export const sendClientCancellationEmail = (values) => {
	return {
		type: actionTypes.sendEmail,
		payload: {
			request: {
				url: '/email/send',
				method: 'post',
				data: {
					sandbox: false,
					recipients: [
						{
							address: values.email
						},
						{
							address: {
								// todo Change me to admin@aable.com I am a bcc
								"email": "swiftcreeksoftware@gmail.com",
								"header_to": values.email
							}
						}
					],
					templateId: 'client-cancellation',
					templateData: {
						firstName: values.firstName,
						date: moment(values.startTime).format('MM-DD-YYYY'),
						subject: `${moment(values.startTime).format('MM-DD-YYYY')} fishing trip cancellation`
					},
					campaignId: 'Client cancellation',
				}
			}
		}
	}
}


//*****GUIDE ACTIONS
export const sendGuideConfirmationEmail = (values) => {
	const recipients = values.emails.map(email => {
		return { address: email }
	})
	return {
		type: actionTypes.sendEmail,
		payload: {
			request: {
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

export const sendGuideCancellationEmail = (values) => {
	const recipients = values.emails.map(email => {
		return { address: email }
	})
	return {
		type: actionTypes.sendEmail,
		payload: {
			request: {
				url: '/email/send',
				method: 'post',
				data: {
					sandbox: false,
					recipients,
					templateId: 'guide-cancelation-template',
					templateData: {
						name: values.name,
						subject: `${values.dateTime} trip cancellation`,
						dateTime: values.dateTime
					},
					campaignId: 'guide cancellation',
					// meta: {
					// 	metaDataDemo: 'this key/val will be in the email headers'
					// },
				}
			}
		}
	}
}

export const sendGuidePasswordEmail = (values) => {

	return {
		type: actionTypes.sendEmail,
		payload: {
			request: {
				url: '/email/send',
				method: 'post',
				data: {
					sandbox: false,
					recipients: [
						{
							address: values.email
						}
					],
					templateId: 'user-password-template',
					templateData: {
						name: values.name,
						email: values.email,
						password: values.password
					},
					campaignId: 'user confirmation',
					// meta: {
					// 	metaDataDemo: 'this key/val will be in the email headers'
					// },
				}
			}
		}
	}
}
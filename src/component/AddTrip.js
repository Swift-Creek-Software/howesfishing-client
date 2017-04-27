import React, { PureComponent } from 'react'
import forOwn from 'lodash/forOwn'
import { Field, reduxForm, FieldArray, formValueSelector, change } from 'redux-form'
import validatejs from 'validate.js'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

import { sendSMS } from '../actions/NexmoActions'
import { sendClientConfirmationEmail, sendGuideConfirmationEmail } from '../actions/EmailActions'
import guidesById from '../selectors/guidesById'

import FormHeader from './Common/FormHeader'
import TextField from './Common/TextField'
import SelectField from './Common/SelectField'
import TextAreaField from './Common/TextAreaField'
import DateTimeField from './Common/DateTimeField'
import TripGuideRow from './Common/TripGuideRow'

import 'react-datetime/css/react-datetime.css'
import './Common/Common.css'
import './AddTrip.css'

const validate = (values, props) => {
	const errors = {}


	const constraints = {
		firstName: {
			presence: {
				message: 'required'
			}
		},
		lastName: {
			presence: {
				message: 'required'
			}
		},
		email: {
			presence: {

				message: 'required'
			},
			email: {
				message: 'you must enter a valid email'
			},
		},
		phone: {
			presence: {
				message: 'required'
			}
		},
		guests: {
			presence: {
				message: 'required'
			}
		},
		cost: {
			presence: {
				message: 'required'
			}
		},
		waterbody: {
			presence: {
				message: 'required'
			}
		},
	}

	const validationErrors = validatejs(values, constraints, { fullMessages: false })

	if (validationErrors) {
		forOwn(validationErrors, (value, key) => {
			errors[ key ] = value[ 0 ]
		})
	}

	return errors
}


class AddTrip extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			showDeleteModal: false
		}
	}

	handleSubmit = (values) => {
		console.log('values', values)
		this.sendGuidesInfo(values.guides, values.notes, values.startTime)
		// send client/admin email

		// this.props.sendEmail(values)
	}

	sendGuidesInfo = (guides, notes, date) => {
		guides.forEach(guide => {
			const guideDetail = this.props.guides[guide.guideId]
			const guideMessage = `${guide.textTemplate} ${notes ? `Notes: ${notes}` : ''}`

			// send guide texts
			guideDetail.phones.forEach(phone => {
				this.props.sendSMS(phone, guideMessage)
			})
			const guideEmailValues = {
				emails: guideDetail.emails,
				body: guideMessage,
				name: guideDetail.name,
				date,

			}
			// send guide emails
			guideDetail.emails.forEach(email => {
				this.props.sendGuideConfirmationEmail(guideEmailValues)
			})
		})
	}


	renderGuides = ({ fields, meta: { touched, error, submitFailed } }) => {

		return (
			<div className="guides-section">
				<h3 className="group-header">
					Guides
					<button type="button" className="btn btn-primary add-guide" onClick={() => fields.push({})}>
						+ Add Guide
					</button>
				</h3>
				<div>
					{this.renderGuideRows(fields)}
				</div>
			</div>
		)
	}

	renderGuideRows = (fields) => {
		const onRemoveClick = (index) => {
			fields.remove(index)
		}
		return fields.map((field, index) => <TripGuideRow key={index} index={index} field={field}
														  onRemoveClick={onRemoveClick}/>)
	}

	templateNormalizer = (value, previousValue, allValues) => {
		const { startTime, endTime, guests, guides, cost } = allValues
		if (value) {
			return value
		} else {
			return `${startTime ? startTime.format('MMM Do') : ''}, ${startTime ? startTime.format('ha') : ''} - ${endTime ? endTime.format('ha') : ''} for ${guests || ''} people on ${guides ? guides.length : ''} boats. Cost $${cost || ''}`
		}
	}

	onStartChange = (event, newValue) => {
		const startHours = newValue.hours()
		this.props.change('endTime', moment(newValue).hour(startHours + 5))
	}

	onDeleteButtonClick = (event) => {
		event.preventDefault()
		this.setState({ showDeleteModal: true })
	}

	closeDeleteModal = (event) => {
		event.preventDefault()
		this.setState({ showDeleteModal: false })
	}

	onDeleteConfirm = (event) => {
		//TODO add delete logic here
	}

	render() {
		const { handleSubmit } = this.props
		return (
			<div className="form-wrapper AddTrip">
				<form className="panel panel-primary" onSubmit={handleSubmit(this.handleSubmit)}>
					<FormHeader>Create Trip</FormHeader>
					<div className="panel-body">
						<div className="form-fields">
							<Field name="firstName"
								   component={TextField}
								   label="First name"
								   placeholder="enter first name"
								   type="text"
							/>
							<Field name="lastName"
								   component={TextField}
								   label="Last name"
								   placeholder="enter last name"
								   type="text"
							/>
							<Field name="email"
								   component={TextField}
								   label="Email"
								   placeholder="example@fishing.com"
								   type="email"
							/>
							<Field name="phone"
								   component={TextField}
								   label="Phone number"
								   placeholder="(406) 555-5555"
								   type="phone"
							/>
							<Field name="startTime"
								   component={DateTimeField}
								   placeholder="04/11/2017 8:00 AM"
								   label="Start Time"
								   onChange={this.onStartChange}
							/>
							<Field name="endTime"
								   component={DateTimeField}
								   label="End Time"
								   placeholder="04/11/2017 8:00 AM"
							/>
							<Field name="guests"
								   component={TextField}
								   label="Number of guests"
								   placeholder="4"
								   type="number"
							/>
							<Field name="cost"
								   component={TextField}
								   label="Cost"
								   placeholder="400"
								   type="text"
							/>
							<Field name="location"
								   component={SelectField}
								   label="Location"
								   placeholder="select"
								   options={[
									   {
										   name: 'N/A',
										   value: 'N/A'
									   },
									   {
										   name: 'Bigfork',
										   value: 'BIGFORK'
									   },
									   {
										   name: 'West Shore',
										   value: 'WEST_SHORE'
									   },
									   {
										   name: 'Lakeside - Marina',
										   value: 'LAKESIDE_MARINA'
									   },
									   {
										   name: 'Lakeside - Pat',
										   value: 'LAKESIDE_PAT'
									   }
								   ]}
							/>
						</div>
						<FieldArray name="guides" component={this.renderGuides}/>
						<Field name="clientEmailTemplate"
							   component={TextField}
							   label="Client email template"
							   placeholder="click here for client template"
							   type="text"
							   normalize={this.templateNormalizer}
						/>
						<Field name="notes"
							   component={TextAreaField}
							   label="Notes"
							   placeholder="add notes here..."
						/>

						<buton onClick={this.onDeleteButtonClick} className="btn btn-danger">Delete Trip</buton>
						<button type="submit" className="btn btn-primary" style={{ float: 'right' }}>Create Trip
						</button>
						<Link to="/dashboard" className="btn btn-warning" style={{ float: 'right', marginRight: 10 }}>Cancel</Link>
					</div>
				</form>
				{this.state.showDeleteModal &&
					<Modal.Dialog>
						<Modal.Header>
							Confirm Delete
						</Modal.Header>
						<Modal.Body>
							Are you sure you want to delete this trip?
						</Modal.Body>
						<Modal.Footer>
							<button onClick={this.closeDeleteModal} className="btn btn-primary">
								cancel
							</button>
							<button onClick={this.onDeleteConfirm} className="btn btn-danger">
								Yes, delete trip
							</button>
						</Modal.Footer>
					</Modal.Dialog>
				}
			</div>
		)
	}
}

AddTrip = reduxForm({
	form: 'addtrip',
	validate
})(AddTrip)

AddTrip = connect(state => {
		const selector = formValueSelector('addtrip')
		return {
			guides: guidesById(state),
			startDate: selector(state, 'startTime'),
		}
	},
	{
		change,
		sendSMS,
		sendClientConfirmationEmail,
		sendGuideConfirmationEmail
	}
)(AddTrip)

export default (AddTrip)

import React, { PureComponent } from 'react'
import forOwn from 'lodash/forOwn'
import find from 'lodash/find'
import { Field, reduxForm, FieldArray, formValueSelector, change } from 'redux-form'
import validatejs from 'validate.js'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'

import { sendSMS } from '../../actions/NexmoActions'
import { sendClientConfirmationEmail, sendGuideConfirmationEmail, sendGuideCancellationEmail, sendClientCancellationEmail } from '../../actions/EmailActions'
import guidesById from '../../selectors/guidesById'
import currentTripSelector from '../../selectors/currentTripSelector'

import FormHeader from '../Common/FormHeader'
import TextField from '../Common/TextField'
import SelectField from '../Common/SelectField'
import TextAreaField from '../Common/TextAreaField'
import DateTimeField from '../Common/DateTimeField'
import TripGuideRow from './TripGuideRow'
import DeleteConfirmModal from '../DeleteConfirmModal'

import 'react-datetime/css/react-datetime.css'
import '../Common/Common.css'
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
		values.directions = find(this.props.locations, location => location.id === values.location).directions
		console.log('values', values)
		// this.sendGuidesInfo(values.guides, values.notes, values.startTime)
		// send client/admin email

		this.props.sendClientConfirmationEmail(values)
		this.props.history.push('/dashboard')
	}

	sendGuidesInfo = (guides, notes, date) => {
		guides.forEach(guide => {
			const guideDetail = this.props.guides[guide.id]
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
			this.props.sendGuideConfirmationEmail(guideEmailValues)
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
		event.preventDefault()

		//TODO add delete logic here
		// this.sendGuidesCancelationEmail()

		this.sendClientCancellationEmail()
	}
	sendClientCancellationEmail = () => {
		const values = {
			firstName: this.props.firstName,
			startTime: this.props.startTime,
			email: this.props.clientEmail
		}
		this.props.sendClientCancellationEmail(values)

	}

	sendGuidesCancelationEmail = () => {
		this.props.tripGuides.forEach(guide => {
			const guideDetail = this.props.guides[guide.id]

			const dateTime = `${moment(this.props.startTime).format('MM-DD-YYYY')} from ${moment(this.props.startTime).format('ha')} - ${moment(this.props.endTime).format('ha')}`
			const guideMessage = `${guideDetail.name} your trip on ${dateTime} has been CANCELLED`

			 // send guide texts
			guideDetail.phones.forEach(phone => {
				this.props.sendSMS(phone, guideMessage)
			})

			const guideEmailValues = {
				emails: guideDetail.emails,
				dateTime,
				name: guideDetail.name,

			}
			this.props.sendGuideCancellationEmail(guideEmailValues)
		})
	}

	locationOptions = () => {
		return this.props.locations.map(location => {
			return {name:location.name, value: location.id}
		})
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
								   options={this.locationOptions()}
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
						<button type="submit" className="btn btn-primary" style={{ float: 'right' }}>
							Create Trip
						</button>
						<Link to="/dashboard" className="btn btn-warning" style={{ float: 'right', marginRight: 10 }}>Cancel</Link>
					</div>
				</form>
				{this.state.showDeleteModal &&
					<DeleteConfirmModal onCancelClick={this.closeDeleteModal} onDeleteClick={this.onDeleteConfirm}/>
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
			endTime: selector(state, 'endTime'),
			clientEmail: selector(state, 'email'),
			firstName: selector(state, 'firstName'),
			tripGuides: selector(state, 'guides'),
			startTime: selector(state, 'startTime'),
			locations: state.location.locations,
			user: state.user,
			initialValues: currentTripSelector(state),
		}
	},
	{
		change,
		sendSMS,
		sendClientConfirmationEmail,
		sendGuideConfirmationEmail,
		sendGuideCancellationEmail,
		sendClientCancellationEmail,
	}
)(AddTrip)

export default withRouter(AddTrip)

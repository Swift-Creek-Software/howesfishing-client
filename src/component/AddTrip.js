import React, { PureComponent } from 'react'
import forOwn from 'lodash/forOwn'
import { Field, reduxForm, FieldArray } from 'redux-form'
import validatejs from 'validate.js'
import { connect } from 'react-redux'

import FormHeader from './Common/FormHeader'
import TextField from './Common/TextField'
import SelectField from './Common/SelectField'
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

	handleSubmit = (values) => {

	}

	renderGuides = ({ fields, meta: { touched, error, submitFailed } }) => {

		return (
			<div className="guides-section">
				<h3 className="guides-header">
					Guides
					<button type="button" className="btn btn-primary add-guide" onClick={() => fields.push({})}>+ Add
						Guide
					</button>
				</h3>
				<div>
					{this.renderGuideRows(fields)}
				</div>
			</div>
		)
	}

	renderGuideRows = (fields) => {
		return fields.map((field, index) => {
			return (
				<div className="guide-row">
					<h4>Guide {index + 1}</h4>
					<Field name={`${field}.guideId`}
						   component={SelectField}
						   label="Guide"
						   options={this.props.guides.map(guide => {
						   	return {
						   		name: guide.name,
								value: guide.id,
							}})}
					/>
					<Field name={`${field}.clients`}
						   component={TextField}
						   label="Clients"
						   placeholder="1"
						   type="text"
					/>
				</div>
			)
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
								   component={TextField}
								   label="Start Time"
								   placeholder="03/26/2017"
								   type="date"
							/>
							<Field name="endTime"
								   component={TextField}
								   label="End Time"
								   placeholder="03/26/2017"
								   type="date"
							/>
							<Field name="guests"
								   component={TextField}
								   label="Number of guests"
								   placeholder="4"
								   type="text"
							/>
							<Field name="cost"
								   component={TextField}
								   label="Cost"
								   placeholder="400"
								   type="text"
							/>
							<Field name="waterbody"
								   component={TextField}
								   label="Waterbody"
								   placeholder="Flathead"
								   type="text"
							/>
							<Field name="location"
								   component={SelectField}
								   label="Location"
								   placeholder="select"
								   options={[
									   {
										   name: 'Bigfork',
										   value: 'BIGFORK'
									   },
									   {
										   name: 'Lakeside',
										   value: 'LAKESIDE'
									   }
								   ]}
							/>
							<Field name="costTemplate"
								   component={TextField}
								   label="Email cost template"
								   placeholder=""
								   type="text"
							/>
						</div>
						<FieldArray name="members" component={this.renderGuides}/>
						<button href="#" className="btn btn-primary">Create Trip</button>
					</div>
				</form>
			</div>
		)
	}
}
AddTrip = reduxForm({
	form: 'addtrip',
	validate
})(AddTrip)

AddTrip = connect(state => {
	return {
		guides: state.guide.guides
	}
})(AddTrip)

export default (AddTrip)

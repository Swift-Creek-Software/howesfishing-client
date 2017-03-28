import React, { PureComponent } from 'react'
import forOwn from 'lodash/forOwn'
import { Field, reduxForm } from 'redux-form'
import validatejs from 'validate.js'
import FormHeader from './Common/FormHeader'
import TextField from './Common/TextField'
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
	render() {
		return (
			<div className="form-wrapper AddTrip">
				<form className="panel panel-primary">
					<FormHeader>Create Trip</FormHeader>
					<div className="panel-body">
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
						<Field name="date"
							   component={TextField}
							   label="Trip Date"
							   placeholder="03/26/2017"
							   type="date"
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
						<button href="#" className="btn btn-primary">Create Trip</button>
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'addtrip',
	validate
})(AddTrip)


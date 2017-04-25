import React, { PureComponent, PropTypes } from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import forOwn from 'lodash/forOwn'
import validatejs from 'validate.js'
import { connect } from 'react-redux'

import FormHeader from '../Common/FormHeader'
import TextField from '../Common/TextField'
import '../Common/Common.css'
import './Guide.css'

const validate = (values, props) => {
	const errors = {}


	const constraints = {
		name: {
			presence: {
				message: 'required'
			}
		},
		//
		// email: {
		// 	presence: {
		//
		// 		message: 'required'
		// 	},
		// 	email: {
		// 		message: 'you must enter a valid email'
		// 	},
		// },
		// phone: {
		// 	presence: {
		// 		message: 'required'
		// 	}
		// },
		color: {
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

class Guide extends PureComponent {
	static propsTypes = {}
	handleSubmit = (values) => {

	}

	renderEmails = ({ fields, meta: { touched, error, submitFailed } }) => {
		return (
			<div className="guides-data-table">
				<h3 className="group-header">
					Emails
					<button type="button" className="btn btn-primary add-guide" onClick={() => fields.push({})}>
						+ Add Email
					</button>
				</h3>
				<div>
					{this.renderEmailRows(fields)}
				</div>
			</div>
		)
	}

	renderEmailRows = (fields) => {
		const onRemoveClick = (index) => {
			fields.remove(index)
		}

		return fields.map((field, index) => {
			return (
				<div className="guide-data-row" key={`email-${index}`}>
					<Field name={field}
						   component={TextField}
						   label={`Email ${index + 1}`}
						   placeholder="example@email.com"
						   type="email"
					/>
					<button type="button" className="btn btn-danger" onClick={() => {
						onRemoveClick(index)
					}}>
						Remove
					</button>
				</div>
			)
		})
	}

	renderPhones = ({ fields, meta: { touched, error, submitFailed } }) => {
		return (
			<div className="guides-data-table">
				<h3 className="group-header">
					Phones
					<button type="button" className="btn btn-primary add-guide" onClick={() => fields.push({})}>
						+ Add Phone
					</button>
				</h3>
				<div>
					{this.renderPhoneRows(fields)}
				</div>
			</div>
		)
	}

	renderPhoneRows = (fields) => {
		const onRemoveClick = (index) => {
			fields.remove(index)
		}

		return fields.map((field, index) => {
			return (
				<div className="guide-data-row" key={`phone-${index}`}>
					<Field name={field}
						   component={TextField}
						   label={`Phone ${index + 1}`}
						   placeholder="14065555555"
						   type="text"
					/>
					<button type="button" className="btn btn-danger" onClick={() => {
						onRemoveClick(index)
					}}>
						Remove
					</button>
				</div>
			)
		})
	}

	render() {
		const { handleSubmit } = this.props

		return (
			<div className="form-wrapper Guide">
				<form className="panel panel-primary" onSubmit={handleSubmit(this.handleSubmit)}>
					<FormHeader>Guide</FormHeader>
					<div className="panel-body">
						<Field name="name"
							   component={TextField}
							   label="Guide name"
							   placeholder="enter name"
							   type="text"
						/>
						<FieldArray name="phones" component={this.renderPhones}/>
						<FieldArray name="emails" component={this.renderEmails}/>
						<button className="btn btn-primary">Add Guide</button>
					</div>
				</form>
			</div>
		)
	}
}

Guide = reduxForm({
	form: 'addtrip',
	validate
})(Guide)

export default (Guide)
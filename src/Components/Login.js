import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

import FormHeader from './Common/FormHeader'
import './Common/Common.css'

import TextField from './Common/TextField'


class Login extends PureComponent {
	static propsTypes = {}

	handleChange = () => {
		console.log('you changed your info')
	}

	getValidationState = () => 'success'

	render() {
		return (
			<div className="form-wrapper">
				<form className="panel panel-primary">
					<FormHeader>Login</FormHeader>
					<div className="panel-body">
						<TextField
							label="Email"
							placeholder="Enter Email"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="email"
						/>
						<TextField
							label="Password"
							placeholder="Enter Password"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="password"
						/>
						<button href="#" className="btn btn-primary">Login</button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(state => {
	return {
		firstNamedReducer: state.firstNamedReducer
	}
})(Login)
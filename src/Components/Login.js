import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

import FormHeader from './Common/FormHeader'
import './Login.css'

class Login extends PureComponent {
	static propsTypes = {}

	handleChange = () => {
		console.log('you changed your info')
	}

	getValidationState = () => 'success'

	render() {
		return (
			<div className="Login">
				<form className="panel panel-primary">
					<FormHeader>Login</FormHeader>
					<div className="panel-body">
						<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
						>
							<ControlLabel>Email</ControlLabel>
							<FormControl
								type="email"
								placeholder="Enter Email"
								onChange={this.handleChange}
							/>
							<FormControl.Feedback />
						</FormGroup>
						<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
						>
							<ControlLabel>Password</ControlLabel>
							<FormControl
								type="password"
								placeholder="Enter Password"
								onChange={this.handleChange}
							/>
							<FormControl.Feedback />
						</FormGroup>
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
import React, { PropTypes, PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form';

import TextField from './Common/TextField'
import FormHeader from './Common/FormHeader'

class LoginForm extends PureComponent {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}

	handleChange = () => {
		console.log('you changed your info')
	}

	getValidationState = () => 'success'

	render() {
		const { handleSubmit } = this.props;

		return (
			<form className="panel panel-primary" onSubmit={handleSubmit}>
				<FormHeader>Login</FormHeader>
				<div className="panel-body">
					<Field name="email"
						   component={TextField}
						   label="Email"
						   placeholder="Enter Email"
						   onChange={this.handleChange}
						   validationState={this.getValidationState()}
						   type="email"
					/>
					<Field name="password"
						   component={TextField}
						   label="Password"
						   placeholder="Enter Password"
						   onChange={this.handleChange}
						   validationState={this.getValidationState()}
						   type="password"
					/>
					<button type="submit" className="btn btn-primary">Login</button>
				</div>
			</form>
		)
	}
}


LoginForm = reduxForm({
	form: 'login' // a unique name for this form
})(LoginForm);

export default LoginForm
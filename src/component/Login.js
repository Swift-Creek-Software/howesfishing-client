import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { login } from '../actions/UserActions'

import LoginForm from './LoginForm'
import './Common/Common.css'

class Login extends PureComponent {

	onFormSubmit = (values) => {
		this.props.login(values.email, values.password)
	}

	render() {
		if (this.props.user) {
			return <Redirect to={'/dashboard'}/>
		}

		return (
			<div className="form-wrapper">
				<LoginForm onSubmit={this.onFormSubmit}/>
			</div>
		)
	}
}

export default connect(state => {
		return {
			user: state.user
		}
	}, {
		login
	}
)(Login)
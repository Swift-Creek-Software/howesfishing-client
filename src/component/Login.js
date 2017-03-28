import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { login } from '../actions/UserActions'

import LoginForm from './LoginForm'
import './Common/Common.css'

class Login extends PureComponent {
	static propTypes = {
		user: PropTypes.object
	}

	onFormSubmit = (values) => {
		this.props.login(values.email, values.password)
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } }
		if (this.props.user) {
			return <Redirect to={from}/>
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
)(withRouter(Login))
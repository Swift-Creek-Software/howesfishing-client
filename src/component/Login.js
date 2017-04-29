import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'


import LoginForm from './LoginForm'
import './Common/Common.css'

class Login extends PureComponent {
	static propTypes = {
		user: PropTypes.object
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
	}
)(withRouter(Login))
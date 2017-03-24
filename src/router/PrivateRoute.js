import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends PureComponent {
	render() {
		const { component, user, ...rest } = this.props
		console.log('user', user)
		return (
			<Route {...rest} render={props => {
				return (
					user ? (
							<h1>TEST</h1>
						) : (
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}}/>
						)
				)
			}}/>
		)

	}
}

export default connect(state => {
	return {
		state: state,
		user: state.user
	}
})(PrivateRoute)

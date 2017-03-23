import React, { PureComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends PureComponent {
	render() {
		const { component, ...rest } = this.props

		return (
			<Route {...rest} render={props => {
				return (
					props.user ? (
							React.createElement(component, props)
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

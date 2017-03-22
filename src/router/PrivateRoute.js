import React, { PureComponent, PropTypes } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends PureComponent {
	render() {
		const { component, ...rest } = props

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
		user: state.user
	}
})
	(PrivateRoute)

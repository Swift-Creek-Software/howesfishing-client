import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component, user, ...rest }) => {
	return (
		<Route {...rest} render={props => {
			return (
				user ? (
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

PrivateRoute.propTypes = {
	user: PropTypes.object
}

export default PrivateRoute

import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component, user, ...rest }) => {
	console.log('user', user)
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

export default PrivateRoute

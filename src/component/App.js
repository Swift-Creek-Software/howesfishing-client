import React from 'react'
import {connect} from 'react-redux'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import PrivateRoute from '../router/PrivateRoute'
import Login from './Login'
import AddTrip from './AddTrip'
import Dashboard from './Dashboard'

const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/dashboard">Dashboard</Link></li>
				<li><Link to="/trip">Add Trip</Link></li>
			</ul>

			<hr/>

			<Route exact path="/login" component={Login}/>
			<PrivateRoute path="/dashboard" component={Dashboard}/>
			<Route path="/trip" component={AddTrip}/>
		</div>
	</Router>
)

export default connect(state => {
	return {
		user: state.user
	}
}
)(App)
//
// import React, { PropTypes } from 'react'
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link,
// 	Redirect,
// 	withRouter
// } from 'react-router-dom'
//
// ////////////////////////////////////////////////////////////
// // 1. Click the public page
// // 2. Click the protected page
// // 3. Log in
// // 4. Click the back button, note the URL each time
//
// const AuthExample = () => (
// 	<Router>
// 		<div>
// 			<AuthButton/>
// 			<ul>
// 				<li><Link to="/public">Public Page</Link></li>
// 				<li><Link to="/protected">Protected Page</Link></li>
// 			</ul>
// 			<Route path="/public" component={Public}/>
// 			<Route path="/login" component={Login}/>
// 			<PrivateRoute path="/protected" component={Protected}/>
// 		</div>
// 	</Router>
// )
//
// const fakeAuth = {
// 	isAuthenticated: false,
// 	authenticate(cb) {
// 		this.isAuthenticated = true
// 		setTimeout(cb, 100) // fake async
// 	},
// 	signout(cb) {
// 		this.isAuthenticated = false
// 		setTimeout(cb, 100)
// 	}
// }
//
// const AuthButton = withRouter(({ history }) => (
// 	fakeAuth.isAuthenticated ? (
// 			<p>
// 				Welcome! <button onClick={() => {
// 				fakeAuth.signout(() => history.push('/'))
// 			}}>Sign out</button>
// 			</p>
// 		) : (
// 			<p>You are not logged in.</p>
// 		)
// ))
//
// const PrivateRoute = ({ component, ...rest }) => (
// 	<Route {...rest} render={props => (
// 		fakeAuth.isAuthenticated ? (
// 				React.createElement(component, props)
// 			) : (
// 				<Redirect to={{
// 					pathname: '/login',
// 					state: { from: props.location }
// 				}}/>
// 			)
// 	)}/>
// )
//
// const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>
//
//
// export default AuthExample
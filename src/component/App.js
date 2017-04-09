import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	BrowserRouter as Router,
	Route,

} from 'react-router-dom'

import PrivateRoute from '../router/PrivateRoute'
import Login from './Login'
import AddTrip from './AddTrip'
import Dashboard from './Dashboard'
import Calendar from './Calendar'
import Navbar from './NavBar'
import Trip from './Trip'

class App extends Component {
	render() {
		const { user } = this.props
		return (
			<Router>
				<div style={{height: '100%'}}>
					<Navbar />
					<Route exact path="/login" component={Login}/>
					<PrivateRoute path="/add-trip" component={AddTrip} user={user}/>
					<PrivateRoute path="/trip" component={Trip} user={user}/>
					<PrivateRoute path="/dashboard" component={Dashboard} user={user}/>
					<PrivateRoute path="/calendar" component={Calendar} user={user}/>
				</div>
			</Router>
		)

	}
}

export default connect(state => {
		return {
			user: state.user
		}
	}
)(App)
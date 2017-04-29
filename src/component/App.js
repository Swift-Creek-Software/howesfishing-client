import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	BrowserRouter as Router,
	Route,
	Redirect

} from 'react-router-dom'

import PrivateRoute from '../router/PrivateRoute'
import Login from './Login'
import AddTrip from './AddTrip'
import Dashboard from './Dashboard'
import Guides from './guide/Guides'
import Guide from './guide/Guide'
import Navbar from './NavBar'

class App extends Component {
	render() {
		const { user } = this.props
		return (
			<Router>
				<div style={{ height: '100%' }}>
					<Navbar />
					<Route exact path="/" render={() => (
						<Redirect to="/dashboard"/>
					)}/>
					<Route exact path="/login" component={Login}/>
					<PrivateRoute path="/trip" component={AddTrip} user={user}/>
					<PrivateRoute path="/guide" component={Guide} user={user}/>
					<PrivateRoute path="/guides" component={Guides} user={user}/>
					<PrivateRoute path="/dashboard" component={Dashboard} user={user}/>
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
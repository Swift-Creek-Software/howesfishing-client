import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Login from './Components/Login'
import AddTrip from './Components/AddTrip'

const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Login</Link></li>
				<li><Link to="/trip">Add Trip</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Login}/>
			<Route path="/trip" component={AddTrip}/>
		</div>
	</Router>
)


export default App
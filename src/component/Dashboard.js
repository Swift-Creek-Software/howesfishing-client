import React, { PureComponent } from 'react'

import Calendar from './Calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

class Dashboard extends PureComponent {


	render() {
		return (
			<div style={{height: '100%'}}>
				<h2>Dashboard</h2>
				<Calendar/>
			</div>
		)
	}
}

export default Dashboard
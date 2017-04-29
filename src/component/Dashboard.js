import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import currentTripSelector from '../selectors/currentTripSelector'

import Calendar from './Calendar'
import TripModal from './TripModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'

class Dashboard extends PureComponent {


	render() {
		return (
			<div style={{height: '100%'}}>
				<Calendar/>
				{this.props.currentTrip &&
					<TripModal/>
				}
			</div>
		)
	}
}
Dashboard = connect(state => {
	return {
		currentTrip: currentTripSelector(state)
	}
})(Dashboard)

export default Dashboard
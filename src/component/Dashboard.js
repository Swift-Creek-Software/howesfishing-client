import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import currentTripSelector from '../selectors/currentTripSelector'
import { fetchTrips } from '../actions/TripActions'

import Calendar from './calendar/Calendar'
import TripModal from './trip/TripModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'

class Dashboard extends PureComponent {

	componentWillMount() {
		this.props.fetchTrips()
	}

	render() {
		return (
			<div style={{ height: '100%' }}>
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
	},
	{ fetchTrips }
)(Dashboard)

export default Dashboard
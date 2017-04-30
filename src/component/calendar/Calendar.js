import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar';

import guideTripsSelector from '../../selectors/guideTripsSelector'

import CalendarGuideSelector from './CalendarGuideSelector'
import CalendarMonthEvent from './CalendarMonthEvent'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'


BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
);

const Event = ({event}) => {

}

class Calendar extends Component {

	renderEventsList = () => {

		return this.props.trips.map(trip => {
			return {
				title: `${trip.location} - ${trip.guide.name}`,
				start: trip.startTime,
				end: trip.endTime,
				color: trip.guide.color,
				id: trip.id
			}
		})
	}

	renderGuidesForTrip = (guides) => {
		return guides.join(', ')
	}


	render() {
		return (
			<div style={{ height: 'calc(100% - 50px)', padding: '0 50px', boxSizing: 'border-box' }}>
				{this.props.user.isAdmin &&
					<CalendarGuideSelector/>
				}
				<BigCalendar
					popup
					events={this.renderEventsList()}
					startAccessor='start'
					endAccessor='end'
					defaultDate={new Date()}
					components={{eventWrapper: CalendarMonthEvent}}
				/>
			</div>
		)
	}
}

export default connect(state => {
	return {
		trips: guideTripsSelector(state),
		user: state.user
	}
})(Calendar)
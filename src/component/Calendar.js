import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar';

import guideTripsSelector from '../selectors/guideTripsSelector'
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
);

class Calendar extends Component {

	renderEventsList = () => {

		return this.props.trips.map(trip => {
			return {title: `${trip.lastName} - ${trip.waterBody} ${this.renderGuidesForTrip(trip.guides)}`, start: trip.startTime, end: trip.endTime}
		})
	}

	renderGuidesForTrip = (guides) => {
		return guides.join(', ')
	}

	render() {
		return (
			<div style={{ height: 'calc(100% - 100px)', padding: '0 50px', boxSizing: 'border-box' }}>
				<BigCalendar
					events={this.renderEventsList()}
					startAccessor='start'
					endAccessor='end'
					defaultDate={new Date()}
					onSelecting={(event, e) => {
						console.log('event', event)
					}}
					onSelectSlot={(event) => {
						console.log('slot selected', event)
					}}
				/>
			</div>
		)
	}
}

export default connect(state => {
	return {
		trips: guideTripsSelector(state)
	}
})(Calendar)
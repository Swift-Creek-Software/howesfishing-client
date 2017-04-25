import React, { Component } from 'react'
import moment from 'moment';
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar';

import guideTripsSelector from '../selectors/guideTripsSelector'

import CalendarGuideSelector from './CalendarGuideSelector'
import 'react-big-calendar/lib/css/react-big-calendar.css'


BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
);

class Calendar extends Component {

	renderEventsList = () => {

		return this.props.trips.map(trip => {
			return {
				title: `${trip.lastName} - ${trip.waterBody} ${trip.guide.name}`,
				start: trip.startTime,
				end: trip.endTime,
				color: trip.guide.color
			}
		})
	}

	renderGuidesForTrip = (guides) => {
		return guides.join(', ')
	}


	render() {
		return (
			<div style={{ height: 'calc(100% - 100px)', padding: '0 50px', boxSizing: 'border-box' }}>
				<CalendarGuideSelector/>
				<BigCalendar
					events={this.renderEventsList()}
					startAccessor='start'
					endAccessor='end'
					defaultDate={new Date()}
					components={{eventWrapper: Event}}
				/>
			</div>
		)
	}
}
const Event = ({event}) => {
	return (
		<div style={{backgroundColor: event.color, borderRadius: '3px', padding: 2, boxSizing: 'border-box', color: '#fff'}}>
			{event.title}
		</div>
	)
}

export default connect(state => {
	return {
		trips: guideTripsSelector(state)
	}
})(Calendar)
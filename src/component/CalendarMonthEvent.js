import React, { PureComponent, PropTypes } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {setCurrentTrip} from '../actions/TripActions'

class CalendarMonthEvent extends PureComponent {
	onEventClick = () => {
		this.props.setCurrentTrip(this.props.event.id)
		this.props.history.push('/trip')
	}

	render() {
		const {event} = this.props
		return (
			<div style={{
				backgroundColor: event.color,
				borderRadius: '3px',
				padding: 2,
				boxSizing: 'border-box',
				color: '#fff'
			}} onClick={this.onEventClick}>
				{event.title}
			</div>
		)
	}

}


CalendarMonthEvent.propTypes = {
	event: PropTypes.object.isRequired
}
CalendarMonthEvent = connect(null, {setCurrentTrip})(CalendarMonthEvent)
export default withRouter(CalendarMonthEvent)
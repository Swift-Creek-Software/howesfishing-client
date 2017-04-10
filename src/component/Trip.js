import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import currentTrip from '../selectors/currentTripSelector'

import TripData from './Common/TripData'

class Trip extends PureComponent {
	static propsTypes = {
		currentTrip: PropTypes.object.isRequired
	}

	componentWillMount() {
		console.log('props', this.props)
	}

	getMomentTime = (dateTime) => {
		return moment(dateTime).format('LT')
	}

	render() {
		const { currentTrip } = this.props

		return (
			<div>

				<h2>You are on the view trip</h2>
				<TripData label="Name" value={`${currentTrip.firstName} ${currentTrip.lastName}`}/>
				<TripData label="Date" value={moment(currentTrip.startTime).format('MMM Do YYYY')}/>
				<TripData label="Time" value={`${this.getMomentTime(currentTrip.startTime)} - ${this.getMomentTime(currentTrip.endTime)}`}/>
			</div>
		)
	}
}

export default connect(state => {
	return {
		currentTrip: currentTrip(state)
	}
})(Trip)
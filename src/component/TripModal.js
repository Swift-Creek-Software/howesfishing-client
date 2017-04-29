import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import moment from 'moment'
import { Link } from 'react-router-dom'

import currentTripSelector from '../selectors/currentTripSelector'
import guidesById from '../selectors/guidesById'
import { setCurrentTrip } from '../actions/TripActions'

import TripData from './Common/TripData'


class TripModal extends PureComponent {
	static propsTypes = {
		//selector
		trip: PropTypes.object.isRequired
	}

	onCloseClick = () => {
		this.props.setCurrentTrip()
	}
	getMomentTime = (dateTime) => {
		return moment(dateTime).format('LT')
	}

	renderGuideString = (guides) => {
		return guides.map(guide => {
			return this.props.guides[ guide.id ].name
		}).join(', ')
	}

	render() {
		const { trip } = this.props

		return (
			<Modal.Dialog>
				<Modal.Header>
					<h3 style={{display: 'inline-block'}}>
						{`${moment(trip.startTime).format('MMM Do')} Trip`}
					</h3>
					<button className="btn btn-warning" style={{ float: 'right' }} onClick={this.onCloseClick}>Close
					</button>
				</Modal.Header>
				<Modal.Body>
					<TripData label="Name" value={`${trip.firstName} ${trip.lastName}`}/>
					<TripData label="Date" value={moment(trip.startTime).format('MMM Do YYYY')}/>
					<TripData label="Time"
							  value={`${this.getMomentTime(trip.startTime)} - ${this.getMomentTime(trip.endTime)}`}/>
					<TripData label="Guides" value={this.renderGuideString(trip.guides)}/>
					<TripData label="Guests" value={trip.guests}/>
					<TripData label="Cost" value={`$${trip.cost}`}/>
					<TripData label="Location" value={trip.location}/>
					<TripData label="Notes" value={trip.notes || 'none'}/>
				</Modal.Body>
				<Modal.Footer>
					{this.props.user && this.props.user.isAdmin &&
					<Link to="/trip" className="btn btn-primary">Edit Trip</Link>
					}
				</Modal.Footer>
			</Modal.Dialog>
		)
	}
}

TripModal = connect(state => {
		return {
			trip: currentTripSelector(state),
			guides: guidesById(state),
			user: state.user
		}
	},
	{
		setCurrentTrip
	}
)(TripModal)

export default TripModal
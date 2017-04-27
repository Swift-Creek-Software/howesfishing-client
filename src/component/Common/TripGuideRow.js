import React, { PureComponent, PropTypes } from 'react'
import { Field } from 'redux-form'

import TextField from './TextField'

import TripGuideSelect from '../TripGuideSelect'
import './TripGuideRow.css'

class AddGuideRow extends PureComponent {
	static propsTypes = {
		//redux
		guides: PropTypes.array.isRequired,
		// props
		key: PropTypes.number.isRequired,
		index: PropTypes.number.isRequired,
		field: PropTypes.object.isRequired,
		onRemoveClick: PropTypes.func.isRequired
	}

	onRemoveClick = () => {
		this.props.onRemoveClick(this.props.index)
	}

	templateNormalizer = (value, previousValue, allValues) => {
		const { startTime, endTime, guides, cost } = allValues
		console.log('all values', allValues, this.props.field)
		const guideGuests = guides[ this.props.index ].guests
		if (value) {
			return value
		} else {
			return `${startTime ? startTime.format('MMM Do') : ''}, ${startTime ? startTime.format('ha') : ''} - ${endTime ? endTime.format('ha') : ''} for ${guideGuests || ''} people on ${guides ? guides.length : ''} boats. Cost $${cost || ''}`
		}
	}

	render() {
		return (
			<div className="TripGuideRow" key={`Guide-${this.props.index + 1}`}>
				<div className="guide-header">
					<h4>Guide {this.props.index + 1}
					</h4>
					<button type="button" className="btn btn-danger" onClick={this.onRemoveClick}>
						Remove
					</button>
				</div>
				<TripGuideSelect/>
				<Field name={`${this.props.field}.guests`}
					   className="guide-field"
					   component={TextField}
					   label="Guests"
					   placeholder="1"
					   type="text"
				/>
				<Field name={`${this.props.field}.textTemplate`}
					   className="guide-field"
					   component={TextField}
					   label="Guide Text Template"
					   placeholder="click here for template"
					   type="text"
					   normalize={this.templateNormalizer}
				/>
			</div>
		)
	}
}


export default AddGuideRow
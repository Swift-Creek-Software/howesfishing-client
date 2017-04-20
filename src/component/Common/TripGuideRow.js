import React, { PureComponent, PropTypes } from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'

import SelectField from './SelectField'
import TextField from './TextField'

import './TripGuideRow.css'

class AddGuideRow extends PureComponent {
	static propsTypes = {}

	onRemoveClick = () => {
		this.props.onRemoveClick(this.props.index)
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
				<Field name={`${this.props.field}.guideId`}
					   className="guide-field"
					   component={SelectField}
					   label="Guide"
					   options={this.props.guides.map(guide => {
						   return {
							   name: guide.name,
							   value: guide.id,
						   }
					   })}
				/>
				<Field name={`${this.props.field}.clients`}
					   className="guide-field"
					   component={TextField}
					   label="Clients"
					   placeholder="1"
					   type="text"
				/>
			</div>
		)
	}
}

AddGuideRow = connect(state => {
		return {
			guides: state.guide.guides
		}
	}
)
(AddGuideRow)


export default AddGuideRow
import React, { PureComponent, PropTypes } from 'react'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import DateTime from 'react-datetime'

class DateTimeField extends PureComponent {
	static propsTypes = {
		onChange: PropTypes.func.isRequired,
		type: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		validationState: PropTypes.string.isRequired,
	}

	getValidationState = () => {
		const { touched, valid } = this.props.meta
		if (touched) {
			return valid ? 'success' : 'error'
		}
		return null
	}

	renderError = () => {
		const { touched, valid, error } = this.props.meta
		if (touched) {
			return valid ? null : error
		}
		return null
	}


	render() {
		return (
			<FormGroup
				controlId="formBasicText"
				validationState={this.getValidationState()}
			>
				<ControlLabel>{this.props.label}</ControlLabel>
				<DateTime {...this.props.input} defaultValut={this.props.defaultValue} />
				<FormControl.Feedback />
				<span>{this.renderError()}</span>
			</FormGroup>
		)
	}
}
export default DateTimeField
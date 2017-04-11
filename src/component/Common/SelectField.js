import React, { PureComponent, PropTypes } from 'react'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

class SelectField extends PureComponent {
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
		console.log('props', this.props)
		return (
			<FormGroup
				controlId="formBasicText"
				validationState={this.getValidationState()}
			>
				<ControlLabel>{this.props.label}</ControlLabel>
				<FormControl
					{...this.props.input}
					placeholder={this.props.placeholder}
					componentClass="select"
				>
					<option value='BIGFORK'>Bigfork</option>
					<option value='LAKESIDE'>Lakeside</option>
				</FormControl>
				<FormControl.Feedback />
				<span>{this.renderError()}</span>
			</FormGroup>
		)
	}
}
export default SelectField
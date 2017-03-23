import React, { PureComponent, PropTypes } from 'react'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

class TextField extends PureComponent {
	static propsTypes = {
		onChange: PropTypes.func.isRequired,
		type: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		validationState: PropTypes.string.isRequired,
	}

	render() {
		return (
			<FormGroup
				controlId="formBasicText"
				validationState={this.props.validationState}
			>
				<ControlLabel>{this.props.label}</ControlLabel>
				<FormControl
					{...this.props.input}
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>
				<FormControl.Feedback />
			</FormGroup>
		)
	}
}

export default TextField
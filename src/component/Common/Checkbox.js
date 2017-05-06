import React, { PureComponent, PropTypes } from 'react'
import {Checkbox as BootBox }from 'react-bootstrap'

class Checkbox extends PureComponent {
	static propsTypes = {
		label: PropTypes.string.isRequired
	}

	render() {

		console.log('input', this.props.input)
		return (
			<BootBox className={this.props.className} {...this.props.input} checked={this.props.input.value}>
				{this.props.label}
			</BootBox>
		)
	}
}

export default Checkbox
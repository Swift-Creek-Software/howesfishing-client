import React, { PureComponent, PropTypes } from 'react'
import { ChromePicker } from 'react-color'

class ColorWrapper extends PureComponent {
	static propsTypes = {}

	onChange = (value) => {
		this.props.input.onChange(value.hex)
	}

	render() {
		const { input } = this.props
		return (
			<div style={{ marginBottom: 15 }}>
				<label className="control-label">Calendar Color</label>
				<ChromePicker
					color={input.value}
					onChange={this.onChange}
				/>
			</div>
		)
	}
}

export default ColorWrapper
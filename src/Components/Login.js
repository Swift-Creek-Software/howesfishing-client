import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'


connect(state => {
	return {
		firstNamedReducer: state.firstNamedReducer
	}
})
class Login extends PureComponent {
	static propsTypes = {}

	render() {
		console.log('first name', this.props.firstNamedReducer)
		return (
			<div>
				<h2>Home</h2>
				<p>and more stuff</p>
			</div>
		)
	}
}

export default connect(state => {
	return {
		firstNamedReducer: state.firstNamedReducer
	}
})(Login)
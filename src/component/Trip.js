import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

import currentTrip from '../selectors/currentTripSelector'

class Trip extends PureComponent {
	static propsTypes = {
		currentTrip: PropTypes.object.isRequired
	}

	componentWillMount() {
		console.log('props', this.props)
	}

	render() {
		return (
			<h2>You are on the view trip</h2>
		)
	}
}

export default connect(state => {
	return {
		currentTrip: currentTrip(state)
	}
})(Trip)
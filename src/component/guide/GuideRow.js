import React, { PureComponent, PropTypes } from 'react'
import { withRouter } from 'react-router-dom'

import './GuideRow.css'

const GuideRow = (props) => {

	return (
		<tr className="GuideRow" onClick={() => {
			props.history.push(`/guide/${props.guide.id}`)
		}}>
			<td>{props.guide.name}</td>
			<td className="condensed">{props.guide.phones.join(', ')}</td>
			<td className="condensed">{props.guide.emails.join(', ')}</td>
		</tr>
	)
}
GuideRow.propsTypes = {}

export default withRouter(GuideRow)
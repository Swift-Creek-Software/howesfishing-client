import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

import GuideRow from './GuideRow'
import './Guides.css'


class Guides extends PureComponent {
	static propsTypes = {
		guides: PropTypes.array.isRequired
	}

	renderGuideRows = () => {
		return this.props.guides.map(guide => {
			return (
				<GuideRow guide={guide} key={`guide-${guide.id}`}/>
			)
		})
	}

	render() {
		return (
			<div className="Guides">
				<div className="header-wrapper">
					<h1>Guides</h1>
					<a href="/guide" className="btn btn-primary">+Add Guide</a>
				</div>
				<Table responsive hover condensed>
					<thead>
					<tr>
						<th>Name</th>
						<th>Phones</th>
						<th>Emails</th>
					</tr>
					</thead>
					<tbody>
					{this.renderGuideRows()}
					</tbody>
				</Table>
			</div>
		)
	}
}
export default connect(state => {
	return {
		guides: state.guide.guides
	}
})(Guides)
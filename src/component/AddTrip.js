import React, { PureComponent } from 'react'

import FormHeader from './Common/FormHeader'
import TextField from './Common/TextField'
import './Common/Common.css'

class AddTrip extends PureComponent {
	handleChange = () => {
		console.log('you changed trip your info')
	}

	getValidationState = () => 'success'

	render() {
		return (
			<div className="form-wrapper">
				<form className="panel panel-primary">
					<FormHeader>Create Trip</FormHeader>
					<div className="panel-body">
						<TextField
							label="Client Name"
							placeholder="client name"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="text"
						/>
						<TextField
							label="Client Email"
							placeholder="client email"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="email"
						/>
						<TextField
							label="Client Phone"
							placeholder="client phone"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="phone"
						/>
						<TextField
							label="Trip Date"
							placeholder="trip date"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="date"
						/>
						<TextField
							label="Start Time"
							placeholder="start time"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="text"
						/>
						<TextField
							label="End Time"
							placeholder="end time"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="text"
						/>
						<TextField
							label="# Guests"
							placeholder="guests"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="text"
						/>
						<TextField
							label="Cost"
							placeholder="cost"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="text"
						/>
						<TextField
							label="Cost"
							placeholder="cost"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="text"
						/>
						<TextField
							label="Waterbody"
							placeholder="Flathead"
							onChange={this.handleChange}
							validationState={this.getValidationState()}
							type="text"
						/>

						<button href="#" className="btn btn-primary">Create Trip</button>
					</div>
				</form>
			</div>
		)
	}
}

export default AddTrip
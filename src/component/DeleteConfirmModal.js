import React, { PureComponent, PropTypes } from 'react'
import { Modal } from 'react-bootstrap'

class DeleteConfirmModal extends PureComponent {
	static propsTypes = {
		onCancelClick: PropTypes.func.isRequired,
		onDeleteClick: PropTypes.func.isRequired
	}

	render() {
		return (
			<Modal.Dialog>
				<Modal.Header>
					Confirm Delete
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete this trip?
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.props.onCancelClick} className="btn btn-primary">
						cancel
					</button>
					<button onClick={this.props.onDeleteClick} className="btn btn-danger">
						Yes, delete trip
					</button>
				</Modal.Footer>
			</Modal.Dialog>
		)
	}
}

export default DeleteConfirmModal
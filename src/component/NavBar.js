import React, { PureComponent, PropTypes } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'

import { logout } from '../actions/UserActions'

import ListItemLink from './ListItemLink'


class NavBar extends PureComponent {
	static propsTypes = {
		clearUser: PropTypes.func.isRequired
	}

	onLogoutClick = (event) => {
		event.preventDefault()
		this.props.logout()
	}

	render() {
		return (
			<Navbar collapseOnSelect >
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Howe's Fishing Admin</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					{this.props.user &&
					<Nav>
						<ListItemLink to="/dashboard">Dashboard</ListItemLink>
						<ListItemLink to="/guides">Guides</ListItemLink>
						<ListItemLink to="/trip">Add Trip</ListItemLink>
					</Nav>
					}
					<Nav pullRight>
						{this.props.user ?
							<NavItem eventKey={1} onClick={this.onLogoutClick}>Logout</NavItem>
							: <ListItemLink to="/login">Login</ListItemLink>

						}

					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default connect(state => {
		return {
			user: state.user
		}
	},
	{ logout }
)(NavBar)
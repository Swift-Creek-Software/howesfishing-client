import React, { PureComponent, PropTypes } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/UserActions'

import ListItemLink from './ListItemLink'


class NavBar extends PureComponent {
	static propsTypes = {
		clearUser: PropTypes.func.isRequired
	}

	onLogoutClick = (event) => {
		event.preventDefault()
		this.props.logout()
		this.props.location.push('/admin/login')
	}

	renderNavItems = () => {
		if (!this.props.user.isLoggedIn) {
			return null
		}
		if (this.props.user.isAdmin) {
			return (
				<Nav>
					<ListItemLink to="/admin/dashboard">Dashboard</ListItemLink>
					<ListItemLink to="/admin/guides">Guides</ListItemLink>
					<ListItemLink to="/admin/trip">Add Trip</ListItemLink>
				</Nav>
			)
		} else {
			return (
				<Nav>
					<ListItemLink to="/admin/dashboard">Dashboard</ListItemLink>
				</Nav>
			)
		}

	}

	render() {
		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Howe's Fishing Admin</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					{this.renderNavItems()}
					<Nav pullRight>
						{this.props.user ?
							<NavItem eventKey={1} onClick={this.onLogoutClick}>Logout</NavItem>
							: <ListItemLink to="/admin/login">Login</ListItemLink>

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
)(withRouter(NavBar))
import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import './NavbarCss.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Y.O.L.O</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
          
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
            {/* <NavItem eventKey={4} componentClass={Link} href="/map" to="/map" >
              Map
            </NavItem> */}
            {/* <NavItem >
                Log In
            </NavItem>
            <NavItem>
              Log Out
            </NavItem> */}
            <NavItem eventKey={5} componentClass={Link} href="/keepintouch" to="/keepintouch" >
            Keep In Touch
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/profile" to="/profile" >
            Memories
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

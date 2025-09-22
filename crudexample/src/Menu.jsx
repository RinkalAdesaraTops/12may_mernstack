import React from 'react'
import { Link } from 'react-router'
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
const Menu = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link> ||
            <Nav.Link href="/about">About</Nav.Link> ||
            <Nav.Link href="/about/a1">About 1</Nav.Link> ||
            <Nav.Link href="/about/a2">About 2</Nav.Link> ||
            <Nav.Link href="/contact">Contact</Nav.Link> ||           
            <Nav.Link href="/useref">Use Ref Example</Nav.Link> ||           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <ul>
        <li>
            {/* <a href="/home">Home </a>|| 
            <Link to='/home'>Home</Link> ||
            <a href="/about">About Us </a>||
            <a href="/contact">Contact Us</a>
        </li>
      </ul> */}
    </div>
  )
}
export default Menu

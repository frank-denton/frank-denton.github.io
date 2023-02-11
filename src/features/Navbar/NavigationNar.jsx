import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap'

function NavigationBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Frank-Denton</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <LinkContainer to="/Vite+React">
              <Nav.Link>Info</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/francis-denton/Capstone-Project" target="_blank" rel="noopener noreferrer">Capstone Project</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/frank-denton/frank-denton.github.io" target="_blank" rel="noopener noreferrer">This Website</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Unabatedlynx5" target="_blank" rel="noopener noreferrer">My Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <LinkContainer to='/343'>
              <NavDropdown.Item>Podcast</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
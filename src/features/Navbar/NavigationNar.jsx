import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavigationBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Frank-Denton</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/Vite+React">Info</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/Unabatedlynx5/Capstone-Project" target="_blank" rel="noopener noreferrer">Capstone Project</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Unabatedlynx5/frank-denton" target="_blank" rel="noopener noreferrer">This Website</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Unabatedlynx5" target="_blank" rel="noopener noreferrer">My Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/343" >Podcast</NavDropdown.Item>
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
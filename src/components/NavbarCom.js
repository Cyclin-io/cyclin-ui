import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgBackground from '../images/background_photo_3.jpg'







 class NavbarCom extends Component {
  render() {
    return (
      <div className = "Navbar">
      <Navbar expand="lg" bg="primary" variant="dark">

  <Container>
  <Navbar.Brand href="/home">Cyclin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/project">Projects</Nav.Link>
      <Nav.Link href="/Minter">Mint NFT</Nav.Link>
      <NavDropdown title="NFT market" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Collection1">Collection 1</NavDropdown.Item>
        <NavDropdown.Item href="/Collection2">Collection 2</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Minter"> Mint NFT</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/team">Team</Nav.Link>
      <Nav.Link eventKey={2} href="https://github.com/">
        Contact us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>    
           
       
           
           </div>
    )
  }
}

 export default NavbarCom; 
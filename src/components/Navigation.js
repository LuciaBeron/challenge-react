import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default function Navigation() {
    return (
      <Container>
        <Navbar expand="md" className="border">
          <Navbar.Brand>My blog</Navbar.Brand> 
          
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse className="justify-content-end" id="navbar">
            <Nav>      
                  <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  
                  <LinkContainer to="/edit/1">
                    <Nav.Link>Edit Post</Nav.Link>
                  </LinkContainer>
            </Nav>            
          </Navbar.Collapse>
        </Navbar>
        </Container>

    )
}

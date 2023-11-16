import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="md" aria-label="NavBar">
        <Container>
          <Navbar.Brand>Motion.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} aria-label="Home Page" to="">Home</Nav.Link>
              <Nav.Link as={Link} aria-label="Cardio Page" to="/Cardio">Cardio</Nav.Link>
              <Nav.Link as={Link} aria-label="Weight Page" to="/Weight">Weight</Nav.Link>
              <Nav.Link as={Link} aria-label="Flexibility Page" to="/Flexibility">Flexibility</Nav.Link>
              <Link to="/Upload">
                <Button variant="dark" aria-label="Upload">Upload</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = () => (
  <>
    <Navbar key="lg" expand="lg" className="bg-body-tertiary mb-3" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-'lg'-${'lg'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-'lg'-${'lg'}`}
          aria-labelledby={`offcanvasNavbarLabel-'lg'-${'lg'}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-'lg'-${'lg'}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-evenly flex-grow-1 pe-3">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </>
);

export default Navigation;

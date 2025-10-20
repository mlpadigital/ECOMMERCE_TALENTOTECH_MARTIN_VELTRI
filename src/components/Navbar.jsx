import React from 'react';
import { Navbar as BsNavbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => (
  <BsNavbar bg="light" expand="lg" className="shadow-sm">
    <Container>
      <BsNavbar.Brand as={Link} to="/">eCommerce MV</BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="main-navbar" />
      <BsNavbar.Collapse id="main-navbar">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/products">Productos</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Carrito <Badge bg="secondary">{cartCount}</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/protected">Privado</Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </Container>
  </BsNavbar>
);

export default Navbar;
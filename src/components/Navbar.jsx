import React from 'react';
import { Navbar as BsNavbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => (
  <BsNavbar bg="light" expand="lg">
    <Container>
      <BsNavbar.Brand as={Link} to="/">eCommerce</BsNavbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/products">Productos</Nav.Link>
        <Nav.Link as={Link} to="/cart">
          Carrito <Badge bg="secondary">{cartCount}</Badge>
        </Nav.Link>
        <Nav.Link as={Link} to="/protected">Privado</Nav.Link>
      </Nav>
    </Container>
  </BsNavbar>
);

export default Navbar;

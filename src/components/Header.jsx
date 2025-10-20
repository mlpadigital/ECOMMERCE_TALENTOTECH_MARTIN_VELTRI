import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => (
  <header className="bg-primary text-white py-4 mb-4 shadow-sm">
    <Container className="text-center">
      <h1 className="mb-1">eCommerce Martin Veltri</h1>
      <p className="lead mb-0">Tu tienda escalable con React de Talentotech</p>
    </Container>
  </header>
);

export default Header;
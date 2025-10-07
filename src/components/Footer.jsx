import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container className="text-center">
        <small>© {year} eCommerce MV. Todos los derechos reservados.</small>
      </Container>
    </footer>
  );
};

export default Footer;

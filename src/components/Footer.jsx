import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container className="text-center">
        <small>© {year} eCommerce MV. Todos los derechos reservados.</small>
        {/* A futuro se puedes agregar enlaces como:
            <div className="mt-2">
              <a href="/privacy" className="text-white me-3">Privacidad</a>
              <a href="/terms" className="text-white">Términos</a>
            </div>
        */}
      </Container>
    </footer>
  );
};

export default Footer;

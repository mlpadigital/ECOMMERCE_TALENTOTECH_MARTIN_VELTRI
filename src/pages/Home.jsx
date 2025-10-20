import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-4">
      <Card className="p-4 shadow-sm text-center">
        <h2 className="mb-3">Bienvenido a tu eCommerce</h2>
        <p className="lead">
          Explorá productos, agregalos al carrito y accedé a tu panel privado.
        </p>
        {/* A futuro se puedes agregar botones, secciones destacadas o links */}
      </Card>
    </Container>
  );
};

export default Home;

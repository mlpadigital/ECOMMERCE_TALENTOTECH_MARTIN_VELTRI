import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { getProductos } from '../services/api';

const ProductList = ({ addToCart }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductos()
      .then(data => setProductos(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner animation="border" className="m-5" />;
  if (error) return <Alert variant="danger" className="m-3">Error: {error}</Alert>;

  return (
    <Container>
      <h2 className="my-4">Lista de productos</h2>
      <Row>
        {productos.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Precio: ${product.price}</Card.Text>
                </div>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
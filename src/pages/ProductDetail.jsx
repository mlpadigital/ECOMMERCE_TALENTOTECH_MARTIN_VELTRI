import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Spinner, Alert, Container } from 'react-bootstrap';
import { getProductoById } from '../services/api'; // Asegur si es que esta este módulo

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductoById(id)
      .then(data => setProducto(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner animation="border" className="m-5" />;
  if (error) return <Alert variant="danger" className="m-3">Error: {error}</Alert>;
  if (!producto) return null;

  return (
    <Container className="my-4">
      <Card className="p-4 shadow-sm">
        <Card.Img variant="top" src={producto.image} alt={producto.name} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>Precio: ${producto.price}</Card.Text>
          <Card.Text>{producto.description}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(producto)}>
            Agregar al carrito
          </Button>
          <Button variant="secondary" as={Link} to="/products" className="me-2"> 
           Volver
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;

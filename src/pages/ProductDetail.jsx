import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = { id, name: `Producto ${id}`, price: 150 };

  return (
    <Card className="p-4">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
    </Card>
  );
};

export default ProductDetail;

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Producto N° 1', price: 100 },
    { id: 2, name: 'Producto N° 2', price: 200 },
    { id: 3, name: 'Producto Oferton', price: 50}
  ];

  return (
    <>
      <h2>Lista de productos</h2>
      {products.map((product) => (
        <Card key={product.id} className="mb-3 p-3">
          <h5>{product.name}</h5>
          <p>Precio: ${product.price}</p>
          <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
        </Card>
      ))}
    </>
  );
};

export default ProductList;

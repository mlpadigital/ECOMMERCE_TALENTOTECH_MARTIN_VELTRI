// src/pages/Cart.jsx
import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Card className="p-4">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>
        </>
      )}
    </Card>
  );
};

export default Cart;

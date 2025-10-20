import React from 'react';
import { Card, Button, Table, Container, Alert } from 'react-bootstrap';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="my-4">
      <Card className="p-4 shadow-sm">
        <h2 className="mb-3">Tu carrito</h2>

        {cart.length === 0 ? (
          <Alert variant="info">No hay productos en el carrito.</Alert>
        ) : (
          <>
            <Table striped bordered hover responsive>
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
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h5 className="mt-3 text-end">Total: ${total.toFixed(2)}</h5>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Cart;
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    onLogout();
    navigate('/login');
  };

  return (
    <Card className="p-4">
      <h2 className="mb-3">Zona protegida</h2>
      <p>Bienvenido, estás autenticado correctamente.</p>

      <Row className="mt-4">
        <Col md={6}>
          <Card body className="mb-3 bg-light">
            <h5>Tu perfil</h5>
            <p>Acá podrías mostrar datos del usuario, historial o configuraciones.</p>
          </Card>
        </Col>
        <Col md={6}>
          <Card body className="mb-3 bg-light">
            <h5>Acciones rápidas</h5>
            <Button variant="outline-danger" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default ProtectedPage;
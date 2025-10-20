import React, { useState } from 'react';
import { Form, Button, Alert, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de login básico
    if (email === 'admin@demo.com' && password === '1234') {
      localStorage.setItem('auth', 'true');
      onLogin(); // se puede modularizar esto en services/auth.js si luego sebagrega tokens
      navigate('/protected');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <Container className="my-4">
      <Card className="p-4 shadow-sm">
        <h2 className="mb-3">Iniciar sesión</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="admin@demo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;

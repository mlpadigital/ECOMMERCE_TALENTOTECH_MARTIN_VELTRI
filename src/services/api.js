const BASE_URL = 'https://68f2c69bfd14a9fcc426e2b5.mockapi.io/productos/products';

export const getProductos = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Error al obtener productos');
    return await response.json();
  } catch (error) {
    console.error('getProductos:', error);
    throw error;
  }
};

export const getProductoById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Error al obtener producto');
    return await response.json();
  } catch (error) {
    console.error('getProductoById:', error);
    throw error;
  }
};
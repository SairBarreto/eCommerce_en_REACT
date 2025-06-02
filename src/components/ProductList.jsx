import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

function ProductList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://683d2bcf199a0039e9e46640.mockapi.io/productos')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('No se pudieron cargar los productos');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} onAdd={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;

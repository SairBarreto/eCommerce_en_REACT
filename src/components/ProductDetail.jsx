import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://683d2bcf199a0039e9e46640.mockapi.io/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      <strong>${producto.precio}</strong>
    </div>
  );
}

export default ProductDetail;

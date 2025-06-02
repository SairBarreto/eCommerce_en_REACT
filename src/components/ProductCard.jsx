function ProductCard({ producto, onAdd }) {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} className="product-img" />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button onClick={() => onAdd(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;

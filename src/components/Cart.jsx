import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>{item.nombre} - ${item.precio}</li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;

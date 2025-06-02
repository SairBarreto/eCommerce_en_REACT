import { useCart } from '../context/CartContext';
import '../styles/cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalCarrito = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>${item.precio * item.cantidad}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <strong>Total del carrito: ${totalCarrito}</strong>
          </div>
          <button onClick={clearCart} className="clear-btn">Vaciar Carrito</button>
        </>
      )}
    </div>
  );
}

export default Cart;

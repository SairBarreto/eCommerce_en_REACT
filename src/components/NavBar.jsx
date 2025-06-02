import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function NavBar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/carrito">
        🛒 Carrito ({totalItems})
      </Link>
    </nav>
  );
}

export default NavBar;
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default NavBar;
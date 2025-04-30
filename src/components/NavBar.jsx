import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/cadastro" style={{ marginRight: '1rem' }}>Cadastro</Link>
      <Link to="/interesses" style={{ marginRight: '1rem' }}>Interesses</Link>
      <Link to="/documentos" style={{ marginRight: '1rem' }}>Documentos</Link>
      <Link to="/redes" style={{ marginRight: '1rem' }}>Redes</Link>
      <Link to="/links">Links</Link>
    </nav>
  );
}

export default Navbar;

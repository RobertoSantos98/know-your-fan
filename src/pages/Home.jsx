import { Link } from 'react-router-dom';
import './estilos/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="title">Know Your Fan</h1>
        <p className="subtitle">Descubra seu perfil como fã de e-sports com a FURIA!</p>
        <Link to="/cadastro">
          <button className="start-button">Começar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

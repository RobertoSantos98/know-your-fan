import React, { useEffect, useState } from 'react';
import './estilos/perfil.css';

function Perfil() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('perfil');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      setUserData(null);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src="./logo-furia.jpg" alt="Logo FURIA" className="loading-logo" />
        <h2 className="loading-text">Carregando dados do perfil...</h2>
      </div>
    );
  }

  if (!userData) {
    return <div className="error-message">Nenhum dado encontrado. Por favor, complete o cadastro.</div>;
  }

  return (
    <div className="perfil-page">
      <div style={{ width: '50%', justifyContent: 'center', display: 'flex' }}>
        <img src="/logo-furia.jpg" alt="" style={{ width: '50%' }} />
      </div>
      <div style={{ width: '50%', justifyContent: 'center', display: 'flex' }}>
        <div className="perfil-container">
          <h2 className="perfil-title">Perfil do Fã</h2>
          <div className="perfil-info">
            <p><strong>Nome:</strong> {userData.nome}</p>
            <p><strong>Idade:</strong> {userData.idade}</p>
            <p><strong>Gênero:</strong> {userData.genero}</p>
            <p><strong>Redes Sociais:</strong> {userData.redes}</p>
            <p><strong>Time Favorito:</strong> {userData.time}</p>
            <p><strong>Jogador Favorito:</strong> {userData.jogador}</p>
            <p><strong>Gêneros de Jogos Favoritos:</strong> {userData.generos.join(', ')}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </div>

          <div className="perfil-nivel">
            <h3 className="nivel-title">Nível de Fã</h3>
            <p>{getFanLevel(userData)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Função para determinar o nível do fã
function getFanLevel(user) {
  if (user.generos.includes('FPS') && user.generos.includes('MOBA')) {
    return <span className="fan-level dedicated">Fã dedicado</span>;
  } else if (user.generos.includes('RPG')) {
    return <span className="fan-level casual">Fã casual</span>;
  }
  return <span className="fan-level newbie">Novato</span>;
}

export default Perfil;

import React, { useEffect, useState } from 'react';
import './estilos/redesSociais.css';

function RedesSociais() {
  const [userData, setUserData] = useState(null);
  const [conexoes, setConexoes] = useState({
    instagram: false,
    twitter: false,
    tiktok: false,
  });

  useEffect(() => {
    const storedData = localStorage.getItem('perfil');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }

    const conexoesSalvas = localStorage.getItem('conexoes');
    if (conexoesSalvas) {
      setConexoes(JSON.parse(conexoesSalvas));
    }
  }, []);

  const handleConectar = (rede) => {
    const novasConexoes = { ...conexoes, [rede]: true };
    setConexoes(novasConexoes);
    localStorage.setItem('conexoes', JSON.stringify(novasConexoes));
    if (rede === 'instagram') {
      window.open('https://www.instagram.com/furiagg/', '_blank');
    } else if(rede === 'twitter') {
      window.open('https://twitter.com/FURIA', '_blank');
    }
    else if(rede === 'tiktok') {
      window.open('https://www.tiktok.com/@furia', '_blank');
    }
  };


  const handleDesconectar = (rede) => {
    const novasConexoes = { ...conexoes, [rede]: false };
    setConexoes(novasConexoes);
    localStorage.setItem('conexoes', JSON.stringify(novasConexoes));
  };

  if (!userData) {
    return <div className="error-message">Nenhum dado encontrado. Por favor, complete o cadastro.</div>;
  }

  return (
    <div className="redes-page">
      <h2 className="redes-title">Conexões com Redes Sociais</h2>
      <div className="redes-list">
        {['instagram', 'twitter', 'tiktok'].map((rede) => (
          <div key={rede} className="rede-card">
            <h3>{rede.charAt(0).toUpperCase() + rede.slice(1)}</h3>
            {conexoes[rede] ? (
              <>
                <p className="conectado">✅ Conectado</p>
                <button
                  onClick={() => handleDesconectar(rede)}
                  className="btn-desconectar"
                >
                  Desvincular
                </button>
              </>
            ) : (
              <button
                onClick={() => handleConectar(rede)}
                className="btn-conectar"
              >
                Conectar
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="redes-links">
        <h4>Redes informadas no cadastro:</h4>
        <p>{userData.redes || 'Nenhuma'}</p>
      </div>
    </div>
  );
}

export default RedesSociais;

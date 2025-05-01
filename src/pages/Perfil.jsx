import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const conexoes = JSON.parse(localStorage.getItem('conexoes') || '{}');
  const preferencias = JSON.parse(localStorage.getItem('preferencias') || '{}');
  const documento = localStorage.getItem('documento');

  const calcularProgresso = () => {
    let progresso = 0;
  
    const dadosCompletos = userData?.nome && userData?.email && Array.isArray(userData?.generos) && userData.generos.length > 0;
    if (dadosCompletos) {
      progresso += 25;
      console.log('✓ Dados principais completos');
    } else {
      console.log('✗ Dados principais incompletos');
    }
  
    const redesConectadas = Object.values(conexoes).some((v) => v === true || v === 'true');
    if (redesConectadas) {
      progresso += 25;
      console.log('✓ Redes sociais conectadas');
    } else {
      console.log('✗ Nenhuma rede social conectada');
    }
  
    if (documento && documento.trim() !== '') {
      progresso += 25;
      console.log('✓ Documento enviado');
    } else {
      console.log('✗ Documento não encontrado');
    }
  
    const preferenciasValidas = (preferencias !== '');
    if (preferenciasValidas) {
      progresso += 25;
      console.log('✓ Preferências válidas');
    } else {
      console.log('✗ Preferências ausentes');
    }
  
    return progresso;
  };
  


  const progresso = calcularProgresso();

  let nivelClasse = '';
  if (progresso === 100) {
    nivelClasse = 'super';
  } else if (progresso >= 50) {
    nivelClasse = 'casual';
  } else {
    nivelClasse = 'novato';
  }

  const getFanLevel = () => {
    if (progresso === 100) {
      return <span className="fan-level fan-super">Super Fã</span>;
    } else if (progresso >= 50) {
      return <span className="fan-level fan-casual">Fã casual</span>;
    } else if (progresso > 0) {
      return <span className="fan-level fan-novato">Fã novato</span>;
    }
    return <span className="fan-level fan-novato">Novato</span>;
  };

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
        <img src="/logo-furia.jpg" alt="Logo FURIA" style={{ width: '50%' }} />
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

          <div className="progresso-container">
            <label>Progresso para virar Super Fã:</label>
            <div className="barra-externa">
              <div className="barra-interna" style={{ width: `${progresso}%`, backgroundColor: '#4169E1', borderRadius: '5px', paddingLeft: '8px', marginBlock: '5px'}}>
                {progresso}%
              </div>
            </div>
          </div>

          <div className={`perfil-nivel perfil-${nivelClasse}`}>
            <h3 className="nivel-title">Nível de Fã</h3>
            <p>{getFanLevel()}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/redes" className="btn-redes">Vincular Redes Sociais</Link>
            <Link to="/preferencias" className="btn-redes">Preferências de Conteúdo</Link>
            <Link to="/cadastro" className="btn-redes" style={{ background: '#F26A50' }}>Editar Cadastro</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

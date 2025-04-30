import { useEffect, useState } from 'react';
import './estilos/perfil.css';

function Perfil() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    // Recuperando os dados salvos no localStorage
    const dadosPerfil = JSON.parse(localStorage.getItem('perfil'));
    if (dadosPerfil) {
      setPerfil(dadosPerfil);
    }
  }, []);

  if (!perfil) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <div className="perfil-background">
      <div className="perfil-container">
        <h2>Perfil do Fã</h2>
        <div className="perfil-info">
          <p><strong>Nome:</strong> {perfil.nome}</p>
          <p><strong>Idade:</strong> {perfil.idade}</p>
          <p><strong>Gênero:</strong> {perfil.genero}</p>
          <p><strong>Time favorito da FURIA:</strong> {perfil.time}</p>
          <p><strong>Jogador favorito:</strong> {perfil.jogador}</p>
          <p><strong>Redes Sociais:</strong> {perfil.redes}</p>
          <p><strong>Gêneros de jogos favoritos:</strong> {perfil.generos.join(', ')}</p>
          <p><strong>Email:</strong> {perfil.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

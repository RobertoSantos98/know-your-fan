import React, { useState, useEffect } from 'react';
import './estilos/preferencias.css';
import { useNavigate } from 'react-router-dom';

function Preferencias() {
  const navigate = useNavigate(); 

  const [preferencias, setPreferencias] = useState({
    videos: false,
    memes: false,
    entrevistas: false,
    bastidores: false,
  });

  useEffect(() => {
    const preferenciasSalvas = localStorage.getItem('preferencias');
    if (preferenciasSalvas) {
      setPreferencias(JSON.parse(preferenciasSalvas));
    }
  }, []);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setPreferencias((prevState) => {
      const updatedPreferences = { ...prevState, [name]: checked };
      localStorage.setItem('preferencias', JSON.stringify(updatedPreferences));
      return updatedPreferences;
    });
  };

  const handleSalvar = () => {
    navigate('/perfil');
  }

  return (
    <div className="preferencias-page">
      <h2 className="preferencias-title">Escolha suas Preferências de Conteúdo</h2>
      <div className="preferencias-list">
        <label>
          <input
            type="checkbox"
            name="videos"
            checked={preferencias.videos}
            onChange={handleChange}
          />
          Vídeos
        </label>
        <label>
          <input
            type="checkbox"
            name="memes"
            checked={preferencias.memes}
            onChange={handleChange}
          />
          Memes
        </label>
        <label>
          <input
            type="checkbox"
            name="entrevistas"
            checked={preferencias.entrevistas}
            onChange={handleChange}
          />
          Entrevistas
        </label>
        <label>
          <input
            type="checkbox"
            name="bastidores"
            checked={preferencias.bastidores}
            onChange={handleChange}
          />
          Bastidores
        </label>
      </div>
      <button className="btn-salvar" onClick={handleSalvar}>Salvar Preferências</button>
    </div>
  );
}

export default Preferencias;

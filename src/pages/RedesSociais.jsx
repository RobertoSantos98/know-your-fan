import { useState } from 'react';
import './estilos/redesSociais.css';

function RedesSociais() {
  const [link, setLink] = useState('');
  const [analise, setAnalise] = useState('');

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const analisarLink = () => {
    if (link.includes('instagram') || link.includes('twitter')) {
      setAnalise('Link relevante para o fã!');
    } else {
      setAnalise('Link não relacionado ao fã.');
    }
  };

  return (
    <div className="redes-container">
      <h2>Integração com Redes Sociais</h2>
      <input
        type="text"
        placeholder="Cole seu link de rede social"
        value={link}
        onChange={handleLinkChange}
      />
      <button onClick={analisarLink}>Analisar Link</button>
      {analise && <p>{analise}</p>}
    </div>
  );
}

export default RedesSociais;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook para navegação
import './estilos/cadastro.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    genero: '',
    redes: '',
    time: '',
    jogador: '',
    generos: [],
    email: ''
  });

  const navigate = useNavigate(); // Hook de navegação

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'generos') {
      const updatedGeneros = formData.generos.includes(value)
        ? formData.generos.filter((genero) => genero !== value)
        : [...formData.generos, value];
      setFormData({ ...formData, generos: updatedGeneros });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Salvar os dados no localStorage
    localStorage.setItem('perfil', JSON.stringify(formData));

    // Redirecionar para a página de perfil
    navigate('/perfil');
  };

  return (
    <div className='cadastro-background'>
      <div className="cadastro-container">
        <h2>Cadastro do Fã</h2>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Gênero:
            <select
              name="genero"
              value={formData.genero}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="outro">Não me sinto confortável para responder</option>
            </select>
          </label>

          <label>
            Redes Sociais:
            <input
              type="text"
              name="redes"
              placeholder="Instagram, Twitter, etc."
              value={formData.redes}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Time favorito da FURIA:
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Jogador favorito:
            <input
              type="text"
              name="jogador"
              value={formData.jogador}
              onChange={handleInputChange}
            />
          </label>

          <fieldset>
            <legend>Gêneros de jogos favoritos:</legend>
            <label>
              <input
                type="checkbox"
                name="generos"
                value="FPS"
                checked={formData.generos.includes('FPS')}
                onChange={handleInputChange}
              /> FPS
            </label>
            <label>
              <input
                type="checkbox"
                name="generos"
                value="MOBA"
                checked={formData.generos.includes('MOBA')}
                onChange={handleInputChange}
              /> MOBA
            </label>
            <label>
              <input
                type="checkbox"
                name="generos"
                value="RPG"
                checked={formData.generos.includes('RPG')}
                onChange={handleInputChange}
              /> RPG
            </label>
            <label>
              <input
                type="checkbox"
                name="generos"
                value="Esportes"
                checked={formData.generos.includes('Esportes')}
                onChange={handleInputChange}
              /> Esportes
            </label>
          </fieldset>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;

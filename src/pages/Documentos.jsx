import { useState } from 'react';
import './estilos/documentos.css';

function Upload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // Simulando a validação do documento
      setStatus('Validando documento...');
      setTimeout(() => {
        setStatus('Documento validado com sucesso!');
      }, 2000);
    } else {
      setStatus('Nenhum arquivo selecionado.');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload de Documento</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Validar Documento</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Upload;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Preferencias from './pages/Preferencias';
// import Documentos from './pages/Documentos';
import RedesSociais from './pages/RedesSociais';
// import LinksEsports from './pages/LinksEsports';
import Perfil from './pages/Perfil';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/redes" element={<RedesSociais />} />
        <Route path="/preferencias" element={<Preferencias />} />
        {/* <Route path="/documentos" element={<Documentos />} />
        <Route path="/links" element={<LinksEsports />} /> */}
      </Routes>
    </>
  );
}

export default App;

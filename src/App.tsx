import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import HashcatCrash from './pages/writeups/HashcatCrash';
import PickleRick from './pages/writeups/PickleRick';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Rota da Página Inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rotas dos Write-ups */}
        <Route path="/writeup/crack-the-hash" element={<HashcatCrash />} />
        <Route path="/writeup/pickle-rick" element={<PickleRick />} />
        
        {/* Exemplo de futuro write-up */}
        {/* <Route path="/writeup/sql-injection" element={<SqlInjectionPage />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
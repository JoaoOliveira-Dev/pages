import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import HashcatCrash from './pages/writeups/HashcatCrash';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Rota da Página Inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rotas dos Write-ups */}
        <Route path="/writeup/hashcat-fix" element={<HashcatCrash />} />
        
        {/* Exemplo de futuro write-up */}
        {/* <Route path="/writeup/sql-injection" element={<SqlInjectionPage />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
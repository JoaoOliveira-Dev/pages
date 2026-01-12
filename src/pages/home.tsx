import { Link } from 'react-router-dom';
import { Badge } from '../components/WriteUpComponents';
import { Terminal } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Terminal className="text-green-500" size={40} />
            CTF Write-ups
          </h1>
          <p className="text-gray-500">Documentation of invasions and CTF resolutions.</p>
        </header>

        <div className="grid gap-4">
          {/* --- ITEM 1: Card do Write-up --- */}
          <Link to="/writeup/crack-the-hash" className="block group">
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  Crack the hash
                </h2>
                <div className="flex gap-2">
                  <Badge type="platform">TryHackMe</Badge>
                  <Badge type="medium">Easy</Badge>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Resolving Hashcat crash issues and escalating privileges via password cracking.
              </p>
              <div className="text-xs text-gray-500 font-mono">
                19 Dec 2025
              </div>
            </div>
          </Link>
          
          {/* Adicione novos cards aqui conforme for escrevendo */}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { WriteUpLayout, TerminalBlock } from '../../components/WriteUpComponents';

const HashcatCrash = () => {
  return (
    <WriteUpLayout 
      title="Quebrando Hashes Bcrypt"
      platform="TryHackMe"
      difficulty="Medium"
      date="19 Dez 2025"
    >
      <Link to="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 no-underline font-mono text-sm">
        <ArrowLeft size={16} className="mr-2" />
        Voltar para a lista
      </Link>

      {/* ... Todo o conteúdo do Write-up que fizemos antes ... */}
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. O Problema</h2>
      <p>Texto do writeup...</p>
      
      <TerminalBlock 
        command="hashcat -m 3200 -a 0 $2y$... rockyou.txt"
        output="Already an instance running on pid 1418"
      />
      
      {/* ... Restante do conteúdo ... */}

    </WriteUpLayout>
  );
};

export default HashcatCrash;
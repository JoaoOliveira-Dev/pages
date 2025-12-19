import { WriteUpLayout, TerminalBlock, Callout } from './components/WriteUpComponents';

function App() {
  return (
    <WriteUpLayout 
      title="Quebrando Hashes Bcrypt - Linux PrivEsc"
      platform="TryHackMe"
      difficulty="Medium"
      date="19 Dez 2025"
    >
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. O Problema</h2>
      <p className="mb-4">
        Ao tentar crackear o hash encontrado, o processo travou.
      </p>

      <TerminalBlock 
        command="hashcat -m 3200 -a 0 $2y$... rockyou.txt"
        output="Already an instance running on pid 1418"
      />

      <Callout type="warning" title="Processo Travado">
        É necessário matar o PID órfão antes de continuar.
      </Callout>

      <TerminalBlock 
        command="kill -9 1418" 
        title="root@kali:~ (Fix)"
      />

    </WriteUpLayout>
  );
}

export default App;
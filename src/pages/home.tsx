import { Terminal } from "lucide-react";
import WriteUpLinkCard from "../components/links/WriteUpLinkCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Terminal className="text-green-500" size={40} />
            CTF Write-ups
          </h1>
          <p className="text-gray-500">
            Documentation of invasions and CTF resolutions.
          </p>
        </header>

        <div className="grid gap-4">
          <WriteUpLinkCard
            to="/writeup/crack-the-hash"
            title="Crack the hash"
            platform="TryHackMe"
            difficulty="easy"
            description="A write-up on cracking various hash types using Hashcat."
            date="19 Dec 2025"
          />

          <WriteUpLinkCard
            to="/writeup/pickle-rick"
            title="Pickle Rick"
            platform="TryHackMe"
            difficulty="easy"
            description="A write-up on basic enumeration, tips and exploitation techniques in a CTF challenge."
            date="19 Dec 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

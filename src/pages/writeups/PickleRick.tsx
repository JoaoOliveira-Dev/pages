import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  WriteUpLayout,
  TerminalBlock,
  ExternalLink,
  Title,
} from "../../components/WriteUpComponents";

const PickleRick = () => {
  return (
    <WriteUpLayout
      title="Pickle Rick"
      platform="TryHackMe"
      difficulty="Easy"
      date="19 Dec 2025"
    >
      <Link
        to="/"
        className="flex items-center gap-2 text-green-500 hover:text-green-400"
      >
        <ArrowLeft size={20} />
        Back to Write-ups
      </Link>

      <Title>Pickle Rick</Title>
      <p className="text-gray-400">
        This Rick and Morty-themed challenge requires you to exploit a web
        server and find three ingredients to help Rick make his potion and
        transform himself back into a human from a pickle.
      </p>

      
    </WriteUpLayout>
  );
};

export default PickleRick;

import { Link } from 'react-router-dom';
import { Badge } from '../WriteUpComponents';

interface WriteUpLinkCardProps {
  to: string;
  title: string;
  platform: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  date: string;
}

export default function WriteUpLinkCard({
  to,
  title,
  platform,
  difficulty,
  description,
  date,
}: WriteUpLinkCardProps) {
  const difficultyLabel = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  return (
    <Link to={to} className="block group">
      <div className="rounded-lg border border-gray-700 bg-[#161b22] p-6 transition-colors hover:border-green-500">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h2 className="text-xl font-bold text-white transition-colors group-hover:text-green-400">
            {title}
          </h2>

          <div className="flex gap-2">
            <Badge type="platform">{platform}</Badge>
            <Badge type={difficulty}>{difficultyLabel}</Badge>
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-400">{description}</p>
        <div className="font-mono text-xs text-gray-500">{date}</div>
      </div>
    </Link>
  );
}
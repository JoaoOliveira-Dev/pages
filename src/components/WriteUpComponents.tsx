import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Terminal, Copy, Check, AlertTriangle, Info, ShieldAlert } from 'lucide-react';

// --- Interfaces (Tipagem) ---

interface BadgeProps {
  type: 'easy' | 'medium' | 'hard' | 'platform' | string;
  children: ReactNode;
}

interface TerminalBlockProps {
  command?: string;
  output?: string; // Opcional
  title?: string;  // Opcional
}

interface CalloutProps {
  type?: 'info' | 'warning' | 'danger';
  title?: string;
  children: ReactNode;
}

interface WriteUpLayoutProps {
  title: string;
  date: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane'; // Restringe os valores
  platform: string;
  children: ReactNode;
}

// --- Componentes ---

export const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  const colors: Record<string, string> = {
    easy: "bg-green-900 text-green-300 border-green-700",
    medium: "bg-yellow-900 text-yellow-300 border-yellow-700",
    hard: "bg-red-900 text-red-300 border-red-700",
    platform: "bg-blue-900 text-blue-300 border-blue-700",
  };

  // Fallback para uma cor padrão caso o tipo não exista no mapa
  const colorClass = colors[type.toLowerCase()] || colors.platform;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${colorClass}`}>
      {children}
    </span>
  );
};

export const TerminalBlock: React.FC<TerminalBlockProps> = ({
  command,
  output,
  title = "root@kali:~",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!command) return;
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700 bg-[#0d1117] shadow-xl font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-green-400" />
          <span className="text-gray-400 text-xs">{title}</span>
        </div>

        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          title="Copiar comando"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      <div className="p-4 overflow-x-auto">
        {/* Command */}
        <div className="flex gap-2 mb-3">
          <span className="text-green-500 font-bold">└─#</span>
          <span className="text-gray-100">{command}</span>
        </div>

        {/* Output */}
        {output && (
          <pre className="text-gray-400 mt-2 pl-4 border-l-2 border-gray-700 overflow-x-auto">
{output}
          </pre>
        )}
      </div>
    </div>
  );
};


export const Callout: React.FC<CalloutProps> = ({ type = "info", title, children }) => {
  const styles = {
    info: { border: "border-blue-500", bg: "bg-blue-900/20", icon: <Info size={20} className="text-blue-400" /> },
    warning: { border: "border-yellow-500", bg: "bg-yellow-900/20", icon: <AlertTriangle size={20} className="text-yellow-400" /> },
    danger: { border: "border-red-500", bg: "bg-red-900/20", icon: <ShieldAlert size={20} className="text-red-400" /> },
  };

  const style = styles[type];

  return (
    <div className={`my-6 p-4 rounded-r-lg border-l-4 ${style.border} ${style.bg}`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">{style.icon}</div>
        <div>
          {title && <h4 className="font-bold text-gray-200 mb-1">{title}</h4>}
          <div className="text-gray-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WriteUpLayout: React.FC<WriteUpLayoutProps> = ({ title, date, difficulty, platform, children }) => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans selection:bg-green-900 selection:text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-12 border-b border-gray-800 pb-8">
          <div className="flex gap-2 mb-4">
            <Badge type="platform">{platform}</Badge>
            <Badge type={difficulty.toLowerCase()}>{difficulty}</Badge>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-500 text-sm">Published in: {date}</p>
        </header>
        <article className="prose prose-invert max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
};

export const LinkButton: React.FC<{ to: string; children: ReactNode }> = ({ to, children }) => {
  return (
    <a
      href={to}
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
    >
      {children}
    </a>
  );
}

export const ExternalLink: React.FC<{ to: string; children: ReactNode }> = ({ to, children }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-300"
    >
      {children}
    </a>
  );
}

export const Title: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
  );
}


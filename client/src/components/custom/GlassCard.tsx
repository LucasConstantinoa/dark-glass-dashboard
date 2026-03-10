import React from "react";
import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  neonColor?: "cyan" | "magenta" | "green" | "purple" | "blue";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * GlassCard - Componente premium com glassmorphism
 * Design: Dark Glass Cyberpunk Neon
 * - Fundo semi-transparente com backdrop blur
 * - Borders com gradientes neon
 * - Efeitos de glow no hover
 * - Animações fluidas
 */

export const GlassCard: React.FC<GlassCardProps> = ({
  title,
  description,
  icon: Icon,
  neonColor = "cyan",
  children,
  onClick,
  className = "",
}) => {
  const neonColorMap = {
    cyan: {
      bg: "from-cyan-500/20 to-cyan-500/10",
      text: "text-cyan-400",
      glow: "neon-glow-cyan",
      border: "hover:border-cyan-500/50",
    },
    magenta: {
      bg: "from-magenta-500/20 to-magenta-500/10",
      text: "text-magenta-400",
      glow: "neon-glow-magenta",
      border: "hover:border-magenta-500/50",
    },
    green: {
      bg: "from-green-500/20 to-green-500/10",
      text: "text-green-400",
      glow: "neon-glow-green",
      border: "hover:border-green-500/50",
    },
    purple: {
      bg: "from-purple-500/20 to-purple-500/10",
      text: "text-purple-400",
      glow: "neon-glow-purple",
      border: "hover:border-purple-500/50",
    },
    blue: {
      bg: "from-blue-500/20 to-blue-500/10",
      text: "text-blue-400",
      glow: "neon-glow-blue",
      border: "hover:border-blue-500/50",
    },
  };

  const colors = neonColorMap[neonColor];

  return (
    <div
      onClick={onClick}
      className={`
        glass-card p-6 rounded-xl group cursor-pointer
        backdrop-blur-xl bg-card/10 border border-border/30
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl
        ${colors.border}
        ${className}
      `}
      style={{
        background: `linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(255, 0, 110, 0.03) 100%)`,
        boxShadow: "0 8px 32px rgba(0, 217, 255, 0.1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = `0 12px 48px rgba(0, 217, 255, 0.25), 0 0 20px rgba(255, 0, 110, 0.15)`;
        el.style.background = `linear-gradient(135deg, rgba(0, 217, 255, 0.12) 0%, rgba(255, 0, 110, 0.08) 100%)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 8px 32px rgba(0, 217, 255, 0.1)";
        el.style.background = `linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(255, 0, 110, 0.03) 100%)`;
      }}
    >
      {Icon && (
        <div className={`p-3 rounded-lg bg-gradient-to-br ${colors.bg} mb-4 w-fit`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
      )}

      <h3 className={`text-lg font-display font-bold text-white mb-2 ${colors.glow}`}>
        {title}
      </h3>

      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {children}
    </div>
  );
};

export default GlassCard;

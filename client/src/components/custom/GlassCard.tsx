import React from "react";
import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  neonColor?: "cyan" | "magenta" | "green" | "purple" | "amber";
  size?: "sm" | "md" | "lg";
  badge?: string;
  value?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * GlassCard — Premium Multi-Layer Glassmorphism Component
 * Cyberpunk Neon Design System
 *
 * Features:
 * - Multi-layer backdrop blur with noise texture overlay
 * - Corner decoration with neon glow
 * - Shimmer sweep on hover
 * - Pulsing icon ring
 * - Badge + value display props
 * - Size variants: sm / md / lg
 */

const neonColorMap = {
  cyan: {
    hex: "#00D9FF",
    rgb: "0,217,255",
    text: "text-[#00D9FF]",
    bg: "rgba(0,217,255,0.1)",
    border: "rgba(0,217,255,0.25)",
    borderHover: "rgba(0,217,255,0.5)",
    glow: "0 0 8px rgba(0,217,255,0.7), 0 0 20px rgba(0,217,255,0.4)",
    boxGlow: "0 0 20px rgba(0,217,255,0.2)",
    tag: "rgba(0,217,255,0.12)",
    tagText: "#00D9FF",
    tagBorder: "rgba(0,217,255,0.3)",
    gradient: "linear-gradient(135deg, #00D9FF, #0099FF)",
  },
  magenta: {
    hex: "#FF006E",
    rgb: "255,0,110",
    text: "text-[#FF006E]",
    bg: "rgba(255,0,110,0.1)",
    border: "rgba(255,0,110,0.25)",
    borderHover: "rgba(255,0,110,0.5)",
    glow: "0 0 8px rgba(255,0,110,0.7), 0 0 20px rgba(255,0,110,0.4)",
    boxGlow: "0 0 20px rgba(255,0,110,0.2)",
    tag: "rgba(255,0,110,0.12)",
    tagText: "#FF006E",
    tagBorder: "rgba(255,0,110,0.3)",
    gradient: "linear-gradient(135deg, #FF006E, #FF4499)",
  },
  green: {
    hex: "#39FF14",
    rgb: "57,255,20",
    text: "text-[#39FF14]",
    bg: "rgba(57,255,20,0.1)",
    border: "rgba(57,255,20,0.25)",
    borderHover: "rgba(57,255,20,0.5)",
    glow: "0 0 8px rgba(57,255,20,0.7), 0 0 20px rgba(57,255,20,0.4)",
    boxGlow: "0 0 20px rgba(57,255,20,0.2)",
    tag: "rgba(57,255,20,0.12)",
    tagText: "#39FF14",
    tagBorder: "rgba(57,255,20,0.3)",
    gradient: "linear-gradient(135deg, #39FF14, #00FF88)",
  },
  purple: {
    hex: "#B366FF",
    rgb: "179,102,255",
    text: "text-[#B366FF]",
    bg: "rgba(179,102,255,0.1)",
    border: "rgba(179,102,255,0.25)",
    borderHover: "rgba(179,102,255,0.5)",
    glow: "0 0 8px rgba(179,102,255,0.7), 0 0 20px rgba(179,102,255,0.4)",
    boxGlow: "0 0 20px rgba(179,102,255,0.2)",
    tag: "rgba(179,102,255,0.12)",
    tagText: "#B366FF",
    tagBorder: "rgba(179,102,255,0.3)",
    gradient: "linear-gradient(135deg, #B366FF, #8833FF)",
  },
  amber: {
    hex: "#FFB800",
    rgb: "255,184,0",
    text: "text-[#FFB800]",
    bg: "rgba(255,184,0,0.1)",
    border: "rgba(255,184,0,0.25)",
    borderHover: "rgba(255,184,0,0.5)",
    glow: "0 0 8px rgba(255,184,0,0.7), 0 0 20px rgba(255,184,0,0.4)",
    boxGlow: "0 0 20px rgba(255,184,0,0.2)",
    tag: "rgba(255,184,0,0.12)",
    tagText: "#FFB800",
    tagBorder: "rgba(255,184,0,0.3)",
    gradient: "linear-gradient(135deg, #FFB800, #FF8800)",
  },
};

const sizeMap = {
  sm: {
    padding: "p-4",
    icon: "w-4 h-4",
    iconWrap: "p-2.5",
    title: "text-base",
    desc: "text-xs",
    value: "text-2xl",
  },
  md: {
    padding: "p-6",
    icon: "w-5 h-5",
    iconWrap: "p-3",
    title: "text-lg",
    desc: "text-sm",
    value: "text-3xl",
  },
  lg: {
    padding: "p-8",
    icon: "w-6 h-6",
    iconWrap: "p-4",
    title: "text-xl",
    desc: "text-base",
    value: "text-4xl",
  },
};

export const GlassCard: React.FC<GlassCardProps> = ({
  title,
  description,
  icon: Icon,
  neonColor = "cyan",
  size = "md",
  badge,
  value,
  children,
  onClick,
  className = "",
}) => {
  const c = neonColorMap[neonColor];
  const s = sizeMap[size];

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = c.borderHover;
    el.style.boxShadow = `
      0 8px 40px rgba(0,0,0,0.5),
      0 0 30px rgba(${c.rgb},0.18),
      0 0 60px rgba(${c.rgb},0.06),
      0 1px 0 rgba(255,255,255,0.06) inset
    `;
    el.style.transform = "translateY(-4px) scale(1.005)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = "rgba(0,217,255,0.15)";
    el.style.boxShadow = `
      0 4px 16px rgba(0,0,0,0.4),
      0 1px 0 rgba(255,255,255,0.04) inset
    `;
    el.style.transform = "translateY(0) scale(1)";
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`glass-card glass-shimmer relative ${s.padding} cursor-pointer ${className}`}
      style={{
        transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Badge */}
      {badge && (
        <span
          className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full mb-4"
          style={{
            background: c.tag,
            color: c.tagText,
            border: `1px solid ${c.tagBorder}`,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {badge}
        </span>
      )}

      {/* Icon + Value row */}
      {(Icon || value) && (
        <div className="flex items-start justify-between mb-4">
          {Icon && (
            <div className="relative">
              {/* Pulsing glow ring */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: c.boxGlow,
                  animation: "neon-pulse 2.5s ease-in-out infinite",
                }}
              />
              <div
                className={`relative ${s.iconWrap} rounded-xl`}
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                }}
              >
                <Icon className={`${s.icon} ${c.text}`} />
              </div>
            </div>
          )}
          {value && (
            <span
              className={`${s.value} font-bold text-white`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                textShadow: c.glow,
              }}
            >
              {value}
            </span>
          )}
        </div>
      )}

      {/* Title */}
      <h3
        className={`${s.title} font-bold text-white mb-2`}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          textShadow: c.glow,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`${s.desc} text-slate-400 leading-relaxed`}
        style={{
          fontFamily: "'Inter', sans-serif",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>

      {/* Children slot */}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default GlassCard;

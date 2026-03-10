import React from "react";

interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  neonColor?: "cyan" | "magenta" | "green";
  children: React.ReactNode;
}

/**
 * NeonButton - Botão com efeito neon
 * Design: Dark Glass Cyberpunk Neon
 * - Cores neon vibrantes
 * - Efeito de glow no hover
 * - Animações fluidas
 */

export const NeonButton: React.FC<NeonButtonProps> = ({
  variant = "primary",
  size = "md",
  neonColor = "cyan",
  children,
  className = "",
  ...props
}) => {
  const sizeMap = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantMap = {
    primary: {
      cyan: "bg-cyan-500 hover:bg-cyan-600 text-slate-900 shadow-lg hover:shadow-cyan-500/50",
      magenta:
        "bg-magenta-500 hover:bg-magenta-600 text-white shadow-lg hover:shadow-magenta-500/50",
      green:
        "bg-green-500 hover:bg-green-600 text-slate-900 shadow-lg hover:shadow-green-500/50",
    },
    secondary: {
      cyan: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400",
      magenta:
        "bg-magenta-500/20 hover:bg-magenta-500/30 text-magenta-400 border border-magenta-500/50 hover:border-magenta-400",
      green:
        "bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 hover:border-green-400",
    },
    outline: {
      cyan: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30",
      magenta:
        "border-2 border-magenta-500 text-magenta-400 hover:bg-magenta-500/10 hover:shadow-lg hover:shadow-magenta-500/30",
      green:
        "border-2 border-green-500 text-green-400 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/30",
    },
  };

  const styles = variantMap[variant][neonColor];

  return (
    <button
      className={`
        font-bold rounded-lg transition-all duration-300 ease-out
        ${sizeMap[size]}
        ${styles}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;

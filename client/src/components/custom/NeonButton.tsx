import React, { useState } from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  neonColor?: "cyan" | "magenta" | "green" | "purple";
  loading?: boolean;
  children: React.ReactNode;
}

/**
 * NeonButton — Cyberpunk Premium Button
 * Features:
 * - Shimmer sweep animation on hover
 * - gradient variant (cyan → magenta)
 * - Loading state with neon spinner
 * - Glow spread on hover per color
 * - Four variants: primary / secondary / outline / gradient
 */

const colorConfig = {
  cyan: {
    hex: "#00D9FF",
    rgb: "0,217,255",
    primary: {
      bg: "linear-gradient(135deg, #00D9FF, #0099FF)",
      text: "#060610",
      shadow: "0 0 20px rgba(0,217,255,0.35)",
      shadowHover:
        "0 0 40px rgba(0,217,255,0.55), 0 8px 24px rgba(0,217,255,0.2)",
    },
    secondary: {
      bg: "rgba(0,217,255,0.1)",
      border: "rgba(0,217,255,0.35)",
      text: "#00D9FF",
      bgHover: "rgba(0,217,255,0.18)",
      borderHover: "rgba(0,217,255,0.6)",
      shadow: "0 0 12px rgba(0,217,255,0.15)",
      shadowHover: "0 0 25px rgba(0,217,255,0.3)",
    },
    outline: {
      bg: "transparent",
      border: "#00D9FF",
      text: "#00D9FF",
      bgHover: "rgba(0,217,255,0.08)",
      shadow: "none",
      shadowHover:
        "0 0 20px rgba(0,217,255,0.25), inset 0 0 15px rgba(0,217,255,0.05)",
    },
  },
  magenta: {
    hex: "#FF006E",
    rgb: "255,0,110",
    primary: {
      bg: "linear-gradient(135deg, #FF006E, #FF4499)",
      text: "#ffffff",
      shadow: "0 0 20px rgba(255,0,110,0.35)",
      shadowHover:
        "0 0 40px rgba(255,0,110,0.55), 0 8px 24px rgba(255,0,110,0.2)",
    },
    secondary: {
      bg: "rgba(255,0,110,0.1)",
      border: "rgba(255,0,110,0.35)",
      text: "#FF006E",
      bgHover: "rgba(255,0,110,0.18)",
      borderHover: "rgba(255,0,110,0.6)",
      shadow: "0 0 12px rgba(255,0,110,0.15)",
      shadowHover: "0 0 25px rgba(255,0,110,0.3)",
    },
    outline: {
      bg: "transparent",
      border: "#FF006E",
      text: "#FF006E",
      bgHover: "rgba(255,0,110,0.08)",
      shadow: "none",
      shadowHover:
        "0 0 20px rgba(255,0,110,0.25), inset 0 0 15px rgba(255,0,110,0.05)",
    },
  },
  green: {
    hex: "#39FF14",
    rgb: "57,255,20",
    primary: {
      bg: "linear-gradient(135deg, #39FF14, #00FF88)",
      text: "#060610",
      shadow: "0 0 20px rgba(57,255,20,0.35)",
      shadowHover:
        "0 0 40px rgba(57,255,20,0.55), 0 8px 24px rgba(57,255,20,0.2)",
    },
    secondary: {
      bg: "rgba(57,255,20,0.1)",
      border: "rgba(57,255,20,0.35)",
      text: "#39FF14",
      bgHover: "rgba(57,255,20,0.18)",
      borderHover: "rgba(57,255,20,0.6)",
      shadow: "0 0 12px rgba(57,255,20,0.15)",
      shadowHover: "0 0 25px rgba(57,255,20,0.3)",
    },
    outline: {
      bg: "transparent",
      border: "#39FF14",
      text: "#39FF14",
      bgHover: "rgba(57,255,20,0.08)",
      shadow: "none",
      shadowHover:
        "0 0 20px rgba(57,255,20,0.25), inset 0 0 15px rgba(57,255,20,0.05)",
    },
  },
  purple: {
    hex: "#B366FF",
    rgb: "179,102,255",
    primary: {
      bg: "linear-gradient(135deg, #B366FF, #8833FF)",
      text: "#ffffff",
      shadow: "0 0 20px rgba(179,102,255,0.35)",
      shadowHover:
        "0 0 40px rgba(179,102,255,0.55), 0 8px 24px rgba(179,102,255,0.2)",
    },
    secondary: {
      bg: "rgba(179,102,255,0.1)",
      border: "rgba(179,102,255,0.35)",
      text: "#B366FF",
      bgHover: "rgba(179,102,255,0.18)",
      borderHover: "rgba(179,102,255,0.6)",
      shadow: "0 0 12px rgba(179,102,255,0.15)",
      shadowHover: "0 0 25px rgba(179,102,255,0.3)",
    },
    outline: {
      bg: "transparent",
      border: "#B366FF",
      text: "#B366FF",
      bgHover: "rgba(179,102,255,0.08)",
      shadow: "none",
      shadowHover:
        "0 0 20px rgba(179,102,255,0.25), inset 0 0 15px rgba(179,102,255,0.05)",
    },
  },
};

const sizeMap = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export const NeonButton: React.FC<NeonButtonProps> = ({
  variant = "primary",
  size = "md",
  neonColor = "cyan",
  loading = false,
  children,
  className = "",
  disabled,
  style,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const c = colorConfig[neonColor];
  const s = sizeMap[size];
  const isDisabled = disabled || loading;

  const getStyle = (): React.CSSProperties => {
    if (variant === "gradient") {
      return {
        background: hovered
          ? "linear-gradient(135deg, #00D9FF 0%, #B366FF 50%, #FF006E 100%)"
          : "linear-gradient(135deg, #00D9FF 0%, #FF006E 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 3s ease infinite",
        color: "#ffffff",
        boxShadow: hovered
          ? "0 0 50px rgba(0,217,255,0.35), 0 0 30px rgba(255,0,110,0.2)"
          : "0 0 25px rgba(0,217,255,0.2)",
        border: "none",
      };
    }

    if (variant === "primary") {
      const p = c.primary;
      return {
        background: p.bg,
        color: p.text,
        boxShadow: hovered ? p.shadowHover : p.shadow,
        border: "none",
      };
    }

    if (variant === "secondary") {
      const sec = c.secondary;
      return {
        background: hovered ? sec.bgHover : sec.bg,
        color: sec.text,
        border: `1px solid ${hovered ? sec.borderHover : sec.border}`,
        boxShadow: hovered ? sec.shadowHover : sec.shadow,
      };
    }

    // outline
    const out = c.outline;
    return {
      background: hovered ? out.bgHover : out.bg,
      color: out.text,
      border: `1.5px solid ${out.border}`,
      boxShadow: hovered ? out.shadowHover : out.shadow,
    };
  };

  return (
    <button
      disabled={isDisabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative inline-flex items-center justify-center font-bold rounded-xl
        overflow-hidden select-none
        transition-all duration-300 ease-out
        ${s}
        ${hovered && !isDisabled ? "scale-105" : "scale-100"}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: "-0.01em",
        ...getStyle(),
        ...style,
      }}
      {...props}
    >
      {/* Shimmer sweep overlay */}
      {!isDisabled && (
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)",
            transform: hovered ? "translateX(150%)" : "translateX(-150%)",
            transition: "transform 500ms ease",
            skewX: "-15deg",
          }}
        />
      )}

      {/* Loading spinner */}
      {loading ? (
        <>
          <svg
            className="w-4 h-4 animate-spin shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Carregando...</span>
        </>
      ) : (
        <span className="relative">{children}</span>
      )}
    </button>
  );
};

export default NeonButton;

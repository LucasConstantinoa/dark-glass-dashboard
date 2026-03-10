import { useLocation } from "wouter";
import { Home, AlertTriangle } from "lucide-react";
import { NeonButton } from "@/components/custom/NeonButton";

/**
 * NotFound — 404 Page aligned with Cyberpunk Dark Theme
 * Matches the same glass + neon aesthetic as the rest of the app.
 */

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.06 0.012 280) 0%, oklch(0.08 0.015 290) 50%, oklch(0.06 0.012 280) 100%)",
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,217,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated blobs */}
      <div
        className="absolute top-[-15%] left-[10%] w-[500px] h-[500px] rounded-full animate-blob-1"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-[-15%] right-[10%] w-[450px] h-[450px] rounded-full animate-blob-2"
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,110,0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in-up">
        <div className="glass-card p-10 text-center">
          {/* Animated icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Outer glow ring — animated pulse */}
              <div
                className="absolute inset-0 rounded-2xl animate-neon-pulse"
                style={{
                  background: "rgba(0,217,255,0.06)",
                  boxShadow:
                    "0 0 20px rgba(0,217,255,0.3), 0 0 40px rgba(0,217,255,0.15)",
                }}
              />
              <div
                className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,217,255,0.12) 0%, rgba(255,0,110,0.08) 100%)",
                  border: "1px solid rgba(0,217,255,0.3)",
                }}
              >
                <AlertTriangle
                  className="w-12 h-12 animate-float"
                  style={{ color: "#00D9FF" }}
                />
              </div>
            </div>
          </div>

          {/* 404 headline */}
          <div className="mb-3">
            <span
              className="text-8xl font-bold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background:
                  "linear-gradient(135deg, #00D9FF 0%, #B366FF 50%, #FF006E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}
            >
              404
            </span>
          </div>

          <h2
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Página não encontrada
          </h2>

          <p
            className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A rota que você está tentando acessar não existe ou foi movida.
            Verifique o endereço ou retorne à página inicial.
          </p>

          {/* Divider */}
          <div
            className="h-px w-full mb-8 animate-gradient-shift"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,217,255,0.4), rgba(179,102,255,0.4), transparent)",
              backgroundSize: "200% auto",
            }}
          />

          {/* CTA */}
          <NeonButton
            variant="primary"
            size="md"
            neonColor="cyan"
            onClick={() => setLocation("/")}
            className="w-full justify-center"
          >
            <Home className="w-4 h-4 mr-2 inline-block" />
            Voltar ao início
          </NeonButton>

          {/* Error code badge */}
          <div className="mt-6 flex justify-center">
            <span
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,0,110,0.08)",
                border: "1px solid rgba(255,0,110,0.2)",
                color: "rgba(255,0,110,0.7)",
                fontFamily: "'Inter', monospace",
              }}
            >
              ERROR_CODE: 404 — NOT_FOUND
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

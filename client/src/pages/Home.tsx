import {
  BarChart3,
  Zap,
  TrendingUp,
  Target,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Shield,
  Cpu,
  Globe,
  ChevronRight,
  Star,
  Users,
  Activity,
} from "lucide-react";

/**
 * GLASS.AI — Cyberpunk Premium Landing Page
 * Design System: Space Grotesk (display) + Inter (body)
 * Glassmorphism multi-layer, animated blobs, grid background,
 * micro-interactions, stats, trust badges.
 */

export default function Home() {
  const metrics = [
    {
      title: "Performance",
      value: "98.5%",
      change: "+12.5%",
      progress: 98,
      icon: TrendingUp,
      color: "cyan",
      description: "Uptime garantido",
      sparkline: [40, 55, 48, 62, 71, 68, 85, 90, 88, 98],
    },
    {
      title: "Conversões",
      value: "2,847",
      change: "+23.1%",
      progress: 72,
      icon: Target,
      color: "magenta",
      description: "Este mês",
      sparkline: [20, 35, 28, 45, 52, 60, 55, 68, 72, 80],
    },
    {
      title: "Engajamento",
      value: "4.2x",
      change: "+15.3%",
      progress: 84,
      icon: Zap,
      color: "green",
      description: "Taxa de retorno",
      sparkline: [30, 42, 38, 55, 60, 58, 70, 75, 80, 84],
    },
    {
      title: "Crescimento",
      value: "156%",
      change: "+8.2%",
      progress: 91,
      icon: BarChart3,
      color: "purple",
      description: "Ano a ano",
      sparkline: [50, 58, 62, 70, 75, 80, 78, 85, 88, 91],
    },
  ];

  const features = [
    {
      num: "01",
      title: "Glassmorphism Premium",
      description:
        "Multi-layer glass com noise texture, corner decorations e profundidade real. Backdrop blur com saturação amplificada para máximo impacto visual.",
      icon: Sparkles,
      badge: "CSS Advanced",
      tagColor: "cyan",
    },
    {
      num: "02",
      title: "Neon Design System",
      description:
        "Paleta de 5 cores neon (cyan, magenta, verde, purple, amber) com variáveis CSS e tokens de superfície em camadas para hierarquia visual.",
      icon: Zap,
      badge: "Design Tokens",
      tagColor: "magenta",
    },
    {
      num: "03",
      title: "Animações 60fps",
      description:
        "Keyframes custom (float, shimmer, blob, scan-line, border-rotate) com cubic-bezier otimizado para GPU. Zero jank garantido.",
      icon: Activity,
      badge: "Performance",
      tagColor: "green",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA", icon: Shield },
    { value: "12ms", label: "Latência P99", icon: Cpu },
    { value: "140+", label: "Países", icon: Globe },
    { value: "50k+", label: "Usuários ativos", icon: Users },
  ];

  const colorMap: Record<
    string,
    {
      text: string;
      bg: string;
      border: string;
      glow: string;
      progress: string;
      tag: string;
    }
  > = {
    cyan: {
      text: "text-[#00D9FF]",
      bg: "bg-[#00D9FF]/10",
      border: "border-[#00D9FF]/30",
      glow: "neon-glow-cyan",
      progress: "bg-gradient-to-r from-[#00D9FF] to-[#0099FF]",
      tag: "bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30",
    },
    magenta: {
      text: "text-[#FF006E]",
      bg: "bg-[#FF006E]/10",
      border: "border-[#FF006E]/30",
      glow: "neon-glow-magenta",
      progress: "bg-gradient-to-r from-[#FF006E] to-[#FF4499]",
      tag: "bg-[#FF006E]/15 text-[#FF006E] border border-[#FF006E]/30",
    },
    green: {
      text: "text-[#39FF14]",
      bg: "bg-[#39FF14]/10",
      border: "border-[#39FF14]/30",
      glow: "neon-glow-green",
      progress: "bg-gradient-to-r from-[#39FF14] to-[#00FF88]",
      tag: "bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/30",
    },
    purple: {
      text: "text-[#B366FF]",
      bg: "bg-[#B366FF]/10",
      border: "border-[#B366FF]/30",
      glow: "neon-glow-purple",
      progress: "bg-gradient-to-r from-[#B366FF] to-[#8833FF]",
      tag: "bg-[#B366FF]/15 text-[#B366FF] border border-[#B366FF]/30",
    },
  };

  return (
    <div
      className="min-h-screen scan-lines"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.06 0.012 280) 0%, oklch(0.08 0.015 290) 50%, oklch(0.06 0.012 280) 100%)",
      }}
    >
      {/* ── Animated Background ────────────────────── */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        {/* CSS Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,217,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Animated blobs */}
        <div
          className="absolute top-[-10%] left-[5%] w-[600px] h-[600px] rounded-full animate-blob-1"
          style={{
            background:
              "radial-gradient(circle, rgba(0,217,255,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[700px] h-[700px] rounded-full animate-blob-2"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,110,0.10) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full animate-blob-3"
          style={{
            background:
              "radial-gradient(circle, rgba(179,102,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Navbar ─────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(6, 6, 14, 0.75)",
          backdropFilter: "blur(24px) saturate(180%)",
          borderColor: "rgba(0, 217, 255, 0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,217,255,0.2), rgba(179,102,255,0.2))",
                  border: "1px solid rgba(0,217,255,0.3)",
                  boxShadow: "0 0 20px rgba(0,217,255,0.15)",
                }}
              >
                <Sparkles className="w-5 h-5 text-[#00D9FF]" />
              </div>
              {/* Live status ring */}
              <div className="absolute -top-1 -right-1 flex items-center gap-1">
                <div className="status-dot-live" />
              </div>
            </div>
            <div>
              <span
                className="font-display text-lg font-bold text-white tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                GLASS<span className="text-[#00D9FF]">.AI</span>
              </span>
            </div>
            {/* Version badge */}
            <span
              className="hidden sm:flex text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(0,217,255,0.1)",
                border: "1px solid rgba(0,217,255,0.25)",
                color: "#00D9FF",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              v2.0
            </span>
          </div>

          {/* Nav links + CTA */}
          <div className="flex items-center gap-1 sm:gap-2">
            {["Docs", "Pricing", "Blog"].map(item => (
              <a
                key={item}
                href="#"
                className="hidden md:block px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </a>
            ))}
            <button
              className="relative ml-2 px-4 py-2 text-sm font-semibold text-slate-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00D9FF, #0099FF)",
                boxShadow: "0 0 20px rgba(0,217,255,0.3)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Get Started
              <ChevronRight className="inline-block w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* NEW badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium delay-100 animate-fade-in-up"
            style={{
              background: "rgba(0,217,255,0.08)",
              border: "1px solid rgba(0,217,255,0.25)",
              color: "#00D9FF",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-neon-pulse"
              style={{ background: "#00D9FF" }}
            />
            Novo: Design System 2.0 disponível agora
            <ArrowRight className="w-3.5 h-3.5" />
          </div>

          {/* Main headline */}
          <div className="space-y-2 delay-200 animate-fade-in-up">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <span className="text-white">Premium</span>{" "}
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #00D9FF 0%, #B366FF 50%, #FF006E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Glass
              </span>
              <br />
              <span className="text-white">Design</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #39FF14, #00D9FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                System
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed delay-300 animate-fade-in-up"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experiência visual cyberpunk com glassmorphism multi-layer, cores
            neon vibrantes e animações fluidas a 60fps. Construído com React +
            TypeScript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-2 delay-400 animate-fade-in-up">
            <button
              className="group relative flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #00D9FF, #0099FF)",
                color: "#060610",
                boxShadow: "0 0 30px rgba(0,217,255,0.3)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 50px rgba(0,217,255,0.5), 0 8px 32px rgba(0,217,255,0.2)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px rgba(0,217,255,0.3)";
              }}
            >
              {/* Shimmer sweep */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                }}
              />
              <span className="relative">Explorar Agora</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              className="flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,0,110,0.08)",
                border: "1px solid rgba(255,0,110,0.35)",
                color: "#FF006E",
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: "0 0 20px rgba(255,0,110,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,0,110,0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px rgba(255,0,110,0.2)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,0,110,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px rgba(255,0,110,0.08)";
              }}
            >
              Ver Demo
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 delay-500 animate-fade-in-up">
            {[
              { value: "50k+", label: "Usuários" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9★", label: "Rating" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "linear-gradient(135deg, #00D9FF, #B366FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs text-slate-500 mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics Grid ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="h-px flex-1"
            style={{ background: "rgba(0,217,255,0.15)" }}
          />
          <span
            className="text-xs font-medium tracking-widest text-slate-500 uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Live Metrics
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "rgba(0,217,255,0.15)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            const c = colorMap[metric.color];

            return (
              <div
                key={idx}
                className="glass-card glass-shimmer p-6 cursor-pointer"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Icon + Trend */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`relative p-3 rounded-xl ${c.bg}`}
                    style={{
                      border: `1px solid ${c.border.replace("border-", "").replace("/30", "").replace("[", "").replace("]", "")}`,
                    }}
                  >
                    {/* Glow ring */}
                    <div
                      className="absolute inset-0 rounded-xl animate-neon-pulse opacity-50"
                      style={{
                        boxShadow: `0 0 12px ${metric.color === "cyan" ? "rgba(0,217,255,0.4)" : metric.color === "magenta" ? "rgba(255,0,110,0.4)" : metric.color === "green" ? "rgba(57,255,20,0.4)" : "rgba(179,102,255,0.4)"}`,
                      }}
                    />
                    <Icon className={`relative w-5 h-5 ${c.text}`} />
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.tag}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {metric.change}
                  </span>
                </div>

                {/* Label */}
                <p
                  className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {metric.title}
                </p>

                {/* Value */}
                <p
                  className={`text-3xl font-bold text-white mb-0.5 ${c.glow}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {metric.value}
                </p>

                <p
                  className="text-xs text-slate-500 mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {metric.description}
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className={`h-full rounded-full ${c.progress} transition-all duration-1000`}
                      style={{
                        width: `${metric.progress}%`,
                        boxShadow: `0 0 8px ${metric.color === "cyan" ? "rgba(0,217,255,0.6)" : metric.color === "magenta" ? "rgba(255,0,110,0.6)" : metric.color === "green" ? "rgba(57,255,20,0.6)" : "rgba(179,102,255,0.6)"}`,
                      }}
                    />
                  </div>
                  {/* Sparkline (CSS-based mini chart) */}
                  <div className="flex items-end gap-0.5 h-6 mt-2">
                    {metric.sparkline.map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm transition-all duration-300 hover:opacity-100`}
                        style={{
                          height: `${(h / 100) * 100}%`,
                          background:
                            i === metric.sparkline.length - 1
                              ? metric.color === "cyan"
                                ? "#00D9FF"
                                : metric.color === "magenta"
                                  ? "#FF006E"
                                  : metric.color === "green"
                                    ? "#39FF14"
                                    : "#B366FF"
                              : "rgba(255,255,255,0.12)",
                          opacity: 0.6 + (i / metric.sparkline.length) * 0.4,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Trust Stats ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center space-y-2">
                <div className="flex justify-center mb-2">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{
                      background: "rgba(0,217,255,0.08)",
                      border: "1px solid rgba(0,217,255,0.2)",
                    }}
                  >
                    <Icon className="w-4 h-4 text-[#00D9FF]" />
                  </div>
                </div>
                <div
                  className="text-3xl font-bold text-white"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: "0 0 20px rgba(0,217,255,0.3)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-slate-500 font-medium uppercase tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Features Section ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#B366FF] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <Star className="w-3 h-3" />
            Características Premium
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Tudo que você{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D9FF, #B366FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              precisa
            </span>
          </h2>
          <p
            className="text-slate-400 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Design moderno com tecnologias de ponta para criar experiências
            inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const c = colorMap[feature.tagColor];
            return (
              <div
                key={idx}
                className="glass-card glass-shimmer p-8 group"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Decorative number */}
                <div
                  className="absolute top-6 right-6 text-6xl font-bold opacity-[0.06] select-none"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#00D9FF",
                  }}
                >
                  {feature.num}
                </div>

                {/* Tag */}
                <span
                  className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full mb-5 ${c.tag}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.badge}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,217,255,0.15), rgba(179,102,255,0.1))",
                    border: "1px solid rgba(0,217,255,0.25)",
                    boxShadow: "0 0 20px rgba(0,217,255,0.1)",
                  }}
                >
                  <Icon className="w-6 h-6 text-[#00D9FF] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-slate-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="relative glass-card p-14 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,217,255,0.06) 0%, rgba(179,102,255,0.06) 50%, rgba(255,0,110,0.06) 100%)",
          }}
        >
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-xl opacity-30"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,217,255,0.15), rgba(179,102,255,0.1), rgba(255,0,110,0.15))",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s ease infinite",
            }}
          />

          {/* Decorative particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-sparkle"
              style={{
                background: i % 2 === 0 ? "#00D9FF" : "#B366FF",
                top: `${15 + i * 12}%`,
                left: `${5 + i * 16}%`,
                animationDelay: `${i * 400}ms`,
                boxShadow: `0 0 6px ${i % 2 === 0 ? "#00D9FF" : "#B366FF"}`,
              }}
            />
          ))}

          <div className="relative">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pronto para{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00D9FF, #FF006E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                começar?
              </span>
            </h2>
            <p
              className="text-slate-400 text-lg mb-10 max-w-lg mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Experimente o design premium Dark Glass agora mesmo. Sem cartão de
              crédito.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="group relative flex items-center gap-2 px-10 py-4 text-base font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #00D9FF, #B366FF, #FF006E)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 3s ease infinite",
                  color: "#ffffff",
                  boxShadow: "0 0 40px rgba(0,217,255,0.25)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <span className="relative">Iniciar Agora — Grátis</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer
        className="mt-8 border-t"
        style={{
          background: "rgba(6,6,14,0.8)",
          backdropFilter: "blur(24px)",
          borderColor: "rgba(0,217,255,0.1)",
        }}
      >
        {/* Animated gradient divider */}
        <div
          className="h-px w-full animate-gradient-shift"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00D9FF, #B366FF, #FF006E, transparent)",
            backgroundSize: "200% auto",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(0,217,255,0.1)",
                    border: "1px solid rgba(0,217,255,0.25)",
                  }}
                >
                  <Sparkles className="w-4 h-4 text-[#00D9FF]" />
                </div>
                <span
                  className="font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  GLASS<span className="text-[#00D9FF]">.AI</span>
                </span>
              </div>
              <p
                className="text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Design premium com glassmorphism multi-layer e cores neon
                vibrantes.
              </p>
              {/* Newsletter input */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 min-w-0 px-3 py-2 text-xs text-slate-300 rounded-lg outline-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,217,255,0.15)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  readOnly
                />
                <button
                  className="px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "rgba(0,217,255,0.15)",
                    border: "1px solid rgba(0,217,255,0.3)",
                    color: "#00D9FF",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  OK
                </button>
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: "Produto",
                links: ["Features", "Pricing", "Docs", "Changelog"],
              },
              {
                title: "Empresa",
                links: ["About", "Blog", "Careers", "Press"],
              },
            ].map(col => (
              <div key={col.title} className="space-y-4">
                <h4
                  className="text-sm font-semibold text-white uppercase tracking-wider"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-500 hover:text-[#00D9FF] transition-colors duration-200"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social */}
            <div className="space-y-4">
              <h4
                className="text-sm font-semibold text-white uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Social
              </h4>
              <div className="flex gap-3">
                {[
                  { Icon: Github, color: "#ffffff", label: "GitHub" },
                  { Icon: Linkedin, color: "#0099FF", label: "LinkedIn" },
                  { Icon: Twitter, color: "#00D9FF", label: "Twitter" },
                ].map(({ Icon, color, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        color;
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 0 12px ${color}40`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-sm text-slate-600"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2026 GLASS.AI. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map(item => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-slate-600 hover:text-[#00D9FF] transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

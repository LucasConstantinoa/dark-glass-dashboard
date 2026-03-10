import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
} from "lucide-react";

/**
 * Dark Glass Dashboard - Cyberpunk Neon Design
 * Premium glassmorphism com cores neon vibrantes e efeitos de blur
 * Tipografia: Courier Prime (títulos), Roboto Mono (corpo)
 * Animações: Fade-in-up, neon-pulse, gradient-shift
 */

export default function Home() {
  const metrics = [
    {
      title: "Performance",
      value: "98.5%",
      change: "+12.5%",
      icon: TrendingUp,
      color: "cyan",
      description: "Uptime garantido",
    },
    {
      title: "Conversões",
      value: "2,847",
      change: "+23.1%",
      icon: Target,
      color: "magenta",
      description: "Este mês",
    },
    {
      title: "Engajamento",
      value: "4.2x",
      change: "+15.3%",
      icon: Zap,
      color: "green",
      description: "Taxa de retorno",
    },
    {
      title: "Crescimento",
      value: "156%",
      change: "+8.2%",
      icon: BarChart3,
      color: "cyan",
      description: "Ano a ano",
    },
  ];

  const features = [
    {
      title: "Glassmorphism Premium",
      description: "Efeitos de vidro fosco com transparência e blur para uma estética moderna e sofisticada.",
      icon: Sparkles,
    },
    {
      title: "Cores Neon Vibrantes",
      description: "Paleta de cores neon (ciano, magenta, verde) que brilham no hover com efeitos de glow.",
      icon: Zap,
    },
    {
      title: "Animações Fluidas",
      description: "Transições suaves de 300-400ms com easing cubic-bezier para máxima fluidez.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-white neon-glow-cyan">
              GLASS.AI
            </span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-white hover:text-cyan-400">
              Docs
            </Button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
            Premium <span className="text-cyan-400 neon-glow-cyan">Glass</span> Design
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experiência visual premium com glassmorphism, cores neon e animações fluidas.
            Construído com React, Tailwind CSS e TypeScript.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold px-8 py-6 text-lg">
              Explorar <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-magenta-500/50 text-magenta-400 hover:bg-magenta-500/10 px-8 py-6 text-lg"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            const colorClass =
              metric.color === "cyan"
                ? "neon-glow-cyan"
                : metric.color === "magenta"
                  ? "neon-glow-magenta"
                  : "neon-glow-green";

            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-xl group cursor-pointer"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${
                      metric.color === "cyan"
                        ? "from-cyan-500/20 to-cyan-500/10"
                        : metric.color === "magenta"
                          ? "from-magenta-500/20 to-magenta-500/10"
                          : "from-green-500/20 to-green-500/10"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        metric.color === "cyan"
                          ? "text-cyan-400"
                          : metric.color === "magenta"
                            ? "text-magenta-400"
                            : "text-green-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      metric.color === "cyan"
                        ? "text-cyan-400"
                        : metric.color === "magenta"
                          ? "text-magenta-400"
                          : "text-green-400"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>

                <h3 className="text-slate-300 text-sm font-medium mb-1">
                  {metric.title}
                </h3>
                <p className={`text-3xl font-bold text-white mb-2 ${colorClass}`}>
                  {metric.value}
                </p>
                <p className="text-xs text-slate-400">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Características Premium
          </h2>
          <p className="text-slate-300 text-lg">
            Design moderno com tecnologias de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-xl text-center group"
                style={{
                  animationDelay: `${idx * 150}ms`,
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 group-hover:from-cyan-500/30 group-hover:to-magenta-500/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-card p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Experimente o design premium Dark Glass agora mesmo
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-bold px-8 py-6 text-lg">
            Iniciar Agora <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold text-white mb-4">
                GLASS.AI
              </h4>
              <p className="text-slate-400 text-sm">
                Design premium com glassmorphism e cores neon
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 flex justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2026 GLASS.AI. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-cyan-400 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

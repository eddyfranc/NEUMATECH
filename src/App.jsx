import { useState } from 'react'
import {
  Sparkles,
  Zap,
  Layers,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Code2,
  CheckCircle2,
  Rocket,
  Boxes
} from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  const techStack = [
    { name: 'React 19', desc: 'Latest core with optimal rendering and hooks', badge: 'v19.3' },
    { name: 'Tailwind CSS v4', desc: 'Modern high-performance CSS engine with @tailwindcss/vite', badge: 'v4.0' },
    { name: 'Vite 8', desc: 'Lightning-fast modern development environment and HMR', badge: 'v8.3' },
    { name: 'Lucide Icons', desc: 'Clean, beautiful and lightweight SVG icon collection', badge: 'Active' },
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'High-Performance Engine',
      description: 'Streamlined build configuration with native Vite integration and instant Hot Module Replacement (HMR).'
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      title: 'Tailwind CSS v4 Pre-configured',
      description: 'Zero-config CSS-first setup with automated class detection and modern CSS color schemes.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Production Ready Architecture',
      description: 'Standardized structure ready for scaling components, pages, APIs, and state management.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      title: 'Neumatec Core Stack',
      description: 'Tailored for industrial technology, automation dashboards, and modern client-facing platforms.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Background Decorative Gradient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Boxes className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-cyan-400 via-indigo-200 to-white bg-clip-text text-transparent">
                NEUMATEC
              </span>
              <span className="ml-2 text-xs uppercase px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 font-medium">
                Frontend
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => setActiveTab('overview')}
              className={`transition-colors hover:text-white ${activeTab === 'overview' ? 'text-cyan-400' : ''}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`transition-colors hover:text-white ${activeTab === 'stack' ? 'text-cyan-400' : ''}`}
            >
              Stack
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`transition-colors hover:text-white ${activeTab === 'docs' ? 'text-cyan-400' : ''}`}
            >
              Setup Docs
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Tailwind v4 Active</span>
            </div>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Tailwind</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 z-10 w-full">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-slate-300">
              Frontend Ready &middot; React + Tailwind CSS v4 Configured
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Next-Generation <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Neumatec Web Platform
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed">
            Your frontend is initialized with modern React, Vite, and Tailwind CSS v4.
            Start crafting industrial-grade, responsive user interfaces with immediate hot reloading.
          </p>

          {/* Interactive Demo Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 text-white font-medium flex items-center justify-center gap-3 shadow-lg hover:border-cyan-500/50 transition-all group cursor-pointer"
            >
              <Rocket className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>React State Count:</span>
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-950 text-cyan-300 font-mono text-sm border border-cyan-800/50 font-bold">
                {count}
              </span>
            </button>

            <a
              href="#features"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/40 text-slate-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-slate-400" />
              <span>View Architecture</span>
            </a>
          </div>
        </div>

        {/* Tech Stack Cards */}
        <section id="features" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Active Environment Stack</h2>
              <p className="text-sm text-slate-400">All modules are installed, linked and verified</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
              <CheckCircle2 className="w-4 h-4" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-sm transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono border border-slate-700">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0 h-fit">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1.5">{feat.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 relative overflow-hidden">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to build your components?</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Edit <code className="px-2 py-1 bg-slate-950 rounded text-cyan-300 text-xs font-mono border border-slate-800">src/App.jsx</code> to build out your custom pages, or create reusable components in <code className="px-2 py-1 bg-slate-950 rounded text-cyan-300 text-xs font-mono border border-slate-800">src/components/</code>.
            </p>

            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800/60">
                <span>TERMINAL COMMANDS</span>
                <span>PowerShell</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">cd</span>
                <span>Frontend</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">npm</span>
                <span>run dev</span>
                <span className="text-slate-500"># Start local Vite development server</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">npm</span>
                <span>run build</span>
                <span className="text-slate-500"># Build production distribution</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-8 z-10 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Neumatec. Configured with React 19 and Tailwind CSS v4.</p>
      </footer>
    </div>
  )
}

export default App

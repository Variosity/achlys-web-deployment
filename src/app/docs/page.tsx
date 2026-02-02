'use client'

import { motion } from 'framer-motion'
import { Terminal, Network, Monitor, FileCode, Cpu, BookOpen, Hash, Code2 } from 'lucide-react'

export default function Docs() {
  return (
    <div className="section-container pt-32 pb-32"> {/* Increased bottom padding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6">THE <span className="neon-text">CODEX</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Documentation for Achlys v1.5 (Hybrid Core). <br/>
            Strict typing. Latin syntax. Ouroboros compilation.
          </p>
        </div>

        {/* 1. SYNTAX GUIDE */}
        <section className="mb-24">
          <SectionHeader icon={<BookOpen />} title="Language Fundamentals" />
          <div className="grid gap-6">
            <DocCard title="Variables & Types" code={`vas name : str -> "Achlys"^
vas port : int -> 80^
vas ratio : dec -> 3.14^
vas list : arr -> []^`}>
              Achlys enforces strict typing. You must declare the type (`int`, `str`, `dec`, `arr`, `obj`) when defining a variable. Statements end with a caret (`^`).
            </DocCard>

            <DocCard title="Output & Input" code={`scribo("Hello Void")^
vas input : str -> capio()^
vas age : int -> numerus(input)^`}>
              Use `scribo` (or `insusurro`) to print. Use `capio` to capture stdin. Input is always a string; use `numerus()` to cast to int/float.
            </DocCard>

            <DocCard title="Control Flow" code={`si (x > 10) {
    scribo("High")^
} aliter {
    scribo("Low")^
}

dum (x < 100) {
    x -> x + 1^
}^`}>
              Logic uses `si` (if), `aliter` (else), and `dum` (while). Braces `{}` are mandatory for blocks.
            </DocCard>

            <DocCard title="Functions (Opus)" code={`opus add(a, b) {
    vas res : int -> a + b^
    reddo res^
}^

vas sum : int -> add(10, 20)^`}>
              Functions are declared with `opus` and return values with `reddo`. Arguments create local scope variables automatically.
            </DocCard>
          </div>
        </section>

        {/* 2. CORE API */}
        <section className="mb-24">
          <SectionHeader icon={<Cpu />} title="Core System API" />
          <div className="grid md:grid-cols-2 gap-6">
            <ApiItem name="sys(cmd)" desc="Execute shell command. Returns exit code." usage='sys("ls -la")^' />
            <ApiItem name="inscribo(path, data)" desc="Write string data to a file." usage='inscribo("log.txt", "Data")^' />
            <ApiItem name="revelare(path)" desc="Read file contents into a string." usage='vas content : str -> revelare("file.txt")^' />
            <ApiItem name="mensura(obj)" desc="Get length of string or array." usage='vas len : int -> mensura(list)^' />
          </div>
        </section>

        {/* 3. NETWORKING */}
        <section className="mb-24">
          <SectionHeader icon={<Network />} title="Nerve Layer (Networking)" />
          <p className="text-gray-400 mb-6">Native TCP sockets for Red Team operations.</p>
          <div className="grid gap-4">
            <ApiItem name="conexus(host, port)" desc="Connect to target. Returns socket ID or -1." usage='vas s : int -> conexus("192.168.1.1", 80)^' />
            <ApiItem name="mitto(sock, data)" desc="Send raw string data/payload." usage='mitto(s, "GET / HTTP/1.1\\r\\n\\r\\n")^' />
            <ApiItem name="recipio(sock, bytes)" desc="Receive response buffer." usage='vas res : str -> recipio(s, 4096)^' />
            <ApiItem name="claudere(sock)" desc="Close the connection." usage='claudere(s)^' />
          </div>
        </section>

        {/* 4. GRAPHICS */}
        <section className="mb-12">
          <SectionHeader icon={<Monitor />} title="Neon Layer (Graphics)" />
          <p className="text-gray-400 mb-6">Requires `-DENABLE_GRAPHICS` flag. Raylib backend.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <ApiItem name="fenestra(w, h, title)" desc="Open window." />
            <ApiItem name="incipere_picturam()" desc="Start frame." />
            <ApiItem name="finire_picturam()" desc="End frame." />
            <ApiItem name="purgare_fundum(col)" desc="Clear screen." />
            <ApiItem name="delinere_textum(txt, x, y, size, col)" desc="Draw text." />
            <ApiItem name="delinere_quadratum(x, y, w, h, col)" desc="Draw rect." />
            <ApiItem name="delinere_circulum(x, y, r, col)" desc="Draw circle." />
            <ApiItem name="capere_signum()" desc="Get key pressed (char)." />
          </div>
        </section>

      </motion.div>
    </div>
  )
}

// Sub-components for clean layout
function SectionHeader({ icon, title }: { icon: any, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
      <div className="text-blood">{icon}</div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  )
}

function DocCard({ title, code, children }: { title: string, code: string, children: React.ReactNode }) {
  return (
    <div className="glass-card">
      <h3 className="text-xl font-bold text-blood mb-4">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{children}</p>
      <div className="bg-black/50 border-l-2 border-blood p-4 font-mono text-sm text-gray-300 overflow-x-auto">
        <pre>{code}</pre>
      </div>
    </div>
  )
}

function ApiItem({ name, desc, usage }: { name: string, desc: string, usage?: string }) {
  return (
    <div className="bg-void-lighter/50 border border-white/5 p-4 hover:border-blood/50 transition-colors">
      <code className="text-blood font-bold text-base block mb-2">{name}</code>
      <p className="text-gray-400 text-sm mb-2">{desc}</p>
      {usage && <code className="text-xs text-gray-600 block mt-2">{usage}</code>}
    </div>
  )
}

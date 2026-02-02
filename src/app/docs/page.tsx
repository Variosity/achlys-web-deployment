'use client'

import { motion } from 'framer-motion'
import { Terminal, Network, Monitor, Cpu, BookOpen, Hash, Shield, Globe } from 'lucide-react'

export default function Docs() {
  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* HEADER */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            THE <span className="neon-text">CODEX</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Achlys v1.2 Reference Manual. <br />
            Strict typing. Latin syntax. Ouroboros compilation.
          </p>
        </div>

        {/* 1. OVERVIEW & SPECS */}
        <Section title="Language Specifications" icon={<Shield />}>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card">
              <h3 className="text-blood font-bold mb-4 uppercase tracking-wider">Core Features</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• <strong>Self-Hosting:</strong> Compiles itself via `forge.nox`.</li>
                <li>• <strong>Zero Dependencies:</strong> Produces standalone binaries.</li>
                <li>• <strong>Hybrid Core:</strong> Shadow (Headless) & Neon (Graphics) modes.</li>
                <li>• <strong>Strict Typing:</strong> Enforced at runtime for safety.</li>
              </ul>
            </div>
            <div className="glass-card">
              <h3 className="text-blood font-bold mb-4 uppercase tracking-wider">Use Cases</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• <strong>Red Team:</strong> C2 Beacons, Port Scanners (Native Sockets).</li>
                <li>• <strong>Tooling:</strong> Exploitation frameworks, file parsers.</li>
                <li>• <strong>Education:</strong> Learning computer science via Latin.</li>
                <li>• <strong>GUI Apps:</strong> Dashboards, visualizers (Raylib).</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 2. SYNTAX & TYPES */}
        <Section title="Syntax & Data Types" icon={<Hash />}>
          <p className="text-gray-400 mb-6">
            Achlys requires explicit type declarations. Statements must end with a caret (<code>^</code>).
          </p>
          <div className="space-y-6">
            <DocEntry 
              title="Variable Declaration (Vas)" 
              desc="Format: vas [name] : [type] -> [value]^"
              code={`// Integers (Whole numbers)
vas port : int -> 80^

// Decimals (Floating point)
vas ratio : dec -> 3.14159^

// Strings (Text)
vas message : str -> "Hello Void"^

// Arrays (Lists)
vas targets : arr -> ["192.168.1.1", "10.0.0.1"]^

// Objects (Maps) 
vas hero : obj -> {
    name: "Achlys",
    lvl: 1,
    stats: { hp: 100, mp: 50 }
} ^            
              
// 'Any' type for flexibility if needed              
vas test : any -> numerus(capio())^`}
            />
            <DocEntry 
              title="Control Flow" 
              desc="Logic gates using Latin keywords: si (if), aliter (else), dum (while)."
              code={`// Conditional Logic
si (port == 80) {
    scribo("HTTP Service Detected")^
} aliter {
    scribo("Unknown Service")^
}

// Loops
vas i : int -> 0^
dum (i < 10) {
    scribo("Counting: " + i)^
    i -> i + 1^
}^`}
            />
          </div>
        </Section>

        {/* 3. FUNCTIONS */}
        <Section title="Functions (Opus)" icon={<BookOpen />}>
          <DocEntry 
            title="Defining Functions" 
            desc="Use 'opus' to define. Parameters are dynamically scoped. Use 'reddo' to return."
            code={`opus add(a, b) {
    vas result : int -> a + b^
    reddo result^
}^

// Calling the function
vas sum : int -> add(10, 20)^
scribo(sum)^`}
          />
        </Section>

        {/* 4. NETWORKING */}
        <Section title="Nerve Layer (Networking)" icon={<Network />}>
          <p className="text-gray-400 mb-6">
            Direct access to TCP sockets. DNS resolution is automatic via `gethostbyname`.
          </p>
          <div className="grid gap-4">
            <ApiCard name="necto(host, port)" desc="Opens a TCP connection. Returns a Socket ID." usage='vas sock : int -> necto("example.com", 80)^' />
            <ApiCard name="mitto(sock, data)" desc="Sends raw string payload." usage='mitto(sock, "GET / HTTP/1.1\\r\\n\\r\\n")^' />
            <ApiCard name="recipio(sock, size)" desc="Reads bytes from the stream." usage='vas res : str -> recipio(sock, 1024)^' />
            <ApiCard name="claudere(sock)" desc="Terminates the connection." usage='claudere(sock)^' />
          </div>
        </Section>

        {/* 5. GRAPHICS */}
        <Section title="Neon Layer (Graphics)" icon={<Monitor />}>
          <p className="text-gray-400 mb-6">
            Available when compiled with <code>-DENABLE_GRAPHICS</code>. Uses Raylib backend.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ApiCard name="fenestra(w, h, title)" desc="Opens a new window." />
            <ApiCard name="incipere_picturam()" desc="Begin rendering frame." />
            <ApiCard name="finire_picturam()" desc="End rendering frame." />
            <ApiCard name="purgare_fundum(col)" desc="Clear screen with color." />
            <ApiCard name="delinere_textum(txt, x, y, s, c)" desc="Draw text at position." />
            <ApiCard name="delinere_quadratum(x, y, w, h, c)" desc="Draw filled rectangle." />
            <ApiCard name="delinere_circulum(x, y, r, c)" desc="Draw filled circle." />
            <ApiCard name="clavis_pressa(keycode)" desc="Check if key is held down." />
          </div>
        </Section>

        {/* 6. SYSTEM I/O */}
        <Section title="System Core" icon={<Cpu />}>
          <div className="grid md:grid-cols-2 gap-4">
            <ApiCard name="sys(cmd)" desc="Execute shell command. Returns exit code." />
            <ApiCard name="inscribo(path, data)" desc="Write string to file system." />
            <ApiCard name="revelare(path)" desc="Read file contents into variable." />
            <ApiCard name="capio()" desc="Capture stdin (user input)." />
            <ApiCard name="numerus(str)" desc="Cast string to integer/decimal." />
          </div>
        </Section>

      </motion.div>
    </div>
  )
}

// --- SUBCOMPONENTS ---

function Section({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
        <div className="text-blood">{icon}</div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function DocEntry({ title, desc, code }: { title: string, desc: string, code: string }) {
  return (
    <div className="glass-card">
      <h3 className="text-xl font-bold text-blood mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>
      <div className="bg-black/80 border-l-2 border-blood p-4 font-mono text-sm text-gray-300 code-scroll">
        <pre>{code}</pre>
      </div>
    </div>
  )
}

function ApiCard({ name, desc, usage }: { name: string, desc: string, usage?: string }) {
  return (
    <div className="bg-[#0a0a0a] border border-white/5 p-4 hover:border-blood/50 transition-colors group">
      <code className="text-blood font-bold text-sm block mb-2 group-hover:text-white transition-colors">{name}</code>
      <p className="text-gray-500 text-xs mb-2">{desc}</p>
      {usage && (
        <div className="mt-2 pt-2 border-t border-white/5">
          <code className="text-[10px] text-gray-600 font-mono">{usage}</code>
        </div>
      )}
    </div>
  )
}

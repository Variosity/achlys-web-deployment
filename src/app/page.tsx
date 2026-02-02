'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Network, Terminal, Shield, Zap } from 'lucide-react'
import TriangleDecoration from '@/components/TriangleDecoration'

export default function Home() {
  return (
    <main className="min-h-screen pt-16 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center grid-bg overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10" />
        
        <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 relative"
          >
            <TriangleDecoration />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-blood rounded-full animate-pulse shadow-[0_0_20px_#FF0033]" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4"
          >
            FROM THE <span className="neon-text">VOID</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto px-4"
          >
            A self-hosting, Latin-based programming language forged for security, speed, and elegance.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-30"
          >
            <Link href="/download" className="btn-primary w-full sm:w-auto">
              Download v1.2
            </Link>
            <Link href="/docs" className="btn-secondary w-full sm:w-auto">
              Read The Docs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature 
              icon={<Shield />}
              title="Red Team Ready"
              desc="Networking, Sockets, and System access built directly into the core language."
            />
            <Feature 
              icon={<Zap />}
              title="The Ouroboros"
              desc="Self-hosting compiler. Achlys compiles Achlys into standalone, dependency-free binaries."
            />
            <Feature 
              icon={<Terminal />}
              title="Latin Syntax"
              desc="Code with intent. 'scribo', 'opus', 'dum'. A language that teaches history while you hack."
            />
            <Feature 
              icon={<Network />}
              title="Zero Config"
              desc="No runtime. No VM. No 500MB node_modules. Just a 2MB binary that runs anywhere."
            />
          </div>
        </div>
      </section>

      {/* CODE SHOWCASE */}
      <section className="py-24 px-4 max-w-6xl mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">Built for <span className="text-blood">Power</span></h2>
            <p className="text-gray-400 mb-6 text-lg">
              Achlys replaces complex C setups and bloated Python scripts with elegant, compiled power.
            </p>
            <ul className="space-y-4 mb-8 inline-block text-left">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blood mr-3 rounded-full" /> Native DNS Resolution
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blood mr-3 rounded-full" /> Built-in 2D/UI Graphics
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blood mr-3 rounded-full" /> Strict Type Safety
              </li>
            </ul>
          </div>
          
          <div className="w-full max-w-[90vw] mx-auto lg:max-w-full">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/10 shadow-2xl font-mono text-sm overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
              </div>
              
              {/* MOBILE FIX: Proper horizontal scrolling container */}
              <div className="overflow-x-auto pb-2">
                <pre className="text-gray-300 min-w-[300px]">
                  <span className="text-purple-400">opus</span> <span className="text-blue-400">scan</span>(ip, port) {'{'}
                  {'\n'}  <span className="text-purple-400">vas</span> sock : <span className="text-yellow-400">int</span> -&gt; <span className="text-blue-400">necto</span>(ip, port)^
                  {'\n'}  <span className="text-purple-400">si</span> (sock != -1) {'{'}
                  {'\n'}    <span className="text-blue-400">scribo</span>(<span className="text-green-400">"OPEN: "</span> + port)^
                  {'\n'}    <span className="text-blue-400">claudere</span>(sock)^
                  {'\n'}  {'}'}
                  {'\n'}  <span className="text-purple-400">reddo</span> 0^
                  {'\n'}{'}'}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="glass-card group h-full">
      <div className="mb-4 text-blood group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blood transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Network, Terminal, Shield, Zap } from 'lucide-react'
import CodeExample from '@/components/CodeExample'
import FeatureCard from '@/components/FeatureCard'
import TriangleDecoration from '@/components/TriangleDecoration'

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 mx-auto mb-8 relative"
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
            className="text-6xl md:text-8xl font-black tracking-tighter mb-4"
          >
            FROM THE <span className="neon-text">VOID</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            A self-hosting, Latin-based programming language forged for security, speed, and elegance.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/download" className="btn-primary">
              Download v1.2
            </Link>
            <Link href="/docs" className="btn-secondary">
              Read The Docs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-4 bg-void-light border-y border-white/5">
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
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Built for <span className="text-blood">Power</span></h2>
            <p className="text-gray-400 mb-6 text-lg">
              Achlys replaces complex C setups and bloated Python scripts with elegant, compiled power.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blood mr-3" /> Native DNS Resolution
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blood mr-3" /> Built-in 2D/UI Graphics
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blood mr-3" /> Strict Type Safety
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/10 shadow-2xl font-mono text-sm overflow-hidden">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"/>
              <div className="w-3 h-3 rounded-full bg-yellow-500"/>
              <div className="w-3 h-3 rounded-full bg-green-500"/>
            </div>
            <pre className="text-gray-300">
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
      </section>

    </main>
  )
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="glass-card group">
      <div className="mb-4 text-blood group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blood transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
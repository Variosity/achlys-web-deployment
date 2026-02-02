'use client'

import { motion } from 'framer-motion'
import { Download, Shield, Layers, Box, Github } from 'lucide-react'
//import Link from 'next/link'

const REPO_URL = "https://github.com/Variosity/-Achlys"
const VERSION = "v1.2"

export default function DownloadPage() {
  const versions = [
    {
      name: "Achlys Core",
      type: "Minimal",
      size: "~500KB",
      icon: <Shield className="w-10 h-10 text-blood" />,
      desc: "Static binary. No graphics. Pure networking. Optimized for Red Team stealth.",
      cmd: "gcc -DNO_GRAPHICS achlys.c -o achlys -lm",
      url: `${REPO_URL}/releases/download/${VERSION}/achlys-core-linux-amd64`
    },
    {
      name: "Achlys Full",
      type: "Standard",
      size: "~2MB",
      icon: <Layers className="w-10 h-10 text-blood" />,
      desc: "Complete experience. Raylib graphics engine enabled. Best for development.",
      cmd: "gcc -DENABLE_GRAPHICS achlys.c -lraylib -lm",
      url: `${REPO_URL}/releases/download/${VERSION}/achlys-core-linux-amd64`
    },
    {
      name: "Achlys Ouroboros",
      type: "Forge",
      size: "~5KB",
      icon: <Box className="w-10 h-10 text-blood" />,
      desc: "The Ouroboros. Zero dependencies. Graphics included. Runs on any Linux.",
      cmd: "./achlys ouroboros.nox",
      url: `${REPO_URL}/releases/download/${VERSION}/achlys-core-linux-amd64`
    }
  ]

  return (
    <div className="section-container pt-32 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto" // Constrained width for symmetry
      >
        <h1 className="text-6xl font-bold mb-8">
          CHOOSE YOUR <span className="neon-text">WEAPON</span>
        </h1>
        <p className="text-gray-400 mb-16 text-lg">
          Select the build that fits your mission profile.
        </p>

        <div className="grid md:grid-cols-3 gap-6"> {/* Reduced gap for tighter look */}
          {versions.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="glass-card flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-void rounded-full border border-white/10 group-hover:border-blood/50 transition-colors">
                {v.icon}
              </div>
              
              <h2 className="text-2xl font-bold mb-2 text-white">{v.name}</h2>
              <span className="px-3 py-1 bg-blood/10 text-blood text-xs uppercase tracking-widest mb-6 border border-blood/20">
                {v.type} • {v.size}
              </span>
              
              <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                {v.desc}
              </p>
              
              <div className="w-full bg-black p-4 border border-white/5 text-xs font-mono text-gray-500 mb-6 break-all rounded text-left">
                <span className="text-blood mr-2">$</span>{v.cmd}
              </div>

              <a 
                href={v.url} 
                className="btn-secondary w-full flex justify-center items-center gap-2 group-hover:bg-blood group-hover:border-blood group-hover:text-white transition-all"
              >
                <Download size={16} /> Download Source
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

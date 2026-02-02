'use client'

import { motion } from 'framer-motion'
import { Download, Shield, Layers, Box } from 'lucide-react'
import Link from 'next/link'

export default function DownloadPage() {
  const versions = [
    {
      name: "Achlys Core",
      type: "Minimal",
      size: "~500KB",
      icon: <Shield className="w-8 h-8 text-blood" />,
      desc: "Static binary. No graphics. Pure networking and system I/O. Optimized for Red Team operations.",
      cmd: "gcc -DNO_GRAPHICS achlys.c -o achlys -lm"
    },
    {
      name: "Achlys Full",
      type: "Standard",
      size: "~2MB",
      icon: <Layers className="w-8 h-8 text-blood" />,
      desc: "Complete experience. Includes Raylib graphics engine. Dynamically linked for development.",
      cmd: "gcc -DENABLE_GRAPHICS achlys.c -lraylib -lm"
    },
    {
      name: "Achlys Static",
      type: "Portable",
      size: "~5KB",
      icon: <Box className="w-8 h-8 text-blood" />,
      desc: "The Ouroboros. Zero dependencies. Graphics included. Runs on any Linux distro instantly.",
      cmd: "./achlys smart_forge.nox"
    }
  ]

  return (
    <div className="section-container pt-32 text-center">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold mb-8"
      >
        CHOOSE YOUR <span className="neon-text">WEAPON</span>
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {versions.map((v, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <div className="mb-6 p-4 bg-void rounded-full border border-blood/20">{v.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{v.name}</h2>
            <span className="px-3 py-1 bg-blood/10 text-blood text-xs uppercase tracking-widest mb-4 border border-blood/20">
              {v.type} • {v.size}
            </span>
            <p className="text-gray-400 text-sm mb-8 flex-grow">{v.desc}</p>
            
            <div className="w-full bg-black p-3 rounded text-xs font-mono text-gray-500 mb-6 break-all">
              {v.cmd}
            </div>

            <Link href="#" className="btn-secondary w-full flex justify-center items-center gap-2">
              <Download size={16} /> Download
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
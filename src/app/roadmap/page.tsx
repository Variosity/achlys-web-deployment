'use client'

import { motion } from 'framer-motion'

export default function Roadmap() {
  const phases = [
    {
      id: "PHASE I",
      title: "The Foundation",
      status: "Operational",
      items: ["Self-Hosting Compiler", "Latin Syntax API", "Networking & Sockets", "Basic File I/O"],
      color: "text-green-500"
    },
    {
      id: "PHASE II",
      title: "The Ecosystem",
      status: "In Progress",
      items: ["Umbrae Package Manager", "Standard Library", "VS Code Extension", "Online REPL"],
      color: "text-blood"
    },
    {
      id: "PHASE III",
      title: "The Expansion",
      status: "Planned",
      items: ["Advanced Crypto Libs", "Mobile Compilation (Android)", "Multi-threading", "3D Graphics Engine"],
      color: "text-gray-500"
    },
    {
      id: "PHASE IV",
      title: "The Void Awakens",
      status: "Vision",
      items: ["AchlysOS Kernel", "Bootable ISO", "Native Drivers", "Hardware Control"],
      color: "text-gray-500"
    }
  ]

  return (
    <div className="section-container pt-32">
      <h1 className="text-5xl font-bold text-center mb-20">THE <span className="neon-text">PATH</span></h1>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blood via-blood/50 to-transparent" />

        {phases.map((phase, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between mb-16 ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Spacer for alternating layout */}
            <div className="hidden md:block w-5/12" />
            
            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-void border-2 border-blood rounded-full z-10 shadow-[0_0_10px_#FF0033]" />

            {/* Content Card */}
            <div className="w-full md:w-5/12 pl-12 md:pl-0">
              <div className="glass-card hover:border-blood/50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blood font-bold tracking-widest text-sm">{phase.id}</span>
                  <span className={`text-xs uppercase ${phase.color}`}>{phase.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-gray-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blood/50 mr-2 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
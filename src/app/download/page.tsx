'use client'

import { motion } from 'framer-motion'
import { Download, Shield, Layers, Box, Github } from 'lucide-react'
//import Link from 'next/link'

//const REPO_URL = "https://github.com/Variosity/-Achlys"
//const VERSION = "v1.2"

export default function DownloadPage() {
  const versions = [
    {
      name: "Achlys Core",
      type: "Minimal",
      size: "~500KB",
      icon: <Shield className="w-10 h-10 text-blood" />,
      desc: "Static binary. No graphics. Pure networking. Optimized for Red Team stealth.",
      cmd: "gcc -DNO_GRAPHICS achlys.c -o achlys -lm",
      url: `https://release-assets.githubusercontent.com/github-production-release-asset/1147836504/22913019-a19a-4b1b-86ff-18f36075a66b?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-02-02T13%3A40%3A36Z&rscd=attachment%3B+filename%3Dachlys&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-02-02T12%3A39%3A43Z&ske=2026-02-02T13%3A40%3A36Z&sks=b&skv=2018-11-09&sig=mbPx9LkfkQ80FEtRKsHZASioBqTebITapfNCJmYGuO4%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3MDAzNjI4MywibmJmIjoxNzcwMDM1OTgzLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.MZiaZMVHhsmIIXqOgcdTrckW5yRHZUeU9gUhaQWLLcY&response-content-disposition=attachment%3B%20filename%3Dachlys&response-content-type=application%2Foctet-stream`
    },
    {
      name: "Achlys Full",
      type: "Standard",
      size: "~2MB",
      icon: <Layers className="w-10 h-10 text-blood" />,
      desc: "Complete experience. Raylib graphics engine enabled. Best for development.",
      cmd: "gcc -DENABLE_GRAPHICS achlys.c -lraylib -lm",
      url: `https://release-assets.githubusercontent.com/github-production-release-asset/1147836504/22913019-a19a-4b1b-86ff-18f36075a66b?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-02-02T13%3A40%3A36Z&rscd=attachment%3B+filename%3Dachlys&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-02-02T12%3A39%3A43Z&ske=2026-02-02T13%3A40%3A36Z&sks=b&skv=2018-11-09&sig=mbPx9LkfkQ80FEtRKsHZASioBqTebITapfNCJmYGuO4%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3MDAzNjI4MywibmJmIjoxNzcwMDM1OTgzLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.MZiaZMVHhsmIIXqOgcdTrckW5yRHZUeU9gUhaQWLLcY&response-content-disposition=attachment%3B%20filename%3Dachlys&response-content-type=application%2Foctet-stream`
    },
    {
      name: "Achlys Ouroboros",
      type: "Forge",
      size: "~5KB",
      icon: <Box className="w-10 h-10 text-blood" />,
      desc: "The Ouroboros. Zero dependencies. Graphics included. Runs on any Linux.",
      cmd: "./achlys ouroboros.nox",
      url: `https://release-assets.githubusercontent.com/github-production-release-asset/1147836504/fe09290a-2b5b-4e7b-9d98-56468d166fb1?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-02-02T13%3A45%3A57Z&rscd=attachment%3B+filename%3Douroboros.nox&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-02-02T12%3A45%3A52Z&ske=2026-02-02T13%3A45%3A57Z&sks=b&skv=2018-11-09&sig=7cH%2F8yb%2FFALlcbgf85ZjFHF6wbzVUiqLv7opqA3rnVs%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3MDAzNjY1MywibmJmIjoxNzcwMDM2MzUzLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.FrTFbq55fj8jWDH3GQRtEQodqcrLLRiEEFzBTK3SGKQ&response-content-disposition=attachment%3B%20filename%3Douroboros.nox&response-content-type=application%2Foctet-stream`
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

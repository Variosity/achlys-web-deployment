'use client'

import { motion } from 'framer-motion'
import { Terminal, Network, Monitor, FileCode, Cpu } from 'lucide-react'

export default function Docs() {
  const apiGroups = [
    {
      title: "Core System",
      icon: <Cpu className="text-blood" />,
      funcs: [
        { name: "scribo(text)", desc: "Print text to standard output (console)." },
        { name: "vas name : type -> value", desc: "Declare a strict typed variable." },
        { name: "sys(cmd)", desc: "Execute a shell command on the host OS." },
        { name: "capio()", desc: "Capture user input from stdin." },
        { name: "mensura(obj)", desc: "Get length of string or array." },
	{ name: "importare()", desc: "Import libraries for your project." },
	{ name: "dum", desc: "Create all the loops you need." },
	{ name: "si", desc: "If this, then that." },
	{ name: "opus", desc: "Functions for calling code and creating libraries." },
	{ name: "reddo", desc: "Return a value." }
      ]
    },
    {
      title: "Networking (Hands)",
      icon: <Network className="text-blood" />,
      funcs: [
        { name: "conexus/necto(host, port)", desc: "Open TCP connection. Returns socket ID." },
        { name: "mitto(sock, data)", desc: "Send raw data packet over socket." },
        { name: "recipio(sock, size)", desc: "Receive byte buffer from socket." },
        { name: "claudere(sock)", desc: "Close the connection stream." }
      ]
    },
    {
      title: "Graphics (Eyes)",
      icon: <Monitor className="text-blood" />,
      funcs: [
        { name: "fenestra(w, h, title)", desc: "Initialize graphical window." },
        { name: "incipere_picturam()", desc: "Begin drawing frame." },
        { name: "delinere_textum(txt, x, y, s, c)", desc: "Draw text at coordinates." },
        { name: "delinere_quadratum(x, y, w, h, c)", desc: "Draw rectangle." },
        { name: "fenestra_claudenda()", desc: "Check if close requested." }
      ]
    },
    {
      title: "File I/O",
      icon: <FileCode className="text-blood" />,
      funcs: [
        { name: "revelare(path)", desc: "Read file content into string." },
        { name: "inscribo(path, data)", desc: "Write string data to file." }
      ]
    }
  ]

  return (
    <div className="section-container pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6">API <span className="neon-text">REFERENCE</span></h1>
        <p className="text-xl text-gray-400 mb-16">
          The basic lexicon of the Achlys language. 
          Syntax is strict. Types are enforced. Power is absolute.
        </p>

        <div className="grid gap-12">
          {apiGroups.map((group, i) => (
            <div key={i} className="glass-card">
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                {group.icon}
                <h2 className="text-2xl font-bold text-white">{group.title}</h2>
              </div>
              <div className="grid gap-4">
                {group.funcs.map((fn, j) => (
                  <div key={j} className="group p-4 bg-void-lighter/50 border border-white/5 hover:border-blood/50 transition-colors">
                    <code className="text-blood font-bold text-lg block mb-1">{fn.name}</code>
                    <p className="text-gray-400 text-sm">{fn.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
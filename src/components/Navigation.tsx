'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Terminal, Menu, X, Github, Twitter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group z-50">
            <Terminal className="text-blood group-hover:text-white transition-colors" />
            <span className="font-bold tracking-wider text-xl text-white">ACHLYS</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/docs">Docs</NavLink>
            <NavLink href="/roadmap">Roadmap</NavLink>
            <NavLink href="/download">Download</NavLink>
            <div className="h-4 w-[1px] bg-white/20" />
            <NavLink href="/pricing">Support</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            <MobileLink href="/docs" onClick={() => setIsOpen(false)}>Documentation</MobileLink>
            <MobileLink href="/download" onClick={() => setIsOpen(false)}>Download</MobileLink>
            <MobileLink href="/roadmap" onClick={() => setIsOpen(false)}>Roadmap</MobileLink>
            <MobileLink href="/pricing" onClick={() => setIsOpen(false)}>Support Us</MobileLink>
            <div className="h-[1px] bg-white/10 w-full my-2" />
            <div className="flex gap-4 justify-center pb-4">
              <a href="https://github.com" className="text-gray-400 hover:text-blood"><Github /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blood"><Twitter /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-xs uppercase tracking-widest text-gray-300 hover:text-blood transition-colors font-bold">
      {children}
    </Link>
  )
}

function MobileLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block text-center py-3 text-lg font-bold uppercase tracking-widest hover:bg-white/5 rounded text-white"
    >
      {children}
    </Link>
  )
}

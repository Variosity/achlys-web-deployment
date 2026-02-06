'use client'

import { motion } from 'framer-motion'
import { Heart, Terminal, Building } from 'lucide-react'

export default function Pricing() {
  return (
    <div className="section-container pt-32 text-center">
      <h1 className="text-5xl font-bold mb-6">SUPPORT THE <span className="neon-text">VOID</span></h1>
      <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
        Achlys is and always will be open source. Your support fuels the development of the ecosystem.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Tier */}
        <div className="glass-card flex flex-col">
          <div className="mb-4 text-gray-400 mx-auto"><Terminal size={40} /></div>
          <h3 className="text-2xl font-bold text-white">The Initiate</h3>
          <div className="text-4xl font-bold text-white my-6">$0</div>
          <ul className="text-gray-400 text-sm space-y-4 mb-8 flex-grow text-left pl-8">
            <li>✅ Full Source Code</li>
            <li>✅ Unlimited Compilation</li>
            <li>✅ Community Discord</li>
            <li>✅ Standard Library</li>
          </ul>
<Link href="/download" className="btn-secondary w-full block py-3">
            Get Started
          </Link>        </div>

        {/* Supporter Tier (Highlighted) */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="glass-card border-blood relative flex flex-col"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blood text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
            Recommended
          </div>
          <div className="mb-4 text-blood mx-auto"><Heart size={40} /></div>
          <h3 className="text-2xl font-bold text-white">The Forgemaster</h3>
          <div className="text-4xl font-bold text-blood my-6">$5<span className="text-sm text-gray-500">/mo</span></div>
          <ul className="text-gray-300 text-sm space-y-4 mb-8 flex-grow text-left pl-8">
            <li>✅ Support Development</li>
            <li>✅ Early Access Features</li>
            <li>✅ Special Discord Role</li>
            <li>✅ Pre-release access</li>
          </ul>
         <a 
            href="https://ko-fi.com/ach1ys" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary w-full mt-auto flex items-center justify-center gap-2"
          >
            Supporter
          </a>
        </motion.div>

        {/* Enterprise Tier */}
        <div className="glass-card flex flex-col">
          <div className="mb-4 text-gray-400 mx-auto"><Building size={40} /></div>
          <h3 className="text-2xl font-bold text-white">The Architect</h3>
          <div className="text-4xl font-bold text-white my-6">Custom</div>
          <ul className="text-gray-400 text-sm space-y-4 mb-8 flex-grow text-left pl-8">
            <li>✅ Priority Support</li>
            <li>✅ Custom Features</li>
            <li>✅ Virtual Training</li>
            <li>✅ Commercial Licensing</li>
          </ul>
          <a href="mailto:alejandriosity@gmail.com" className="btn-secondary w-full block py-3">
          <button className="btn-secondary w-full">Contact Us</button>
        </div>
        {/* One-time Donation Alternative */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <p className="text-gray-400 mb-6">Just want to buy us a coffee?</p>
          <a 
            href="https://ko-fi.com/ach1ys" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blood transition-colors"
          >
            <Coffee size={16} /> Make a one-time donation via Ko-fi
          </a>
        </div>
      </div>
    </div>
  )
}

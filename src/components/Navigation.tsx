import Link from 'next/link'
import { Terminal } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-void/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Terminal className="text-blood group-hover:text-white transition-colors" />
            <span className="font-bold tracking-wider text-xl">ACHLYS</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/docs" className="text-sm uppercase tracking-widest hover:text-blood transition-colors">Docs</Link>
            <Link href="/roadmap" className="text-sm uppercase tracking-widest hover:text-blood transition-colors">Roadmap</Link>
            <Link href="/download" className="text-sm uppercase tracking-widest hover:text-blood transition-colors">Download</Link>
	    <Link href="/pricing" className="text-sm uppercase tracking-widest hover:text-blood transition-colors">Support Us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
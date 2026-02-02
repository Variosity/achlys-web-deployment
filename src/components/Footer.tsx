import Link from 'next/link'
import { Github, Twitter, Terminal, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void-light/50 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <Terminal className="text-blood h-6 w-6" />
              <span className="font-bold tracking-wider text-xl text-white">ACHLYS</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              A language forged in darkness to illuminate the machine. 
              Open source, self-hosting, and built for those who explore the deep code.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-gray-400 hover:text-blood transition-colors text-sm">Documentation</Link></li>
              <li><Link href="/download" className="text-gray-400 hover:text-blood transition-colors text-sm">Download</Link></li>
              <li><Link href="/roadmap" className="text-gray-400 hover:text-blood transition-colors text-sm">Roadmap</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-blood transition-colors text-sm">Support Us</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/achlys-lang" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Achlys Project. MIT License.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Forged with <Heart className="h-3 w-3 text-blood mx-1" /> by the Community
          </p>
        </div>
      </div>
    </footer>
  )
}
interface CodeExampleProps {
  title: string
  code: string
  language?: string
}

export default function CodeExample({ title, code }: CodeExampleProps) {
  return (
    <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden group hover:border-blood/30 transition-colors">
      <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 bg-void-lighter">
        <span className="text-xs font-bold text-blood uppercase tracking-wider">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/20 group-hover:bg-red-500/80 transition-colors" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/80 transition-colors" />
          <div className="w-2 h-2 rounded-full bg-green-500/20 group-hover:bg-green-500/80 transition-colors" />
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
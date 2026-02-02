import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  example?: string
}

export default function FeatureCard({ icon, title, description, example }: FeatureCardProps) {
  return (
    <div className="glass-card group h-full hover:border-blood/50 transition-colors duration-300">
      <div className="mb-4 text-blood group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blood transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      {example && (
        <div className="bg-black/50 p-3 border-l-2 border-blood font-mono text-xs text-blood-light/80 overflow-x-auto">
          {example}
        </div>
      )}
    </div>
  )
}
'use client'
import { motion } from 'framer-motion'

export default function TriangleDecoration({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.path
        d="M50 15 L90 85 L10 85 Z"
        fill="none"
        stroke="#FF0033"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M50 15 L90 85 L10 85 Z"
        fill="rgba(255, 0, 51, 0.05)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  )
}
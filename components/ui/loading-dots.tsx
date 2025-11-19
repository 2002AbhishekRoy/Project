import { Loader2 } from 'lucide-react'

interface LoadingDotsProps {
  text?: string
}

export default function LoadingDots({ text = "Searching" }: LoadingDotsProps) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium">
      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
        <Loader2 className="w-3 h-3 text-white animate-spin" />
      </div>
      <span className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {text}
        <span className="flex gap-1">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </span>
      </span>
    </div>
  )
}
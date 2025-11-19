'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ChatInterface from '@/components/chat-interface'
import { Loader2 } from 'lucide-react'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return <ChatInterface initialQuery={query || undefined} />
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
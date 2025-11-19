'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, RotateCcw, ExternalLink, Loader2, Search as SearchIcon, Globe, Clock } from 'lucide-react'
import { PerplexityAPI, type StreamingResponse, type SearchState, type Source } from '@/lib/api'
import LoadingDots from '@/components/ui/loading-dots'

interface Message {
  id: string
  question: string
  searchStates: SearchState[]
  sources: Source[]
  answer: string
  isComplete: boolean
  isStreaming: boolean
}

interface ChatInterfaceProps {
  initialQuery?: string
}

export default function ChatInterface({ initialQuery }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToQuestion = (messageId: string) => {
    const messageElement = document.getElementById(`message-${messageId}`)
    if (messageElement) {
      // Calculate position to move question to top of viewport minus header height
      const headerHeight = 80
      const targetPosition = messageElement.offsetTop - headerHeight
      window.scrollTo({ 
        top: targetPosition, 
        behavior: 'smooth' 
      })
    }
  }

  useEffect(() => {
    if (messages.length > 0) {
      const latestMessage = messages[messages.length - 1]
      if (latestMessage.isStreaming && latestMessage.searchStates.length === 1) {
        // Scroll to question when first search state appears (like Perplexity)
        setTimeout(() => scrollToQuestion(latestMessage.id), 150)
      } else if (latestMessage.isComplete) {
        // Auto-scroll to bottom when answer is complete
        setTimeout(() => scrollToBottom(), 300)
      }
    }
  }, [messages])

  useEffect(() => {
    if (initialQuery) {
      handleSubmit(null, initialQuery)
    }
  }, [initialQuery])

  const handleSubmit = async (e: React.FormEvent | null, queryOverride?: string) => {
    e?.preventDefault()
    const query = queryOverride || currentInput.trim()
    if (!query || isStreaming) return

    setCurrentInput('')
    setIsStreaming(true)

    const messageId = Date.now().toString()
    const newMessage: Message = {
      id: messageId,
      question: query,
      searchStates: [],
      sources: [],
      answer: '',
      isComplete: false,
      isStreaming: true,
    }

    setMessages(prev => [...prev, newMessage])

    try {
      for await (const chunk of PerplexityAPI.streamSearch(query)) {
        setMessages(prev => prev.map(msg => {
          if (msg.id === messageId) {
            const updated = { ...msg }
            
            switch (chunk.type) {
              case 'search_state':
                updated.searchStates = [...updated.searchStates, chunk.content as SearchState]
                break
              case 'sources':
                updated.sources = chunk.content as Source[]
                break
              case 'answer':
                updated.answer += chunk.content as string
                break
              case 'complete':
                updated.isComplete = true
                updated.isStreaming = false
                break
            }
            return updated
          }
          return msg
        }))
      }
    } catch (error) {
      console.error('Streaming error:', error)
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, answer: 'Sorry, there was an error processing your request.', isComplete: true, isStreaming: false }
          : msg
      ))
    } finally {
      setIsStreaming(false)
    }
  }

  const handleNewChat = () => {
    setMessages([])
    setCurrentInput('')
    inputRef.current?.focus()
  }

  return (
    <div className="flex flex-col min-h-screen chat-interface-bg relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse floating"></div>
        <div className="absolute -bottom-20 -left-20 w-50 h-50 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-20 w-40 h-40 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-10 chat-header-enhanced relative z-10 h-28 border-b border-purple-200/30">
        <div className="flex items-center space-x-6">
          <div className="logo-container-enhanced w-14 h-14">
            <div className="logo-inner-enhanced w-full h-full flex items-center justify-center">
              <SearchIcon className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black enhanced-title">Perplexity</span>
            <span className="text-base font-semibold text-purple-500/70">Chat Mode</span>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleNewChat}
          className="flex items-center gap-3 border-2 border-purple-300 text-purple-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-semibold h-12 min-w-[140px] hover-lift text-lg"
        >
          <RotateCcw className="w-5 h-5" />
          New Chat
        </Button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-8 py-8 relative z-10 smooth-scroll chat-messages">
        <div className="max-w-4xl mx-auto space-y-12">
          {messages.length === 0 ? (
            <div className="text-center py-16 empty-state-enhanced">
              <div className="empty-state-icon-wrapper flex justify-center">
                <div className="empty-state-icon">
                  <SearchIcon className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-black mb-6 enhanced-title">
                Ask anything ✨🚀
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Start a conversation and I'll help you find{' '}
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  amazing
                </span>
                {' answers with '}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  intelligent insights
                </span>
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} id={`message-${message.id}`} className="space-y-8">
                {/* Question */}
                <div className="flex justify-end mb-8">
                  <div className="relative max-w-3xl">
                    <div className="user-message-enhanced text-white px-8 py-6 gpu-accelerated">
                      <p className="text-lg font-medium leading-relaxed">{message.question}</p>
                    </div>
                  </div>
                </div>

                {/* Response */}
                <div className="space-y-6">
                  {/* Search States */}
                  {message.searchStates.length > 0 && (
                    <div className="space-y-3 mb-6">
                      {message.searchStates.map((state, index) => (
                        <div key={index} className="flex items-center gap-3 text-base">
                          {message.isStreaming && index === message.searchStates.length - 1 ? (
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-blue-600 font-medium">{state.message}</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-green-600 font-medium">{state.message}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sources */}
                  {message.sources.length > 0 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Sources found • {message.sources.length} results
                        </p>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {message.sources.map((source, index) => {
                          const borderColors = [
                            'border-purple-200 hover:border-purple-400 hover:shadow-purple-200',
                            'border-blue-200 hover:border-blue-400 hover:shadow-blue-200',
                            'border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-200',
                            'border-green-200 hover:border-green-400 hover:shadow-green-200',
                            'border-orange-200 hover:border-orange-400 hover:shadow-orange-200',
                            'border-pink-200 hover:border-pink-400 hover:shadow-pink-200'
                          ];
                          return (
                            <a
                              key={index}
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-6 source-card-enhanced hover-scale transition-all duration-300 group"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0 flex-1">
                                  <p className="text-base font-semibold text-gray-900 truncate group-hover:text-purple-600 transition-colors mb-2">
                                    {source.title}
                                  </p>
                                  <p className="text-sm text-gray-500 line-clamp-2">
                                    {source.snippet}
                                  </p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 flex-shrink-0 transition-colors" />
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Answer */}
                  {message.answer && (
                    <div className="prose prose-gray max-w-none animate-fade-in">
                      <div className="text-gray-900 whitespace-pre-wrap text-lg md:text-xl leading-relaxed font-medium">
                        {message.answer}
                        {message.isStreaming && (
                          <span className="inline-block w-3 h-6 bg-gradient-to-r from-blue-500 to-purple-500 ml-1 animate-pulse rounded-sm" />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-8 py-6 input-container-enhanced relative z-10">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="input-field-wrapper p-1.5">
              <div className="flex items-center">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder={messages.length === 0 ? "Ask anything... ✨" : "Ask a follow up..."}
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  disabled={isStreaming}
                  className="flex-1 h-14 px-6 pr-16 rounded-full border-0 bg-transparent focus:ring-0 focus:outline-none placeholder:text-purple-400/70 font-medium text-lg"
                />
                <Button
                  type="submit"
                  disabled={!currentInput.trim() || isStreaming}
                  className="absolute right-2 h-10 w-10 send-button-enhanced disabled:opacity-40 disabled:cursor-not-allowed p-0 gpu-accelerated"
                >
                  <Send className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
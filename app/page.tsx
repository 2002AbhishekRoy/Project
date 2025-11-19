'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Search, ArrowRight, Sparkles, Crown, LogIn, Star, Zap, Rocket, Heart } from 'lucide-react'

export default function Home() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const suggestedQuestions = [
    "What's the latest in AI technology?",
    "How does climate change affect ocean currents?", 
    "Best practices for remote work productivity",
    "Explain quantum computing in simple terms"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-pink-50 via-blue-50 to-cyan-100 flex flex-col relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse floating"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary decorative elements */}
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-lg opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-20 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-bounce opacity-40" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      {/* Header */}
      <header className="perplexity-header flex-between relative z-10">
        <div className="flex-start space-x-4">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-40 animate-pulse"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 transform hover:scale-110">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black bg-gradient-to-r from-purple-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Perplexity</span>
            <span className="text-xs font-semibold text-purple-500/70 -mt-1">AI Powered</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Try Pro Button with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-10 min-w-[110px]">
                <Crown className="w-4 h-4 mr-2" />
                Try Pro
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </DialogTrigger>
            <DialogContent className="pro-modal">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-center gap-2">
                  <Crown className="w-6 h-6 text-purple-600" />
                  Perplexity Pro
                </DialogTitle>
                <DialogDescription>
                  Unlock the full potential of AI-powered research
                </DialogDescription>
              </DialogHeader>
              <div className="dialog-body">
                <div className="pro-feature-list">
                  {[
                    { icon: Zap, text: "Unlimited searches", color: "yellow" },
                    { icon: Rocket, text: "Advanced AI models", color: "blue" },
                    { icon: Star, text: "Priority support", color: "purple" },
                    { icon: Heart, text: "Early access to features", color: "pink" }
                  ].map((feature, index) => (
                    <div key={index} className="pro-feature-item">
                      <div className={`pro-feature-icon ${feature.color}`}>
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="pro-feature-text">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="pro-pricing-card">
                  <div className="pro-pricing-amount">
                    $20<span className="pro-pricing-period">/month</span>
                  </div>
                  <div className="pro-pricing-note">Cancel anytime</div>
                </div>
              </div>
              <DialogFooter>
                <button className="pro-button">
                  Start Free Trial
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Sign In Button with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:border-transparent font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-10 min-w-[100px]">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </DialogTrigger>
            <DialogContent className="signin-modal">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-center gap-2">
                  <LogIn className="w-6 h-6 text-blue-600" />
                  Welcome Back
                </DialogTitle>
                <DialogDescription>
                  Sign in to your account
                </DialogDescription>
              </DialogHeader>
              <div className="dialog-body">
                <div className="signin-form-group">
                  <label className="signin-label">Email</label>
                  <Input type="email" placeholder="Enter your email" className="signin-input" />
                </div>
                <div className="signin-form-group">
                  <label className="signin-label">Password</label>
                  <Input type="password" placeholder="Enter your password" className="signin-input" />
                </div>
              </div>
              <DialogFooter>
                <button className="signin-button">
                  Sign In
                </button>
              </DialogFooter>
              <div className="signin-footer">
                Don't have an account? <span className="signin-link">Sign up</span>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex-center px-8 py-12 relative z-10 min-h-[calc(100vh-80px)]">
        <div className="perplexity-container text-center w-full">
          {/* Hero Section */}
          <div className="element-spacing">
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <h1 className="relative text-hero">
                <span className="block bg-gradient-to-r from-purple-600 via-pink-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-pulse mb-3">
                  Where
                </span>
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
                  knowledge
                </span>
                <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  begins ✨
                </span>
              </h1>
            </div>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold leading-relaxed">
                Ask anything and get{' '}
                <span className="text-purple-600 font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  instant
                </span>
                {', '}
                <span className="text-blue-600 font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  accurate answers
                </span>
                {' backed by '}
                <span className="text-emerald-600 font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  trusted sources
                </span>
                .
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="search-container">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="search-input-wrapper shadow-2xl hover:shadow-purple-500/25">
                <div className="flex items-center">
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <Input
                    type="text"
                    placeholder="Ask anything... ✨🚀💡"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input perplexity-input focus:ring-0 focus:outline-none font-medium"
                  />
                  <Button
                    type="submit"
                    disabled={!query.trim()}
                    className="search-button perplexity-button bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xl p-0 border-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </form>

          {/* Suggested Questions */}
          <div className="w-full px-4">
            <div className="space-y-8">
              <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ✨ Try these popular questions:
              </p>
              <div className="grid-cards max-w-4xl mx-auto">
                {suggestedQuestions.map((question, index) => {
                  const gradients = [
                    'from-purple-500 via-pink-500 to-red-500',
                    'from-blue-500 via-cyan-500 to-teal-500', 
                    'from-green-500 via-emerald-500 to-cyan-500',
                    'from-orange-500 via-red-500 to-pink-500'
                  ];
                  const icons = [Star, Zap, Heart, Rocket];
                  const Icon = icons[index];
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(question)
                        router.push(`/search?q=${encodeURIComponent(question)}`)
                      }}
                      className={`relative group suggestion-card text-left text-white bg-gradient-to-br ${gradients[index]} hover-scale rounded-2xl border-0 smooth-transition hover-shadow font-semibold overflow-hidden`}
                    >
                      <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 transition-opacity">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="relative z-10">
                        <div className="text-sm mb-4 opacity-90 font-medium">Popular Question</div>
                        <div className="text-lg leading-relaxed">{question}</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 text-center relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/20 mt-auto">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            🚀 Powered by advanced AI technology ✨
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="hover:text-purple-600 cursor-pointer transition-colors px-2 py-1">Privacy Policy</span>
            <span className="hover:text-purple-600 cursor-pointer transition-colors px-2 py-1">Terms of Service</span>
            <span className="hover:text-purple-600 cursor-pointer transition-colors px-2 py-1">About</span>
            <span className="hover:text-purple-600 cursor-pointer transition-colors px-2 py-1">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

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
    <div className="min-h-screen landing-bg-enhanced flex flex-col relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs with enhanced colors */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse floating-enhanced animate-colorful-glow"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-500 via-blue-600 via-purple-600 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-45 animate-pulse animate-colorful-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 via-emerald-500 via-teal-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animate-colorful-glow" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary decorative elements with rainbow colors */}
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full mix-blend-multiply filter blur-lg opacity-45 animate-pulse animate-colorful-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-pulse animate-colorful-glow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-10 w-36 h-36 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-lg opacity-35 animate-pulse animate-colorful-glow" style={{animationDelay: '5s'}}></div>
        
        {/* Enhanced floating shapes with vibrant colors */}
        <div className="absolute top-1/4 left-20 w-10 h-10 bg-gradient-to-r from-pink-600 to-red-600 rounded-full animate-bounce opacity-80 shadow-lg shadow-pink-500/50" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full animate-bounce opacity-70 shadow-lg shadow-cyan-500/50" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full animate-bounce opacity-60 shadow-lg shadow-yellow-500/50" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/2 right-1/5 w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full animate-bounce opacity-70 shadow-lg shadow-green-500/50" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-1/5 left-1/5 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-bounce opacity-75 shadow-lg shadow-purple-500/50" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-bounce opacity-65 shadow-lg shadow-indigo-500/50" style={{animationDelay: '5.5s'}}></div>
      </div>
      
      {/* Header */}
      <header className="perplexity-header flex-between relative z-10 bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-orange-500/90 backdrop-blur-xl border-b-2 border-white/30">
        <div className="flex-start space-x-4">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 via-pink-500 via-purple-500 via-blue-500 via-green-500 to-yellow-400 rounded-2xl blur opacity-75 animate-pulse bg-[length:400%_400%] animate-gradient"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 hover:shadow-cyan-400/70 transition-all duration-500 transform hover:scale-110">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-pink-400 via-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent tracking-tight animate-pulse">Perplexity</span>
            <span className="text-xs font-semibold text-cyan-200/90 -mt-1 animate-pulse">AI Powered</span>
          </div>
        </div>
        
        <div className="button-group-enhanced">
          {/* Try Pro Button with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 to-pink-500 hover:from-red-500 hover:via-yellow-500 hover:via-pink-500 hover:to-purple-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 h-10 min-w-[110px] animate-pulse">
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
              <Button variant="outline" className="border-3 border-cyan-400 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-cyan-300 font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-400/50 transform hover:scale-110 transition-all duration-300 h-10 min-w-[100px]">
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
      <main className="main-content-container relative z-10">
        <div className="perplexity-container perfect-center w-full">
          {/* Hero Section */}
          <div className="hero-container-enhanced">
            <div className="relative mb-6">
              <div className="absolute -inset-6 bg-gradient-to-r from-pink-600 via-purple-600 via-blue-500 via-cyan-500 via-green-500 via-yellow-500 to-orange-600 rounded-3xl blur-3xl opacity-30 animate-pulse animate-gradient bg-[length:400%_400%]"></div>
              <h1 className="relative title-enhanced">
                <span className="block bg-gradient-to-r from-pink-500 via-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text text-transparent animate-pulse mb-3 bg-[length:200%_200%]">
                  Where
                </span>
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 via-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-3 bg-[length:200%_200%]">
                  knowledge
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-red-400 bg-clip-text text-transparent bg-[length:200%_200%]">
                  begins ✨
                </span>
              </h1>
            </div>
            <div className="content-max-width">
              <p className="subtitle-enhanced text-gray-700">
                Ask anything and get{' '}
                <span className="text-pink-600 font-black bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  instant
                </span>
                {', '}
                <span className="text-blue-600 font-black bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  accurate answers
                </span>
                {' backed by '}
                <span className="text-emerald-600 font-black bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                  trusted sources
                </span>
                .
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-section-enhanced">
            <form onSubmit={handleSubmit} className="search-container">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 via-purple-600 via-blue-500 via-cyan-500 to-pink-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500 bg-[length:400%_400%] animate-gradient"></div>
              <div className="search-input-wrapper shadow-2xl hover:shadow-purple-500/25">
                <div className="flex items-center">
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
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
                    className="search-button perplexity-button bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 hover:from-cyan-500 hover:via-blue-600 hover:via-purple-600 hover:to-pink-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 p-0 border-0 transform hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </Button>
                </div>
              </div>
              </div>
            </form>
          </div>          {/* Suggested Questions */}
          <div className="questions-section-enhanced">
            <div className="section-spacing-enhanced">
              <p className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-8 text-center animate-pulse">
                ✨ Try these popular questions:
              </p>
              <div className="cards-grid-perfect">
                {suggestedQuestions.map((question, index) => {
                  const glowClasses = ['card-glow-1', 'card-glow-2', 'card-glow-3', 'card-glow-4'];
                  const gradients = [
                    'from-pink-600 via-red-500 via-orange-500 via-yellow-500 to-orange-600',
                    'from-cyan-500 via-blue-600 via-purple-600 via-pink-500 to-red-500', 
                    'from-green-500 via-emerald-600 via-teal-500 via-cyan-500 to-blue-500',
                    'from-purple-600 via-pink-600 via-red-500 via-orange-500 to-yellow-500'
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
                      className={`suggestion-card-enhanced ${glowClasses[index]} text-white bg-gradient-to-br ${gradients[index]} hover-scale smooth-transition font-semibold animate-gradient bg-[length:200%_200%] shadow-2xl hover:shadow-3xl border-2 border-white/20 hover:border-white/40`}
                    >
                      <div className="absolute top-6 right-6 opacity-80 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                      </div>
                      <div className="relative z-10">
                        <div className="text-sm mb-4 opacity-90 font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">Popular Question</div>
                        <div className="text-lg leading-relaxed font-semibold drop-shadow-lg">{question}</div>
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
      <footer className="landing-footer text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-cyan-500 to-green-400 bg-clip-text text-transparent animate-pulse">
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

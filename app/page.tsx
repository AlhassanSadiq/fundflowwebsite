"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CheckCircle, TrendingUp, BarChart3, DollarSign, Clock, Shield, Users, Menu, X, ArrowRight, Star, Zap, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Image
                src="/images/fundflow-logo.png"
                alt="FundFlow Capital"
                width={160}
                height={40}
                className={`h-8 w-auto transition-all duration-300 ${
                  scrolled ? 'scale-110' : 'scale-100'
                }`}
              />

              <div className="hidden md:flex items-center space-x-8">
                <Link href="#how-it-works" className="group relative text-gray-300 hover:text-white font-medium transition-all duration-300">
                  How it Works
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#plans" className="group relative text-gray-300 hover:text-white font-medium transition-all duration-300">
                  Plans
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#affiliate" className="group relative text-gray-300 hover:text-white font-medium transition-all duration-300">
                  Affiliate
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/support" className="group relative text-gray-300 hover:text-white font-medium transition-all duration-300">
                  Support
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-2 group">
                <Users className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <Link href="#discord" className="text-gray-300 hover:text-white font-medium transition-colors duration-300">
                  Discord
                </Link>
              </div>
              <Link href="/login" className="text-gray-300 hover:text-white font-medium transition-colors duration-300">
                Login
              </Link>
              <Button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-lg px-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Funded 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 border-l border-gray-700/50 shadow-2xl">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 p-4 bg-gray-800/30 rounded-xl mx-4 mt-4">
                      <Image
                        src="/images/fundflow-logo.png"
                        alt="FundFlow Capital"
                        width={140}
                        height={35}
                        className="h-7 w-auto"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 rounded-full"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-2 px-4 flex-1">
                      <div className="space-y-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Navigation</h3>
                        <Link
                          href="#how-it-works"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                          How it Works
                        </Link>
                        <Link
                          href="#plans"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                          Plans
                        </Link>
                        <Link
                          href="#affiliate"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                          Affiliate
                        </Link>
                        <Link
                          href="/support"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                          Support
                        </Link>
                      </div>

                      <div className="border-t border-gray-700/50 my-6"></div>

                      <div className="space-y-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Community</h3>
                        <div className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group">
                          <Users className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                          <Link
                            href="#discord"
                            className="flex-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Discord
                          </Link>
                        </div>
                      </div>

                      <div className="border-t border-gray-700/50 my-6"></div>

                      <div className="space-y-1">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Account</h3>
                        <Link
                          href="/login"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-gray-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                          Login
                        </Link>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="p-4">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-xl px-6 py-4 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Get Funded →
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center">
        {/* Background Gradient Spheres */}
        <div className="absolute inset-0">
          {/* Large gradient sphere - top right */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-blue-900/30 rounded-full blur-3xl transform translate-x-32 -translate-y-32 animate-float"></div>

          {/* Medium gradient sphere - left */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-br from-blue-900/40 via-cyan-400/30 to-blue-600/20 rounded-full blur-3xl transform -translate-x-40 -translate-y-20 animate-float-delayed"></div>

          {/* Small gradient sphere - bottom right */}
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-cyan-300/40 to-blue-900/30 rounded-full blur-2xl animate-pulse-slow"></div>

          {/* Additional floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full blur-xl animate-bounce-slow"></div>
          
          {/* New floating elements */}
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-md animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-8 animate-slide-in-left">
              {/* Trading Program Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 group hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-cyan-400 text-sm font-medium">Trading Program</span>
                <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors duration-300">Learn how it works →</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>Manage</span>
                  <br />
                  <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    simulated <span className="text-cyan-400 relative">
                      capital
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></span>
                    </span>
                  </span>
                  <br />
                  <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.6s'}}>up to $450K</span>
                </h1>
              </div>

              {/* Get Started Section */}
              <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <h3 className="text-white font-medium">Get started today</h3>
                <p className="text-gray-400 text-sm max-w-md">
                  Sign up, select your desired challenge account and Get Funded
                </p>
                <Button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-lg px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Choose your Plan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Center Content - Stats Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Performance Split Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-float group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">Up to 90%</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Performance split upgrade available at checkout</div>
              </div>

              {/* Account Types Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-float-delayed group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Account types
                  <br />
                  Starter and Expert
                </div>
              </div>

              {/* Platforms Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 animate-bounce-slow group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">3</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Platforms
                  <br />
                  available
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative group">
                {/* Phone Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-[3rem] blur-2xl scale-110 group-hover:scale-125 transition-all duration-700"></div>

                {/* Phone Mockup */}
                <div className="relative bg-gray-800 rounded-[3rem] p-2 border border-gray-700 shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-500">
                  <div className="bg-gray-900 rounded-[2.5rem] p-6 h-[600px] w-[300px]">
                    {/* Phone Screen Content */}
                    <div className="space-y-6">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-white text-sm">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">FundFlow</h3>
                      </div>

                      {/* Trading Stats */}
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-4 group-hover:bg-gray-700/80 transition-all duration-300">
                          <div className="text-gray-400 text-sm mb-1">Account Balance</div>
                          <div className="text-white text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">$127,450</div>
                          <div className="text-green-400 text-sm">+12.5% today</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-800 rounded-xl p-3 group-hover:bg-gray-700/80 transition-all duration-300">
                            <div className="text-gray-400 text-xs mb-1">P&L</div>
                            <div className="text-green-400 font-semibold">+$2,450</div>
                          </div>
                          <div className="bg-gray-800 rounded-xl p-3 group-hover:bg-gray-700/80 transition-all duration-300">
                            <div className="text-gray-400 text-xs mb-1">Win Rate</div>
                            <div className="text-cyan-400 font-semibold">87%</div>
                          </div>
                        </div>
                      </div>

                      {/* Chart Placeholder */}
                      <div className="bg-gray-800 rounded-xl p-4 h-32 flex items-end justify-between group-hover:bg-gray-700/80 transition-all duration-300">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-cyan-400 to-blue-500 rounded-sm transition-all duration-300 hover:scale-y-110"
                            style={{ height: `${Math.random() * 80 + 20}%`, width: "8px" }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Info Card */}
                <div className="absolute -top-8 -right-4 lg:-right-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 max-w-xs z-10 group-hover:scale-105 transition-all duration-300">
                  <p className="text-white text-sm font-medium mb-2">
                    Showcase your skills in our one step evaluation and receive up to $450K in simulated capital.
                  </p>
                  <p className="text-cyan-400 text-sm">The Future is now</p>
                </div>

                {/* Action Buttons */}
                <div className="absolute -bottom-8 -right-4 lg:-right-12 flex flex-col gap-3 z-10">
                  <Button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-lg px-6 transition-all duration-300 transform hover:scale-105">
                    Get Funded 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="group border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent rounded-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Join our Discord
                    <Users className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-blue-900/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-900/15 via-cyan-400/10 to-blue-600/5 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6 group">
              Choose Your Plan
              <span className="inline-block ml-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">✨</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan to start your funded trading journey and unlock your potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="relative group animate-scale-in hover:z-10" style={{ animationDelay: "0.1s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-3xl blur-xl group-hover:from-cyan-400/20 group-hover:to-blue-600/20 transition-all duration-500 scale-100 group-hover:scale-105"></div>

              <Card className="relative border-2 border-gray-700/50 hover:border-gray-600 transition-all duration-500 bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden h-full transform group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500"></div>

                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Starter</CardTitle>
                  <CardDescription className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">Perfect for new traders</CardDescription>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      80<span className="text-2xl">%</span>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">profit split</div>
                    <div className="inline-flex items-center gap-2 bg-gray-700/50 rounded-full px-3 py-1 text-xs text-gray-300 group-hover:bg-cyan-400/20 group-hover:text-cyan-300 transition-all duration-300">
                      <Shield className="h-3 w-3" />
                      Standard Protection
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Unlimited trading days</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Payouts every 14 calendar days</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">24-48 hour processing</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Free Level 1 data</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-0 rounded-xl px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:from-cyan-600 group-hover:to-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Professional Plan */}
            <div className="relative group animate-scale-in hover:z-10" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-3xl blur-xl group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-all duration-500 scale-100 group-hover:scale-105"></div>

              <Card className="relative border-2 border-blue-500/50 hover:border-blue-400 transition-all duration-500 bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden h-full transform group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500"></div>

                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Professional</CardTitle>
                  <CardDescription className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">For growing traders</CardDescription>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      85<span className="text-2xl">%</span>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">profit split</div>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full px-3 py-1 text-xs text-blue-300 border border-blue-400/30 group-hover:from-blue-400/30 group-hover:to-cyan-300/30 transition-all duration-300">
                      <Shield className="h-3 w-3" />
                      Enhanced Protection
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-blue-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Fund in as little as 5 days</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-blue-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Priority support</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-blue-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Payouts every 14 calendar days</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-blue-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Free Level 1 data</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 rounded-xl px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-blue-500/25">
                    Get Professional
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Expert Plan */}
            <div className="relative group animate-scale-in hover:z-10" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-3xl blur-xl group-hover:from-cyan-400/40 group-hover:to-blue-600/40 transition-all duration-500 scale-100 group-hover:scale-105"></div>

              <Card className="relative border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-500 bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden h-full mt-6 transform group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-cyan-300 group-hover:to-blue-500 transition-all duration-500"></div>

                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Expert</CardTitle>
                  <CardDescription className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">For experienced traders</CardDescription>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      90<span className="text-2xl">%</span>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">profit split</div>
                    <div className="text-cyan-400 text-xs font-semibold group-hover:text-cyan-300 transition-colors duration-300">+ optional 10% upgrade</div>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full px-3 py-1 text-xs text-cyan-300 border border-cyan-400/30 group-hover:from-cyan-300/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <Shield className="h-3 w-3" />
                      Premium Protection
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Fund in as little as 3 days</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">No max request amount</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Payouts every 14 calendar days</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-cyan-400" />
                      </div>
                      <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Free Level 1 data</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white border-0 rounded-xl px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-cyan-500/25">
                    Get Funded Now 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-white mb-8 group">
              Available Account Sizes
              <span className="inline-block ml-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">💰</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["$25K", "$50K", "$100K", "$150K", "$200K", "$300K", "$450K"].map((size, index) => (
                <div
                  key={size}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl px-6 py-3 text-white font-semibold hover:border-cyan-400 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-blue-900/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-900/15 via-cyan-400/10 to-blue-600/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-4 group">
              How It Works
              <span className="inline-block ml-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">🚀</span>
            </h2>
            <p className="text-xl text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Get funded in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group animate-slide-in-up hover:z-10" style={{ animationDelay: "0.1s" }}>
              <div className="relative">
                <div className="bg-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-400/25">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-cyan-400 rounded-full w-16 h-16 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">1. Get Funded</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Choose your plan and complete the simple application process</p>
            </div>

            <div className="text-center group animate-slide-in-up hover:z-10" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-900/25">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-blue-900 rounded-full w-16 h-16 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">2. Dashboard</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Advanced analytics to evaluate performance, recognize patterns, improve consistency
              </p>
            </div>

            <div className="text-center group animate-slide-in-up hover:z-10" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="bg-green-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-green-400/25">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-green-400 rounded-full w-16 h-16 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">3. Payment</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Receive your profits every 14 days with 24-48 hour processing</p>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="hidden md:block relative mt-16">
            <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400/50 to-blue-900/50 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-900/50 to-green-400/50 transform -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Affiliate Program */}
      <section id="affiliate" className="py-20 bg-gray-900 relative overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-900/15 via-cyan-400/10 to-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">Affiliate Program</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Partner with FundFlow Capital and earn competitive commissions while helping traders achieve their goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">High Commission Rates</h3>
                    <p className="text-gray-400">
                      Earn up to 25% commission on every successful referral with lifetime payouts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Marketing Support</h3>
                    <p className="text-gray-400">Access professional marketing materials, banners, and landing pages</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Real-Time Analytics</h3>
                    <p className="text-gray-400">
                      Track your performance with detailed analytics and conversion metrics
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fast Payouts</h3>
                    <p className="text-gray-400">
                      Receive your commissions every 14 days with reliable payment processing
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white border-0 rounded-xl px-8 py-4 text-lg font-semibold">
                Join Affiliate Program →
              </Button>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                    25%
                  </div>
                  <div className="text-gray-400 text-sm">Commission Rate</div>
                </Card>

                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                    $500+
                  </div>
                  <div className="text-gray-400 text-sm">Avg. Monthly Earnings</div>
                </Card>

                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                    1000+
                  </div>
                  <div className="text-gray-400 text-sm">Active Affiliates</div>
                </Card>

                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                    14
                  </div>
                  <div className="text-gray-400 text-sm">Day Payout Cycle</div>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Top Affiliate</div>
                    <div className="text-gray-400 text-sm">This Month</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">$2,450</div>
                <div className="text-cyan-400 text-sm">+18% from last month</div>
              </Card>
            </div>
          </div>

          {/* How to Get Started */}
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-8">How to Get Started</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Sign Up</h4>
                <p className="text-gray-400">Complete our simple affiliate application form</p>
              </div>

              <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Get Approved</h4>
                <p className="text-gray-400">Receive your unique affiliate links and marketing materials</p>
              </div>

              <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Start Earning</h4>
                <p className="text-gray-400">Share your links and earn commissions on every successful referral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payout Policy */}
      <section className="py-20 bg-gray-900 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Payout Policy</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Buffer Zones</h3>
                <p className="text-gray-400">Protected trading zones to ensure consistent performance</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">14-Day Intervals</h3>
                <p className="text-gray-400">Regular payout schedule every 14 calendar days</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <DollarSign className="h-6 w-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">$100 Minimum</h3>
                <p className="text-gray-400">Minimum profit requirement for withdrawal requests</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TrendingUp className="h-6 w-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Tiered Withdrawals</h3>
                <p className="text-gray-400">Flexible withdrawal amounts based on performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Community */}
      <section className="py-20 bg-gray-800 text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Stay updated with market insights and connect with fellow traders
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Input placeholder="Enter your email" className="max-w-sm bg-white text-gray-900" />
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-lg px-6">
              Subscribe
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent rounded-lg"
            >
              <Users className="h-4 w-4 mr-2" />
              Discord
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent rounded-lg"
            >
              <Users className="h-4 w-4 mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/fundflow-logo.png"
                alt="FundFlow Capital"
                width={160}
                height={40}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">Empowering traders worldwide with professional funding solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-cyan-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-cyan-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-cyan-400">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-cyan-400">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-cyan-400">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-cyan-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-cyan-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/risk" className="hover:text-cyan-400">
                    Risk Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FundFlow Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40 animate-bounce-slow">
        <Button 
          className="group bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white border-0 rounded-full w-16 h-16 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <TrendingUp className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        </Button>
      </div>

      {/* Enhanced Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  )
}

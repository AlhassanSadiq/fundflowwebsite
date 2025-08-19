"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Shield, Users, TrendingUp, BarChart3, Target, Globe, Menu, X } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Image
                src="/images/fundflow-logo.png"
                alt="FundFlow Capital"
                width={160}
                height={40}
                className="h-8 w-auto"
              />

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Home
                </Link>
                <Link href="/support" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Support
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400" />
                <Link href="#community" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Community
                </Link>
              </div>
              <Link href="/login" className="text-gray-300 hover:text-white font-medium transition-colors">
                Login
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-lg px-6">
                Get Funded →
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
                          href="/"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                          Home
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
                            href="#community"
                            className="flex-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Community
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

      {/* Hero */}
      <section className="relative min-h-[60vh] bg-gray-900 overflow-hidden flex items-center animate-fade-in-up">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-blue-900/30 rounded-full blur-3xl transform translate-x-32 -translate-y-32 animate-float"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-br from-blue-900/40 via-cyan-400/30 to-blue-600/20 rounded-full blur-3xl transform -translate-x-40 -translate-y-20 animate-float-delayed"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-cyan-300/40 to-blue-900/30 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="max-w-3xl animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
              <span className="text-cyan-400 text-sm font-medium">Trading Program</span>
              <Link href="/#how-it-works" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Learn how it works →</Link>
            </div>
            <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Empowering traders with fair, transparent, and fast funding
            </h1>
            <p className="mt-4 text-gray-400 text-lg">
              We provide futures traders the opportunity to grow with simulated capital, modern tools, and a
              supportive community.
            </p>
            <div className="mt-6">
              <Link href="/#plans">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white border-0 rounded-xl px-8 py-4 text-lg font-semibold">
                  Choose Your Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
                <CardDescription>
                  Enable disciplined traders to scale faster through a one-step evaluation and transparent
                  profit sharing.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                We focus on simplicity, fairness, and speed: simple rules, fair splits, and payouts on a
                predictable cadence.
              </CardContent>
            </Card>

            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
                <CardDescription>
                  A global, data-driven funding platform where talented futures traders thrive.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                We aspire to elevate trader performance using analytics, high-quality education, and modern
                tooling.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-800 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">Principles that guide how we build and support traders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white mb-2">Integrity</CardTitle>
              <CardDescription className="text-gray-400">
                Clear rules, fair evaluations, and dependable payouts.
              </CardDescription>
            </Card>

            <Card className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white mb-2">Performance</CardTitle>
              <CardDescription className="text-gray-400">
                Tools and insights that help traders execute consistently.
              </CardDescription>
            </Card>

            <Card className="bg-gray-900/40 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white mb-2">Transparency</CardTitle>
              <CardDescription className="text-gray-400">
                Straightforward pricing, rules, and performance analytics.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section id="community" className="py-16 bg-gray-800 text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get funded?</h2>
          <p className="text-xl text-gray-300 mb-8">Choose your plan and start your journey today.</p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white border-0 rounded-xl px-8 py-4 text-lg font-semibold">
              Choose Your Plan
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent rounded-lg"
            >
              <Users className="h-4 w-4 mr-2" /> Join our Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-top border-gray-800 animate-fade-in">
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
    </div>
  )
}



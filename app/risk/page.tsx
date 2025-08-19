"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Shield, Users, Menu, X, AlertTriangle, TrendingDown, DollarSign, Clock, Scale, BarChart3, Zap, Target, Info } from "lucide-react"
import { useState } from "react"

export default function RiskPage() {
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
                <Link href="/about" className="text-gray-300 hover:text-white font-medium transition-colors">
                  About
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
                          href="/about"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                          About
                        </Link>
                        <Link
                          href="/support"
                          className="flex items-center gap-3 text-gray-300 hover:text-white font-medium transition-all duration-200 p-3 rounded-xl hover:bg-gray-800/50 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-400/20 via-orange-500/10 to-red-900/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32 animate-float"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-br from-red-900/20 via-orange-400/10 to-red-600/20 rounded-full blur-3xl transform -translate-x-40 -translate-y-20 animate-float-delayed"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Risk & Compliance</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Risk Disclosure
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trading involves substantial risk of loss and is not suitable for all investors. Please read this disclosure carefully before making any trading decisions.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Important Notice */}
            <Card className="bg-red-900/20 backdrop-blur-sm border border-red-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Important Risk Notice</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="text-red-200 font-medium">
                  <strong>WARNING:</strong> Trading futures contracts involves substantial risk of loss and is not suitable for all investors. You can lose more than your initial investment.
                </p>
                <p>
                  Before deciding to trade, you should carefully consider your objectives, financial situation, needs, and level of experience. You should be aware of all the risks associated with futures trading and seek advice from an independent financial advisor if you have any doubts.
                </p>
              </CardContent>
            </Card>

            {/* Market Risk */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Market Risk</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Futures markets are inherently volatile and unpredictable. Key market risks include:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Price Volatility:</strong> Rapid and significant price movements can occur at any time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Market Gaps:</strong> Prices may gap up or down between trading sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Economic Events:</strong> News, economic data, and geopolitical events can cause sudden market moves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Liquidity Issues:</strong> Some markets may become illiquid during volatile periods</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Leverage Risk */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Leverage and Margin Risk</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Futures trading involves significant leverage, which can amplify both gains and losses:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>High Leverage:</strong> Small market movements can result in large losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Margin Calls:</strong> You may be required to deposit additional funds to maintain positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Forced Liquidation:</strong> Positions may be automatically closed if margin requirements are not met</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Account Depletion:</strong> Losses can exceed your initial investment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Trading Strategy Risks */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Trading Strategy Risks</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Different trading strategies carry their own unique risks:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Day Trading:</strong> Requires constant monitoring and quick decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Swing Trading:</strong> Overnight risk and weekend gaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Position Sizing:</strong> Over-leveraging can lead to catastrophic losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Risk Management:</strong> Failure to use stop-losses can result in unlimited losses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Technical Risk */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Technical and System Risks</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Trading platforms and systems can experience technical issues:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Platform Failures:</strong> System outages can prevent trading or order execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Internet Issues:</strong> Connection problems can disrupt trading activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Data Delays:</strong> Market data may be delayed or inaccurate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Order Execution:</strong> Orders may not execute at expected prices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Psychological Risk */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Psychological and Emotional Risks</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Emotional decision-making can significantly impact trading performance:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Fear and Greed:</strong> Emotional responses can lead to poor trading decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Revenge Trading:</strong> Trying to recover losses can lead to bigger losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Overconfidence:</strong> Success can lead to excessive risk-taking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Stress:</strong> Trading stress can affect decision-making and health</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Regulatory Risk */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Regulatory and Legal Risks</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Trading activities are subject to various regulations and legal requirements:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Regulatory Changes:</strong> New laws or regulations may affect trading activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Tax Implications:</strong> Trading profits and losses have tax consequences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Compliance Requirements:</strong> Failure to comply can result in penalties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Jurisdictional Issues:</strong> Different rules may apply in different regions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* FundFlow Specific Risks */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">FundFlow Capital Specific Risks</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Our funding program carries additional considerations:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Evaluation Period:</strong> Must meet strict performance criteria to advance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Drawdown Limits:</strong> Exceeding maximum drawdown results in account termination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Profit Sharing:</strong> Profits are shared according to plan terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Account Rules:</strong> Must follow all trading rules and restrictions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Risk Mitigation */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Risk Mitigation Strategies</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>While risks cannot be eliminated, they can be managed:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Position Sizing:</strong> Never risk more than 1-2% of capital per trade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Stop Losses:</strong> Always use stop-loss orders to limit potential losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Diversification:</strong> Avoid concentrating risk in single positions or markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Education:</strong> Continuously learn and practice risk management techniques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Disclaimer and Acknowledgment</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>By using our services, you acknowledge and agree that:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You have read and understood this risk disclosure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You are aware of the risks involved in futures trading</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You have the financial capacity to bear potential losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You will not hold FundFlow Capital liable for trading losses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Questions About Risk?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>If you have questions about these risks or need clarification, please contact us:</p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                      <span>Risk Management: risk@fundflowcapital.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-400" />
                      <span>Support: support@fundflowcapital.com</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Scale className="h-5 w-5 text-cyan-400" />
                      <span>Compliance: compliance@fundflowcapital.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-blue-400" />
                      <span>General: info@fundflowcapital.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 border-t border-gray-700">
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
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                <li><Link href="/press" className="hover:text-cyan-400 transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-cyan-400 transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/status" className="hover:text-cyan-400 transition-colors">System Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/risk" className="hover:text-cyan-400 transition-colors">Risk Disclosure</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 FundFlow Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

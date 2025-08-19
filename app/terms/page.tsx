"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Shield, Users, Menu, X, FileText, CheckCircle, AlertTriangle, Clock, DollarSign, Scale } from "lucide-react"
import { useState } from "react"

export default function TermsPage() {
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-blue-900/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32 animate-float"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-br from-blue-900/20 via-cyan-400/10 to-blue-600/20 rounded-full blur-3xl transform -translate-x-40 -translate-y-20 animate-float-delayed"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
            <FileText className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Legal & Terms</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our trading platform. These terms govern your use of FundFlow Capital services.
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
            {/* Agreement */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  By accessing and using FundFlow Capital's trading platform and services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
                </p>
                <p>
                  These Terms apply to all users, visitors, and others who access or use our platform. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Service Description</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>FundFlow Capital provides a proprietary trading platform that offers:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Simulated Trading:</strong> Access to simulated capital for trading practice and evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Performance Evaluation:</strong> Assessment of trading skills and consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Funding Opportunities:</strong> Potential access to real trading capital based on performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Educational Resources:</strong> Trading tools, analytics, and learning materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* User Eligibility */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">User Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>To use our services, you must meet the following requirements:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Age:</strong> Be at least 18 years old or the age of majority in your jurisdiction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Legal Capacity:</strong> Have the legal capacity to enter into binding agreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Compliance:</strong> Comply with all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Prohibited Users:</strong> Not be a resident of restricted jurisdictions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Account Registration */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Account Registration</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>When creating an account, you agree to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Accurate Information:</strong> Provide accurate, current, and complete information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Security:</strong> Maintain the security of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Verification:</strong> Complete all required verification processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Updates:</strong> Keep your information updated and accurate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Trading Rules */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Trading Rules and Restrictions</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>All trading activities must comply with our established rules:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Risk Management:</strong> Adhere to maximum drawdown limits and position sizing rules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Trading Hours:</strong> Trade only during designated market hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Prohibited Strategies:</strong> No high-frequency trading, arbitrage, or scalping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Market Manipulation:</strong> No practices that could manipulate market prices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Payment and Payout Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Our payment and payout structure includes:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Evaluation Fees:</strong> One-time fees for challenge accounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Profit Sharing:</strong> Up to 90% profit split based on plan selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Payout Schedule:</strong> Bi-weekly payouts with 24-48 hour processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Minimum Withdrawal:</strong> $100 minimum for withdrawal requests</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Activities */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Prohibited Activities</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>The following activities are strictly prohibited:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Fraud:</strong> Any form of fraud, deception, or misrepresentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Multiple Accounts:</strong> Creating multiple accounts to circumvent rules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Sharing Accounts:</strong> Sharing account access with third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Illegal Activities:</strong> Any activities that violate applicable laws</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <X className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Account Termination</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We may terminate or suspend your account for:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Rule Violations:</strong> Breach of these Terms of Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Fraudulent Activity:</strong> Any suspected fraudulent behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Legal Requirements:</strong> Compliance with legal or regulatory requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Platform Security:</strong> Threats to platform security or integrity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>FundFlow Capital's liability is limited as follows:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Maximum Liability:</strong> Limited to the amount paid for services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Indirect Damages:</strong> No liability for indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Force Majeure:</strong> No liability for events beyond our reasonable control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Market Risks:</strong> No liability for trading losses or market fluctuations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Governing Law and Disputes</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>These Terms are governed by and construed in accordance with:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Jurisdiction:</strong> Laws of the jurisdiction where FundFlow Capital is incorporated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Dispute Resolution:</strong> Binding arbitration for any disputes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Class Actions:</strong> No class action lawsuits permitted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Venue:</strong> Disputes resolved in our designated jurisdiction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-cyan-400" />
                      <span>Legal: legal@fundflowcapital.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-400" />
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

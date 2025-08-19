"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Shield, Users, Menu, X, Lock, Eye, Database, Globe, Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function PrivacyPage() {
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
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Privacy & Security</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your privacy and data security are our top priorities. Learn how we protect your information and maintain transparency in our data practices.
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
            {/* Introduction */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  FundFlow Capital ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our trading platform and services.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-6">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Full name, email address, and phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Date of birth and government-issued identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Financial information and trading history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Address and contact information</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>IP address and device information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Browser type and operating system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Usage data and analytics</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We use the collected information for the following purposes:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Account Management:</strong> Creating and managing your trading account, verifying your identity, and processing transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Service Delivery:</strong> Providing our trading platform, customer support, and educational resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Security:</strong> Protecting against fraud, unauthorized access, and ensuring platform security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Communication:</strong> Sending important updates, notifications, and marketing communications (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Compliance:</strong> Meeting legal and regulatory requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Your Consent:</strong> When you explicitly authorize us to share your information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We implement comprehensive security measures to protect your personal information:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Encryption:</strong> All data is encrypted using industry-standard SSL/TLS protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Access Controls:</strong> Strict access controls and authentication measures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Regular Audits:</strong> Regular security audits and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Employee Training:</strong> Comprehensive security training for all employees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Access:</strong> Request access to your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Portability:</strong> Request a copy of your data in a portable format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Opt-out:</strong> Opt out of marketing communications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-cyan-400" />
                      <span>Email: privacy@fundflowcapital.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-400" />
                      <span>Phone: +1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-cyan-400" />
                      <span>Website: fundflowcapital.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-blue-400" />
                      <span>Data Protection Officer</span>
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

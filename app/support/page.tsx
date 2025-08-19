import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Phone, FileText, ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I get started with FundFlow Capital?",
      answer:
        "Getting started is simple! Choose your preferred plan (Starter or Expert), complete our evaluation process, and once you pass, you'll receive your funded account to start trading.",
    },
    {
      question: "What is the profit split structure?",
      answer:
        "Our Starter plan offers an 80% profit split, while our Expert plan provides a 90% profit split. The Expert plan also includes an optional 10% upgrade available at checkout.",
    },
    {
      question: "How long does the evaluation process take?",
      answer:
        "The evaluation process typically takes 1-3 business days once you've completed all requirements. Our Expert plan offers faster processing in as little as 3 days.",
    },
    {
      question: "What trading platforms do you support?",
      answer:
        "We support 3 major trading platforms including MetaTrader 4, MetaTrader 5, and our proprietary trading platform. All platforms come with advanced charting tools and real-time data.",
    },
    {
      question: "How often are payouts processed?",
      answer:
        "Payouts are processed every 14 calendar days for both Starter and Expert plans. Processing typically takes 24-48 hours once approved.",
    },
    {
      question: "Is there a maximum payout amount?",
      answer:
        "Our Expert plan has no maximum request amount, while our Starter plan has standard limits. You can find detailed payout information in your account dashboard.",
    },
  ]

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "24/7",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: "Response within 2 hours",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View Docs",
      available: "Always available",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/fundflow-logo.png"
                  alt="FundFlow Capital"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How it Works
                </Link>
                <Link href="/#plans" className="text-gray-300 hover:text-white transition-colors">
                  Plans
                </Link>
                <Link href="/#affiliate" className="text-gray-300 hover:text-white transition-colors">
                  Affiliate
                </Link>
                <Link href="/support" className="text-white font-medium">
                  Support
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord
              </Button>
              <Link href="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Get Funded →
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How can we{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                help you?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the support you need to succeed with FundFlow Capital. Our team is here to help you every step of the
              way.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="pl-12 py-4 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white">{option.title}</CardTitle>
                  <CardDescription className="text-gray-300">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-400 mb-4">{option.available}</p>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Send us a message</h2>
              <p className="text-gray-300">
                Can't find what you're looking for? Send us a detailed message and we'll get back to you within 2 hours.
              </p>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <Input
                      type="email"
                      className="bg-gray-700/50 border-gray-600 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      className="bg-gray-700/50 border-gray-600 text-white min-h-32"
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Find quick answers to common questions about FundFlow Capital</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
              >
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-left">{faq.question}</CardTitle>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/fundflow-logo.png"
                alt="FundFlow Capital"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Empowering traders with simulated capital up to $450K. Join thousands of successful traders worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/#how-it-works" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  How it Works
                </Link>
                <Link href="/#plans" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Plans
                </Link>
                <Link href="/#affiliate" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Affiliate
                </Link>
                <Link href="/support" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">24/7 Live Chat</p>
                <p className="text-gray-400 text-sm">support@fundflowcapital.com</p>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Risk Disclosure
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 FundFlow Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

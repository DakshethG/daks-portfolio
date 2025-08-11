"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Phone, Mail, X } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white relative">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
          <span className="text-lg font-semibold text-gray-900">
            Daksheth G <span className="text-gray-500 font-normal">/ SOFTWARE DEVELOPER</span>
          </span>
        </div>
        <nav className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-blue-600 text-sm font-medium hover:text-blue-700">
              ABOUT ME
            </Link>
            <Link href="/resume" className="text-gray-600 text-sm font-medium hover:text-gray-900">
              RESUME
            </Link>
            <Link href="/projects" className="text-gray-600 text-sm font-medium hover:text-gray-900">
              PROJECTS
            </Link>
            <Link href="/contact" className="text-gray-600 text-sm font-medium hover:text-gray-900">
              CONTACT
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
            <div className="flex flex-col py-4">
              <Link
                href="/"
                className="text-blue-600 text-sm font-medium hover:text-blue-700 px-6 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT ME
              </Link>
              <Link
                href="/resume"
                className="text-gray-600 text-sm font-medium hover:text-gray-900 px-6 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RESUME
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 text-sm font-medium hover:text-gray-900 px-6 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 text-sm font-medium hover:text-gray-900 px-6 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-140px)] sm:min-h-[calc(100vh-180px)]">
        {/* Left Section - Beige Background */}
        <div className="lg:w-3/5 bg-stone-300 relative flex items-center justify-center lg:justify-start px-4 sm:px-8 lg:pl-24 xl:pl-32 py-8 lg:py-16">
          {/* Profile Card */}
          <Card className="bg-stone-200 p-6 sm:p-8 text-center shadow-lg w-full max-w-xs">
            <div className="mb-6">
              {/* Profile Image - Circular and prominent */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-300 shadow-md">
                <Image
                  src="/images/daksheth-profile.jpeg"
                  alt="Daksheth G"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name - Bold and prominent */}
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Daksheth</h2>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">G</h2>

              {/* Blue accent line - design element */}
              <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-4"></div>

              {/* Title - Uppercase with letter spacing */}
              <p className="text-xs text-gray-600 tracking-[0.2em] font-medium uppercase">SOFTWARE DEVELOPER</p>
            </div>

            {/* Social Media Icons - Monochrome and evenly spaced */}
            <div className="flex justify-center gap-3 pt-2">
              <Link
                href="mailto:dakshethg@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/daksheth-gokul/"
                className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/DakshethG"
                className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link href="tel:+919600724422" className="text-gray-600 hover:text-gray-900 transition-colors p-2">
                <Phone className="w-6 h-6" />
              </Link>
              <Link
                href="https://leetcode.com/u/DakshethG/"
                className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/images/leetcode-logo.png" alt="LeetCode" width={24} height={24} className="w-6 h-6" />
              </Link>
            </div>
          </Card>
        </div>

        {/* Right Section - Introduction & Call-to-Actions - CENTERED */}
        <div className="lg:w-2/5 bg-white flex items-center justify-center p-8 lg:p-12 xl:p-16">
          <div className="max-w-md text-center lg:text-left">
            {/* Big, bold "Hello" as main visual grab */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 leading-tight break-words">
              Hello
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">{"Here's who I am & what I do"}</p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <Link href="/resume">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-sm tracking-wide uppercase transition-colors">
                  RESUME
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-50 font-medium text-sm tracking-wide uppercase transition-colors bg-transparent"
                >
                  PROJECTS
                </Button>
              </Link>
            </div>

            {/* Professional Description - replacing placeholder text */}
            <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
              <p>
                {
                  "I'm a final-year Computer Science & Engineering undergraduate with hands-on experience building web applications using React.js, Node.js, and MongoDB. I've completed two front-end internships and built a full-stack task manager project."
                }
              </p>
              <p>
                {
                  "I'm actively seeking opportunities to apply my technical skills in building user-focused products. With experience in modern web technologies and a passion for creating seamless user experiences, I'm ready to contribute to innovative development teams."
                }
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - MUCH SMALLER */}
      <footer className="bg-white px-6 py-2 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="text-xs text-gray-400">
            <p>© 2025 by Daksheth G.</p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="text-center">
              <p className="font-medium text-gray-700 mb-0.5">Call</p>
              <p className="text-gray-500">+91 9600724422</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-gray-700 mb-0.5">Write</p>
              <p className="text-gray-500">dakshethg@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-gray-700 mb-0.5">Follow</p>
              <div className="flex gap-1.5">
                <Link href="https://linkedin.com/in/daksheth-gokul/" className="text-gray-500 hover:text-gray-700">
                  <Linkedin className="w-3.5 h-3.5" />
                </Link>
                <Link href="https://github.com/DakshethG" className="text-gray-500 hover:text-gray-700">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://leetcode.com/u/DakshethG/"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/leetcode-logo.png"
                    alt="LeetCode"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

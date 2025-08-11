"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import Image from "next/image"

export default function ResumePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-stone-300">
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
            <Link href="/" className="text-gray-600 text-sm font-medium hover:text-gray-900">
              ABOUT ME
            </Link>
            <Link href="/resume" className="text-blue-600 text-sm font-medium hover:text-blue-700">
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
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
          <div className="flex flex-col py-4">
            <Link
              href="/"
              className="text-gray-600 text-sm font-medium hover:text-gray-900 px-6 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT ME
            </Link>
            <Link
              href="/resume"
              className="text-blue-600 text-sm font-medium hover:text-blue-700 px-6 py-3"
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

      {/* Main Content */}
      <main className="px-6 py-16">
        {/* Resume Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            <Link
              href="https://drive.google.com/file/d/1r5KepaZ95ak2My2XEgBHTE0RVep6CDXe/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full w-full sm:w-auto">
                DOWNLOAD RESUME
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <Card className="bg-white p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-blue-600 font-semibold text-lg mb-2">May 2025 – Jun 2025</h3>
                  <p className="font-semibold text-gray-900 mb-1">FRONT-END INTERN</p>
                  <p className="text-gray-600 text-sm mb-1">Yectra Technologies</p>
                  <p className="text-gray-600 text-sm">Coimbatore, India</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Collaborated with a team of 5+ engineers to develop a product search engine. Designed and developed
                    a 'Get Started' onboarding UI using React and TailwindCSS, improving user guidance.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Integrated search functionality with 4+ filter criteria to fetch and display product data in real
                    time. Tested and debugged 20+ UI issues using Chrome DevTools.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-blue-600 font-semibold text-lg mb-2">May 2024 – Jun 2024</h3>
                  <p className="font-semibold text-gray-900 mb-1">SUMMER FRONT-END INTERN</p>
                  <p className="text-gray-600 text-sm mb-1">BuddyPT</p>
                  <p className="text-gray-600 text-sm">Coimbatore, India</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Created 12+ user interface (UI) components (buttons, forms, tables, etc). Implemented and optimized
                    UI elements for a seamless user experience across 3 devices.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Took initiative to fix UI bugs and enhance design consistency. Collaborated with the development
                    team of 10+ members to refine and enhance the overall design.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h2>

          <Card className="bg-white p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-blue-600 font-semibold text-lg mb-2">Sep 2022 – Present</h3>
                <p className="font-semibold text-gray-900 mb-1">VELLORE INSTITUTE OF TECHNOLOGY</p>
                <p className="text-gray-600 text-sm mb-1">Bachelor of Technology</p>
                <p className="text-gray-600 text-sm">Vellore, Tamil Nadu</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Computer Science & Engineering - CGPA: 8.13/10. Relevant coursework includes Data Structures, Software
                  Engineering, Operating Systems, Database Management, and Web Programming.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Active member of Tamil Literary Association and Mozilla Firefox Club, participating in various
                  technical and cultural events.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Skills</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Programming Languages</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">Java</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">C/C++</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Frameworks & Technologies</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">React.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    <span className="text-gray-600 text-sm">TailwindCSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Certifications</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  <span className="text-gray-600 text-sm">AWS Certified Cloud Practitioner</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  <span className="text-gray-600 text-sm">AWS Academy Graduate</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer - MUCH SMALLER */}
      <footer className="bg-white px-6 py-2 border-t border-gray-100 mt-16">
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
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
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

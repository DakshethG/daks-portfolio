"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, X } from "lucide-react"

export default function ProjectsPage() {
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
            <Link href="/resume" className="text-gray-600 text-sm font-medium hover:text-gray-900">
              RESUME
            </Link>
            <Link href="/projects" className="text-blue-600 text-sm font-medium hover:text-blue-700">
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
                className="text-gray-600 text-sm font-medium hover:text-gray-900 px-6 py-3"
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
                className="text-blue-600 text-sm font-medium hover:text-blue-700 px-6 py-3"
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
      <main className="px-6 py-16">
        {/* Projects Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {
              "Here are some of the projects I've worked on, showcasing my skills in full-stack development, UI/UX design, and modern web technologies."
            }
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Project 1 - Task Manager */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="bg-white p-8 shadow-lg">
              <div className="border-l-4 border-blue-600 pl-4 mb-6">
                <h3 className="text-blue-600 font-semibold text-xl mb-2">Task Manager | MERN</h3>
                <p className="text-gray-600 text-sm">Full-Stack Developer</p>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Developed a full-stack task management system with role-based access control for Admins and Users.
                  Implemented authentication, file uploads, and responsive UI with 15+ React Components.
                </p>
                <p>
                  Features include JWT-based login system with secure role-based access, create/assign/update/delete
                  tasks with due dates, progress tracking, and file upload functionality using Multer.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Express.js</span>
                </div>
                <div className="mt-6">
                  <Link href="https://github.com/DakshethG/Task-Manager" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                      View Code on GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
            <div className="bg-gray-200 rounded-lg p-8 h-80 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Task Manager App"
                alt="Task Manager Project"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
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
                  <Linkedin className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://github.com/DakshethG"
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

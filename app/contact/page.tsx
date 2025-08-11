"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Loader2, X } from "lucide-react" // Import Loader2 for spinner
import Image from "next/image"
import { useActionState } from "react"
import { submitContactForm } from "./action"
import { useEffect, useRef, useState } from "react" // Import useEffect and useRef

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const formRef = useRef<HTMLFormElement>(null) // Create a ref for the form
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset() // Reset the form fields
    }
  }, [state?.success])

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
            <Link href="/projects" className="text-gray-600 text-sm font-medium hover:text-gray-900">
              PROJECTS
            </Link>
            <Link href="/contact" className="text-blue-600 text-sm font-medium hover:text-blue-700">
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
                className="text-gray-600 text-sm font-medium hover:text-gray-900 px-6 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 text-sm font-medium hover:text-blue-700 px-6 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6 py-16">
        <div className="w-full max-w-2xl">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
              <h1 className="text-4xl font-bold text-gray-900">{"Let's talk"}</h1>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white p-8 shadow-lg">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0"
                  />
                  {state?.errors?.firstName && <p className="text-red-500 text-xs mt-1">{state.errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0"
                  />
                  {state?.errors?.lastName && <p className="text-red-500 text-xs mt-1">{state.errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0"
                />
                {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0 resize-none"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
              {state?.message && (
                <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
                  {state.message}
                </p>
              )}
            </form>
          </Card>
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

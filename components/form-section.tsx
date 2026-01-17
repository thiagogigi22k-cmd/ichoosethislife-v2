"use client"

import type React from "react"

import { useState } from "react"

export function FormSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ name, email })
  }

  return (
    <section className="relative">
      {/* Background with golden coins */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/golden-coins-treasure-abundance-wealth-spiritual.jpg')",
        }}
      />

      <div className="relative px-6 py-10">
        {/* Form Card */}
        <div className="bg-white/95 rounded-3xl p-6 shadow-lg max-w-md mx-auto">
          <div className="text-center mb-6">
            <p className="flex items-center justify-center gap-2 text-lg font-bold mb-2">
              <span>🌟</span> Get Your Personalized Divine Script
            </p>
            <p className="text-gray-600 text-sm">
              Enter your details below to receive your custom Divine Script within the next few hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-400 to-purple-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:from-purple-500 hover:to-purple-600 transition-all"
            >
              <span>✨</span> Send Me My Personalized Divine Script <span>✨</span>
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-4">
            * Your information is secure and will never be shared
          </p>
        </div>
      </div>
    </section>
  )
}

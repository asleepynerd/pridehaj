"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github } from "lucide-react"
import { RibbonAnimation } from "./components/ribbon-animation"
import { FloatingElements } from "./components/floating-elements"

export default function PrideHaj() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      {}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50"
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"
          >
            PrideHaj
          </Link>
          <div className="flex items-center gap-6">
            <Link href="https:
              <Github className="h-5 w-5" />
            </Link>
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">Join Now</Button>
          </div>
        </nav>
      </motion.header>

      {}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <FloatingElements />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900">You Ship,</span>
                <span className="block text-gray-900">We Ship</span>
                <span className="relative block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                    Pride Blahaj
                  </span>
                  <br/>
                  <RibbonAnimation />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Join our 6-hour creative challenge. Build a pride-themed website, receive a cuddly Blahaj, and be part of
              something amazing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8 text-lg h-12">
                Start Creating
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black/10 hover:bg-black/5 rounded-full px-8 text-lg h-12"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { RibbonAnimation } from "@/components/ribbon-animation";
import { FloatingElements } from "@/components/floating-elements";
import { PrideFlags } from "@/components/pride-flags";
import { NavHeader } from "@/components/nav-header";
import "./pride.css";

export default function PrideHaj() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE5F9] via-white to-[#E5E5FF] overflow-hidden">
      <NavHeader />

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <PrideFlags />
        <FloatingElements />

        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 backdrop-blur-sm bg-white/40 rounded-3xl p-12 shadow-xl border border-white/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900">Celebrate Pride,</span>
                <span className="block text-gray-900">Ship Something</span>
                <span className="relative block">
                  <span className="lgbt">Awesome</span>
                  <br />
                  <RibbonAnimation />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 max-w-2xl mx-auto"
            >
              Join our pride-themed ysws! Create a website celebrating diversity
              and inclusion, get a Blahaj, and be part of our wonderful LGBTQ
              tech community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/faq">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#86007D]/20 hover:bg-[#86007D]/5 rounded-full px-8 text-lg h-12"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

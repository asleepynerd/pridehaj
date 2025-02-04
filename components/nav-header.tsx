"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between backdrop-blur-sm bg-white/30 rounded-full my-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"
        >
          PrideHaj
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/gallery"
            className="text-gray-600 hover:text-pink-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="https://github.com/hackclub/pridehaj"
            className="text-gray-600 hover:text-pink-600 transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">
            Join Now
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (
      currentTheme === "dark" ||
      (!currentTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-full my-4">
        <Link
          href="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"
        >
          PrideHaj
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/faq"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/gallery"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="https://github.com/asleepynerd/pridehaj"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

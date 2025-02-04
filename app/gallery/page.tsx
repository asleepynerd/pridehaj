"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "@/types/gallery";
import Image from "next/image";
import Link from "next/link";
import { PrideFlags } from "@/components/pride-flags";
import { NavHeader } from "@/components/nav-header";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-lg"
    >
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {project.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            by {project.creator}
          </p>
          {project.description && (
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export default function Gallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) {
        setError("Failed to load gallery projects");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE5F9] via-white to-[#E5E5FF] dark:from-[#0d0d1a] dark:via-[#0a0a14] dark:to-[#05050a] overflow-hidden">
      <NavHeader />
      <PrideFlags />

      <div className="relative z-10 container mx-auto px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          >
            Pride Project Gallery
          </motion.h1>

          {loading ? (
            <div className="text-center text-gray-600 dark:text-gray-400">
              Loading amazing projects...
            </div>
          ) : error ? (
            <div className="text-center text-red-600 dark:text-red-400">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

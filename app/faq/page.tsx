"use client";

import { motion } from "framer-motion";
import { NavHeader } from "@/components/nav-header";
import { PrideFlags } from "@/components/pride-flags";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  color: string;
  link?: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I get started?",
    answer:
      "Start by making a project! Code for a minimum of 6 hours and make a website around pride!",
    color: "bg-[#FF9B8D]",
    link: "/editor",
  },
  {
    question: "How do I get a Blahaj?",
    answer:
      "Make a project and post it in the #pridehaj channel in the Hack Club Slack as well as filling out the form. @josh will DM you with next steps.",
    color: "bg-[#98FB98]",
  },
  {
    question: "What can I make?",
    answer:
      "For now, the criteria is pretty general: anything cool that utilizes pride themes! Ask in #pridehaj for clarification.",
    color: "bg-[#87CEFA]",
  },
  {
    question: "How long is this running?",
    answer: "This is running until the end of February 2025!",
    color: "bg-[#DDA0DD]",
  },
  {
    question: "I need help!",
    answer:
      "Post about it in the #pridehaj channel! @josh will be online to help with anything you need.",
    color: "bg-[#FFB6C1]",
  },
  {
    question: "Where do I host my project?",
    answer:
      "You can host your project on Vercel, Netlify, or any other hosting service you want! I recommend Vercel (serverless) or Hack Clubs' Nest (server) for free hosting.",
    color: "bg-[#FFD700]",
  },
  {
    question: "Need a domain?",
    answer:
      "You can get a free lgbtq.dev or transfem.io domain! Just ask in #pridehaj and @josh will help you out.",
    color: "bg-[#FFB6C1]",
  },
];

function FAQCard({ item, index }: { item: FAQItem; index: number }) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 2 : -2 }}
      whileHover={{
        scale: 1.02,
        rotate: 0,
        transition: { duration: 0.2 },
      }}
      className={`${item.color} p-6 rounded-lg shadow-lg transform cursor-pointer`}
      style={{
        maxWidth: "400px",
        minHeight: "200px",
      }}
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.question}</h3>
      <p className="text-gray-800 leading-relaxed">{item.answer}</p>
    </motion.div>
  );

  return item.link ? <Link href={item.link}>{cardContent}</Link> : cardContent;
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE5F9] via-white to-[#E5E5FF] overflow-hidden">
      <NavHeader />
      <PrideFlags />

      <div className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-20"
          >
            FAQ
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQCard item={faq} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

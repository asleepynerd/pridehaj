"use client";

import { motion } from "framer-motion";

export function RibbonAnimation() {
  return (
    <motion.div
      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF0018] via-[#FFA52C] to-[#86007D]"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: 1,
        opacity: 1,
        background: [
          "linear-gradient(90deg, #FF0018, #FFA52C, #86007D)",
          "linear-gradient(90deg, #55CDFC, #F7A8B8, #FFFFFF)",
          "linear-gradient(90deg, #FF69B4, #9B4F96, #0038A8)",
          "linear-gradient(90deg, #FF0018, #FFA52C, #86007D)",
        ],
      }}
      transition={{
        duration: 0.6,
        background: {
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    />
  );
}

"use client";

import { motion } from "framer-motion";

const flags = [
  {
    colors: ["#FF0018", "#FFA52C", "#FFFF41", "#008018", "#0000F9", "#86007D"], 
    rotation: -15,
  },
  {
    colors: ["#FF69B4", "#FFF", "#9B4F96"], 
    rotation: 15,
  },
  {
    colors: ["#55CDFC", "#F7A8B8", "#FFFFFF", "#F7A8B8", "#55CDFC"], 
    rotation: -10,
  },
  {
    colors: ["#FCF434", "#FFFFFF", "#9C59D1", "#2C2C2C"], 
    rotation: 20,
  },
  {
    colors: ["#D60270", "#D60270", "#9B4F96", "#0038A8", "#0038A8"], 
    rotation: -20,
  },
];

export function PrideFlags() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flags.map((flag, index) => (
        <motion.div
          key={index}
          className="absolute w-[400px] h-[200px] opacity-40 blur-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.5, 0.4],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: flag.rotation,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 2,
            ease: "easeInOut",
          }}
          style={{
            background: `linear-gradient(90deg, ${flag.colors.join(", ")})`,
            left: `${index * 25 - 20}%`,
            top: `${index * 20 + 15}%`,
            boxShadow: "0 0 40px rgba(0,0,0,0.1)",
            borderRadius: "100px",
          }}
        />
      ))}
    </div>
  );
}

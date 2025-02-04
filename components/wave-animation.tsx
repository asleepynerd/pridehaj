"use client"

import { motion } from "framer-motion"

export default function WaveAnimation() {
  return (
    <div className="relative h-24">
      {[1, 2, 3].map((wave) => (
        <motion.div
          key={wave}
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: `rgba(255, 255, 255, ${0.1 * wave})`,
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 1000 100' xmlns='http:
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 1000 100' xmlns='http:
            maskRepeat: "repeat-x",
            WebkitMaskRepeat: "repeat-x",
          }}
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20 + wave * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}


"use client";

import { motion } from "framer-motion";

export function Loader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
      <p className="mt-4 text-lg text-muted-foreground">{text}</p>
    </div>
  );
}

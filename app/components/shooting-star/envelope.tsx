// components/Envelope.tsx
"use client";
import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants} from "framer-motion";

interface EnvelopeProps {
  children: ReactNode;
}

const flapVariants: Variants = {
  closed: { rotateX: 0, transition: { duration: 0.6 } },
  open:   { rotateX: -180, transition: { duration: 0.8, ease: "easeInOut" } },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } },
};

export default function Envelope({ children }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Envelope base */}
      <div className="relative w-[80%] max-w-xl h-auto bg-white rounded-b-lg overflow-hidden shadow-lg">
        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/3 bg-white origin-top center"
          style={{ transformOrigin: "top center" }}
          variants={flapVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        />
        {/* Letter content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="p-6 pt-12 bg-white"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {children} {/* Added: your letter JSX goes here */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

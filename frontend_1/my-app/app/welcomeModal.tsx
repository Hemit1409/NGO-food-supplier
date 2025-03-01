"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden={!isOpen}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            role="dialog"
            aria-labelledby="welcome-title"
          >
            <h2 id="welcome-title" className="text-3xl font-extrabold text-primary">
              Welcome to <span className="text-green-600">Food4Good</span>! 🍽️
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Join us in making a difference by reducing food waste and helping those in need.
              Discover donation opportunities, contribute to a meaningful cause, and be part of a
              community that cares. :-)
            </p>
            <p className="mt-2 text-gray-500 italic">Together, every meal counts.</p>
            <div className="mt-6">
              <Button variant="default" className="px-6 py-3 text-lg" onClick={() => setIsOpen(false)}>
                Get Started 🚀
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00B7FF] text-white shadow-[0_0_0_1px_rgba(0,183,255,0.4),0_10px_35px_-6px_rgba(0,102,255,0.7)] sm:bottom-8 sm:right-8"
        >
          <span className="absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-blue-intense/50 blur-xl" />
          <MessageCircle size={26} strokeWidth={2} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

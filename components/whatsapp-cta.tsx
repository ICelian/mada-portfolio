"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppCTA() {
  const phoneNumber = "33612345678";
  const message = encodeURIComponent(
    "Salut ! Je veux parler booking/collab 🎤"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neon-green text-black shadow-lg hover:shadow-[0_0_30px_rgba(0,255,159,0.6)] transition-all hover:scale-110 md:h-16 md:w-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </motion.a>
  );
}

"use client";

import { FaWhatsapp } from "react-icons/fa";
import { trackFloatingWhatsAppClick } from "@/utils/analytics";

export function WhatsAppButton() {
  const phoneNumber = "+918128826764";
  const message = "Hi, I'm interested in your mukhwas collection.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    // Track the WhatsApp click
    trackFloatingWhatsAppClick();

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
}

"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { trackFloatingWhatsAppClick } from "@/utils/analytics";
import { WhatsAppInterestDialog } from "./WhatsAppInterestDialog";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    trackFloatingWhatsAppClick();
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
      {open && (
        <WhatsAppInterestDialog open={open} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919969103022"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="/images/whatsapp.png"
                alt="whatsapp"
                className="w-14 h-14"
            />


        </a>
    );
};

export default WhatsAppButton;

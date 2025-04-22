"use client"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="hidden lg:block">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919996633422?text=Hi%20Pranav,%20I%20visited%20your%20portfolio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-2 md:right-8 z-[9999] bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919996633422"
        target="_blank"
        className="fixed bottom-20 md:bottom-24 right-2 md:right-8 z-[9999] bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;

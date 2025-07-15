import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile && isOpen) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navLinks = ["Home", "About", "Work", "Reviews", "Contact"];

  return (
    <>
      {/* Header */}
      <header className="container relative top-0 left-0 w-full h-20 flex items-center z-50 px-4">
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
          {/* Logo + Animated Name */}
          <a href="/" className="flex items-center space-x-2">
            <img src="/images/logo.svg" alt="Logo" className="w-8 h-8" />
            <motion.span
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white font-semibold text-lg hidden sm:inline"
            >
              Ghulam Ahmed
            </motion.span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg text-sm">
            {navLinks.slice(0, 4).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveLink(item)}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  activeLink === item
                    ? "bg-white text-black"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-white text-black text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-gray-200 transition"
          >
            Contact Me
          </a>

          {/* Hamburger Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="bg-white/10 backdrop-blur-lg h-8 w-8 flex items-center justify-center rounded-lg text-white hover:bg-white/20 transition"
            >
              <span className="material-symbols-rounded text-xl">menu</span>
            </button>
          )}
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="relative w-64 bg-white/10 backdrop-blur-lg p-6 rounded-xl m-4 space-y-4 text-white font-medium max-h-fit">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-white text-2xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Nav Links (Mobile) */}
            {navLinks.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActiveLink(item);
                  setIsOpen(false);
                }}
                className={`block px-4 py-2 rounded-lg ${
                  activeLink === item
                    ? "bg-white text-black"
                    : index === navLinks.length - 1
                    ? "text-white/70 hover:text-white"
                    : "hover:text-gray-300"
                } ${index === 0 ? "mt-12" : ""}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

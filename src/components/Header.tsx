import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import type { RootState } from "../redux/store";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [positionClass, setPositionClass] = useState("sticky");
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      setPositionClass(isNowMobile ? "absolute" : "sticky");
      if (!isNowMobile && isOpen) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      if (isOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Work", "Reviews", "Contact"];

  return (
    <>
      <header className={`${positionClass} top-0 left-0 w-full h-20 flex items-center z-50 px-4`}>
        <div className="container max-w-screen-xl mx-auto w-full flex items-center justify-between">
          {/* Logo with Name */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src={
                theme === "light"
                  ? "/images/logo_black.svg"
                  : "/images/logo.svg"
              }
              alt="Logo"
              className="w-8 h-8"
            />
            <motion.span
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`font-semibold text-lg inline ${theme === "light" ? "text-[#202018]" : "text-[#ffffff]"}`}
            >
              Ghulam Ahmed
            </motion.span>
          </a>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex gap-4 px-4 py-2 rounded-lg text-sm backdrop-blur-lg transition ${theme === "light"
                ? scrolled
                  ? "bg-white/60 rounded-2xl shadow-[0_8px_20px_5px_rgba(0,0,0,0.15)] border border-white/20"
                  : "bg-transparent"
                : scrolled
                  ? "bg-white/10 text-white rounded-2xl shadow-[0_8px_20px_5px_rgba(255,255,255,0.08)] border border-white/20"
                  : "bg-transparent text-white"
              }`}
          >
            {navLinks.slice(0, 4).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveLink(item)}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${activeLink === item
                    ? theme === "light"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                    : theme === "light"
                      ? "text-black"
                      : "text-white"
                  }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Contact + Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              className={`text-sm font-medium px-4 py-1.5 rounded-lg transition ${theme === "light"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-200"
                }`}
            >
              Contact Me
            </a>

            {/* Desktop Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`px-3 py-2 rounded-lg text-sm transition flex items-center justify-center ${theme === "light"
                  ? "bg-white/40 rounded-2xl backdrop-blur-md border border-black/20"
                  : "bg-white/10 text-white backdrop-blur-lg hover:bg-white/20"
                }`}
            >
              {theme === "light" ? (
                <FaMoon className="text-black" />
              ) : (
                <FaSun className="text-white" />
              )}
            </button>
          </div>

          {/* Hamburger Button (Mobile) */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className={`h-8 w-8 flex items-center justify-center rounded-lg text-xl transition backdrop-blur-lg ${theme === "light"
                  ? "dark:bg-[#202020]/60 text-black border border-gray-100 shadow-lg hover:bg-black/40"
                  : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              <span className="material-symbols-rounded">menu</span>
            </button>
          )}
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
            <div
              id="mobile-sidebar"
              className="relative w-64 bg-white/10 backdrop-blur-lg p-6 rounded-xl m-4 space-y-4 text-white font-medium max-h-fit"
            >
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
                  className={`block px-4 py-2 rounded-lg ${activeLink === item
                      ? "bg-white text-black"
                      : index === navLinks.length - 1
                        ? "text-white/70 hover:text-white"
                        : "hover:text-gray-300"
                    } ${index === 0 ? "mt-6" : ""}`}
                >
                  {item}
                </a>
              ))}

              {/* Theme Toggle (Mobile) */}
              <button
                onClick={() => dispatch(toggleTheme())}
                className="mt-4 block w-full text-left bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
              >
                {theme === "light" ? (
                  <span className="flex items-center gap-2">
                    <FaMoon /> Dark Mode
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaSun /> Light Mode
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

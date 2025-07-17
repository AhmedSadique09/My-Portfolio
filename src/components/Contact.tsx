import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const formRef = useRef<HTMLFormElement>(null);

  // Form success toast handler
  const handleSubmit = () => {
    setTimeout(() => {
      toast.success("Message sent successfully!");
      formRef.current?.reset(); // Reset form after submission
    }, 500);
  };

  return (
    <section
      id="contact"
      className="container mx-auto py-10 md:py-25 flex flex-col md:flex-row items-center justify-center px-4"
    >
      <Toaster position="top-right" />

      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1
          className={`text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r ${theme === "light"
            ? "from-[#202016] to-gray-900"
            : "from-white to-gray-300"
            }`}
        >
          Looking to collaborate?
          <br /> I’m here
        </h1>
        <p
          className={`mt-4 ${theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
        >
          Start a conversation today
          and let’s turn your vision
          <br />
          into something exceptional.
        </p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com/AhmedSadique09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`transition ${theme === "light"
              ? "text-black hover:text-gray-700"
              : "text-white hover:text-gray-400"
              }`}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ghulam-ahmed-kamal-5936a831a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/a.sadique?igsh=MW1lcXV3OGgzNjJ3dA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-500 hover:text-pink-400 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Side - Form */}
      <form
        ref={formRef}
        action="https://submit-form.com/8Pik6W3qN"
        method="POST"
        onSubmit={handleSubmit}
        className={`w-full lg:w-1/2 p-6 sm:p-8 rounded-2xl shadow-lg space-y-4 transition ${theme === "light"
          ? "bg-neutral-100 border border-gray-400 text-black"
          : "bg-[#202024] border border-white/10 text-white"
          }`}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label
              className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-400"
                }`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              aria-label="Your Name"
              placeholder="Your Name"
              className={`w-full mt-1 p-2 rounded-lg focus:outline-none focus:border-[#1da1f2] focus:ring-1 focus:ring-[#1da1f2] ${theme === "light"
                ? "bg-white text-black border border-gray-500"
                : "bg-[#3a3a3c] text-white border border-transparent"
                }`}
            />
          </div>
          <div className="w-full">
            <label
              className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-400"
                }`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              aria-label="Your Email"
              placeholder="yourname@example.com"
              className={`w-full mt-1 p-2 rounded-lg focus:outline-none focus:border-[#1da1f2] focus:ring-1 focus:ring-[#1da1f2] ${theme === "light"
                ? "bg-white text-black border border-gray-500"
                : "bg-[#3a3a3c] text-white border border-transparent"
                }`}
            />
          </div>
        </div>

        <div>
          <label
            className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-400"
              }`}
          >
            Message
          </label>
          <textarea
            name="message"
            required
            aria-label="Your Message"
            placeholder="Enter your message here..."
            className={`w-full mt-1 p-2 rounded-lg h-32 resize-none focus:outline-none focus:border-[#1da1f2] focus:ring-1 focus:ring-[#1da1f2] ${theme === "light"
              ? "bg-white text-black border border-gray-500"
              : "bg-[#3a3a3c] text-white border border-transparent"
              }`}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#1da1f2] hover:bg-[#0d8ddb] transition rounded-lg text-neutral-900 font-semibold"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

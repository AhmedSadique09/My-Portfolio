import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-10 md:py-20 text-white flex flex-col md:flex-row items-center justify-center px-4">

      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Looking to collaborate?<br /> I’m here
        </h1>
        <p className="text-gray-400 mt-4">
          Start a conversation today
          and let’s turn your vision <br />
          into something exceptional.
        </p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com/AhmedSadique09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ghulam-ahmed-kamal-5936a831a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/a.sadique?igsh=MW1lcXV3OGgzNjJ3dA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Side - Form */}
      <form
        action="https://submit-form.com/8Pik6W3qN"
        method="POST"
        className="w-full lg:w-1/2 bg-[#202020] p-6 sm:p-8 rounded-xl space-y-4 shadow-lg"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              required
              aria-label="Your Name"
              className="w-full mt-1 p-2 rounded-lg bg-[#3a3a3c] text-white focus:outline-none focus:border-[#1da1f2] focus:ring-1 focus:ring-[#1da1f2]"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full">
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              required
              aria-label="Your Email"
              className="w-full mt-1 p-2 rounded-lg bg-[#3a3a3c] text-white focus:outline-none focus:border-[#1da1f2] focus:ring-1 focus:ring-[#1da1f2]"
              placeholder="yourname@example.com"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            name="message"
            required
            aria-label="Your Message"
            className="w-full mt-1 p-2 rounded-lg bg-[#3a3a3c] text-white h-32 resize-none focus:outline-none focus:border-[#1da1f2] focus:ring-1 focus:ring-[#1da1f2]"
            placeholder="Enter your message here..."
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

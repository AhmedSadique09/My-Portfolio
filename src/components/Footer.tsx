export default function Footer() {
  return (
    <footer className="text-white px-6 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">

        {/* Left: CTA */}
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl font-bold leading-tight text-white mb-2">
            Let’s build your vision <br /> together, today!
          </h2>
          <p className="text-sm text-gray-400 pt-2">
            Fill out the form below to get in touch. We typically<br /> respond within 24 hours.
          </p>
        </div>

        {/* Middle: Explore */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#ffffff] mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#ffffff] mb-2">Socials</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="https://github.com/AhmedSadique09">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/ghulam-ahmed-kamal-5936a831a/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/a.sadique?igsh=MW1lcXV3OGgzNjJ3dA==">Instagram</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <img src="/images/logo.svg" alt="Logo" className="w-8 h-8 mb-2 md:mb-0" />
        <p>© 2025 <a href="#" className="hover:underline">Ghulam Ahmed</a></p>
      </div>
    </footer>
  );
}

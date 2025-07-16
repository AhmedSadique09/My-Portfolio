import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Footer() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <footer id="footer" className={`container py-5 px-[2px] ${theme === "light" ? "text-black" : "text-white"}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left: CTA */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight mb-2">
            Let’s build your vision <br /> together, today!
          </h2>
          <p className={`text-sm pt-2 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Fill out the form to get in touch. We typically
            <br /> respond within 24 hours.
          </p>
        </div>

        {/* Middle: Explore */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className={`space-y-1 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Socials</h3>
          <ul className={`space-y-1 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            <li><a href="https://github.com/AhmedSadique09">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/ghulam-ahmed-kamal-5936a831a/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/a.sadique?igsh=MW1lcXV3OGgzNjJ3dA==">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t mt-10 pt-4 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-[2px] ${theme === "light" ? "border-gray-500 text-gray-600" : "border-gray-300 text-gray-300"
          }`}
      >
        <img
          src={theme === "light" ? "/images/logo_black.svg" : "/images/logo.svg"}
          alt="Logo"
          className="w-8 h-8 mb-2 md:mb-0"
        />
        <p>
          © 2025{" "}
          <a href="#" className="hover:underline">
            Ghulam Ahmed
          </a>
        </p>
      </div>
    </footer>
  );
}

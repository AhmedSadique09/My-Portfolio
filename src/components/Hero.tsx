import { HiDownload, HiArrowDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Hero() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleScroll = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 pt-10 md:pt-35">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full max-w-5xl">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme === "light" ? "bg-green-400 opacity-50" : "bg-green-300 opacity-40"}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${theme === "light" ? "bg-green-500" : "bg-green-400"}`}
              ></span>
            </div>
            <span className={`text-sm ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r ${theme === "light"
              ? "from-[#1a1a1a] to-gray-800"
              : "from-white to-gray-400"
              }`}
          >
            Transforming ideas <br /> into Scalable Web <br /> Applications
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href={`/images/cv.pdf?time=${Date.now()}`}
              download="cv.pdf"
              className="bg-blue-400 hover:bg-blue-500 text-neutral-900 px-6 py-2.5 rounded-lg text-sm flex items-center gap-2"
            >
              Download CV
              <HiDownload className="text-base" />
            </a>
            <button
              className="bg-[#202024] hover:bg-zinc-800 text-white px-6 py-2.5 rounded-lg text-sm flex items-center gap-2"
              onClick={handleScroll}
            >
              Scroll down
              <HiArrowDown className="text-base" />
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative w-80 h-80 md:w-98 md:h-98 overflow-hidden rounded-b-4xl bg-gradient-to-t from-amber-600/80 via-transparent to-transparent">
          <img
            src="/images/myimage2.png"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover object-[0_-60px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function About() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <section
      id="about"
      className="container pt-10 md:pt-25 w-full flex items-center justify-center px-4 sm:px-6 md:px-20"
    >
      <div
        className={`transition-all duration-300 p-4 sm:p-6 md:p-8 mx-auto w-full rounded-2xl ${theme === "light"
            ? "bg-[#ffffff] text-black border border-gray-400 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
            : "bg-[#202024] text-white border border-white/10"
          }`}
      >
        <p
          className={`text-xs min-[320px]:text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 ${theme === "light" ? "text-gray-800" : "text-gray-200"
            }`}
        >
          Hi, I’m Ghulam Ahmed — a passionate MERN Stack Developer committed to
          crafting sleek, high-performing web applications. I collaborate
          closely with clients and teams to turn ideas into reality through
          clean code, intuitive design, and a strong focus on user experience.
          Whether you're building from scratch or enhancing an existing
          platform, I provide dependable and scalable solutions tailored to your
          unique goals.
        </p>

        {/* Stats + Logo Section */}
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4 mt-4 sm:mt-6">
          <div className="flex gap-6 sm:gap-8 flex-1 min-w-0">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                15<span className="text-blue-500">+</span>
              </h2>
              <p
                className={`text-[10px] sm:text-xs mt-1 ${theme === "light" ? "text-gray-800" : "text-gray-200"
                  }`}
              >
                Project done
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                1<span className="text-blue-500">+</span>
              </h2>
              <p
                className={`text-[10px] sm:text-xs mt-1 ${theme === "light" ? "text-gray-800" : "text-gray-200"
                  }`}
              >
                Years of experience
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <img
              src={
                theme === "light"
                  ? "/images/logo_black.svg"
                  : "/images/logo.svg"
              }
              alt="logo"
              className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

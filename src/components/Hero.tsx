import { HiDownload, HiArrowDown } from "react-icons/hi";

export default function Hero() {
  const handleScroll = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="container mx-auto min-h-150 text-white flex flex-col md:flex-row items-center justify-center px-4 py-10 md:py-20"

    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-4xl">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-20"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="text-sm leading-none text-gray-200">Available for work</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Transforming ideas <br />
            into Scalable Web<br /> Applications
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href={`/images/cv.pdf?time=${Date.now()}`}
              download="cv.pdf"
              className="bg-blue-400 hover:bg-blue-500 text-neutral-900 px-5 py-2 rounded-lg text-xs flex items-center gap-2"
            >
              Download CV
              <HiDownload className="text-sm" />
            </a>
            <button
              className="bg-[#202024] hover:bg-zinc-800 text-white px-5 py-2 rounded-lg text-xs flex items-center gap-2"
              onClick={handleScroll}
            >
              Scroll down
              <HiArrowDown className="text-sm" />
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative w-80 h-80 overflow-hidden rounded-b-4xl bg-gradient-to-t from-amber-600/60 via-transparent to-transparent">
          <img
            src="/images/myimage2.png"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="container py-10 md:py-20 w-full flex items-center justify-center px-6 md:px-20 text-white">
      <div className="bg-[#202024] text-white rounded-xl p-6 md:p-8 mx-auto shadow-md w-full">
        <p className="text-sm sm:text-base leading-relaxed mb-6 text-gray-300">
          Hi, I’m Ghulam Ahmed — a passionate MERN Stack Developer committed to crafting sleek, high-performing web applications.
          I collaborate closely with clients and teams to turn ideas into reality through clean code, intuitive design, and a strong focus on user experience.
          Whether you're building from scratch or enhancing an existing platform, I provide dependable and scalable solutions tailored to your unique goals.
        </p>

        {/* Stats + Logo in one line and responsive */}
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4 mt-6">
          {/* Stats (flex-grow to stay in line) */}
          <div className="flex gap-8 flex-1 min-w-0">
            <div>
              <h2 className="text-2xl font-semibold">
                15<span className="text-blue-400">+</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">Project done</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                1<span className="text-blue-400">+</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">Years of experience</p>
            </div>
          </div>

          {/* Logo - never wraps */}
          <div className="shrink-0">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="w-8 h-8 cursor-pointer hover:opacity-80 transition"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function EssentialTools() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const tools = [
    { name: "HTML", description: "Markup language", image: "/images/html.png" },
    { name: "Tailwind CSS", description: "User Interface", image: "/images/tailwindcss.svg" },
    { name: "JavaScript", description: "Interaction", image: "/images/javascript.svg" },
    { name: "NodeJS", description: "Web Server", image: "/images/nodejs.svg" },

    {
      name: "ExpressJS",
      description: "Node Framework",
      image: theme === "light"
        ? "/images/expressjs_white.svg"
        : "/images/expressjs.svg",
    },

    {
      name: "MongoDB",
      description: "Database",
      image: theme === "light"
        ? "/images/mongodb_white.svg"
        : "/images/mongodb.svg",
    },

    {
      name: "React",
      description: "Framework",
      image: theme === "light"
        ? "/images/react_white.svg"
        : "/images/react.svg",
    },

    { name: "Next", description: "React Framework", image: "/images/next.svg" },
  ];

  return (
    <section
      id="tools"
      className="container pt-10 md:pt-20 w-full px-6 md:px-20"
    >
      {/* Heading */}
      <h2
        className={`text-center text-2xl sm:text-3xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r ${theme === "light"
          ? "from-[#202016] to-gray-900"
          : "from-white to-gray-300"
          }`}
      >
        Essential Tools I use
      </h2>

      {/* Description */}
      <p
        className={`mb-8 max-w-2xl mx-auto text-center text-sm sm:text-base leading-tight text-transparent bg-clip-text bg-gradient-to-r ${theme === "light"
          ? "from-[#202016] to-gray-900"
          : "from-white to-gray-200"
          }`}
      >
        Take a look at the advanced tools and tech stack behind my high-performance web solutions.
      </p>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`p-4 rounded-lg transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center ${theme === "light"
              ? "bg-[#ffffff] text-black border border-gray-400 shadow-md"
              : "bg-[#202024] text-white border border-white/10"
              }`}
          >
            <img
              src={tool.image}
              alt={tool.name}
              loading="lazy"
              className="w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain"
            />
            <h3 className="text-base sm:text-lg font-semibold">{tool.name}</h3>
            <p
              className={`text-xs sm:text-sm mt-1 ${theme === "light" ? "text-gray-800" : "text-gray-300"
                }`}
            >
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

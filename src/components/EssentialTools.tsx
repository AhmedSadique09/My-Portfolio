export default function EssentialTools() {
  const tools = [
    { name: 'HTML', description: 'Markup language', image: '/images/html.png' },
    { name: 'Tailwind CSS', description: 'User Interface', image: '/images/tailwindcss.svg' },
    { name: 'JavaScript', description: 'Interaction', image: '/images/javascript.svg' },
    { name: 'NodeJS', description: 'Web Server', image: '/images/nodejs.svg' },
    { name: 'ExpressJS', description: 'Node Framework', image: '/images/expressjs.svg' },
    { name: 'MongoDB', description: 'Database', image: '/images/mongodb.svg' },
    { name: 'React', description: 'Framework', image: '/images/react.svg' },
    { name: 'Next', description: 'React Framework', image: '/images/next.svg' },
  ];

  return (
    <section id="tools" className="container text-white px-4 max-w-screen-xl mx-auto py-10 md:py-20">
      <h2 className="text-center sm:px-6 text-2xl sm:text-3xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        Essential Tools I use
      </h2>

      {/* Centered and Responsive Paragraph */}
      <p className="px-4 sm:px-6 mb-8 max-w-2xl mx-auto text-center text-sm sm:text-base leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        Take a look at the advanced tools and tech stack behind my high-performance web solutions.
      </p>

      {/* Responsive Grid for ALL Mobile Devices */}
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-[#202024] p-4 rounded-lg shadow hover:shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={tool.image}
              alt={tool.name}
              className="w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain"
            />
            <h3 className="text-base sm:text-lg font-semibold">{tool.name}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

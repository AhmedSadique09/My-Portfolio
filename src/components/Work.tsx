import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Full stack music app',
    image: '/images/project-1.jpg',
    tags: ['API', 'MVC', 'Development'],
  },
  {
    title: 'Free stock photo app',
    image: '/images/project-2.jpg',
    tags: ['API', 'SPA'],
  },
  {
    title: 'Recipe app',
    image: '/images/project-3.jpg',
    tags: ['Development', 'API'],
  },
  {
    title: 'Real State Site',
    image: '/images/project-4.jpg',
    tags: ['Web Design', 'Development'],
  },
  {
    title: 'eCommerence Store',
    image: '/images/project-5.jpg',
    tags: ['eCommerce', 'Development'],
  },
  {
    title: 'Personal Portfolio',
    image: '/images/project-6.jpg',
    tags: ['Web Design', 'Development'],
  },
];

export default function Work() {
  return (
    <section id="work" className="container py-10 md:py-15 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        My Portfolio Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition bg-[#202026]"
          >
            {/* Image Container */}
            <div className="relative h-52 flex items-center justify-center overflow-hidden p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Box */}
            <div className="flex flex-col flex-1 p-3 sm:p-4">
              {/* Title */}
              <h3 className="text-sm font-medium text-white mb-2">{project.title}</h3>

              {/* Tags + Button Row */}
              <div className="flex items-center justify-between mt-auto flex-wrap gap-1.5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2d2d2d] text-gray-300 text-xs px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="bg-blue-600 p-2.5 rounded-md hover:bg-blue-700 transition">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

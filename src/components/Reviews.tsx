import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Alice Smith",
    company: "Tech Solutions",
    image: "/images/people-1.jpg",
    rating: 5,
    quote:
      "Outstanding service and technical expertise throughout the project.\nHer communication was clear and deadlines were always met.",
  },
  {
    name: "John Doe",
    company: "Creative Minds",
    image: "/images/people-2.jpg",
    rating: 4,
    quote:
      "Delivered exactly what we needed with minimal revisions.\nHe was quick to understand our needs and implement them efficiently.",
  },
  {
    name: "Jane Williams",
    company: "Design Hub",
    image: "/images/people-3.jpg",
    rating: 5,
    quote:
      "A highly skilled developer with an eye for design.\nThe final product was polished, responsive, and exceeded expectations.",
  },
  {
    name: "Jack Taylor",
    company: "InnovateX",
    image: "/images/people-4.jpg",
    rating: 4,
    quote:
      "Worked seamlessly with our team and adapted quickly to changes.\nI would confidently recommend him for any web development needs.",
  },
  {
    name: "Sophie Lee",
    company: "NextGen Studios",
    image: "/images/people-5.jpg",
    rating: 5,
    quote:
      "Built a scalable and elegant solution under tight deadlines.\nHer code quality and problem-solving were top-notch.",
  },
  {
    name: "Michael Chen",
    company: "ByteWorks",
    image: "/images/people-6.jpg",
    rating: 5,
    quote:
      "An absolute pleasure to collaborate with from start to finish.\nProfessional, detail-oriented, and always one step ahead.",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      ref={ref}
      id="reviews"
      className="container mx-auto px-4 py-10 md:py-20 text-white overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-center">
        What Our Users Are Saying
      </h2>

      <div className="relative w-full overflow-hidden">
        {isInView && (
          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {loopTestimonials.map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="sm:w-[250px] md:w-[320px] max-w-xs bg-[#202024] p-3 sm:p-4 rounded-lg shadow-md flex-shrink-0"
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold">
                      {t.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      {t.company}
                    </p>
                  </div>
                </div>
                <div className="text-yellow-400 text-xs sm:text-sm mb-1 sm:mb-2">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {t.quote}
                </p>

              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

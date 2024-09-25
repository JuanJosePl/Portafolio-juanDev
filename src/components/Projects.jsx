import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    title: "Proyecto 1",
    description: "Una breve descripción del Proyecto 1",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Proyecto 2",
    description: "Una breve descripción del Proyecto 2",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com",
    tech: ["Vue.js", "Express", "PostgreSQL"],
  },
  {
    title: "Proyecto 3",
    description: "Una breve descripción del Proyecto 3",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com",
    tech: ["Angular", "Django", "MySQL"],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section
      id="proyectos"
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
        >
          Mis Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaGithub className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="h-6 w-6" />
                    </motion.a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === index ? null : index
                      )
                    }
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <FaInfoCircle className="mr-1" />
                    {expandedProject === index ? "Menos Info" : "Más Info"}
                  </motion.button>
                </div>
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
                        Tecnologías utilizadas:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        {project.tech.map((tech, techIndex) => (
                          <li key={techIndex}>{tech}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
    </section>
  );
}

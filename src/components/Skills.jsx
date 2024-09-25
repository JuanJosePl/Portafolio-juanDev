import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="habilidades"
      ref={ref}
      className="py-20 bg-gradient-to-b from-blue-100 to-gray-100 dark:from-blue-900 dark:to-gray-900 text-gray-900 dark:text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
        >
          Mis Habilidades
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`text-6xl mb-4 ${skill.color}`}
              >
                <skill.icon />
              </motion.div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <motion.div
                className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 mt-2"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div
                  className={`h-2.5 rounded-full ${skill.color.replace(
                    "text",
                    "bg"
                  )}`}
                  style={{ width: "75%" }}
                ></div>
              </motion.div>
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

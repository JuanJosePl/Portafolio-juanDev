import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

const timelineItems = [
  {
    icon: FaGraduationCap,
    title: "Graduado Técnico en Programación de Software",
    date: "Febrero 2023 - Octubre 2023",
    description:
      "Finalicé mi formación técnica en programación de software, desarrollando habilidades clave en lenguajes y herramientas modernas.",
  },
  {
    icon: FaGraduationCap,
    title: "Graduado en Jóvenes Creativos",
    date: "Febrero 2023 - Noviembre 2023",
    description:
      "Participé en el programa Jóvenes Creativos, donde adquirí conocimientos en desarrollo personal, emprendimiento y profundización en JavaScript y React.",
  },
  {
    icon: FaBriefcase,
    title: "Primer Trabajo - Practicante",
    date: "Febrero 2023 - Noviembre 2023",
    description:
      "Trabajé como practicante en la empresa SCALALEARNING  desarrollando scripts de automatización en Google Apps Script y realizando pruebas de calidad en varios sitios web.",
  },
  {
    icon: FaCode,
    title: "Freelance - Proyectos Personales",
    date: "2024",
    description:
      "Inicié mi trayectoria como freelancer, trabajando en proyectos personales y continuando con mi crecimiento en el desarrollo de software.",
  },
];

export default function AboutMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="sobre-mí"
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
          Sobre Mí
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-lg p-6 shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Soy un desarrollador apasionado con un gran interés en crear
                aplicaciones web intuitivas y eficientes. Con una sólida base en
                tecnologías tanto de frontend como de backend, busco construir
                experiencias de usuario sin interrupciones.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Cuando no estoy programando, puedes encontrarme explorando
                nuevas tecnologías, contribuyendo a proyectos de código abierto,
                o disfrutando de un buen libro sobre arquitectura de software y
                patrones de diseño.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Mi Trayectoria
            </h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-lg p-4 flex-grow">
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.date}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

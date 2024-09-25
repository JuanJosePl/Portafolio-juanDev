import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mainjpl from '../img/mainjpl.png';
import { Link } from "react-scroll";

const titles = [
  "Desarrollador Frontend",
  "Desarrollador Fullstack",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hola, soy{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Juan Jose PL
              </span>
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[titleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl mb-6 text-blue-600 dark:text-blue-400"
              >
                {titles[titleIndex]}
              </motion.h2>
            </AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8 text-gray-700 dark:text-gray-300"
            >
              Apasionado por crear experiencias web bellas y funcionales.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                Contáctame
              </motion.button>
              <motion.a
                href="/document/cvJuanJosePl.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white"
              >
                Descargar CV
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-12 md:mt-0 relative"
          >
            <div className="relative w-[350px] h-[750px] mx-auto ml-15">
              <motion.img
                src={mainjpl}
                alt="Juan Jose PL"
                className="rounded-full w-full h-full"
                initial={{ y: 20 }}
                animate={{ y: [20, -20] }}
                transition={{ yoyo: Infinity, duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500 dark:bg-blue-400 filter blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link to="sobre-mí" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer"
          >
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </Link>
      </div>
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
    </section>
  );
}

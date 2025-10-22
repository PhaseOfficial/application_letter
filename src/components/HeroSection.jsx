import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaBrain, FaDatabase, FaLaptopCode, FaLanguage, FaGraduationCap, FaAward, FaUsers, FaRobot } from "react-icons/fa";
import { MdAnalytics, MdEngineering } from "react-icons/md";
import zchpcLogo from "../assets/zchpc-logo.png";
import profileHero from "../assets/profile-hero.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};



const AboutMePage = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${profileHero})` }}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Panashe Arthur Mhonde
          </h1>
          <p className="text-lg md:text-xl font-medium mb-4">
            Data Scientist & Analyst | AI Researcher | Full-Stack Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Macheke
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> 0788147289
            </span>
            <a
              href="https://github.com/PhaseOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-400"
            >
              <FaGithub /> PhaseOfficial
            </a>
          </div>

           
        </div>
      </motion.section>

      {/* Info Cards Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Who is Panashe?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Profile Card */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <img
              src={zchpcLogo}
              alt="ZCHPC Logo"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-3">
              Profile
            </h3>
            <p className="text-gray-600 text-center">
              Energetic and ambitious Data Scientist & Statistician, passionate about solving real-world problems with AI and Data Analytics.
            </p>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-center mb-3">
              Work Experience
            </h3>
            <div className="space-y-4 text-center text-gray-700 text-sm">
              <p className="font-medium">
                Resident Researcher (Big Data & AI), ZCHPC
                <br />
                <span className="text-gray-500 text-xs">Jul 2024 – Apr 2025</span>
              </p>
              <p>
                Researched AI and Big Data integration for national-scale projects. Built predictive models using Python & TensorFlow, collaborating on AI solutions.
              </p>

              <p className="font-medium">
                Big Data Analyst Intern, ZCHPC
                <br />
                <span className="text-gray-500 text-xs">Jul 2023 – Jul 2024</span>
              </p>
              <p>
                Analyzed large datasets with Python & SQL, deployed models on HPC systems, and contributed to dashboards.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-center mb-3">
              Technical Skills
            </h3>
            <ul className="text-gray-600 text-center space-y-2">
              <li className="flex justify-center items-center gap-2"><MdAnalytics /> Data Analysis (Python, R, SQL)</li>
              <li className="flex justify-center items-center gap-2"><FaBrain /> Machine Learning & LLM Training</li>
              <li className="flex justify-center items-center gap-2"><FaLaptopCode /> Full-Stack Web Development</li>
              <li className="flex justify-center items-center gap-2"><FaRobot /> Prompt Engineering</li>
              <li className="flex justify-center items-center gap-2"><MdEngineering /> Data Engineering & Visualization</li>
              <li className="flex justify-center items-center gap-2"><FaUsers /> Communication & Teamwork</li>
            </ul>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {/* Languages */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-center mb-3">
              <FaLanguage className="inline mr-2" /> Languages
            </h3>
            <ul className="text-gray-600 text-center space-y-1">
              <li>English — ★★★★★</li>
              <li>Shona — ★★★★★</li>
              <li>Sign Language — ★★★✩✩</li>
              <li>Chinese — ★★★✩✩</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-center mb-3">
              <FaGraduationCap className="inline mr-2" /> Education
            </h3>
            <p className="text-gray-600 text-center">
              <b>BSc (Hons) in Data Science and Systems</b>
              <br />University of Zimbabwe (2021 – 2025)
              <br />
              <span className="text-sm text-gray-500">
                Upper Second Class (2.1)
              </span>
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div>
              <h3 className="text-xl font-semibold text-center mb-3">
                <FaAward className="inline mr-2" /> Achievements
              </h3>
              <ul className="text-gray-600 text-center text-sm space-y-1">
                <li>Distinction — Shona NLP Thesis</li>
                <li>5th — Zindi Maize Disease Detection</li>
                <li>AI & Big Data Certificate (ZCHPC)</li>
              </ul>
            </div>
            <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-medium transition flex items-center justify-center gap-2">
              Ask the AI about Panashe <FaRobot />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Panashe Arthur Mhonde. All rights reserved. | Data Scientist & AI Researcher
        </p>
      </footer>
    </div>
  );
};

export default AboutMePage;

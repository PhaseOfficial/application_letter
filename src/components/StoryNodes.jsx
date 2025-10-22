import React from "react";
import { motion } from "framer-motion";

// Import your images
import Img1 from "../assets/d1.png";
import Img2 from "../assets/d2.png";
import Img3 from "../assets/d3.png";

const storyData = [
  {
    title: "The Beginning",
    text: "Vybrant Care Services was born from a vision to transform home care.",
    image: Img1,
  },
  {
    title: "Building Trust",
    text: "We recognised that truly excellent care goes beyond basic support, it’s about enabling people to live life on their own terms, in their own homes.",
    image: Img2,
  },
  {
    title: "Expanding Horizons",
    text: "Our journey is built on countless moments of making a real difference in people’s lives, one person at a time.",
    image: Img3,
  },
];

export default function StoryNodes() {
  return (
    <section className="relative w-full rounded-[3rem] bg-gray-100 min-h-screen py-20 px-6 flex flex-col items-center">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-pink-400 rounded-full"></div>

      {storyData.map((story, index) => (
        <motion.div
          key={index}
          className={`relative bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-xl mb-24 z-10 ${
            index % 2 === 0 ? "self-start" : "self-end"
          }`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image section */}
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-64 object-cover"
          />

          {/* Text section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              {story.title}
            </h2>
            <p className="text-gray-700">{story.text}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

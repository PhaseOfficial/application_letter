import React from "react";
import { Link } from 'react-router-dom';
import Plasma from './Plasma';
import image1 from "../assets/qt=q_95.webp";
import Countuop from './countup';


export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="border-b border-gray-400 py-4 mb-10">


    <div className="py-24 px-6 text-center z-20 relative">
<img
      src={image1}
      alt="Company Logo"
      className="h-40 w-auto center mx-auto mb-6"
    />
      <h1 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
    We Are Making a Real Difference
  </h1>
  <p className="text-lg text-black md:text-xl max-w-3xl mx-auto leading-relaxed">
    Vybrant Care Services enriches and enhances the lives of those needing care by
    delivering exceptional, personalised support that enables independence, dignity
    and wellbeing within the comfort of their own homes.
  </p>
   <div>

<Link to="/Services">
  <button
  className="
    relative overflow-hidden
    rounded-full border-2 border-pink-500 text-pink-500 
    px-6 py-3 mt-8 font-semibold
    transition-all duration-300 ease-in-out
    group
  "
>
  <span
    className="
      relative z-10 transition-colors duration-300 ease-in-out
      group-hover:text-white
    "
  >
    Work With Us
  </span>
  <span
    className="
      absolute inset-0 bg-pink-500 
      translate-x-[-100%] 
      group-hover:translate-x-0
      transition-transform duration-300 ease-in-out
      z-0
    "
  ></span>
</button>

</Link>


</div>
  <Countuop/>
  </div>

   <div className="absolute inset-0 z-0 blur-lg">
   <Plasma
    animationType="rotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={3.6}
    hueShift={0}
    colorFrequency={1}
    noise={0.5}
    glow={1}
  />
</div>
    </section>
  );
}

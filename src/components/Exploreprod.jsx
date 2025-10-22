import React from "react";
import VisionImage from "../assets/vision.png";
import MissionImage from "../assets/mission.png"; // Add a mission image

const Exploreprod = () => {
  return (
    <section className="relative rounded-[3rem] bg-gray-100 overflow-hidden flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black py-20">
      
      
      {/* Foreground content */}
      <div className="relative z-10 text-center w-full px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12">
          About Vybrant Care Services
        </h2>

        {/* Our Vision Card */}
<div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center mb-12">
  {/* Image */}
  <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl">
    <img
      src={VisionImage}
      alt="Our Vision"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Content */}
  <div className="p-8 md:w-1/2">
    <h2 className="text-3xl font-bold text-pink-500 mb-4">Our Vision</h2>
    <p className="text-gray-700 leading-relaxed">
      To become the UK’s leading home care provider, expanding our trusted and
      respected services from Yorkshire to every major city in the nation, while
      setting new standards for personalised home care and becoming the first
      choice for both service users and care professionals.
    </p>
  </div>
</div>

{/* Our Mission Card */}
<div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
  {/* Image */}
  <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl">
    <img
      src={MissionImage}
      alt="Our Mission"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Content */}
  <div className="p-8 md:w-1/2">
    <h2 className="text-3xl font-bold text-pink-500 mb-4">Our Mission</h2>
    <p className="text-gray-700 leading-relaxed">
      Our mission is to provide outstanding home care services and
      person-centred support that empowers individuals to live fulfilling lives
      in their own homes, while maintaining their independence and dignity
      through meaningful, heartfelt actions and compassionate service that
      uplifts and improves lives one small act at a time.
    </p>
  </div>
</div>


      </div>
    </section>
  );
};

export default Exploreprod;

import React from "react";
import CqcLogo from "../assets/asset_cqclogo_update.png"; // replace with your logo image

export default function CqcRating() {
  return (
    <section className="bg-pink-500 mt-20 rounded-[3rem] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 relative inline-block">
          <span className="border-b border-white pb-2">Our CQC Rating</span>
        </h2>

        {/* Rating Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-left flex flex-col md:flex-row items-center">
          {/* Logo */}
          <div className="w-24 h-24 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
            <img src={CqcLogo} alt="Care Quality Commission" className="w-full h-full object-contain"/>
          </div>

          {/* Rating Details */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg md:text-xl mb-2">Vybrant Care Services Ltd</h3>
            <p className="font-bold text-xl md:text-2xl mb-2 flex items-center">
              CQC overall rating: <span className="ml-2 text-green-500">Good ●</span>
            </p>
            <p className="text-gray-600 mb-4">8 October 2022</p>
            <a
              href="https://www.cqc.org.uk/location/1-10808504269?referer=widget3"
              className="inline-block text-purple-700 font-semibold hover:underline transition"
            >
              See the report &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

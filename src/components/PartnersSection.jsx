import React from "react";

// Import your images
import cqcLogo from "../assets/asset_cqclogo_update.png";
import icoLogo from "../assets/ico.webp";
import sheffieldCouncilLogo from "../assets/sheffield-council.webp";
import dementiaAllianceLogo from "../assets/dementia-alliance.webp";

const PartnersSection = () => {
  return (
    <section className="bg-white rounded-[3rem] mb-10 mt-20 py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-10">
          Regulators <span className="text-gray-900">|</span> Sponsors{" "}
          <span className="text-gray-900">|</span> Partners
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img
            src={cqcLogo}
            alt="Care Quality Commission"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={icoLogo}
            alt="Information Commissioner's Office"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={sheffieldCouncilLogo}
            alt="Sheffield City Council Recognised Provider"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={dementiaAllianceLogo}
            alt="Sheffield Dementia Action Alliance"
            className="h-16 md:h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

import React from "react";
import PartnersSection from "./PartnersSection";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 border-t border-b mt-10 border-gray-400">
      
      
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-12">
          Why Choose Us?
        </h2>

        {/* Intro Text */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
          At Vybrant Care Services, we take pride in our team of dedicated and passionate caregivers
          who are committed to delivering exceptional support. Using a person-centred approach,
          we tailor our services to meet your unique needs, ensuring you feel valued and respected
          at every step. Our trained professionals are equipped to support a wide range of care
          requirements, making your care experience both enjoyable and stress-free. As a CQC-regulated
          provider, we uphold the highest standards, offering diverse and reliable care services you can trust.
        </p>

        {/* What You Can Expect */}
        <div className="mb-12 text-left md:text-left">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            What You Can Expect?
          </h3>
          <p className="text-gray-700 mb-4">
            We are committed to delivering a high-quality service that empowers you to live independently in the comfort of your own home. You can expect:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
            <li>Personalised, specialist care tailored to meet your individual needs</li>
            <li>Advocacy and guidance when needed, promoting a safer, more supported experience</li>
            <li>Assistance with achieving your goals and managing daily living activities (ADLs)</li>
            <li>Flexible care packages designed around your lifestyle, available 24/7 for complete peace of mind</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Your wellbeing is at the heart of everything we do.
          </p>
        </div>

        {/* Benefits */}
        <div className="text-left md:text-left">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            What Are The Benefits?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Enjoy the comfort and freedom of personalised care at home with our support, living in your own home for longer, maintaining your routine and independence. Receive dedicated 1:1 care that respects who you are, giving you peace of mind and confidence each day.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stay close to your loved ones and welcome visits on your terms. Benefit from a consistent, reliable service with continuity of care, and have a real say in how and where your care is delivered, always centred around your needs and preferences.
          </p>
          <p className="text-gray-700 font-semibold">
            Live life on your own terms, in your home.
          </p>
        </div>
      </div>
      <PartnersSection />
    </section>
  );
}

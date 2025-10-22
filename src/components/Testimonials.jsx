import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Client’s Daughter",
    message:
      "Vybrant Care Services provided exceptional support for my mother. Their staff are compassionate, reliable, and always go above and beyond.",
  },
  {
    name: "James Robertson",
    role: "Service User",
    message:
      "The carers are amazing — they treat me with respect and genuinely care about my wellbeing. I couldn’t ask for better support.",
  },
  {
    name: "Lucy Carter",
    role: "Family Member",
    message:
      "Communication is excellent, and I always feel reassured that my father is in safe hands. Truly professional service.",
  },
];

const Testimonials = () => {
  return (
    <section className="border-b border-t mt-10 border-gray-400 py-16 px-6" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-500 mb-10">
          We’re proud to make a positive difference in the lives of those we care for.
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-between hover:shadow-xl transition duration-300"
            >
              <FaQuoteLeft className="text-pink-500 text-3xl mb-4" />
              <p className="text-gray-600 text-base mb-6 italic">
                “{testimonial.message}”
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { FaHeart, FaUsers, FaComments, FaShieldAlt } from "react-icons/fa";
// Replace this with your image import
import MentalHealthImg from "../assets/mental-health.png"; 
import image6 from "../assets/services.png";

import {
  FaHome,
  FaHospitalUser,
  FaHeartbeat,
  FaHandsHelping,
  FaSmile,
  FaUserFriends,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import image1 from "../assets/qt=q_95.webp";
import emergencyImage from "../assets/emergency.png";
import { Link } from "react-router-dom";
import Contactus from "../components/Contactus";
import OnlineAssessmentBooking from "../components/OnlineAssessmentBooking";
import HomeFirstReablement from "../components/HomeFirstReablement";
import VybrantCarerSupport from "../components/VybrantCarerSupport";
import RecommendedServicesBroxburn from "../components/RecommendedServicesBroxburn";

const services = [
  {
    title: "Home Care Service",
    icon: <FaHome className="text-blue-600 w-10 h-10" />,
    description:
      "Our Home Care Services offer a range of in-home care and support tailored to your daily needs.",
    listTitle: "Support will include:",
    items: [
      "Personal care support",
      "Medication administration",
      "Meal preparation",
      "Light housework",
      "Support with transfers",
    ],
  },
  {
    title: "After Hospital Care",
    icon: <FaHospitalUser className="text-blue-600 w-10 h-10" />,
    description:
      "Support offered on a short-term basis to help you manage at home after being in hospital.",
    listTitle: "When to consider it:",
    items: [
      "After having surgery",
      "Lost mobility / stroke",
      "When prescribed bed rest",
      "Increased falls risk",
      "When feeling weak",
    ],
  },
  {
    title: "Specialist Care",
    icon: <FaHeartbeat className="text-blue-600 w-10 h-10" />,
    description:
      "Helping people with physical, mental, or chronic illnesses live independently and with dignity.",
    listTitle: "Our areas of speciality:",
    items: [
      "Diabetes management",
      "Multiple sclerosis (MS)",
      "Dementia & Alzheimer’s",
      "Parkinson’s",
      "End-of-Life care",
    ],
  },
  {
    title: "Respite Care",
    icon: <FaHandsHelping className="text-blue-600 w-10 h-10" />,
    description:
      "Temporary relief for a primary caregiver, allowing them to rest while we provide quality care.",
    listTitle: "Where this can happen:",
    items: [
      "In the individual's home",
      "In a care/residential home",
      "In temporary accommodation",
      "In our respite living facility",
      "On vacation",
    ],
  },
  {
    title: "Companionship Service",
    icon: <FaUserFriends className="text-blue-600 w-10 h-10" />,
    description:
      "Reducing loneliness and promoting social connection. We keep you company and support your wellbeing.",
    listTitle: "Things we can do:",
    items: [
      "Doing activities/going out",
      "Escorting to coffee groups",
      "Assisting with routines",
      "Visiting friends or family",
      "Befriending",
    ],
  },
  {
    title: "Live-in Care",
    icon: <FaSmile className="text-blue-600 w-10 h-10" />,
    description:
      "Round-the-clock care from a dedicated live-in carer, ensuring safety, comfort, and companionship.",
    listTitle: "What is included:",
    items: [
      "Support with personal care",
      "Household chores",
      "Meal preparation",
      "Companionship",
      "Support with safe living",
    ],
  },
];

const Services = () => {
  return (
    
    <div>
    
        <Navbar />
        
    <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 mb-20 text-gray-800">
    
      {/* Page Header */}
      <div className="text-center mt-20 mb-16">
       <img
      src={image1}
      alt="Company Logo"
      className="h-40 w-auto center mx-auto mb-6"
    />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Trusted Home Care Provider
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Vybrant Care Services is dedicated to enhancing the quality of life
          for our clients. Learn more about our skilled home care solutions
          designed for your comfort.
        </p>
      </div>
      <div className="mb-10 relative">
                <img
                  src={image6}
                  alt="Young adults and caregivers in supported living environment"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px] hover:scale-[1.02] transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
<div className="max-w-3xl mx-auto text-center border-t border-gray-600 mb-16">
<h2 className="text-4xl md:text-5xl font-bold mt-6 text-blue-700 mb-3">
      Mental Health Support Services
      </h2>
      <p className="text-lg font-medium text-pink-600 mb-6">
        Serving Sheffield & East Riding
      </p>

      <div className="border-t-2 border-gray-300 w-20 mb-6"></div>

      <p className="text-gray-700 italic mb-8 text-lg">
        Because everyone is different and every journey is unique.
      </p>
      <p className="text-gray-700 mb-12 leading-relaxed">
        At Vybrant Care Services, we understand that no two people experience mental health
        the same way. That’s why our support is person-centred, tailored to your individual
        needs, and designed to help you live a happy, fulfilling, and independent life.
      </p>

</div>

<section className="bg-green-100 rounded-[3rem] mb-20 text-gray-800 py-20 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

    {/* Left: Image */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl shadow-lg overflow-hidden order-2 lg:order-1"
    >
      <img
        src={MentalHealthImg}
        alt="Mental Health Support"
        className="w-full h-[600px] object-cover"
      />

     
    </motion.div>

    {/* Right: Text & Cards */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="order-1 lg:order-2"
    >
      

      {/* Mental Health Service Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            icon: <FaHandsHelping className="text-blue-600 w-8 h-8" />,
            title: "Personalised Support",
            desc: "We assess your needs and tailor our services to suit you, ensuring your care feels right for you.",
          },
          {
            icon: <FaComments className="text-blue-600 w-8 h-8" />,
            title: "Counselling & Peer Support",
            desc: "Access counselling and peer support in a safe, welcoming environment no referral needed.",
          },
          {
            icon: <FaHome className="text-blue-600 w-8 h-8" />,
            title: "Independent Living Support",
            desc: "Build skills, confidence, and independence to enjoy a better quality of life.",
          },
          {
            icon: <FaUsers className="text-blue-600 w-8 h-8" />,
            title: "Collaborative Care Planning",
            desc: "We work with Community Mental Health Teams to help you set and achieve personal goals.",
          },
          {
            icon: <FaHeart className="text-blue-600 w-8 h-8" />,
            title: "Crisis Support & Accommodation",
            desc: "Calm, practical support during crises with a personalised Safety Plan for your wellbeing.",
          },
          {
            icon: <FaShieldAlt className="text-blue-600 w-8 h-8" />,
            title: "Safeguarding & Wellbeing",
            desc: "We protect your dignity and human rights, ensuring empowerment through compassionate care.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {item.icon}
              <h4 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 bg-blue-50 p-6 rounded-3xl border border-blue-100 shadow-sm"
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
        Our Mission
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Our Mental Health Support Service aims to improve the mental, social, and physical
          wellbeing of people in our communities. We believe in care that empowers, restores
          hope, and builds resilience one person at a time.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>

<div className="text-center mb-20">

<p className=" max-w-3xl mx-auto text-center mb-16"> We have accommodation that we can use for emergency admissions or in 
crisis situations that are supervised 24/7.
 This is focusing on young adults and adults 18+.</p>

<Link to="/Supportedliving" target="_blank"
            rel="noopener noreferrer">
                                      <button
                                      className="
                                        relative overflow-hidden
                                        rounded-full border-2 border-pink-600 text-white-500 
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
                                        <span className="text-2xl font-semibold  flex items-center gap-2">
              <FaHome className="" /> Supported Living
            </span>
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

<HomeFirstReablement />
<VybrantCarerSupport />

<div className="border-b border-gray-800 "></div>

      {/* Services Grid */}
      <h2 className="text-3xl  mt-10 font-semibold text-center mb-10 text-blue-700">
        Our Other Services
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {service.description}
            </p>
            <h4 className="text-blue-700 font-semibold mb-2">
              {service.listTitle}
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
<section className="mx-auto mt-20 mb-20 bg-red-200 text-gray-800 py-16 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1">

        
          <img
            src={emergencyImage}
            alt="Emergency Care"
            className="w-full h-80 md:h-[28rem] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-center md:text-left mb-6 text-white-700">
            Emergency Care
          </h2>
          <p className="text-center md:text-left text-white-600 leading-relaxed text-lg">
            Our emergency care service is designed to respond quickly to urgent
            needs, supporting daily living tasks and helping individuals remain
            as independent as possible at home. Whether for older adults or
            those with complex health needs, this service provides fast access
            to experienced carers when immediate support is required.
          </p>
        </div>
        <div>
        <Link to="tel:+447828402043">
                    <button
                    className="
                      relative overflow-hidden
                      rounded-full border-2 border-gray-600 text-white-500 
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
                      Contact us
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
      </div>
    </section>
    <OnlineAssessmentBooking />
    <Contactus />
<Footer/>
    </div>
  );
};

export default Services;

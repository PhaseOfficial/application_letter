import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { motion } from 'framer-motion';
import Contactus from '../components/Contactus';
import Kabirat from '../assets/Kabirat.png';
import Kudzi from '../assets/Kudzi.png';
import Rasna from '../assets/Rasna.png';
import Shamli from '../assets/Shamli.png'
import Tincy from '../assets/Tincy.jpeg';
import Tsitsi from '../assets/Tsitsi.png';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import jeanImage from '../assets/jean.webp';
import image1 from "../assets/qt=q_95.webp"; // Replace with the actual path to Jean's image


const About = () => {
  return (
<div> <div>
    <Navbar />
    <div>
    <div className="bg-cover bg-center h-screen" >
      {/* Hero Section */}
      <section
  className="relative flex items-center p-8 rounded-[3rem] mt-20 flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8 overflow-hidden"
>
  {/* Blurred background layer */}
  <div
    className="absolute inset-0 bg-cover bg-center filter  scale-100"
    style={{
      backgroundImage: `url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenR4emkxZXNhNHFsMGJ2ZG9zMTdiYzFqYTA2a2o2aWJqaGpoamhkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zhlIlhaXhO21T6NGzB/giphy.gif)`,
    }}
  ></div>

  {/* Optional dark overlay for contrast */}
  <div className="absolute inset-0 bg-black/30 text-blue-900"></div>

        <div className="container mx-auto text-center mt-20 relative z-10 text-white">
        <img
      src={image1}
      alt="Company Logo"
      className="h-40 w-auto center mx-auto mb-6"
    />
          <h1 className="text-4xl font-bold mb-10">About Us</h1>
          <p className="text-2xl mb-4 ">Vybrant Care Services is a 
          trusted home care provider supporting individuals across South Yorkshire and the 
          East Riding of Yorkshire. We’re passionate about delivering high-quality, personalised
           care that enables people to maintain their independence and
           continue living comfortably in their own homes for as long as possible.</p>
        </div>
        
      </section>

      {/* Company Description */}
      <section className="py-12">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-black p-6 rounded-lg shadow-lg my-8"
    >
      <div className="container mx-auto px-6 md:px-12 border border-pink-500 rounded-[3rem] py-12">
          <div className="max-w-4xl mx-auto p-8 text-pink-500">
          <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
          <p className="text-center text-2xl">
          We offer a range of tailored home-care services designed to meet each client’s unique needs, 
          ensuring a high standard of support and care. Our team is committed to delivering compassionate, 
          professional assistance that promotes well-being and independence. </p>
          <div className="mt-8 text-center">
          <Link to="/Services">
            <button
            className="
              relative overflow-hidden
              rounded-full border-2 border-pink-600 text-pink-500 
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
              Find Out More
            </span>
            <span
              className="
                absolute inset-0 bg-blue-500 
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
<div className="max-w-4xl mx-auto p-8 text-blue-400">
          <h2 className="text-4xl font-bold text-center mb-8">Our Staff, Our Strength</h2>
          <p className="text-center text-2xl">
          Our team is our greatest asset. We are committed to recruiting, training, 
          and supporting compassionate professionals who uphold the highest standards of care, 
          always putting dignity, respect, 
          and individual needs at the heart of everything they do.</p>
          </div>

<div className="max-w-6xl mx-auto mt-16 px-4 md:px-8">
  <h2 className="text-3xl font-bold text-center mb-8">
    About Our Registered Manager
  </h2>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Text Section */}
    <div className="flex-1 text-lg leading-relaxed text-center md:text-left">
      <p>
        Jean Sigauke is a committed General Nurse with a heartfelt passion for
        making a positive difference in people’s lives. With over two decades of
        experience at Sheffield Teaching Hospitals NHS Trust and Sheffield
        Health and Social Care, she brings extensive knowledge in general
        medicine, palliative care, and community-based support for individuals
        with mental health needs and learning disabilities.
      </p>
      <p className="mt-4">
        In her previous role as a Registered General Nurse, Jean was known for
        delivering compassionate, high-quality care, a standard she continues to
        uphold at Vybrant Care Services. Her leadership cultivates a nurturing,
        person-centred environment where her team feels empowered to support
        each individual’s independence, dignity, and overall well-being.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex-shrink-0 md:w-1/3 w-full flex justify-center">
      <img
        src={jeanImage} // replace with your actual image import or path
        alt="Jean Sigauke - Registered Manager"
        className="rounded-2xl shadow-lg w-64 h-64 object-cover md:w-80 md:h-80"
      />
    </div>
  </div>
</div>
</div>
    </motion.div>
      </section>
 
    <section className="max-w-6xl mx-auto mt-20 mb-20 px-6 md:px-8 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          About Our Staff
        </h2>
        <p className="text-xl font-semibold text-blue-700">
          Committed to Making a Difference
        </p>
        <p className="mt-3 text-lg text-gray-600">
          Enjoy life with support from compassionate caregivers in Sheffield
        </p>
      </div>

      {/* Section 1: Compassionate Care */}
      <div className="bg-gray-50 rounded-3xl p-8 shadow-sm mb-10">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Compassionate and Dedicated Team
        </h3>
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-700">Vybrant Care Services</span>,
          our dedicated team is committed to serving with compassion, respect,
          and professionalism. We go beyond providing care  we build trusting
          relationships and treat every individual with the dignity they
          deserve.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our carers are carefully selected and trained to deliver the highest
          standards of support, always putting your needs first and working with
          genuine heart and purpose.
        </p>
      </div>

      {/* Section 2: Quality & Compliance */}
      <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Committed to Quality and Compliance
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Professional caregiving across{" "}
          <span className="font-semibold text-blue-700">
            South Yorkshire
          </span>{" "}
          and{" "}
          <span className="font-semibold text-blue-700">
            East Riding of Yorkshire
          </span>
          .
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-700">Vybrant Care Services</span>,
          we ensure all our staff meet the standards set by the{" "}
          <span className="font-semibold">Care Quality Commission (CQC)</span>.
          From thorough recruitment and ongoing training to regular supervision
          and performance reviews, we are dedicated to maintaining high-quality
          care and upholding the values of safety, compassion, and
          professionalism in everything we do.
        </p>
      </div>

    </section>
      {/* Team Section */}
<section className="py-12 rounded-[3rem] bg-gray-100">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Team Member 1 */}
      <div className="text-center">
        <img
          src={Kabirat}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Kabirat </h3>
        <p className="text-gray-600">pending info...</p>
        <a
          href="https://www.linkedin.com/in/panashe-arthur-mhonde-2917b6261/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      {/* Team Member 2 */}
      <div className="text-center">
        <img
          src={Kudzi}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Kudzi</h3>
        <p className="text-gray-600">pending info....</p>
        <a
          href="https://www.linkedin.com/in/christopher-vutete-603b8166/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      {/* Team Member 3 */}
      <div className="text-center">
        <img
          src={Rasna}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Rasna</h3>
        <p className="text-gray-600">pending info</p>
        <a
          href="https://www.linkedin.com/in/craig-chadiwa-16485724a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
       {/* Team Member 3 */}
       <div className="text-center">
        <img
          src={Tincy}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Tincy</h3>
        <p className="text-gray-600">pending info</p>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="text-center">
        <img
          src={Shamli}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Shamli</h3>
        <p className="text-gray-600">info pending</p>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="text-center">
        <img
          src={Tsitsi}
          alt="Team Member"
          className="mx-auto rounded-full h-32 mb-4"
        />
        <h3 className="text-xl font-bold">Tsitsi</h3>
        <p className="text-gray-600">info pending</p>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </div>
</section>
      <Contactus className="mt-20"/>
   <Footer className="mb-10"/>
    </div>
    </div>
    
    </div>

    </div>
   
    
  )
}
export default About;
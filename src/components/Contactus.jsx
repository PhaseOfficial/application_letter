import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { supabase } from '../lib/supabaseClient';

const Contactus = () => {
  const [contactInfo, setContactInfo] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation for email or phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
      setError('Please enter a valid email address or phone number with country code eg. +44 114 551 1332.');
      return;
    }

    const { data, error } = await supabase
      .from('contact')
      .insert([{ contact_info: contactInfo }]);

    if (error) {
      console.error('Error submitting form:', error.message);
      setError('Error submitting form: ' + error.message);
    } else {
      console.log('Form submitted successfully:', data);
      setSuccess('Form submitted successfully!');
      setContactInfo(''); // Clear the input field
    }
  };

  return (
    <div className="bg-background text-primary-foreground py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 mt-10 text-gray-700">Our Branches</h2>
            <p className="text-lg mb-8 text-gray-600">
              Reach out to any of our branches for support or inquiries.
            </p>

            {/* South Yorkshire Branch */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">South Yorkshire Branch</h3>
              <p className="text-gray-600">Knowle House<br />4 Norfolk Park Road, Sheffield, S2 3QE</p>
              <p className="flex items-center mt-2 text-gray-600">
                <FaPhone className="mr-2" /> 
                <a href="tel:01145511332" className="hover:underline">0114 551 1332</a> / 
                <a href="tel:07828402043" className="ml-1 hover:underline">07828 402 043</a>
              </p>
              <p className="flex items-center text-gray-600 mt-1">
                <MdEmail className="mr-2" />
                <a href="mailto:info@vybrantcareservices.com" className="hover:underline">
                  info@vybrantcareservices.com
                </a>
              </p>
            </div>

            {/* East Riding Branch */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">East Riding Branch</h3>
              <p className="text-gray-600">One Business Village<br />1 Emily Street, Hull HU9 1ND</p>
              <p className="flex items-center mt-2 text-gray-600">
                <FaPhone className="mr-2" />
                <a href="tel:07479251733" className="hover:underline">07479 251 733</a>
              </p>
              <p className="flex items-center text-gray-600 mt-1">
                <MdEmail className="mr-2" />
                <a href="mailto:eastriding@vybrantcareservices.com" className="hover:underline">
                  eastriding@vybrantcareservices.com
                </a>
              </p>
            </div>

            {/* Scotland Branch */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Scotland Branch</h3>
              <p className="text-gray-600">
                Geddes House<br />Kirkton North Road, Livingston, West Lothian
              </p>
              <p className="flex items-center mt-2 text-gray-600">
                <FaPhone className="mr-2" />
                <a href="tel:07940136941" className="hover:underline">07940 136 941</a>
              </p>
              <p className="flex items-center text-gray-600 mt-1">
                <MdEmail className="mr-2" />
                <a href="mailto:info@vybrantcareservices.com" className="hover:underline">
                  info@vybrantcareservices.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Let us get in Touch with you</h2>
            <p className="text-lg mb-4 text-gray-600">
              Stay updated with our latest services and opportunities.
            </p>
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Phone Number or Your Email Address"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="w-full bg-input text-primary-foreground placeholder-primary-foreground border border-primary rounded-l-md px-4 py-2 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-r-md px-4 py-2 ml-2 transition"
              >
                Connect
              </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

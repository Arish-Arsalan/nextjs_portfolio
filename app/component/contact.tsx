"use client"
import React, { useEffect } from 'react';


const Contact: React.FC = () => {
  useEffect(() => {
    // Dynamically import AOS and initialize it
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8" data-aos="fade-right">
          Contact Me
        </h2>
        <p className="text-lg mb-12 max-w-xl mx-auto" data-aos="fade-right">
          Feel free to reach out to me if you'd like to collaborate, have any questions, or just want to connect.
        </p>
        <form className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            data-aos="fade-left"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            data-aos="fade-left"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            data-aos="fade-left"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            data-aos="fade-left"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

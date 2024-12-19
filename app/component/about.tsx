"use client"
import Image from 'next/image';
import { useEffect } from 'react';
const About: React.FC = () => {
  useEffect(() => {
    // Dynamically import AOS and initialize it
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center" data-aos="zoom-in-left" >
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-6">
          <a
            href="https://WhatsApp/Image2024-06-17at14.15.16_d86dca07.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 h-48 mb-6 md:mb-0 rounded-full overflow-hidden shadow-xl"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Image
               src="/WhatsApp Image 2024-06-17 at 14.15.16_d86dca07.jpg" // Replace with your image URL
              alt="Profile Picture"
              className="object-cover w-full h-full rounded-full"
            />
          </a>
          <p className="text-lg md:max-w-2xl mx-auto"  data-aos="zoom-in-left">
            I am a passionate web developer specializing in front-end development, particularly with React and Next.js. I love building responsive, interactive websites that create great user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;



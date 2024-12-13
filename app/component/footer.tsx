"use client"
import { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    // Dynamically import AOS and initialize it
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-6 mt-20">
      <div
        className="container mx-auto text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 mx-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 mx-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 mx-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

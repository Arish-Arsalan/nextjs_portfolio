"use client";
import { useEffect } from "react";
import React from "react";

// Define the TypeScript interface for a project
interface Project {
  title: string;
  description: string;
  link: string;
  image: string; // Optional: Project image
  technologies: string[];
}

// Example static data for projects
const projects: Project[] = [
  {
    title: "resume website",
    description: "A personal portfolio website built with Next.js and TypeScript.",
    link: "https://github.com/Arish-Arsalan/resume_builder_milestone4.git",
    image: "/WhatsApp Image 2024-11-25 at 23.31.03_aafd3cf6.jpg", // Ensure the image is in the public folder
    technologies: ["Next.js ", "TypeScript", "CSS"],
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce application with user authentication and product listing.",
    link: "https://github.com/Arish-Arsalan/nextjs_portfolio.git",
    image: "/Screenshot (1921).png",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Makeup website",
    description: "A full-stack blog platform with a custom CMS.",
    link: "https://github.com/Arish-Arsalan/makeup_tailwindcss_website.git",
    image: "/Screenshot (1922).png",
    technologies: ["Next.js", "GraphQL", "Apollo"],
  },
  {
    title: "hackaton3",
    description: "An e-commerce application with user authentication and product listing.",
    link: "https://github.com/Arish-Arsalan/hackaton_0.git",
    image: "/Screenshot (1923).png",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "resume_builder",
    description: "An e-commerce application with user authentication and product listing.",
    link: "https://github.com/Arish-Arsalan/resume_builder_milestone4.git",
    image: "/Screenshot (1925).png",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "countdown Timer",
    description: "An e-commerce application with user authentication and product listing.",
    link: "https://github.com/Arish-Arsalan/30-days-project-countdown_timer.git",
    image: "/Screenshot (1926).png",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    // Dynamically import AOS and initialize it
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">My Projects</h1>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="flip-up" // Added AOS animation
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
              {project.image && (
                <img
                  src={project.image }
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

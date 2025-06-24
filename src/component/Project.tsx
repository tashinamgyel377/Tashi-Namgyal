"use client";

import Image from "next/image";

const ProjectsSection = () => (
  <section id="projects" className="py-16 px-4 bg-[#1a2238]">
    <h2 className="text-3xl font-semibold text-center text-white mb-8">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Calculator App */}
      <div className="p-6 border rounded-2xl shadow-lg bg-gray-800 hover:shadow-xl transition">
        <Image
          src="/calculator.jpg"
          alt="Calculator App Screenshot"
          width={600}
          height={400}
          className="w-full object-cover rounded-xl mb-4"
        />

        <h3 className="text-xl font-bold mb-2 text-blue-700">🧮 Calculator App</h3>
        <p className="mb-2 text-white">
          A simple and responsive calculator application that supports basic arithmetic operations.
          It features a clean UI and smooth interactions built entirely with modern frontend tools.
        </p>
        <p className="mb-1 text-sm text-white">
          <strong>Tech Stack:</strong> React, TypeScript, Tailwind CSS
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tashinamgyel377/calculator.js.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline text-sm"
          >
            View Code on GitHub
          </a>
          <a
            href="https://calculator-js-beryl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline text-sm"
          >
            View Live Demo
          </a>
        </div>
      </div>

      {/* Book Review */}
      <div className="p-6 border rounded-2xl shadow-lg bg-gray-800 hover:shadow-xl transition">
        <Image
          src="/bookreview.jpg"
          alt="Book Review App Screenshot"
          width={600}
          height={400}
          className="w-full object-cover rounded-xl mb-4"
        />

        <h3 className="text-xl font-bold mb-2 text-blue-700">📚 Book Review</h3>
        <p className="mb-2 text-white">
          A book review platform where users can share their thoughts on books they&apos;ve read, rate them,
          and discover new books based on recommendations. The app allows for user authentication and a custom
          dashboard to track reviews and ratings.
        </p>
        <p className="mb-1 text-sm text-white">
          <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, JWT Authentication
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tashinamgyel377/book-review.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            View Code on GitHub
          </a>
          <a
            href="https://final-frontend-mkww.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline text-sm"
          >
            View Live Demo
          </a>
        </div>
      </div>

      {/* Water Management System */}
      <div className="p-6 border rounded-2xl shadow-lg bg-gray-800 hover:shadow-xl transition">
        <Image
          src="/water_management.jpg"
          alt="Water Management System Screenshot"
          width={600}
          height={400}
          className="w-full object-cover rounded-xl mb-4"
        />

        <h3 className="text-xl font-bold mb-2 text-blue-700">💧 Water Management System</h3>
        <p className="mb-2 text-white">
          A system designed to monitor and manage water consumption in a community. The app tracks water usage,
          provides alerts when consumption is higher than usual, and generates reports. It helps in optimizing water
          distribution and maintaining sustainable practices.
        </p>
        <p className="mb-1 text-sm text-white">
          <strong>Tech Stack:</strong> React, Node.js, MongoDB, Chart.js for data visualization
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tashinamgyel377/final-water-frontend.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            View Code on GitHub
          </a>
          <a
            href="https://final-water-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline text-sm"
          >
            View Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;

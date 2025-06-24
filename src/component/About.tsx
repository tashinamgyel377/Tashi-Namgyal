"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Rocket, Bolt, User, MapPin } from "lucide-react";

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleToggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="about" className="py-16 px-4 bg-[#1a2238] text-white text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">About Me</h2>

      <div className="max-w-4xl mx-auto bg-[#12192d] p-8 rounded-xl shadow-xl">
        <div className="flex items-center justify-center gap-6 mb-8">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={112}
            height={112}
            className="rounded-full border-4 border-pink-600 shadow-lg object-cover"
          />
          <div className="text-left">
            <h3 className="text-2xl font-semibold">Tashi Namgyel</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="w-4 h-4 text-pink-500" />
              <span>Tsirang, Bhutan</span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-6">
          I&apos;m a passionate full-stack developer with a keen interest in building scalable web apps.
          My expertise lies in JavaScript, React, Node.js, and much more. I&apos;m constantly looking for
          new challenges and opportunities to grow.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <button
            onClick={() => handleToggleSection("overview")}
            className="bg-[#1f2937] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-pink-600 transition"
          >
            <Sparkles className="w-5 h-5" /> Overview
          </button>
          <button
            onClick={() => handleToggleSection("skills")}
            className="bg-[#1f2937] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-pink-600 transition"
          >
            <Bolt className="w-5 h-5" /> Skills
          </button>
          <button
            onClick={() => handleToggleSection("learning")}
            className="bg-[#1f2937] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-pink-600 transition"
          >
            <Rocket className="w-5 h-5" /> Learning
          </button>
          <button
            onClick={() => handleToggleSection("personal")}
            className="bg-[#1f2937] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-pink-600 transition"
          >
            <User className="w-5 h-5" /> Personal
          </button>
        </div>

        {activeSection === "overview" && (
          <div className="bg-[#1a2332] p-8 rounded-xl shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Overview</h3>
            <p className="text-gray-300 mb-2">
              I am a Full-Stack Developer with a focus on building intuitive, fast, and scalable applications.
              My passion for technology drives me to continuously learn and stay updated with the latest trends.
            </p>
            <p className="text-gray-300">
              After completing my BSc (Hons) in Computing, I began my journey in software development through
              a bootcamp and have since worked on various full-stack projects. My expertise spans across both
              frontend and backend technologies, including React, Node.js, TypeScript, MongoDB, and more.
            </p>
          </div>
        )}

        {activeSection === "skills" && (
          <div className="bg-[#1a2332] p-8 rounded-xl shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Skills</h3>
            <p className="text-gray-300 mb-4">
              Here are some of the key skills I&apos;ve developed over the years:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-white">
              {[
                { title: "React", desc: "Building interactive UIs using React's component-based architecture." },
                { title: "Node.js", desc: "Building scalable backend services with Node.js and Express.js." },
                { title: "MongoDB", desc: "Designing and managing NoSQL databases for flexible data structures." },
                { title: "TypeScript", desc: "Enhancing JavaScript with static typing for improved code quality." },
                { title: "Tailwind CSS", desc: "Rapidly styling web pages using utility-first CSS for better responsiveness." },
                { title: "Git", desc: "Managing code versions and collaborating effectively using Git and GitHub." },
              ].map((skill, index) => (
                <div key={index} className="bg-[#12192d] p-4 rounded-lg">
                  <p className="font-semibold">{skill.title}</p>
                  <p className="text-gray-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "learning" && (
          <div className="bg-[#1a2332] p-8 rounded-xl shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Learning</h3>
            <p className="text-gray-300">
              I am a lifelong learner, constantly exploring new technologies and frameworks. Currently, I&apos;m focused on:
            </p>
            <ul className="text-gray-300 mt-4 space-y-2 text-left list-disc pl-5">
              <li>Exploring advanced Next.js features, including ISR and Middleware.</li>
              <li>Learning TypeScript in-depth to improve application scalability.</li>
              <li>Enhancing my knowledge of Kubernetes and Docker.</li>
              <li>Experimenting with serverless architectures.</li>
              <li>Exploring AI and ML for future project integrations.</li>
            </ul>
          </div>
        )}

        {activeSection === "personal" && (
          <div className="bg-[#1a2332] p-8 rounded-xl shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Personal</h3>
            <p className="text-gray-300">When I&apos;m not coding, I enjoy:</p>
            <ul className="text-gray-300 mt-4 space-y-2 text-left list-disc pl-5">
              <li>Exploring the outdoors – trekking through Bhutan&apos;s beautiful landscapes.</li>
              <li>Reading books about tech, science, and self-improvement.</li>
              <li>Cooking traditional Bhutanese dishes like Ema Datshi.</li>
              <li>Playing chess to enhance critical thinking.</li>
              <li>Relaxing with a cup of Suja (butter tea).</li>
            </ul>
          </div>
        )}

        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transition mt-8"
        >
          Let&apos;s Connect! <Rocket className="w-4 h-4 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;

"use client";

import Image from "next/image";

const Profile = () => (
  <section
    id="home"
    className="pt-20 pb-16 flex flex-col items-center bg-[#1a2238] px-4 text-center"
  >
    <div className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-xl w-full border border-white/30">
      <Image
        src="/me.jpg"
        alt="Profile"
        width={144}
        height={144}
        className="w-36 h-36 rounded-full mx-auto shadow-lg mb-6 object-cover border-4 border-white/50"
        priority
      />
      <h1 className="text-4xl font-extrabold text-[#0f172a] mb-2">
        Tashi Namgyel
      </h1>
      <p className="text-lg text-black font-semibold mb-4">
        Full Stack Developer
      </p>
      <p className="text-white leading-relaxed mb-4">
        Passionate about crafting fast, scalable, and beautiful applications
        using{" "}
        <span className="font-bold text-white">React, Node.js, MongoDB</span>{" "}
        and <span className="font-bold text-white">TypeScript</span>.
      </p>
      <p className="text-gray-250 leading-relaxed mb-6">
        Based in Bhutan 🇧🇹, I love solving real-world problems through
        full-stack development and sipping suja ☕.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition shadow-md"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Profile;

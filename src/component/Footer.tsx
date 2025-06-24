import {
  FaReact,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#0c1222] text-white text-center py-10 px-4">
      <p className="text-sm mb-2">© 2025 Namgyel. All rights reserved.</p>
      <p className="mb-8">
        Made with <span className="text-red-500">❤️</span> and ☕ by Tashi
      </p>

      <div className="bg-[#12192d] rounded-xl px-6 py-8 max-w-4xl mx-auto mb-6 shadow-md">
        <h3 className="font-semibold text-lg flex items-center justify-center gap-2 mb-6">
          <span className="text-blue-400">{`</>`}</span> Built with modern technologies
        </h3>
        <div className="flex justify-center gap-6 text-3xl mb-4">
          <FaReact className="text-blue-500" />
          <SiNextdotjs />
          <SiTypescript className="text-blue-400" />
          <SiTailwindcss className="text-teal-400" />
          <FaFigma className="text-pink-400" />
          <SiVercel />
        </div>
        <p className="text-sm text-gray-300">
          Features include App Router & Server Actions, React Email & Resend integration,
          responsive design, and seamless dark mode support.
        </p>
      </div>

      <p className="text-green-400 text-sm mb-1">🟢 Website is live and ready to connect!</p>
      <p className="text-sm text-gray-300 mb-4">
        Designed for performance, accessibility, and user experience.
      </p>
      <p className="text-sm text-blue-300">Let&apos;s build something amazing together ✨</p>
    </footer>
  );
};

export default Footer;

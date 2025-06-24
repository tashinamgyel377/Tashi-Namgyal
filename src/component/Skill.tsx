const skills = [
  { name: 'HTML5', description: 'Structure and semantics of web content.' },
  { name: 'CSS3', description: 'Styling for modern, responsive layouts.' },
  { name: 'JavaScript', description: 'Adds interactivity to web pages.' },
  { name: 'TypeScript', description: 'Typed JavaScript for scalable applications.' },
  { name: 'React', description: 'Builds dynamic user interfaces.' },
  { name: 'Next.js', description: 'React framework with SSR and routing.' },
  { name: 'Redux', description: 'Manages global application state.' },
  { name: 'Zustand', description: 'Lightweight state management for React.' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS for rapid styling.' },
  { name: 'Node.js', description: 'JavaScript runtime for backend development.' },
  { name: 'Express.js', description: 'Minimalist backend framework for Node.js.' },
  { name: 'MongoDB', description: 'NoSQL database for scalable data storage.' },
  { name: 'Firebase', description: 'Backend services like auth and hosting.' },
  { name: 'PostgreSQL', description: 'Relational database with strong consistency.' },
  { name: 'REST APIs', description: 'Communication between frontend and backend.' },
  { name: 'Git', description: 'Version control system for source code.' },
  { name: 'GitHub', description: 'Hosting and collaboration for Git repositories.' },
  { name: 'Vite', description: 'Fast build tool and dev server for frontend.' },
  { name: 'Webpack', description: 'Bundles JavaScript modules for production.' },
  { name: 'Jest', description: 'JavaScript testing framework for unit testing.' },
  { name: 'React Testing Library', description: 'Tests React components effectively.' },
  { name: 'Figma', description: 'UI/UX design and prototyping tool.' },
  { name: 'Netlify', description: 'Deploy and host frontend apps easily.' },
  { name: 'Vercel', description: 'Frontend deployment for Next.js and more.' },
];

const SkillsSection = () => (
  <section id="skills" className="py-16 px-4 bg-[#1a2238]">
    <h2 className="text-3xl font-semibold text-center text-pink-600 mb-10">Skills</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-gray-600 text-white px-3 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition"
        >
          <div className="text-base font-semibold text-center mb-1">{skill.name}</div>
          <p className="text-xs text-blue-100 text-center">{skill.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;

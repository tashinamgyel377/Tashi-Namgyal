export const Navbar = () => (

<nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md py-4 shadow-sm">
  <div className="flex justify-center gap-6 text-white font-medium text-sm sm:text-base">
    {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
      <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition">
        {item}
      </a>
    ))}
  </div>
</nav>
);
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Sidebar({ activeId }) {
  const menus = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="sidebar text-white">
      <div className="profile flex flex-col gap-3 mb-6 lg:mb-20">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-4xl text-slate-200">Aflah Nabil Kristiawan</h1>
        <p className="text-xl text-[#d7dee6]">Junior Web Development</p>
        <p className="w-xs text-gray-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>

      <div className="menu hidden flex-col gap-5 mb-20 lg:flex">
        {menus.map((menu) => (
          <a
            key={menu.id}
            href={`#${menu.id}`}
            className={`flex items-center space-x-2 transition-all duration-300 ${
              activeId === menu.id
                ? "scale-110 text-gray-200 font-semibold text-sm"
                : "text-gray-300 text-sm"
            }`}
          >
            {/* tanda + jadi x dengan animasi rotasi */}
            <span
              className={`font-bold inline-block transform transition-transform duration-700 ${
                activeId === menu.id ? "rotate-45 text-gray-200" : "rotate-0 text-gray-400"
              }`}
            >
              +
            </span>
            <span>{menu.label}</span>
          </a>
        ))}
      </div>

      <div className="contact flex gap-3 mb-16">
        <a
          href="https://www.instagram.com/aflahnabil__/"
          target="_blank"
          className="text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/Aflahhh"
          className="text-2xl"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
import { GoArrowUpRight } from "react-icons/go";

function Box({ src, year, subtitle, title, desc, tech }) {
  return (
    <div className="box p-5 hover:bg-slate-800/50 border-white rounded-sm cursor-pointer">
      <a href={src} target="_blank">
        <div className="flex flex-wrap gap-3">
          <div className="box-year text-gray-400 font-bold text-sm">{year}</div>
          <div className="box-content flex flex-col gap-3">
            <div className="box-title text-shadow-md flex items-center">
              {title}{" "}
              <span className="ml-1">
                <GoArrowUpRight />
              </span>
            </div>
            <div className="box-subtitle text-gray-300">{subtitle}</div>
            <div className="box-description text-gray-400 text-sm">{desc}</div>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, i) => (
                <span key={i} className="bg-white/5 text-gray-300 px-3 py-1 rounded-2xl text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Experience() {
  const experience = [
    {
      src: "/pdf/SERTIFIKAT MSIB AFLAH NABIL KRISTIAWAN.pdf",
      year: "2023 - 2024",
      title: "Studi Independent - Infinite Learning",
      subtitle: "Web Development",
      desc: "Learn about the basics of building web-based applications from UI design and implementing web design with HTML, CSS, and Javascript, then using frameworks such as React, and of course also learn back-end development with MySQL.",
      tech: ["HTML", "CSS", "Javascript", "React", "MySQL"],
    },
    {
      src: "/pdf/SERTIFIKAT INTERN AFLAH NABIL KRISTIAWAN.pdf",
      year: "2024 - 2025",
      title: "Intern - PT Pura Barutama Engineering Division",
      subtitle: "Full-stack Developer",
      desc: "Develop internal company applications using front-end and back-end technologies. Involved in the development of new system features to support engineering division operations.",
      tech: ["Laravel", "Booststrap 5", "Javascript", "jQuery", "PostgreSQL"],
    },
  ];
  return (
    <div className="experience flex flex-col gap-5" id="experience">
      {experience.map((exp, i) => (
        <Box key={i} src={exp.src} year={exp.year} title={exp.title} subtitle={exp.subtitle} desc={exp.desc} tech={exp.tech} />
      ))}
    </div>
  );
}

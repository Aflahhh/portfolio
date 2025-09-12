import { GoArrowUpRight } from "react-icons/go";

function Box({ src, img, wImg, hImg, title, desc, tech }) {
  return (
    <div className="box group p-5 hover:bg-slate-800/50 border-white rounded-sm cursor-pointer">
      <a href={src} target="_blank">
        <div className="flex gap-5">
          <div className="box-image ">
            <img src={img} width={wImg} height={hImg} alt="" className="border border-transparent group-hover:border-gray-500 rounded-xs" />
          </div>
          <div className="box-content flex flex-col gap-3">
            <div className="box-title text-shadow-md flex items-center text-justify">
              {title}{" "}
              <span className="ml-1">
                <GoArrowUpRight />
              </span>
            </div>
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

export default function Projects() {
  const experience = [
    {
      src: "https://aflahhh.github.io/webprofile_aflah/",
      img: "/image-projects/web-profile-img.png",
      wImg: "500",
      hImg: "28",
      title: "Personal Website",
      desc: "I created this personal website as a platform to introduce myself, showcase my experiences, share informal photos, and share my hobbies. It also serves as a digital profile that's easily accessible to anyone who wants to get to know me.",
      tech: ["HTML", "CSS", "Javascript"],
    },
    {
      src: "https://expedition-6t3wf9ibh-aflahnabils-projects.vercel.app/",
      img: "/image-projects/expedition-img.png",
      title: "Expedition Landing Page",
      wImg: "575",
      hImg: "28",
      desc: "I created a landing page website for the company CV Putra Ardiansyah, which operates in the field of goods delivery services using trucks and has been operating for a long time. The aim of this website is to provide a wider introduction to what CV Putra Ardiansyah is.",
      tech: ["HTML", "CSS", "Javascript"],
    },
    {
      src: "https://github.com/Aflahhh/e-surat",
      img: "/image-projects/e-surat.png",
      title: "E-SURAT",
      wImg: "700",
      hImg: "5",
      desc: `E-SURAT is a web-based application I created to manage incoming and outgoing mail, as well as the disposition of both internal and external mail.This system streamlines the flow of mail, from receipt to disposition by the Principal, to follow-up by the Administration (TU). This is one of my freelance projects.`,
      tech: ["Laravel", "Bootstrap", "CSS", "Javascript"],
    },
  ];
  return (
    <div className="projects flex flex-col gap-5" id="projects">
      {experience.map((exp, i) => (
        <Box key={i} src={exp.src} img={exp.img} wImg={exp.wImg} hImg={exp.hImg} title={exp.title} desc={exp.desc} tech={exp.tech} />
      ))}
    </div>
  );
}

import { FaLaravel } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="about flex flex-col px-5 gap-5 text-gray-400 text-justify" id="">
        <p>
          I'm a junior web developer striving to build clean, efficient, and user-friendly web applications. My focus is on backend and frontend development using {" "}
          <span className="text-[#f22b02]">
            <a href="https://laravel.com/" target="_blank">
              Laravel
            </a>
          </span>
          , where I enjoy creating systems that are not only functional but also easy to maintain and scale.{" "}
        </p>
        <p>
          {" "}
          Previously, I had the opportunity to work as a full-stack developer intern at the <span className=" text-gray-200">PT Pura Barutama Engineering Division</span>, where I contributed to the
          development of web applications that supported internal workflows. This experience gave me a solid foundation in frontend and backend development, as well as practical
          experience in a real-world project environment.{" "}
        </p>
        <p>
          {" "}
          I'm passionate about problem-solving and exploring new challenges in coding. For me, coding isn't just about completing a task—it's about finding the most effective and elegant solution.{" "}
        </p>
        <p> In my free time, I typically spend my time coding for fun, experimenting with new technologies, and improving my skills as a developer.</p>
      </div>
    </>
  );
}

import Sidebar from "./components/Sidebar";
import { useActiveSection } from "./hooks/useActiveSection";
import Experience from "./components/content/Experience";
import Projects from "./components/content/Projects";
import About from "./components/content/About";
import Credits from "./components/content/Credits";

export default function App() {
  const activeId = useActiveSection(["about", "experience", "projects"]);

  return (
    <div className="relative bg-[#0f172a] min-h-screen overflow-hidden px-6 py-12 md:px-12 md:py-16 lg:py-20 ">
      {/* highlight fixed biar nggak ikut scroll */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1 w-[15rem] h-50 rounded-full bg-[#0f1c3b] blur-3xl"></div>
        <div className="absolute top-0.5 right-0.5 w-[38rem] h-[28rem] rounded-full bg-[#0f1c3b] blur-3xl"></div>
      </div>

      {/* konten utama */}
      <div className="relative lg:flex lg:gap-12">
        {/* Sidebar kiri */}
        <aside className="w-full lg:w-1/3 lg:fixed p-1 lg:p-0 lg:ml-18 lg:h-screen ">
          <Sidebar activeId={activeId} />
        </aside>

        {/* Konten kanan */}
        <main className="w-full lg:ml-[43%] lg:w-2/3 mb-1 ">
          <div className="flex flex-col gap-10 lg:gap-52">
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <h2 className="text-slate-200 text-xl font-bold mb-7 lg:mb-2 lg:ml-2">Experience</h2>
              <Experience />
            </section>
            <section id="projects">
              <h2 className="text-slate-200 text-xl font-bold mb-7 lg:mb-2 lg:ml-2">Projects</h2>
              <Projects />
            </section>
          </div>
          <section id="">
            <Credits />
          </section>
        </main>
      </div>
    </div>
  );
}

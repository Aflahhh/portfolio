import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const activeId = useActiveSection(["about", "experience", "projects"]);

  return (
    <div className="relative bg-[#0f172a] min-h-screen flex py-20 px-15 overflow-hidden">
      {/* highlight fixed biar nggak ikut scroll */}
      <div className="fixed inset-0 pointer-events-none">
        {/* highlight kiri atas */}
        <div className="absolute bottom-10 left-1 w-[15rem] h-50 rounded-full bg-[#0f1c3b] blur-3xl"></div>
        {/* highlight kanan bawah */}
        <div className="absolute top-0.5 right-0.5 w-[38rem] h-[28rem] rounded-full bg-[#0f1c3b] blur-3xl"></div>
      </div>

      {/* konten utama */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        <aside className="w-1/3 lg:w-1/4 p-8 fixed h-screen">
          <Sidebar activeId={activeId} />
        </aside>

        <main className="ml-[33%] lg:ml-[45%] w-2/3 lg:w-3/4 p-8">
          <section id="about" className="h-screen">
            <Content />
          </section>
          <section id="experience" className="h-screen"></section>
          <section id="projects" className="h-screen"></section>
        </main>
      </div>
    </div>
  );
}

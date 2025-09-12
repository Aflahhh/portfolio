import Experience from "./content/Experience";
import Projects from "./content/Projects";
import About from "./content/About";
import Credits from "./content/Credits";

export default function Content() {
    return(
        <>
        <div className="content text-white w-2xl flex flex-col gap-44">
            <About />
            <Experience />
            <Projects />
        </div>
            <Credits />
        </>
    );
}
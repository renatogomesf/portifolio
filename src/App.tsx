import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const link = document.querySelectorAll(".link");
    const sections = document.querySelectorAll<HTMLDivElement>(".section");

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 180;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute("id");

        if (top >= offset && top < offset + heightSection) {
          link.forEach((link) => {
            link.classList.remove("text-[#93FA21]");
            link.children.item(1)?.classList.remove("opacity-100");

            document
              .querySelector(`header nav a[href*='${idSection}']`)
              ?.classList.add("text-[#93FA21]");

            document
              .querySelector(`header nav a[href*='${idSection}']`)
              ?.children.item(1)
              ?.classList.add("opacity-100");
          });
        }
      });
    });
  }, []);

  return (
    <>
      <div className="">
        {/* bg-[url(../src/assets/fundo2.jpg)] bg-no-repeat bg-cover */}
        <div className="bg-[url(../src/assets/fundo2.jpg)] bg-no-repeat bg-cover">
          <div className="p-2.5 max-w-[1150px] m-auto ">
            <Header />
            <Hero />
            <About />
          </div>
        </div>

        <Skills />

        {/* bg-[url(../src/assets/fundo2.jpg)] min-[1024px]:bg-no-repeat min-[1024px]:bg-cover */}
        <div className="bg-[url(../src/assets/fundo2.jpg)] min-[1024px]:bg-no-repeat min-[1024px]:bg-cover">
          <div className="p-2.5 max-w-[1150px] m-auto">
            <Projects />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

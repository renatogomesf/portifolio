import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <div className="">
        <div className="bg-[url(../src/assets/fundo2.jpg)]">
          <div className="p-2.5 max-w-[1150px] m-auto">
            <Header />
            <Hero />
            <About />
          </div>
        </div>

        <Skills />

        <div className="bg-[url(../src/assets/fundo2.jpg)]">
          <div className="p-2.5 max-w-[1150px] m-auto">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

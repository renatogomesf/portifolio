import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  return (
    <>
      <div className="max-w-[1150px] m-auto">
        <Header />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;

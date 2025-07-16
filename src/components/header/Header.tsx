import { useRef } from "react";

import Logo from "../../assets/logo.png";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
      headerRef.current?.classList.add("bg-[#000105a6]");
    } else {
      headerRef.current?.classList.remove("bg-[#000105a6]");
    }
  });

  return (
    <>
      <header className="w-full max-w-[1150px] fixed z-10">
        <div
          ref={headerRef}
          className="flex flex-row justify-between items-center p-3.5 rounded-[5px] duration-150 hover:bg-[#000105]"
        >
          <div>
            <img className="max-w-[150px]" src={Logo} alt="rdev" />
          </div>
          <nav>
            <ul className="flex flex-row gap-20 text-white">
              <a
                href="#sec01"
                className="link group hover:text-[#93FA21] flex flex-col items-center text-[#93FA21] duration-300"
              >
                <li>Home</li>
                <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 opacity-100 group-hover:opacity-100 duration-300"></div>
              </a>
              <a
                href="#sec02"
                className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
              >
                <li>Sobre</li>
                <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
              </a>
              <a
                href="#sec03"
                className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
              >
                <li>habilidade</li>
                <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
              </a>
              <a
                href="#sec04"
                className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
              >
                <li>Projetos</li>
                <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
              </a>
              <a
                href="#sec05"
                className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
              >
                <li>contato</li>
                <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
              </a>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

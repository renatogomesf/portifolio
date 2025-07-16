import { useRef } from "react";

import Logo from "../../assets/logo.png";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
      headerRef.current?.classList.add("bg-[#000105a6]");
    } else {
      headerRef.current?.classList.remove("bg-[#000105a6]");
    }
  });

  function openCloseMenu() {
    navRef.current?.classList.toggle("max-md:-top-130");
    navRef.current?.classList.toggle("max-md:top-0");
  }

  return (
    <>
      <header className="relative">
        <div
          ref={headerRef}
          className="fixed z-10 w-full max-w-[1150px] flex flex-row justify-between items-center p-3.5 rounded-[5px] duration-150 hover:bg-[#000105] max-md:w-[94%]"
        >
          <div>
            <img className="max-w-[150px]" src={Logo} alt="rdev" />
          </div>

          <div>
            <div onClick={() => openCloseMenu()}>
              <svg
                className="w-[40px] min-md:hidden"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12H20M4 8H20M4 16H12"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            <nav
              ref={navRef}
              className=" max-md:absolute max-md:left-0 max-md:right-0 max-md:-top-130 max-md:p-5 max-md:rounded-[5px] max-md:bg-[#000105] max-md:flex max-md:flex-col max-md:items-end duration-500"
            >
              <div onClick={() => openCloseMenu()}>
                <svg
                  className="w-[40px] min-md:hidden z-10"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Close</title>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g id="Close">
                        {" "}
                        <rect
                          id="Rectangle"
                          fill-rule="nonzero"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          {" "}
                        </rect>{" "}
                        <line
                          x1="16.9999"
                          y1="7"
                          x2="7.00001"
                          y2="16.9999"
                          id="Path"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                        >
                          {" "}
                        </line>{" "}
                        <line
                          x1="7.00006"
                          y1="7"
                          x2="17"
                          y2="16.9999"
                          id="Path"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                        >
                          {" "}
                        </line>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>

              <ul className="flex flex-row gap-15 text-white max-md:flex-col max-md:items-center max-md:w-full">
                <a
                  onClick={() => openCloseMenu()}
                  href="#sec01"
                  className="link group hover:text-[#93FA21] flex flex-col items-center text-[#93FA21] duration-300"
                >
                  <li>Home</li>
                  <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 opacity-100 group-hover:opacity-100 duration-300"></div>
                </a>
                <a
                  onClick={() => openCloseMenu()}
                  href="#sec02"
                  className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
                >
                  <li>Sobre</li>
                  <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
                </a>
                <a
                  onClick={() => openCloseMenu()}
                  href="#sec03"
                  className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
                >
                  <li>habilidade</li>
                  <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
                </a>
                <a
                  onClick={() => openCloseMenu()}
                  href="#sec04"
                  className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
                >
                  <li>Projetos</li>
                  <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
                </a>
                <a
                  onClick={() => openCloseMenu()}
                  href="#sec05"
                  className="link group hover:text-[#93FA21] flex flex-col items-center duration-300"
                >
                  <li>contato</li>
                  <div className="w-[8px] h-[8px] bg-[#93FA21] rounded-full mt-1 opacity-0 group-hover:opacity-100 duration-300"></div>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

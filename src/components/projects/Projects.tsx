import Dashboard from "../../assets/projects/julius.png";
import Ecommerc from "../../assets/projects/digital-store.png";
import Slide from "./slide/Slide";

import { Window, Code, Api } from "./SvgProject";

export default function Projects() {
  return (
    <>
      <section>
        <div className="text-white mt-20 pb-20">
          <h2 className="text-[5rem] font-black text-[#4FE3AD]">
            Meus Projetos
          </h2>

          <div className="flex gap-5 mt-5">
            <a
              className="rounded-[10px] overflow-hidden max-w-[600px] hover:ring-4 hover:ring-[#4FE3AD] hover:rotate-3 cursor-pointer duration-150"
              href="https://julius-six.vercel.app/dashboard"
              target="_blank"
            >
              <img src={Dashboard} alt="dashboard" />
            </a>
            <div>
              <h3 className="text-[2rem] font-black text-[#93FA21]">Julius</h3>
              <p className="text-[1.5rem] font-extralight">
                Dashboard de controle financeiro.
              </p>

              <div className="flex gap-5 mt-5">
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  Next.js
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  Tailwind
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  TypeScript
                </p>
              </div>

              <div className="flex gap-5 mt-5">
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  Node
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  Express
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  MySQL
                </p>
              </div>

              <div className="flex gap-10 mt-8">
                <a
                  className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                  href="https://julius-six.vercel.app/dashboard"
                  target="_blank"
                >
                  Ver Projeto
                  <Window />
                </a>

                <a
                  className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                  href="https://github.com/renatogomesf/julius"
                  target="_blank"
                >
                  Ver Código
                  <Code />
                </a>
                <a
                  className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                  href="https://github.com/renatogomesf/api-julius"
                  target="_blank"
                >
                  Ver API
                  <Api className={"fill-[#fff] w-[30px]"} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-5 mt-20">
            <a
              className="rounded-[10px] overflow-hidden max-w-[600px] hover:ring-4 hover:ring-[#4FE3AD] hover:rotate-3 cursor-pointer duration-150"
              href="https://renatogomesf.github.io/Digital-Store/"
              target="_blank"
            >
              <img src={Ecommerc} alt="e-commerc" />
            </a>
            <div className="text-end">
              <h3 className="text-[2rem] font-black text-[#93FA21]">
                Digital Store
              </h3>
              <p className="text-[1.5rem] font-extralight">
                E-commerce de sapatos, roupas e acessórios.
              </p>

              <div className="flex justify-end gap-5 mt-5">
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  React.js
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  Styled Components
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  JavaScript
                </p>
              </div>

              <div className="flex justify-end gap-5 mt-5">
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  Node
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  Express
                </p>
                <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                  MySQL
                </p>
              </div>

              <div className="flex justify-end gap-10 mt-8">
                <a
                  className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                  href="https://renatogomesf.github.io/Digital-Store/"
                  target="_blank"
                >
                  Ver Projeto
                  <Window />
                </a>

                <a
                  className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                  href="https://github.com/renatogomesf/Digital-Store"
                  target="_blank"
                >
                  Ver Código
                  <Code />
                </a>
                <a
                  className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                  href="https://github.com/renatogomesf/Api-Digital-Store"
                  target="_blank"
                >
                  Ver API
                  <Api className={"fill-[#fff] w-[30px]"} />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[800px] m-auto mt-40">
            <Slide />
          </div>
        </div>
      </section>
    </>
  );
}

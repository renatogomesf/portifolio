import Dashboard from "../../assets/projects/julius.png";
import Ecommerc from "../../assets/projects/digital-store.png";
import Slide from "./slide/Slide";
import { projetos } from "./slide/Slide";

import { Window, Code, Api } from "./SvgProject";

export default function Projects() {
  return (
    <>
      <section>
        <div className="text-white mt-20 pb-30">
          <h2 className="text-[5rem] font-black text-[#4FE3AD] max-md:text-[3rem]">
            Meus Projetos
          </h2>

          <div className="flex flex-wrap gap-5 mt-5 max-md:flex-col">
            <a
              className="rounded-[10px] overflow-hidden max-w-[600px] max-[1025px]:max-w-[800px] hover:ring-4 hover:ring-[#4FE3AD] hover:rotate-3 cursor-pointer duration-150"
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

              <div className="flex flex-wrap gap-10 mt-8">
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

          <div className="flex flex-wrap flex-row-reverse gap-5 mt-20 max-md:flex-col">
            <a
              className="rounded-[10px] overflow-hidden max-w-[600px] max-[1025px]:max-w-[800px] hover:ring-4 hover:ring-[#4FE3AD] hover:rotate-3 cursor-pointer duration-150"
              href="https://renatogomesf.github.io/Digital-Store/"
              target="_blank"
            >
              <img src={Ecommerc} alt="e-commerc" />
            </a>
            <div className="text-end max-md:text-start">
              <h3 className="text-[2rem] font-black text-[#93FA21]">
                Digital Store
              </h3>
              <p className="text-[1.5rem] font-extralight">
                E-commerce de sapatos, roupas e acessórios.
              </p>

              <div className="flex justify-end max-md:justify-start gap-5 mt-5">
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

              <div className="flex justify-end max-md:justify-start gap-5 mt-5">
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

              <div className="flex flex-wrap justify-end max-md:justify-start gap-10 mt-8">
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

          <div className="min-[1025px]:hidden">
            {projetos.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center mt-20"
                >
                  <div className="group max-w-[800px]">
                    <img
                      className="bg-cover rounded-[10px]"
                      src={item.img}
                      alt={item.titulo}
                    />
                    <div className="">
                      <div className=" ">
                        <h3 className="text-[2rem] font-black text-[#93FA21]">
                          {item.titulo}
                        </h3>
                        <p className="text-[1.5rem] font-extralight">
                          {item.descricao}
                        </p>

                        <div className="flex flex-wrap gap-5 mt-5">
                          {item.tecnologias.map((tec) => {
                            return (
                              <p className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px]">
                                {tec}
                              </p>
                            );
                          })}
                        </div>

                        <div className="flex flex-wrap gap-10 mt-8">
                          <a
                            className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                            href={item.link_projeto}
                            target="_blank"
                          >
                            Ver Projeto
                            <Window />
                          </a>

                          <a
                            className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                            href={item.link_codigo}
                            target="_blank"
                          >
                            Ver Código
                            <Code />
                          </a>
                          {item.link_api != "" ? (
                            <a
                              className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                              href=""
                            >
                              Ver API
                              <Api className={"fill-[#fff] w-[30px]"} />
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[80%] max-w-[800px] max-sm:max-w-[300px] m-auto mt-40 max-[1025px]:hidden">
            <h3 className="text-[2rem] font-black text-[#93FA21] mb-1">
              Tem Mais Projetos...
            </h3>
            <Slide />
          </div>
        </div>
      </section>
    </>
  );
}

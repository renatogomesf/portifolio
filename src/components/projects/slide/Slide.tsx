// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import PORTIFOLIO_V2 from "../../../assets/projects/portifolio v2.png";
import FORM_MONGODB from "../../../assets/projects/formulario-mongodb.png";
import FORM_MYSQL from "../../../assets/projects/formulario.png";
import LANDING_BARBEARIA from "../../../assets/projects/landing-page-barbearia.png";
import LANDING_PAGE from "../../../assets/projects/landing page.png";
import PAGINA_RESORTS from "../../../assets/projects/pagina-de-resorts.png";
import PORTIFOLIO_V1 from "../../../assets/projects/portifolio-antigo.png";
import JOGO_PERGUNTA from "../../../assets/projects/jogo de perguntas.png";
import CALCULADORA from "../../../assets/projects/calculadora.png";
import LISTA from "../../../assets/projects/lista.png";

import { Window, Code, Api } from "../SvgProject";

export default function Slide() {
  const projetos = [
    {
      id: "projeto2",
      img: PORTIFOLIO_V2,
      titulo: "Portifólio v2",
      descricao: "Segunda versão do meu portifólio.",
      tecnologias: ["REACT", "CSS", "JS"],
      link_projeto: "https://renatogomesf.github.io/Portifolio-v2/",
      link_codigo: "https://github.com/renatogomesf/Portifolio-v2",
    },
    {
      id: "projeto3",
      img: FORM_MONGODB,
      titulo: "Formulário Full-Stack (MongoDB Atlas)",
      descricao:
        "Formulário fullstack onde é possível realizar um CRUD (Create, Read, Update e Delete) completo.",
      tecnologias: ["REACT", "SC", "JS", "NODE", "MONGODB"],
      link_projeto: "https://renatogomesf.github.io/Formulario-MongoDB/",
      link_codigo: "https://github.com/renatogomesf/Formulario-MongoDB",
    },
    {
      id: "projeto4",
      img: FORM_MYSQL,
      titulo: "Formulário Full-Stack (MySQL)",
      descricao:
        "Formulário fullstack onde é possível realizar um CRUD (Create, Read, Update e Delete) completo.",
      tecnologias: ["REACT", "SC", "JS", "NODE", "MYSQL"],
      link_projeto: "https://renatogomesf.github.io/Formulario-MySQL/",
      link_codigo: "https://github.com/renatogomesf/Formulario-MySQL",
    },
    {
      id: "projeto5",
      img: LANDING_BARBEARIA,
      titulo: "Landing page Barbearia",
      descricao:
        "Página destinada a divulgar uma determinada barbearia com cortes de cabelo e barba.",
      tecnologias: ["REACT", "SC", "JS"],
      link_projeto: "https://renatogomesf.github.io/Landing-Page-Barbearia/",
      link_codigo: "https://github.com/renatogomesf/Landing-Page-Barbearia",
    },
    {
      id: "projeto6",
      img: LANDING_PAGE,
      titulo: "Landing page Restaurante.",
      descricao:
        "Página destinada a divulgar um determinado restaurante com foco em delivery.",
      tecnologias: ["REACT", "TAILWIND", "JS"],
      link_projeto: "https://renatogomesf.github.io/Landing-Page/",
      link_codigo: "https://github.com/renatogomesf/Landing-Page",
    },
    {
      id: "projeto7",
      img: PAGINA_RESORTS,
      titulo: "Página de Resorts.",
      descricao:
        "Página destinada a facilitar a procura e a reserva de resorts na região desejada pelo usuário.",
      tecnologias: ["REACT", "TAILWIND", "JS"],
      link_projeto: "https://renatogomesf.github.io/Pagina-de-Resorts/",
      link_codigo: "https://github.com/renatogomesf/Pagina-de-Resorts",
    },
    {
      id: "projeto8",
      img: PORTIFOLIO_V1,
      titulo: "Primeiro Portifólio.",
      descricao:
        "Portifólio criado após o curso de HTML e CSS. Posteriormente, foi adicionado JavaScript para dar função de abrir e fechar ao menu mobile.",
      tecnologias: ["HTML", "CSS", "JS"],
      link_projeto: "https://renatogomesf.github.io/Primeiro-Portifolio/",
      link_codigo: "https://github.com/renatogomesf/Portifolio",
    },
    {
      id: "projeto9",
      img: JOGO_PERGUNTA,
      titulo: "Perguntas e Respostas.",
      descricao:
        "Jogo de conhecimentos gerais de múltiplas escolhas na qual só existe uma correta.",
      tecnologias: ["HTML", "CSS", "JS"],
      link_projeto: "https://renatogomesf.github.io/Perguntas-e-Respostas/",
      link_codigo: "https://github.com/renatogomesf/Perguntas-e-Respostas",
    },
    {
      id: "projeto10",
      img: CALCULADORA,
      titulo: "Calculadora.",
      descricao: "Aplicativo para efetuar calculos simples e rápidos.",
      tecnologias: ["HTML", "CSS", "JS"],
      link_projeto: "https://renatogomesf.github.io/Calculadora/",
      link_codigo: "https://github.com/renatogomesf/Calculadora",
    },
    {
      id: "projeto11",
      img: LISTA,
      titulo: "Lista.",
      descricao:
        "Aplicativo para armazenar informações no geral, em forma de lista.",
      tecnologias: ["HTML", "CSS", " JS"],
      link_projeto: "https://renatogomesf.github.io/Lista/",
      link_codigo: "https://github.com/renatogomesf/Lista",
    },
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
      >
        {projetos.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center rounded-[18px] ring-2"
            >
              <div className="relative w-[700px]">
                <img className="bg-cover" src={item.img} alt={item.titulo} />
                <div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000c5] p-5">
                    <h3 className="text-[2rem] font-black text-[#93FA21]">
                      Julius
                    </h3>
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
                        href=""
                      >
                        Ver Projeto
                        <Window />
                      </a>

                      <a
                        className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                        href=""
                      >
                        Ver Código
                        <Code />
                      </a>
                      <a
                        className="flex text-nowrap items-center gap-2 hover:text-[#4FE3AD] hover:ring-4 hover:ring-[#4FE3AD] duration-200 p-1 rounded-[5px]"
                        href=""
                      >
                        Ver API
                        <Api className={"fill-[#fff] w-[30px]"} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

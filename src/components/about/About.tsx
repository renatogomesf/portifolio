import Curriculo from "./pdf/RENATO GOMES.pdf";

export default function About() {
  return (
    <>
      <section>
        <div className="text-white mt-20 pb-5">
          <h2 className="text-[5rem] font-black text-[#4FE3AD] max-md:text-[3rem]">
            Sobre Mim
          </h2>
          <p className="text-[1.5rem] w-[70%] font-extralight ">
            Oi! Sou Renato Gomes, Desenvolvedor Full Stack, com quase 2 anos de
            estudos na área. Fui aluno da{" "}
            <a
              className="text-[#93FA21] hover:underline"
              href="https://geracaotech.iel-ce.org.br/"
              target="_blank"
            >
              Geração Tech
              <svg
                className="w-[20px] inline-block ml-2"
                viewBox="0 0 16 16"
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
                    d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"
                    fill="#93FA21"
                  ></path>{" "}
                  <path
                    d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"
                    fill="#93FA21"
                  ></path>{" "}
                  <path
                    d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"
                    fill="#93FA21"
                  ></path>{" "}
                </g>
              </svg>
            </a>{" "}
            e curso Engenharia de Software na União das Américas Descomplica.
          </p>
          <p className="text-[1.5rem] w-[70%] mt-2.5 font-extralight">
            Tenho experiência com React.js, Node.js, MySQL, Jest, entre outras
            tecnologias, adquirida em projetos pessoais. Estou em constante
            aprendizado e pronto para contribuir com equipes que valorizem
            inovação e crescimento contínuo.
          </p>
          <div className="mt-12 mb-30 font-semibold">
            <a
              className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px] items-center w-fit inline-block hover:text-white hover:ring-2 duration-150"
              href={Curriculo}
              target="_blank"
            >
              Ver CV
              <svg
                className="w-[25px] inline-block ml-2"
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
                    d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                    stroke="#93FA21"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <a
              className="bg-[#2E4757] text-[#93FA21] p-2.5 rounded-[5px] ml-8 items-center w-fit inline-block hover:text-white hover:ring-2 duration-150"
              href={Curriculo}
              download={"RENATO GOMES.pdf"}
            >
              Download CV
              <svg
                className="w-[25px] inline-block ml-2"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#93FA21"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

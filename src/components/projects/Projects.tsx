import Dashboard from "../../assets/projects/julius.png";

export default function Projects() {
  return (
    <>
      <section>
        <div className="text-white mt-20 pb-20">
          <h2 className="text-[5rem] font-black text-[#4FE3AD]">
            Meus Projetos
          </h2>

          <div className="flex gap-5 mt-5">
            <div className="rounded-[10px] overflow-hidden max-w-[600px]">
              <img src={Dashboard} alt="" />
            </div>
            <div>
              <h3 className="text-[2rem] font-black text-[#fff]">Julis</h3>
              <p>Dashboard de controle financeiro.</p>

              <div className="flex gap-5 mt-5">
                <p>Next.js</p>
                <p>Tailwind</p>
                <p>TypeScript</p>
              </div>

              <div className="flex gap-5 mt-5">
                <a href="">Ver Projeto</a>
                <a href="">Ver Código</a>
                <a href="">Ver API</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

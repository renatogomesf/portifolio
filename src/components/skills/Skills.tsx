import { skillsFront, skillsBack, skillsOutros } from "./SvgSkill";

export default function Skills() {
  return (
    <>
      <section className="bg-[#000105] pt-20 pb-30 px-2.5">
        <div className="text-white max-w-[1150px] m-auto">
          <h2 className="text-[5rem] font-black text-[#4FE3AD]">
            Minhas Habilidades
          </h2>

          <h3 className="text-[2rem] font-black text-[#fff]">Front-End</h3>
          <div className="flex flex-wrap mt-[20px]">
            {skillsFront.map((item: any) => {
              return (
                <div className="flex flex-col items-center justify-center w-[230px] h-[230px] border-1 border-[#4fe3ad18] group hover:bg-[#4fe3ad86] duration-150">
                  {item.svg}{" "}
                  <p className="text-[#93FA21] mt-6 group-hover:text-white">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          <h3 className="text-[2rem] font-black text-[#fff] mt-[70px]">
            Back-End
          </h3>
          <div className="flex flex-wrap mt-[20px]">
            {skillsBack.map((item: any) => {
              return (
                <div className="flex flex-col items-center justify-center w-[230px] h-[230px] border-1 border-[#4fe3ad18] group hover:bg-[#4fe3ad86] duration-150">
                  {item.svg}{" "}
                  <p className="text-[#93FA21] mt-6 group-hover:text-white">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          <h3 className="text-[2rem] font-black text-[#fff] mt-[70px]">
            Outros
          </h3>
          <div className="flex flex-wrap mt-[20px]">
            {skillsOutros.map((item: any) => {
              return (
                <div className="flex flex-col items-center justify-center w-[230px] h-[230px] border-1 border-[#4fe3ad18] group hover:bg-[#4fe3ad86] duration-150">
                  {item.svg}{" "}
                  <p className="text-[#93FA21] mt-6 group-hover:text-white">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

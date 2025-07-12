export default function Hero() {
  return (
    <>
      <section>
        <div className="text-white mt-20">
          <h1 className="text-[7rem] font-black leading-[120px]">
            Oi, <br /> Eu sou{" "}
            <span className="font-qwitcher font-light text-[#93FA21] text-[10rem]">
              Renato Gomes
            </span>{" "}
            <br /> Front-end developer
          </h1>

          <div className="flex flex-row gap-10 mt-10">
            <p>Github</p>
            <p>Linkedin</p>
            <p>Email</p>
          </div>

          <div className="w-full flex justify-center mt-10">
            <p>Scroll</p>
          </div>
        </div>
      </section>
    </>
  );
}

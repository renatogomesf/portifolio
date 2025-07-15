export default function Form() {
  return (
    <>
      <div className="flex flex-col gap-5 w-[400px] max-md:max-w-[400px]">
        <input
          className="bg-[#333438] p-2 rounded-[5px] outline-0 focus:ring-2"
          type="text"
          name=""
          id=""
          placeholder="Nome"
        />
        <input
          className="bg-[#333438] p-2 rounded-[5px] outline-0 focus:ring-2"
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
        <textarea
          className="bg-[#333438] h-[100px] p-2 rounded-[5px] outline-0 focus:ring-2"
          name=""
          id=""
          placeholder="Mensagem"
        ></textarea>

        <input
          className="border-2 rounded-[5px] w-fit h-[40px] p-2 text-[#93FA21] hover:text-white cursor-pointer duration-150"
          type="button"
          value="Enviar Mensagem!"
        />
      </div>
    </>
  );
}

import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="w-full">
        <div className="flex flex-row justify-between items-center p-3.5">
          <div>
            <img className="w-[150px]" src={Logo} alt="rdev" />
          </div>
          <nav>
            <ul className="flex flex-row gap-20 text-white">
              <li>Home</li>
              <li>Sobre</li>
              <li>habilidade</li>
              <li>contato</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

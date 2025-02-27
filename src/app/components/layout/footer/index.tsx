import Image from "next/image";

import Logo from "../../../../../public/assets/logo/logo-subtitulo-branco.svg";
import Instagram from "../../../../../public/assets/icons/instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-support-800 text-support-50 p-12 h-48">
      <div className="flex items-center justify-around mx-auto max-w-[2000px]">
        <div>
          <Image src={Logo} width={198} height={43} alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>CONTATO</h1>
          <p className="font-light text-xs mb-2">congresso@huntington.com.br</p>
          <div className="flex items-center gap-4">
            <span>SIGA-NOS</span>
            <div className="flex items-center gap-2">
              <Image src={Instagram} alt="instagram" />
              <span className="font-light text-xs">INSTAGRAM</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-4">REGRAS DE CANCELAMENTO</h1>
          <h1>POLÍTICA DE PRIVACIDADE</h1>
        </div>
      </div>
    </footer>
  );
}

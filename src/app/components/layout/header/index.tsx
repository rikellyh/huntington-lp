import Image from "next/image";
import Link from "next/link";

import { SwitchLang } from "./switchLang";
import { Nav } from "./nav";
import { rubik } from "../../../../../public/assets/fonts/fonts";
import LogoImg from "../../../../../public/assets/logo/logo-subtitulo-branco.svg";

export default function Header() {
  return (
    <header className={`${rubik.className} text-support-50 text-xs h-70 p-4`}>
      <div className="flex items-center justify-evenly max-w-[2000px]">
        <Image src={LogoImg} width={168} height={43} alt="logo" />
        <Nav />
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="bg-support-500 py-4 px-[1.85rem] font-semibold hover:bg-brand-50"
          >
            INSCREVA-SE
          </Link>
          <div className="relative">
            <SwitchLang />
          </div>
        </div>
      </div>
    </header>
  );
}

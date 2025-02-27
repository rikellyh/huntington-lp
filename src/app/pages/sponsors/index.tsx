import Image from "next/image";
import Logo from "../../../../public/assets/logo/logo-subtitulo-branco.svg";
import GoldItem1 from "../../../../public/assets/section-bg/sponsors/gold-1.png";
import GoldItem2 from "../../../../public/assets/section-bg/sponsors/gold-2.png";
import SilverItem1 from "../../../../public/assets/section-bg/sponsors/silver-1.png";
import SilverItem2 from "../../../../public/assets/section-bg/sponsors/silver-2.png";
import BronzeItem1 from "../../../../public/assets/section-bg/sponsors/bronze-1.png";
import BronzeItem2 from "../../../../public/assets/section-bg/sponsors/bronze-2.png";
import BronzeItem3 from "../../../../public/assets/section-bg/sponsors/bronze-3.png";
import BronzeItem4 from "../../../../public/assets/section-bg/sponsors/bronze-4.png";
import BronzeItem5 from "../../../../public/assets/section-bg/sponsors/bronze-5.png";
import BronzeItem6 from "../../../../public/assets/section-bg/sponsors/bronze-6.png";
import BronzeItem7 from "../../../../public/assets/section-bg/sponsors/bronze-7.png";
import BronzeItem8 from "../../../../public/assets/section-bg/sponsors/bronze-8.png";
import BronzeItem9 from "../../../../public/assets/section-bg/sponsors/bronze-9.png";
import SupportItem1 from "../../../../public/assets/section-bg/sponsors/support-1.png";
import SupportItem2 from "../../../../public/assets/section-bg/sponsors/support-2.png";
import SponsorsTitle from "@/app/components/layout/sections/sponsors";

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="px-16">
      <div className="max-w-6xl mx-auto">
        <div className="h-40 flex items-center flex-col gap-4 mb-20 text-center">
          <SponsorsTitle title="REALIZAÇÃO" />
          <Image
            src={Logo}
            className="mt-4"
            width={235}
            height={70}
            alt="logo"
          />
        </div>
        <div className="h-48 flex justify-between items-center flex-row mb-20">
          <div className="w-[47%] h-full flex flex-col items-center gap-4">
            <div className="w-full text-center">
              <SponsorsTitle title="PATROCÍNIO OURO" className="mb-4" />
            </div>
            <div className="flex items-center gap-16 pt-8">
              <Image src={GoldItem1} alt="imagem patrocinador ouro" />
              <Image src={GoldItem2} alt="imagem patrocinador ouro" />
            </div>
          </div>
          <div className="w-[45%] h-full flex flex-col items-center gap-4">
            <div className="w-full text-center">
              <SponsorsTitle title="PATROCÍNIO PRATA" className="mb-4" />
            </div>
            <div className="flex items-center gap-16 pt-8">
              <Image src={SilverItem1} alt="imagem patrocinador prata" />
              <Image src={SilverItem2} alt="imagem patrocinador prata" />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-4 mb-20 text-center">
          <SponsorsTitle title="PATROCÍNIO BRONZE" />
          <div className="w-[75%] flex flex-col items-center gap-20 pt-10">
            <div className="h-16 flex items-center gap-20">
              <Image src={BronzeItem1} alt="imagem patrocinador bronze" />
              <Image src={BronzeItem2} alt="imagem patrocinador bronze" />
            </div>
            <div className="h-16 flex items-center gap-20">
              <Image src={BronzeItem3} alt="imagem patrocinador bronze" />
              <Image src={BronzeItem4} alt="imagem patrocinador bronze" />
              <Image src={BronzeItem5} alt="imagem patrocinador bronze" />
              <Image src={BronzeItem6} alt="imagem patrocinador bronze" />
            </div>
            <div className="h-16 flex items-center gap-20">
              <Image src={BronzeItem7} alt="imagem patrocinador bronze" />
              <Image src={BronzeItem8} alt="imagem patrocinador bronze" />
              <Image src={BronzeItem9} alt="imagem patrocinador bronze" />
            </div>
          </div>
        </div>
        <div className="h-48 flex justify-between items-center flex-row mb-20">
          <div className="w-[45%] h-full flex flex-col items-center gap-4">
            <div className="w-full text-center">
              <SponsorsTitle title="APOIO INSTITUCIONAL" className="mb-4" />
            </div>
            <div className="flex items-center gap-16 pt-8">
              <Image src={SupportItem1} alt="imagem apoiador" />
              <Image src={SupportItem2} alt="imagem apoiador" />
            </div>
          </div>
          <div className="w-[45%] h-full flex flex-col items-center gap-4">
            <div className="w-full text-center">
              <SponsorsTitle title="MÍDIA OFICIAL" className="mb-4" />
            </div>
            <div className="flex items-center gap-16 pt-8">
              <Image src={SupportItem1} alt="imagem apoiador" />
              <Image src={SupportItem2} alt="imagem apoiador" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

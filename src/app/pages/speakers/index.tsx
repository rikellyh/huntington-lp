import Image from "next/image";

import { BoxTextData } from "@/app/components/layout/sections/speakers/boxTextData";
import { Countdown } from "@/app/components/layout/sections/speakers/countDown";
import { ButtonRedirect } from "@/app/components/buttonRedirect";
import { rubik } from "../../../../public/assets/fonts/fonts";

import EventImg from "../../../../public/assets/section-bg/pictures/event-1.png";
import BgSpeakerImg from "../../../../public/assets/section-bg/bg-speaker.svg";

export default function Speakers() {
  return (
    <div
      className={`mt-20 max-w-7xl mx-auto text-support-50 ${rubik.className}`}
    >
      <div className="flex flex-col lg:flex-row items-start justify-center">
        <div className="w-full lg:w-1/2 px-8 py-12">
          <h1 className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-light">
            O FUTURO DA
            <span className="text-support-100 font-medium">
              &nbsp;MEDICINA REPRODUTIVA&nbsp;
            </span>
            passa por aqui
          </h1>
          <p className="font-light text-xl mb-8">
            Nos dias 11 e 12 de abril de 2025, grandes especialistas do mundo
            todo se reúnem novamente no Hotel Tivoli Mofarrej, em São Paulo,
            para apresentar as últimas novidades em reprodução assistida.
          </p>
          <p className="font-light text-xl">
            Nas últimas <strong>5 edições</strong> tivemos mais de:
          </p>
          <div className="flex gap-16 mt-12 font-light">
            <BoxTextData
              number="50"
              text="palestrantes"
              additional="internacionais"
            />
            <BoxTextData
              number="3.500"
              text="participantes"
              additional="inscritos"
            />
          </div>
        </div>
        <div className="w-full text-center font-light text-xs mb-20 lg:w-1/2 px-8 py-12">
          <Image
            src={EventImg}
            alt="imagens do evento"
            width={450}
            height={510}
            className="mx-auto mb-4"
          />
          <span>Imagens do evento realizado em 2023</span>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#050375] via-[#3C38A3] to-[#324f70] w-[85%] mx-auto mb-20 border border-gray-400 rounded-2xl relative flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-auto overflow-hidden">
          <Image
            src={BgSpeakerImg}
            alt="Speakers"
            className="object-contain w-full h-auto lg:h-full"
            width={570}
            height={460}
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 py-16 lg:pr-8 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-normal mb-4">QUANDO?</h1>
            <p className="text-lg font-light">
              O <strong>Congresso Huntington</strong> acontece nos dias
              <strong> 11 e 12 de abril de 2025</strong>. No dia 10, acontece a
              novidade desta edição: a Business Class &quot;Inovação e valor
              para gestores de saúde&quot;.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-normal mb-4">ONDE?</h1>
            <p className="text-lg font-light">
              No Hotel Tivoli Mofarrel, especialistas de vários países trazem os
              avanços, as novidades e o futuro da reprodução assistida.
            </p>
            <ButtonRedirect
              href="/"
              text="VEJA COMO CHEGAR"
              className="w-full max-w-[12.5rem] mt-4 inline-block text-xs bg-support-100 py-3 px-8"
            />
          </div>
        </div>
      </div>
      <Countdown />
    </div>
  );
}

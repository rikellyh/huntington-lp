import { CardInfo } from "@/app/components/layout/sections/comission/cardInfo";

import ComissionImg1 from "../../../../public/assets/section-bg/pictures/comission-1.png";
import ComissionImg2 from "../../../../public/assets/section-bg/pictures/comission-2.png";
import ComissionImg3 from "../../../../public/assets/section-bg/pictures/comission-3.png";
import { rubik } from "../../../../public/assets/fonts/fonts";

export default function Comission() {
  return (
    <section
      id="comissao"
      className={`${rubik.className} text-support-50 flex flex-col mt-28`}
    >
      <div className="text-center mx-auto mb-28">
        <div className="text-3xl mb-12">
          <h1>
            <span className="text-support-100">COMISSÃO</span> ORGANIZADORA
          </h1>
        </div>
        <div className="flex flex-nowrap gap-8">
          <CardInfo img={ComissionImg1} name="Maurício Chehin" crm="58.345" />
          <CardInfo img={ComissionImg2} name="Aline Lorenzon" crm="58.345" />
        </div>
      </div>
      <div className="text-center mx-auto">
        <div className="text-3xl mb-12">
          <h1>
            <span className="text-support-100">COMISSÃO</span> CIENTÍFICA
          </h1>
        </div>
        <div className="max-w-screen-lg flex flex-wrap justify-center gap-8">
          {Array.from({ length: 9 }).map((_, index) => (
            <CardInfo
              key={index}
              img={ComissionImg3}
              name="Eduardo Leme Alves da Motta"
              crm="58.993"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

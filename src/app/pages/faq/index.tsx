"use client";
import { useState } from "react";

import Image from "next/image";
import { accordionContentData } from "@/app/data/faq/accordionContent";
import { FieldTypeInput } from "@/app/components/layout/sections/faq/fieldTypeInput";
import Accordion from "@/app/components/layout/sections/faq";

import { rubik } from "../../../../public/assets/fonts/fonts";
import ArrowRight from "../../../../public/assets/icons/arrow-right.svg";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`${rubik.className} bg-support-600 text-support-50 flex flex-col items-center`}
    >
      <div className="py-10 text-center w-full">
        <div className="text-3xl mb-12">
          <h1>PERGUNTAS FREQUENTES</h1>
        </div>
        <div className="max-w-[52rem] w-full mx-auto">
          {accordionContentData.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              content={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="gradient-schedule w-full p-[4.375rem]">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          <div className="w-1/2 max-w-[32.5rem] flex flex-col items-start gap-2">
            <h1 className="text-3xl">FIQUE POR DENTRO</h1>
            <div>
              <p className="mb-4">
                Preencha seus dados e receba mais informações sobre o evento.
              </p>
              <div className="flex items-center gap-2">
                <span className="font-light">
                  Cadastre-se na nossa newsletter ao lado
                </span>
                <Image src={ArrowRight} alt="arrow right " />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2 max-w-[28.25rem]">
            <FieldTypeInput
              name="completeName"
              id="completeName"
              placeholder="Nome Completo"
            />
            <FieldTypeInput
              type="email"
              name="email"
              id="email"
              placeholder="Endereço de e-mail"
            />
            <button
              type="button"
              className="h-11 bg-support-50 text-support-600 font-semibold text-xs outline-none"
            >
              INSCREVA-SE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-support-700 py-20 text-center w-full">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          <div className="w-1/2 max-w-[32.5rem] flex flex-col items-start gap-8 text-start">
            <h1 className="text-3xl">COMO CHEGAR</h1>
            <div>
              <h2 className="mb-4 text-2xl">Endereço</h2>
              <p className="text-lg">
                Hotel Tivoli Mofarrej
                <br />
                São Paulo/SP - Brasil
              </p>
              <span className="font-light">
                Alameda Santos, 1437 - Cerqueira César, São Paulo
              </span>
            </div>
            <div className="gradient-border-bottom w-full h-1 sm:h-2"></div>
          </div>
          <div className="flex flex-col gap-2 w-1/2 max-w-[28.25rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.12733604312!2d-46.65844552375984!3d-23.563869761686124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8528ba967%3A0x778f091e32fe2c97!2sTivoli%20Mofarrej%20S%C3%A3o%20Paulo%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1740537294773!5m2!1spt-BR!2sbr"
              width="633"
              height="386"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

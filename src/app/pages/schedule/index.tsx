"use client";
import { useState } from "react";

import { CardGradient } from "@/app/components/layout/sections/schedule/scheduleCards/gradient";
import { CardSection } from "@/app/components/layout/sections/schedule/scheduleCards/section";
import { CardDetails } from "@/app/components/layout/sections/schedule/scheduleCards/details";
import { ScheduleDayBtn } from "@/app/components/layout/sections/schedule/scheduleDayBtn";
import { ButtonLangImg } from "@/app/components/layout/header/switchLang/button";
import { scheduleData } from "@/app/data/schedule/mainRoom";
import ScheduleContainer from "@/app/components/layout/sections/schedule";

import {
  scheduleWelcomeData,
  scheduleInovationData,
  scheduleClinicFirstData,
  scheduleClinicSecondData,
} from "@/app/data/schedule/dayOne";

import { ScheduleItem } from "@/app/types/schedule";
import filterScheduleData from "@/app/utils/functions";

import { rubik } from "../../../../public/assets/fonts/fonts";
import BRFlag from "../../../../public/assets/flags/brazil-flag.png";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<string>("10/04");

  const filteredScheduleData = filterScheduleData<ScheduleItem>(
    scheduleData,
    selectedDay
  );
  const filteredScheduleWelcomeData = filterScheduleData<ScheduleItem>(
    scheduleWelcomeData,
    selectedDay
  );
  const filteredScheduleInovationData = filterScheduleData<ScheduleItem>(
    scheduleInovationData,
    selectedDay
  );

  const filteredScheduleClinicFirstData = filterScheduleData<ScheduleItem>(
    scheduleClinicFirstData,
    selectedDay
  );

  const filteredScheduleClinicSecondData = filterScheduleData<ScheduleItem>(
    scheduleClinicSecondData,
    selectedDay
  );

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <section
      id="agenda"
      className={`${rubik.className} bg-support-800 text-support-50 h-1/2 md:h-full mt-12`}
    >
      <div className="flex flex-col items-center gap-8 px-20 py-20 max-w-[1200px] mx-auto mt-20">
        <div>
          <h1 className="text-support-100 text-lg sm:text-xl md:text-2xl lg:text-[2rem] mb-4 sm:mb-[30px]">
            PROGRAMAÇÃO
          </h1>
          <div className="gradient-border-bottom mb-8 w-full h-1 sm:h-2"></div>
          <div className="border border-gray-400 rounded-[2rem] relative flex items-center gap-4 px-7 py-3 cursor-pointer">
            <span className="text-xs">SELECIONE O IDIOMA</span>
            <div>
              <ButtonLangImg
                className="padding-zero text-xs"
                src={BRFlag}
                alt="bandeira do Brasil"
                title="PT"
                showArrow
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-light">
            As agendas estão distribuídas por dia, horário e ambientes.
            <br />
            **Alterações de grade referentes aos speakers e horários podem
            ocorrer sem aviso prévio.
          </span>
        </div>
        <div className="flex gap-4">
          <ScheduleDayBtn
            description="BUSINESS CLASS"
            scheduleDay="QUI • 10 de abril"
            onClick={() => handleDayClick("10/04")}
            isSelected={selectedDay === "10/04"}
          />
          <ScheduleDayBtn
            description="CONGRESSO • 1º DIA"
            scheduleDay="SEX • 11 de abril"
            onClick={() => handleDayClick("11/04")}
            isSelected={selectedDay === "11/04"}
          />
          <ScheduleDayBtn
            description="CONGRESSO • 2º DIA"
            scheduleDay="SÁB • 12 de abril"
            onClick={() => handleDayClick("12/04")}
            isSelected={selectedDay === "12/04"}
          />
        </div>
        <div>
          <strong>
            *No dia 10 haverá uma Business Class voltada a médicos e
            profissionais de saúde que administram clinicas.
          </strong>
          <br />
          <span className="font-light">
            Nos dias 11 e 12 de abril as palestras são abertas ao público,
            escolha suas palestras e garanta seu ingresso no Congresso.
          </span>
          {selectedDay === "10/04" && (
            <ScheduleContainer>
              <CardGradient
                title="SALA PRINCIPAL"
                subTitle="Clique aqui para ver a Programação da Sala Principal"
              />
              {filteredScheduleData.map((item, index) => (
                <CardDetails key={index} {...item} />
              ))}
            </ScheduleContainer>
          )}
          {selectedDay === "11/04" && (
            <>
              <ScheduleContainer>
                <CardGradient
                  title="SALA PRINCIPAL"
                  subTitle="Clique aqui para ver a Programação da Sala Principal"
                  title2="SALA LABORATÓRIO"
                  subTitle2="Clique aqui para ver a Programação da Sala Laboratório"
                  dualCard
                />
                <CardSection sectionTitle="de Abertura Oficial" />
                {filteredScheduleWelcomeData.map((item, index) => (
                  <CardDetails key={index} {...item} />
                ))}
              </ScheduleContainer>
              <ScheduleContainer>
                <CardSection sectionTitle="Inovações em ART" />
                {filteredScheduleInovationData.map((item, index) => (
                  <CardDetails key={index} {...item} />
                ))}
              </ScheduleContainer>
              <ScheduleContainer>
                <CardSection sectionTitle="Clínica I" />
                {filteredScheduleClinicFirstData.map((item, index) => (
                  <CardDetails key={index} {...item} />
                ))}
                <CardSection sectionTitle="Clínica II" />
                {filteredScheduleClinicSecondData.map((item, index) => (
                  <CardDetails key={index} {...item} />
                ))}
              </ScheduleContainer>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

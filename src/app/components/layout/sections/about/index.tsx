import Image from "next/image";

import { rubik } from "../../../../../../public/assets/fonts/fonts";
import CalendarIcon from "../../../../../../public/assets/icons/calendar.svg";

export default function Event() {
  return (
    <div className={`${rubik.className} relative h-[800px] lg:h-[1300px]`}>
      <div className="bg-gradient-to-b from-[#050375] via-[#050375] to-[#00B0D966] h-[45%] p-4 sm:p-8 md:p-14 flex items-center justify-center text-white">
        <div className="absolute top-0 bottom-0 w-full max-w-[56.25rem] mt-[3.375rem]">
          <div className="flex items-center justify-center flex-col">
            <div className="flex gap-4 sm:gap-[2rem] mb-4 sm:mb-[30px]">
              <Image
                src={CalendarIcon}
                width={35}
                height={35}
                alt="ícone de calendário"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-light">
                11 e 12 de Abril de 2024&nbsp;•&nbsp;
                <span className="text-support-100">São Paulo/SP</span>
              </h1>
            </div>
            <div className="gradient-border-bottom w-[90%] h-1 sm:h-2"></div>
          </div>
          <div className="flex justify-center items-center h-[100%] max-h-[20rem] sm:max-h-[25rem] md:max-h-[31.25rem] mt-6 sm:mt-8 md:mt-11 bg-support-50">
            <span className="text-secondary-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              VINHETA EVENTO
            </span>
          </div>
        </div>
      </div>
      <div className="bg-support-600 h-[55%]"></div>
    </div>
  );
}

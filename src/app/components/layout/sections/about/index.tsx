"use client";
import { useState } from "react";
import Image from "next/image";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Modal } from "@/app/components/modal";
import { ButtonRedirect } from "@/app/components/buttonRedirect";
import { SpeakersCard } from "./speakersCard";

import { rubik } from "../../../../../../public/assets/fonts/fonts";
import CalendarIcon from "../../../../../../public/assets/icons/calendar.svg";
import SpeakerImg from "../../../../../../public/assets/section-bg/pictures/speaker.png";

export default function Event() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => setIsOpen(!isOpen);

  return (
    <div className={`${rubik.className} relative h-[800px] lg:h-[1300px]`}>
      <div className="bg-gradient-to-b from-[#050375] via-[#050375] to-[#00B0D966] h-[45%] mt-[3.375rem] flex items-center justify-center text-white">
        <div className="absolute top-0 bottom-0">
          <div className="max-w-[56.25rem] mx-auto flex items-center justify-center flex-col">
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
            <div className="gradient-border-bottom w-[80%] h-1 sm:h-2"></div>
          </div>
          <div className="max-w-[56.25rem] flex justify-center items-center h-[100%] max-h-[20rem] sm:max-h-[25rem] md:max-h-[31.25rem] mx-auto mt-6 sm:mt-8 md:mt-11 bg-support-50">
            <span className="text-secondary-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              VINHETA EVENTO
            </span>
          </div>
          <section id="speakers" className="mt-28">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl sm:text-4xl text-center mb-8">
                <span className="text-support-100 font-normal">
                  SPEAKERS&nbsp;
                </span>
                <span className="text-support-50 font-light">
                  INTERNACIONAIS CONFIRMADOS
                </span>
              </h1>
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="swipper-slideSpeaker">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <SpeakersCard
                      key={index}
                      toggle={handleToggleModal}
                      img={SpeakerImg}
                      title="Eduardo Leme Alves Da Motta"
                    />
                  ))}
                </SwiperSlide>
                <SwiperSlide className="swipper-slideSpeaker">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <SpeakersCard
                      key={index}
                      toggle={handleToggleModal}
                      img={SpeakerImg}
                      title="Eduardo Leme Alves Da Motta"
                    />
                  ))}
                </SwiperSlide>
              </Swiper>
              <div className="flex justify-center mt-8">
                <ButtonRedirect
                  href="#agenda"
                  text="VER AGENDA"
                  className="w-full max-w-[13rem] mt-4 inline-block bg-support-100 py-3 px-8"
                />
              </div>
            </div>
          </section>
          {isOpen && (
            <Modal closeModal={handleToggleModal} isOpen>
              <h1 className="text-support-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                optio adipisci accusamus ipsam explicabo autem? Eaque ipsam
                optio nihil rem obcaecati totam odio, incidunt tenetur! Quo est
                deserunt aliquam id!
              </h1>
            </Modal>
          )}
        </div>
      </div>
      <div className="bg-support-600 h-[55%]"></div>
    </div>
  );
}

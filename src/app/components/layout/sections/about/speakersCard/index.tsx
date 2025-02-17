import Image, { StaticImageData } from "next/image";

import BrazilFlag from "../../../../../../../public/assets/flags/brazil-flag-2.svg";

interface SpeakersCardProps {
  img: string | StaticImageData;
  title: string;
  toggle: () => void;
}

export const SpeakersCard = ({ img, title, toggle }: SpeakersCardProps) => {
  return (
    <div className="w-[13rem] pt-[28px] px-[17px] pb-[25px] bg-gradient-to-t from-[#384799] via-[#3C38A3] to-[#27558a] overflow-hidden rounded-lg shadow-lg border border-gray-400">
      <div className="relative">
        <div className="absolute top-0">
          <Image
            src={BrazilFlag}
            alt="bandeira do Brasil"
            width={24}
            height={24}
          />
        </div>
        <Image
          src={img}
          alt="imagem speaker"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-support-50 mt-4">
        <h2 className="text-xs font-normal ">{title}</h2>
        <span
          onClick={toggle}
          className="text-[10px] font-light cursor-pointer hover:underline"
        >
          + SAIBA MAIS
        </span>
      </div>
    </div>
  );
};

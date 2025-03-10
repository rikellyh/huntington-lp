import Image, { StaticImageData } from "next/image";

import Arrow from "../../../../../../../public/assets/icons/arrow.svg";

interface ButtonLangProps {
  src: string | StaticImageData;
  alt: string;
  title: string;
  className?: string;
  showArrow?: boolean;
}

export const ButtonLangImg = ({
  src,
  alt,
  title,
  className,
  showArrow = false,
}: ButtonLangProps) => {
  return (
    <button
      className={`${className} w-full min-w-[88px] flex items-center gap-2 p-4 text-white outline-none`}
    >
      <Image src={src} width={15} height={15} alt={alt} />
      <span>{title}</span>
      {showArrow && (
        <Image src={Arrow} width={10} height={18} alt="seta para baixo" />
      )}
    </button>
  );
};

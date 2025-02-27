import Image from "next/image";
import AccordionMax from "../../../../../../public/assets/icons/accordionMax.svg";
import AccordionMin from "../../../../../../public/assets/icons/accordionMin.svg";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function Accordion({
  title,
  content,
  isOpen,
  onClick,
}: AccordionProps) {
  return (
    <div
      className={`accordion w-full mb-4 ${
        isOpen ? "bg-secondary-500 active py-0 px-3" : "bg-secondary-600 p-3"
      }`}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left outline-none"
        onClick={onClick}
      >
        <span className="font-normal">{title}</span>
        <span>
          {isOpen ? (
            <Image src={AccordionMin} alt="minimizar" />
          ) : (
            <Image src={AccordionMax} alt="maximizar" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-4">
          <p className="font-light text-xs">{content}</p>
        </div>
      )}
    </div>
  );
}

import { ReactNode } from "react";

import Image from "next/image";
import CloseIcon from "../../../../public/assets/icons/close.svg";

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-[1006px] h-[636px] mx-4 p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-gray-500 hover:text-gray-700"
            >
              <Image src={CloseIcon} alt="ícone de fechar" />
            </button>
            <div className="h-full overflow-y-auto">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

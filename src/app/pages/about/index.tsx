import Link from "next/link";

import { rubik } from "../../../../public/assets/fonts/fonts";

export default function About() {
  return (
    <div
      className={`bg-secondary-400 text-support-50 h-[70vh] relative ${rubik.className}`}
    >
      <div className="custom-bg"></div>
      <div className="relative z-2 h-full max-w-[1000px] mx-auto flex flex-col justify-end items-end">
        <div className="mb-[50px]">
          <div>
            <p className="text-lg font-bold text-end">10 de abril</p>
            <span className="text-end font-light">
              Business Class “Inovação e valor para
              <br />
              gestores de saúde”. Saiba mais abaixo.
            </span>
          </div>
          <Link
            href="/"
            className="w-full max-w-[312px] mt-4 inline-block bg-support-500 py-3 px-8 font-semibold text-center hover:bg-support-600 transition-colors duration-200"
          >
            INSCREVA-SE
          </Link>
        </div>
      </div>
    </div>
  );
}

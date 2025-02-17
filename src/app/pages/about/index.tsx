import Event from "@/app/components/layout/sections/about";
import { ButtonRedirect } from "@/app/components/buttonRedirect";
import { rubik } from "../../../../public/assets/fonts/fonts";

export default function About() {
  return (
    <>
      <section
        id="sobre"
        className={`bg-secondary-400 text-support-50 h-[70vh] relative ${rubik.className}`}
      >
        <div className="custom-bg"></div>
        <div className="relative z-2 h-full max-w-7xl mx-auto flex flex-col justify-end items-end px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-[50px] sm:my-8 md:my-10 lg:my-12 w-full max-w-md text-right">
            <div>
              <p className="text-lg font-bold">10 de abril</p>
              <span className="font-light">
                Business Class “Inovação e valor para
                <br />
                gestores de saúde”. Saiba mais abaixo.
              </span>
            </div>
            <ButtonRedirect
              href="/"
              text="INSCREVA-SE"
              className="w-full max-w-[19.5rem] mt-4 inline-block bg-support-500 py-3 px-8 hover:bg-support-600 transition-colors duration-200"
            />
          </div>
        </div>
      </section>
      <Event />
    </>
  );
}

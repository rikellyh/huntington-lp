import Image, { StaticImageData } from "next/image";

interface CardInfoProps {
  img: string | StaticImageData;
  name: string;
  crm: string;
}

export const CardInfo = ({ img, name, crm }: CardInfoProps) => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 max-w-72 border rounded-2xl border-brand-50 font-light">
      <Image
        src={img}
        alt="imagem comissão"
        className="w-full h-full max-w-32 max-h-32"
      />
      <div>
        <div className="mb-4">
          <h2>{name}</h2>
          <p>CRM/SP {crm}</p>
        </div>
        <div className="pt-4 border-t border-brand-50">
          <span>Fundador da Huntington Medicina Reprodutiva</span>
        </div>
      </div>
      <div>
        <span className="underline">VER BIO</span>
      </div>
    </div>
  );
};

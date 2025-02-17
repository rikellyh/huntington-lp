interface BoxTextDataProps {
  number: string;
  text: string;
  additional: string;
}

export const BoxTextData = ({ number, text, additional }: BoxTextDataProps) => {
  return (
    <section className="flex flex-col border-l pl-4">
      <span className="text-[2.5rem]">{number}</span>
      <p className="text-support-100">{text}</p>
      <p>{additional}</p>
    </section>
  );
};

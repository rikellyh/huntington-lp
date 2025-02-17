interface CardDetailsProps {
  date?: string;
  title?: string;
  hour?: string;
  textStrong: string;
  textLigth?: string;
}

export const CardDetails = ({
  date,
  title,
  hour,
  textStrong,
  textLigth,
}: CardDetailsProps) => {
  return (
    <div className="w-full flex items-center p-7 bg-brand-400">
      <div className="w-1/3">
        <span className="font-light">{date}</span>
        <h2 className="font-medium text-xl">{title}</h2>
        <span className="font-light">{hour}</span>
      </div>
      <div className="w-2/3">
        <h2>
          <strong>{textStrong}</strong>
        </h2>
        <p className="font-light">{textLigth}</p>
      </div>
    </div>
  );
};

interface CardGradientProps {
  title: string;
  subTitle: string;
  title2?: string;
  subTitle2?: string;
  dualCard?: boolean;
  onClick?: () => void;
}

export const CardGradient = ({
  title,
  title2,
  subTitle,
  subTitle2,
  dualCard = false,
  onClick,
}: CardGradientProps) => {
  const cardStyle = "rounded-lg p-6 flex flex-col items-center cursor-pointer";

  return (
    <div className="flex gap-4 w-full mb-4">
      <div
        className={`${cardStyle} ${
          dualCard
            ? "w-1/2 gradient-schedule text-white"
            : "w-full gradient-schedule text-white"
        }`}
        onClick={onClick}
      >
        <h1 className="text-2xl font-medium mb-2">{title}</h1>
        <span className="text-xs">{subTitle}</span>
      </div>
      {dualCard && title2 && subTitle2 && (
        <div
          className={`${cardStyle} w-1/2 bg-gradient-to-r from-[#B04EE1] to-[#3b6f7c] text-white`}
        >
          <h1 className="text-2xl font-medium mb-2">{title2}</h1>
          <span className="text-xs">{subTitle2}</span>
        </div>
      )}
    </div>
  );
};

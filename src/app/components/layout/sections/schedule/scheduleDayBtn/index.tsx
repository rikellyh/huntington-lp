interface ScheduleDayBtnProps {
  description: string;
  scheduleDay: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ScheduleDayBtn = ({
  description,
  scheduleDay,
  isSelected,
  onClick,
}: ScheduleDayBtnProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`outline-none inline-flex flex-col px-[5.25rem] py-2 items-center justify-center rounded-[50em] ${
        isSelected ? "gradient-schedule" : "border-gradient"
      }`}
    >
      <span className="text-xs">{description}</span>
      <span className="text-xl">{scheduleDay}</span>
    </button>
  );
};

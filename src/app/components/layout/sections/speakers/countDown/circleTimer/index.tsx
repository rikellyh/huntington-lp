interface CircleTimerProps {
  countText: number;
  subCountText: string;
}

export const CircleTimer = ({ countText, subCountText }: CircleTimerProps) => {
  return (
    <div className="bg-support-50 text-support-800 max-w-[8.75rem] max-h-[8.75rem] p-12 rounded-full flex flex-col items-center">
      <span className="text-4xl font-bold">{countText}</span>
      <span className="text-sm">{subCountText}</span>
    </div>
  );
};

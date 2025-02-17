import { ReactNode } from "react";

interface ScheduleContainerProps {
  children?: ReactNode;
}

export default function ScheduleContainer({
  children,
}: ScheduleContainerProps) {
  return (
    <section className="h-1/2 md:h-full flex flex-wrap justify-center gap-4 pt-[25px] pr-[45px] pb-[45px] pl-[45px] mt-4 bg-gradient-to-t from-[#100D9D] to-[#13267a] rounded-lg">
      {children}
    </section>
  );
}

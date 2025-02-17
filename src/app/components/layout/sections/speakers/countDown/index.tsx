"use client";
import { CircleTimer } from "./circleTimer";
import useTimer from "@/app/hook/useTimer";

export const Countdown = () => {
  const targetDate = new Date("2025-04-11T00:00:00");

  const { days, hours, minutes, seconds } = useTimer(targetDate);

  return (
    <div className="flex justify-center space-x-4">
      <CircleTimer countText={days} subCountText="Dias" />
      <div className="separation-point"></div>
      <CircleTimer countText={hours} subCountText="Horas" />
      <div className="separation-point"></div>
      <CircleTimer countText={minutes} subCountText="Minutos" />
      <div className="separation-point"></div>
      <CircleTimer countText={seconds} subCountText="Segundos" />
    </div>
  );
};

import { ScheduleItem } from "../types/schedule";

export default function filterScheduleData<T extends ScheduleItem>(
  data: T[],
  selectedDay: string | null
): T[] {
  return selectedDay ? data.filter((item) => item.date === selectedDay) : data;
}

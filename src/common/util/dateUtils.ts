import * as dayjs from "dayjs";
import { DayOfWeek } from "../enum/Enum";

const DAY_OF_WEEK: DayOfWeek[] = [
  DayOfWeek.SUN,
  DayOfWeek.MON,
  DayOfWeek.TUE,
  DayOfWeek.WED,
  DayOfWeek.THU,
  DayOfWeek.FRI,
  DayOfWeek.SAT,
];
export default {
  getYearMonth: (date): string => {
    return date.slice(0, 7);
  },
  getDayOfWeek: (date): DayOfWeek => {
    return DAY_OF_WEEK[dayjs(date).day()];
  },
  getYearMonthDay: (date): string => {
    return date.slice(0, 10);
  },
};

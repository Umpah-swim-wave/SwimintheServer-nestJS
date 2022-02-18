import * as dayjs from 'dayjs';
import { DayOfWeek } from '../enum/Enum';

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
  /**
   * YYYY-MM 형태의 string을 리턴
   *
   * @param date 현재시간
   * @returns
   */
  getYearMonth: (date): string => {
    return date.slice(0, 7);
  },

  /**
   * 요일을 리턴
   *
   * @param date 현재시간
   * @returns
   */
  getDayOfWeek: (date): DayOfWeek => {
    return DAY_OF_WEEK[dayjs(date).day()];
  },

  /**
   * YYYY-MM-DD 형태의 string을 리턴
   *
   * @param date
   * @returns
   */
  getYearMonthDay: (date): string => {
    return date.slice(0, 10);
  },

  /**
   * YYYY-MM 형태의 날짜를 받아서 YYYY를 리턴
   *
   * @param yearMonthDate 연월(YYYY-MM)
   * @returns
   */
  getYear: (yearMonthDate): string => {
    return yearMonthDate.slice(0, 4);
  },

  /**
   * YYYY-MM 형태의 날짜를 받아서 MM를 number로 바꾸어 리턴
   *
   * @param yearMonthDate 연월(YYYY-MM)
   * @returns
   */
  getMonth: (yearMonthDate): number => {
    return Number(yearMonthDate.slice(-2));
  },

  getDayFormat: (date): string => {
    return dayjs(date).format('YY-MM-DD');
  },
};

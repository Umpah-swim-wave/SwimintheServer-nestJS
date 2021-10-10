import { DayOfWeek, Stroke } from "../enum/Enum";

export class DayRecordInsertDao {
  readonly userId: number;
  readonly dayOfWeek: DayOfWeek;
  readonly week: number;
  readonly yearMonth: string;
  readonly distance: number;
  readonly speed: number;
  readonly time: number;
  readonly stroke: Stroke;
  readonly calorie: number;
  readonly beatPerMinute: number;
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RecordDailyFilterDto } from "./dto/dayRecord.request.dto";
import { RecordDailyListDto } from "./dto/dayRecord.response.dto";
import { DayRecordRepository } from "./dayRecord.repository";
import { WeekRecordRepository } from "../weekRecord/weekRecord.repository";
import dateUtils from "../common/util/dateUtils";
import { CalenderRepository } from "../calender/calender.repository";
import { RecentRecordDateRequestDto } from "./dto/dayRecentRecord.request.dto";
import { RecentRecordDateDto } from "./dto/dayRecentRecord.response.dto";

@Injectable()
export class DayRecordService {
  constructor(
    @InjectRepository(DayRecordRepository)
    private readonly DayRecordRepository: DayRecordRepository,
    @InjectRepository(WeekRecordRepository)
    private readonly WeekRecordRepository: WeekRecordRepository,
    @InjectRepository(CalenderRepository)
    private readonly CalenderRepository: CalenderRepository
  ) {}

  async findDailyRecordList(
    dto: RecordDailyFilterDto
  ): Promise<RecordDailyListDto> {
    const userId = dto.userId;
    const stroke = dto.stroke;

    // request parameter에 date가 null 혹은 undefined라면 최근 date를 가져옵니다.
    const date = !dto.date
      ? await this.DayRecordRepository.findRecentlyDateByUserId(userId)
      : dto.date;
    const yearMonth = dateUtils.getYearMonth(date);
    const dayOfWeek = dateUtils.getDayOfWeek(date);
    const week = await this.CalenderRepository.findByDate(date);

    const labs = await this.DayRecordRepository.findLabsByUserIdAndSearchFilter(
      userId,
      date,
      stroke
    );

    const overview = await this.WeekRecordRepository.findByUserIdAndDate(
      userId,
      yearMonth,
      dayOfWeek,
      week
    );
    if (!overview) {
      // TODO 에러 메시지
    }
    const result = new RecordDailyListDto(date, overview, labs);
    return result;
  }

  /**
   * 유저의 수영 기록 날짜를 내림차순으로 리턴한다.
   * TODO userId를 토큰으로 교체
   * TODO 페이징 처리를 해야 할까?
   *
   * @param dto userId
   * @returns
   */
  async findRecentRecordDateList(
    dto: RecentRecordDateRequestDto
  ): Promise<RecentRecordDateDto[]> {
    const userId = dto.userId;
    const result =
      await this.DayRecordRepository.findRecentRecordDateListByUserId(userId);
    return result;
  }
}

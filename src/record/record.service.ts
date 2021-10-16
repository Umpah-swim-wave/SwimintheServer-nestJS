import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";
import { DayRecord } from "../dayRecord/dayRecord.entity";
import { DayRecordRepository } from "../dayRecord/dayRecord.repository";
import { WeekRecordRepository } from "../weekRecord/weekRecord.repository";
import { CalenderRepository } from "../calender/calender.repository";
import { RecordDto } from "./dto/record.request.dto";
import { RecordResponseDto } from "./dto/record.response.dto";
import dateUtils from "../common/util/dateUtils";
const LRU = require("lru-cache");
const options = {
  max: 500,
  maxAge: 1000 * 60 * 60,
  length(n, key) {
    return 1;
  },
  dispose(key, n) {
    /* 데이터가 삭제된 후 호출 */
  },
};
const cache = new LRU(options);

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(DayRecordRepository)
    private readonly DayRecordRepository: DayRecordRepository,
    @InjectRepository(WeekRecordRepository)
    private readonly WeekRecordRepository: WeekRecordRepository,
    @InjectRepository(CalenderRepository)
    private readonly CalenderRepository: CalenderRepository
  ) {}

  // TODO week_records와 month_records insert하는 로직 추가
  async insertRecordByUser(recordDto: RecordDto): Promise<RecordResponseDto> {
    const userId = recordDto.userId;
    const recordDataList = recordDto.recordData;
    for (let i = 0; i < recordDataList.length; i++) {
      console.log(recordDataList[i]);
      const dayRecord = new DayRecord();
      dayRecord.userId = userId;
      dayRecord.distance = recordDataList[i].distance;
      dayRecord.speed = recordDataList[i].speed;
      dayRecord.time = recordDataList[i].time;
      dayRecord.stroke = recordDataList[i].stroke;
      dayRecord.calorie = recordDataList[i].calorie;
      dayRecord.beatPerMinute = recordDataList[i].beatPerMinute;
      dayRecord.dayOfWeek = dateUtils.getDayOfWeek(recordDataList[i].date);
      dayRecord.yearMonth = dateUtils.getYearMonth(recordDataList[i].date);
      if (cache.has(recordDataList[i].date)) {
        dayRecord.week = cache.get(recordDataList[i].date);
      } else {
        const week = await this.CalenderRepository.findByDate(
          recordDataList[i].date
        );
        cache.set(recordDataList[i].date, week);
        dayRecord.week = week;
      }

      await this.DayRecordRepository.save(dayRecord);
    }

    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS, null);
  }
}

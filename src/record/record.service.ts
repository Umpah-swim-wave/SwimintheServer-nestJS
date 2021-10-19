import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";
import { DayRecord } from "../dayRecord/dayRecord.entity";
import { DayRecordRepository } from "../dayRecord/dayRecord.repository";
import { WeekRecordRepository } from "../weekRecord/weekRecord.repository";
import { CalenderRepository } from "../calender/calender.repository";
import { RecordRequestDto } from "./dto/record.request.dto";
import { RecordResponseDto } from "./dto/record.response.dto";
import dateUtils from "../common/util/dateUtils";
import { Stroke } from "src/common/enum/Enum";
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
  async insertRecordByUser(
    recordRequestDto: RecordRequestDto
  ): Promise<RecordResponseDto> {
    const userId = recordRequestDto.userId;
    const workoutDataList = recordRequestDto.workoutList;
    for (let workout = 0; workout < workoutDataList.length; workout++) {
      const distance = workoutDataList[workout].distancePerLabs;

      const recordLabsList = workoutDataList[workout].recordLabsList;
      for (let i = 0; i < recordLabsList.length; i++) {
        const dayRecord = new DayRecord();
        dayRecord.userId = userId;
        dayRecord.distance = distance;
        dayRecord.speed = distance / recordLabsList[i].time;
        dayRecord.time = recordLabsList[i].time;
        dayRecord.stroke = Stroke[recordLabsList[i].strokeType];
        dayRecord.dayOfWeek = dateUtils.getDayOfWeek(recordLabsList[i].date);
        dayRecord.yearMonth = dateUtils.getYearMonth(recordLabsList[i].date);
        if (cache.has(recordLabsList[i].date)) {
          dayRecord.week = cache.get(recordLabsList[i].date);
        } else {
          const week = await this.CalenderRepository.findByDate(
            recordLabsList[i].date
          );
          cache.set(recordLabsList[i].date, week);
          dayRecord.week = week;
        }

        await this.DayRecordRepository.save(dayRecord);
      }
      const totalDistance =
        distance * workoutDataList[workout].recordLabsList.length;
    }

    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS, null);
  }
}

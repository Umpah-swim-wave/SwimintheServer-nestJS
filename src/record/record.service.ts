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
import { WeekRecord } from "src/weekRecord/weekRecord.entity";

const LRU = require("lru-cache");

// TODO enum이나 다른 곳에서도 쓸 수 있게 더 좋은 방법 찾아보기
const strokeList = ["IM", "FREESTYLE", "BACK", "BREAST", "BUTTERFLY"];
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

  // TODO month_records insert하는 로직 추가
  async insertRecord(
    recordRequestDto: RecordRequestDto
  ): Promise<RecordResponseDto> {
    const userId = recordRequestDto.userId;
    console.log(recordRequestDto);
    const workoutDataList = recordRequestDto.workoutList;
    for (let workout = 0; workout < workoutDataList.length; workout++) {
      const distance = workoutDataList[workout].distancePerLabs;
      let totalTime = 0;

      const workoutDate = dateUtils.getYearMonthDay(
        workoutDataList[workout].startWorkoutDate
      );
      let dayOfWeek = dateUtils.getDayOfWeek(workoutDate);
      let yearMonth = dateUtils.getYearMonth(workoutDate);

      const strokeDistanceList = [0, 0, 0, 0, 0];
      const strokeTimeList = [0, 0, 0, 0, 0];
      const strokeLabsCountList = [0, 0, 0, 0, 0];
      let week;

      if (cache.has(workoutDate)) {
        week = cache.get(workoutDate);
      } else {
        week = await this.CalenderRepository.findByDate(workoutDate);
        cache.set(workoutDate, week);
      }

      const recordLabsList = workoutDataList[workout].recordLabsList;
      const labsCount = workoutDataList[workout].recordLabsList.length;

      for (let i = labsCount - 1; i >= 0; i--) {
        const dayRecord = new DayRecord();
        const stroke = recordLabsList[i].strokeType - 1;
        dayRecord.userId = userId;
        dayRecord.date = workoutDate;
        dayRecord.distance = distance;
        dayRecord.time = recordLabsList[i].time;

        dayRecord.stroke = Stroke[strokeList[stroke]];
        strokeDistanceList[stroke] += distance;
        strokeTimeList[stroke] += recordLabsList[i].time;
        strokeLabsCountList[stroke] += 1;

        dayRecord.dayOfWeek = dayOfWeek;
        dayRecord.yearMonth = yearMonth;
        dayRecord.week = week;

        totalTime += dayRecord.time;

        await this.DayRecordRepository.save(dayRecord);
      }

      const totalStroke = workoutDataList[workout].totalSwimmingStrokeCount;
      const totalBeatPerMinute = workoutDataList[workout].totalBeatPerMinute;
      const totalCalorie = workoutDataList[workout].totalEnergyBurned;
      const totalDistance = distance * labsCount;
      const weekRecord = new WeekRecord();

      weekRecord.userId = userId;
      weekRecord.yearMonth = yearMonth;
      weekRecord.dayOfWeek = dayOfWeek;
      weekRecord.week = week;
      weekRecord.calorie = Math.round(totalCalorie);
      weekRecord.strokeCount = Math.round(totalStroke);
      weekRecord.beatPerMinute = Math.round(totalBeatPerMinute);

      weekRecord.labsCount = labsCount;
      weekRecord.totalTime = totalTime;
      weekRecord.totalDistance = totalDistance;

      weekRecord.imCount = strokeLabsCountList[0];
      weekRecord.imDistance = strokeDistanceList[0];
      weekRecord.imTime = strokeTimeList[0];

      weekRecord.freestyleCount = strokeLabsCountList[1];
      weekRecord.freestyleDistance = strokeDistanceList[1];
      weekRecord.freestyleTime = strokeTimeList[1];

      weekRecord.backCount = strokeLabsCountList[2];
      weekRecord.backDistance = strokeDistanceList[2];
      weekRecord.backTime = strokeTimeList[2];

      weekRecord.breastCount = strokeLabsCountList[3];
      weekRecord.breastDistance = strokeDistanceList[3];
      weekRecord.breastTime = strokeTimeList[3];

      weekRecord.butterflyCount = strokeLabsCountList[4];
      weekRecord.butterflyDistance = strokeDistanceList[4];
      weekRecord.butterflyTime = strokeTimeList[4];

      weekRecord.totalDistance = totalDistance;
      weekRecord.totalTime = Math.round(totalTime);

      await this.WeekRecordRepository.save(weekRecord);
    }

    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS, null);
  }
}

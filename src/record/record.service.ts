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

  // TODO week_records와 month_records insert하는 로직 추가
  async insertRecord(
    recordRequestDto: RecordRequestDto
  ): Promise<RecordResponseDto> {
    const userId = recordRequestDto.userId;
    const workoutDataList = recordRequestDto.workoutList;
    for (let workout = 0; workout < workoutDataList.length; workout++) {
      const distance = workoutDataList[workout].distancePerLabs;
      let totalTime = 0;

      let dayOfWeek = dateUtils.getDayOfWeek(
        workoutDataList[workout].startWorkoutDate
      );
      let yearMonth = dateUtils.getYearMonth(
        workoutDataList[workout].startWorkoutDate
      );
      const strokeDistanceList = [0, 0, 0, 0, 0];
      const strokeLabsCountList = [0, 0, 0, 0, 0];
      const strokeSpeedList = [0, 0, 0, 0, 0];
      let week;
      if (cache.has(workoutDataList[workout].startWorkoutDate)) {
        week = cache.get(workoutDataList[workout].startWorkoutDate);
      } else {
        week = await this.CalenderRepository.findByDate(
          workoutDataList[workout].startWorkoutDate
        );
        cache.set(workoutDataList[workout].startWorkoutDate, week);
      }

      const recordLabsList = workoutDataList[workout].recordLabsList;
      const labsCount = workoutDataList[workout].recordLabsList.length;
      for (let i = 0; i < labsCount; i++) {
        const dayRecord = new DayRecord();
        const stroke = recordLabsList[i].strokeType;
        dayRecord.userId = userId;
        dayRecord.distance = distance;
        dayRecord.speed = distance / recordLabsList[i].time;
        dayRecord.time = recordLabsList[i].time;

        dayRecord.stroke = Stroke[strokeList[stroke - 1]];
        strokeDistanceList[stroke - 1] += distance;
        strokeSpeedList[stroke - 1] += dayRecord.speed;
        strokeLabsCountList[stroke - 1] += 1;

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
      weekRecord.week = week;
      weekRecord.calorie = totalCalorie;
      weekRecord.strokeCount = totalStroke;
      weekRecord.beatPerMinute = totalBeatPerMinute;
      weekRecord.time = totalTime;

      weekRecord.labsCount = labsCount;
      weekRecord.totalSpeed = totalDistance / totalTime;
      weekRecord.totalDistance = totalDistance;

      weekRecord.imCount = strokeLabsCountList[0];
      weekRecord.imDistance = strokeDistanceList[0];
      weekRecord.imSpeed = strokeSpeedList[0] / strokeDistanceList[0];

      weekRecord.freestyleCount = strokeLabsCountList[1];
      weekRecord.freestyleDistance = strokeDistanceList[1];
      weekRecord.freestyleSpeed = strokeSpeedList[1] / strokeDistanceList[1];

      weekRecord.backCount = strokeLabsCountList[2];
      weekRecord.backDistance = strokeDistanceList[2];
      weekRecord.backSpeed = strokeSpeedList[2] / strokeDistanceList[2];

      weekRecord.breastCount = strokeLabsCountList[3];
      weekRecord.breastDistance = strokeDistanceList[3];
      weekRecord.breastSpeed = strokeSpeedList[3] / strokeDistanceList[3];

      weekRecord.butterflyCount = strokeLabsCountList[4];
      weekRecord.butterflyDistance = strokeDistanceList[4];
      weekRecord.butterflySpeed = strokeSpeedList[4] / strokeDistanceList[4];

      weekRecord.totalSpeed = totalDistance / totalTime;
      weekRecord.totalDistance = totalDistance;

      await this.WeekRecordRepository.save(weekRecord);
    }

    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS, null);
  }
}

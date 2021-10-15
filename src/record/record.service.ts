import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";
import { DayRecord } from "../dayRecord/dayRecord.entity";
import { DayRecordRepository } from "../dayRecord/dayRecord.repository";
import { RecordDto } from "./dto/record.request.dto";
import { RecordResponseDto } from "./dto/record.response.dto";
import { WeekRecordRepository } from "../weekRecord/weekRecord.repository";
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
    private readonly WeekRecordRepository: WeekRecordRepository
  ) {}

  async insertRecordByUser(recordDto: RecordDto): Promise<RecordResponseDto> {
    const userId = recordDto.userId;
    cache.set("2021-03-01", "SUN:1:10");
    const recordDataList = recordDto.recordData;
    for (let i = 0; i < recordDataList.length; i++) {
      const dayRecord = new DayRecord();
      dayRecord.userId = userId;
      dayRecord.dayOfWeek = recordDataList[i].dayOfWeek;
      dayRecord.week = recordDataList[i].week;
      dayRecord.yearMonth = recordDataList[i].yearMonth;
      dayRecord.distance = recordDataList[i].distance;
      dayRecord.speed = recordDataList[i].speed;
      dayRecord.time = recordDataList[i].time;
      dayRecord.stroke = recordDataList[i].stroke;
      dayRecord.calorie = recordDataList[i].calorie;
      dayRecord.beatPerMinute = recordDataList[i].beatPerMinute;
      const tt = cache.get("2021-03-01").split(":");
      console.log(tt[0], tt[1], tt[2]);
      await this.DayRecordRepository.save(dayRecord);
    }

    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS, null);
  }
}

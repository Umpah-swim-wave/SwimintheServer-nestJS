import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DayRecord } from "../dayRecord/dayRecord.entity";
import { DayRecordRepository } from "../dayRecord/dayRecord.repository";
import { RecordDto } from "./dto/record.request.dto";

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(DayRecordRepository)
    private readonly DayRecordRepository: DayRecordRepository
  ) {}

  async insertRecordByUser(recordDto: RecordDto): Promise<void> {
    const userId = recordDto.userId;
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
      console.log(dayRecord);
      await this.DayRecordRepository.save(dayRecord);
    }
  }
}

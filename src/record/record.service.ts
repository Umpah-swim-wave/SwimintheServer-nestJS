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

  async insertRecordByUser(recordDtoList: RecordDto): Promise<void> {
    // for (let i = 0; i < recordDtoList.length; i++) {
    const dayRecord = new DayRecord();
    dayRecord.userId = recordDtoList.userId;
    dayRecord.dayOfWeek = recordDtoList.dayOfWeek;
    dayRecord.week = recordDtoList.week;
    dayRecord.yearMonth = recordDtoList.yearMonth;
    dayRecord.distance = recordDtoList.distance;
    dayRecord.speed = recordDtoList.speed;
    dayRecord.time = recordDtoList.time;
    dayRecord.stroke = recordDtoList.stroke;
    dayRecord.calorie = recordDtoList.calorie;
    dayRecord.beatPerMinute = recordDtoList.beatPerMinute;
    console.log(dayRecord);
    await this.DayRecordRepository.save(dayRecord);
    // }
  }
}

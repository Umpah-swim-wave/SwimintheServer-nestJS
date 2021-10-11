import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import utilResponse from "../common/response/util.response";
import messageResponse from "../common/response/message.response";
import { DayRecord } from "../dayRecord/dayRecord.entity";
import { DayRecordRepository } from "../dayRecord/dayRecord.repository";
import { RecordDto } from "./dto/record.request.dto";
import { RecordResponseDto } from "./dto/record.response.dto";

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(DayRecordRepository)
    private readonly DayRecordRepository: DayRecordRepository
  ) {}

  async insertRecordByUser(recordDto: RecordDto): Promise<RecordResponseDto> {
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
      await this.DayRecordRepository.save(dayRecord);
    }

    return utilResponse.success(messageResponse.INSERT_RECORD_SUCCESS, null);
  }
}

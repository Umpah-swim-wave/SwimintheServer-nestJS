import { EntityRepository, Repository } from "typeorm";
import { WeekRecord } from "./weekRecord.entity";

@EntityRepository(WeekRecord)
export class WeekRecordRepository extends Repository<WeekRecord> {}

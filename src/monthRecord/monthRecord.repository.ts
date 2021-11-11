import { EntityRepository, Repository } from "typeorm";
import { MonthRecord } from "./monthRecord.entity";

@EntityRepository(MonthRecord)
export class MonthRecordRepository extends Repository<MonthRecord> {}

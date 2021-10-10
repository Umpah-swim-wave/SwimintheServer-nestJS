import { Active } from "src/common/enum/Enum";
import { EntityRepository, Repository } from "typeorm";
import { DayRecord } from "./dayRecord.entity";

@EntityRepository(DayRecord)
export class DayRecordRepository extends Repository<DayRecord> {}

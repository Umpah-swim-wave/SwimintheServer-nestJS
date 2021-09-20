import { EntityRepository, Repository } from "typeorm";
import { Record } from "./record.entity";
import { Active } from "../common/enum/Active";
@EntityRepository(Record)
export class RecordRepository extends Repository<Record> {}

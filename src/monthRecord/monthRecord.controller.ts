import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MonthRecordService } from "./monthRecord.service";

@ApiTags("monthRecord")
@Controller("monthRecord")
export class MonthRecordController {
  constructor(private monthRecordService: MonthRecordService) {}
}

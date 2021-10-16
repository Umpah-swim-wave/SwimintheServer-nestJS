import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { WeekRecordService } from "./weekRecord.service";

@ApiTags("weekRecord")
@Controller("weekRecord")
export class WeekRecordController {
  constructor(private weekRecordService: WeekRecordService) {}
}

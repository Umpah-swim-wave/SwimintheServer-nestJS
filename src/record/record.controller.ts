import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RecordService } from "./record.service";

@ApiTags("record")
@Controller("record")
export class RecordController {
  constructor(private recordService: RecordService) {}
}

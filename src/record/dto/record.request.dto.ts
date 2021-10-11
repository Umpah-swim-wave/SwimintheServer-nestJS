import { ApiProperty } from "@nestjs/swagger";
import { RecordDataDto } from "./record.data.dto";

export class RecordDto {
  @ApiProperty({ description: "유저 ID" })
  readonly userId: number;

  @ApiProperty({ description: "기록 정보" })
  readonly recordData: RecordDataDto[];
}

import { ApiProperty } from "@nestjs/swagger";

export class RecentRecordDateRequestDto {
  @ApiProperty({ description: "유저 ID" })
  readonly userId: number;
}

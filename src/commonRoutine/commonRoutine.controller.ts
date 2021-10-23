import { Body, Controller, Get, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
// Dto import 넣어야 함
import { CommonRoutineService } from "./commonRoutine.service";
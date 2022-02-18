import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonRoutineRepository } from './commonRoutine.repository';
import { CommonRoutineListResponseDto } from './dto/commonRoutine.response.dto';
import { CommonRoutineListDto } from './dto/commonRoutine.data.dto';
import utilResponse from 'src/common/response/util.response';
import messageResponse from '../common/response/message.response';
import { AuthRepository } from 'src/auth/auth.repository';
import { User } from 'src/auth/auth.entity';

@Injectable()
export class CommonRoutineService {
  constructor(
    @InjectRepository(CommonRoutineRepository)
    private readonly CommonRoutineRepository: CommonRoutineRepository,
    @InjectRepository(AuthRepository)
    private readonly AuthRepository: AuthRepository,
  ) {}

  async getAllRoutine(
    commonRoutineListDto: CommonRoutineListDto,
  ): Promise<CommonRoutineListResponseDto> {
    const result = await this.CommonRoutineRepository.find({
      select: ['id', 'title', 'level', 'distanceSum', 'timeSum', 'description'],
    });
    return utilResponse.success(
      messageResponse.GET_COMMON_ROUTINE_SUCCESS,
      result,
    );
  }

  async getRoutineDetail(
    commonRoutineDetailDto: CommonRoutineListDto
  ): Promise<CommonRoutineListResponseDto> {
    const result = await this.CommonRoutineRepository.find();
    return utilResponse.success(messageResponse.GET_COMMON_ROUTINE_DETAIL_SUCCESS, result);
  }

  async getUserRoutine(
    userRoutineDto: CommonRoutineListDto,
    user: User
  ): Promise<CommonRoutineListResponseDto> {
    const userId = user.id;
    const users = await this.AuthRepository.find({ relations: ['commonRoutine'], where: {id: userId} });
    // users.forEach((user) => {
    //   console.log(user.commonRoutine)
    // });
    return utilResponse.success(
      messageResponse.GET_USER_ROUTINE_SUCCESS,
      users,
    );
  }
}

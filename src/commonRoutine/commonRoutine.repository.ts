import { EntityRepository, Repository } from 'typeorm';
import { CommonRoutine } from './commonRoutine.entity';
import { CommonRoutineListDto } from './dto/commonRoutine.data.dto';
import { CommonRoutineFilterDto } from './dto/commonRoutine.request.dto';
import { CommonRoutineListResponseDto } from './dto/commonRoutine.response.dto';

@EntityRepository(CommonRoutine)
export class CommonRoutineRepository extends Repository<CommonRoutine> {
  // async findAll(commonRoutineListDto: CommonRoutineListDto): Promise<CommonRoutine[]> {
  //   const { id, title, level, distanceSum, timeSum, description } = commonRoutineListDto;
  //   const result = await this.find({ id, title, level, distanceSum, timeSum, description });
  //   return result;
  // }
}

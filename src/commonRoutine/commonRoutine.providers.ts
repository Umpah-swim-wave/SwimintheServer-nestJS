import { Connection, Repository } from "typeorm";
import { CommonRoutine } from './commonRoutine.entity';

export const CommonRoutineProviders = [
  {
    provide: 'COMMON_ROUTINE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CommonRoutine),
    inject: ['DATABASE_CONNECTION'],
  },
];

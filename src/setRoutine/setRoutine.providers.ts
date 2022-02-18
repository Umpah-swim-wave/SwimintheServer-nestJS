import { Connection, Repository } from "typeorm";
import { SetRoutine } from "./setRoutine.entity";

export const SetRoutineProviders = [
  {
    provide: 'SET_ROUTINE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(SetRoutine),
    inject: ['DATABASE_CONNECTION'],
  },
];

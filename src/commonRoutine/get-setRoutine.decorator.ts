import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { SetRoutine } from "src/setRoutine/setRoutine.entity";

export const GetRoutineSet = createParamDecorator(
  (data, ctx: ExecutionContext): SetRoutine => {
    const req = ctx.switchToHttp().getRequest();
    return req.setRoutine;
  },
);

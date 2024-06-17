import * as graphql from "@nestjs/graphql";
import { PulseLogResolverBase } from "./base/pulseLog.resolver.base";
import { PulseLog } from "./base/PulseLog";
import { PulseLogService } from "./pulseLog.service";

@graphql.Resolver(() => PulseLog)
export class PulseLogResolver extends PulseLogResolverBase {
  constructor(protected readonly service: PulseLogService) {
    super(service);
  }
}

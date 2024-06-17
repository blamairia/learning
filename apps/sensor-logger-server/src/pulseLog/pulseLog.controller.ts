import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PulseLogService } from "./pulseLog.service";
import { PulseLogControllerBase } from "./base/pulseLog.controller.base";

@swagger.ApiTags("pulseLogs")
@common.Controller("pulseLogs")
export class PulseLogController extends PulseLogControllerBase {
  constructor(protected readonly service: PulseLogService) {
    super(service);
  }
}
